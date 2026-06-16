"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const BackgroundLayers = () => {
  const shaderCanvasRef = useRef<HTMLCanvasElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = shaderCanvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("webgl");

    if (!(context instanceof WebGLRenderingContext)) {
      return;
    }

    const gl = context;

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    syncSize();

    const observer = new ResizeObserver(syncSize);
    observer.observe(canvas);

    const vertexShader = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;

      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
          vec2 uv = v_texCoord;
          vec2 mouse = u_mouse / u_resolution;

          float speed = u_time * 0.2;

          vec2 shift1 =
            0.5 * vec2(cos(speed), sin(speed));

          vec2 shift2 =
            0.5 * vec2(
              sin(speed * 0.7),
              cos(speed * 1.1)
            );

          float dist = distance(uv, mouse);

          float mouseInfluence =
            smoothstep(0.4, 0.0, dist) * 0.3;

          float n1 =
            sin(uv.x * 3.0 + shift1.x * 5.0) *
            sin(uv.y * 2.0 + shift1.y * 4.0);

          float n2 =
            sin(uv.x * 4.0 + shift2.x * 3.0 + u_time) *
            sin(uv.y * 5.0 + shift2.y * 2.0);

          float intensity = n1 * 0.5 + n2 * 0.5;
          intensity = intensity * 0.5 + 0.5;

          vec3 colorA = vec3(0.0, 0.95, 1.0);
          vec3 colorB = vec3(0.44, 0.0, 1.0);
          vec3 bg = vec3(0.02, 0.02, 0.02);

          vec3 finalColor =
            mix(bg, colorA, intensity * 0.2);

          finalColor =
            mix(
              finalColor,
              colorB,
              (1.0 - intensity) * 0.15
            );

          finalColor += colorA * mouseInfluence * 0.5;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;

    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vertexShader));

    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fragmentShader));

    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const pos = gl.getAttribLocation(program, "a_position");

    gl.enableVertexAttribArray(pos);

    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");

    const uRes = gl.getUniformLocation(program, "u_resolution");

    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;

      mouse.y = (1 - (e.clientY - rect.top) / rect.height) * canvas.height;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let frameId = 0;

    const render = (time: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);

      gl.uniform1f(uTime, time * 0.001);

      gl.uniform2f(uRes, canvas.width, canvas.height);

      gl.uniform2f(uMouse, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      frameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = threeContainerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    const particlesCount = 5000;

    const positions = new Float32Array(particlesCount * 3);

    const velocities = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;

      velocities[i3] = (Math.random() - 0.5) * 0.002;

      velocities[i3 + 1] = (Math.random() - 0.5) * 0.002;

      velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00f2ff,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);

    scene.add(particles);

    const mouse = new THREE.Vector2(-999, -999);

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;

      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const width = container.clientWidth;

      const height = container.clientHeight;

      camera.aspect = width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    let frameId = 0;

    const animate = () => {
      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        pos[i3] += velocities[i3];

        pos[i3 + 1] += velocities[i3 + 1];

        pos[i3 + 2] += velocities[i3 + 2];

        const dx = pos[i3] - mouse.x * 5;

        const dy = pos[i3 + 1] - mouse.y * 5;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 2.5) {
          const force = (2.5 - dist) * 0.15;

          pos[i3] += dx * force;

          pos[i3 + 1] += dy * force;
        }

        if (pos[i3] > 8) pos[i3] = -8;

        if (pos[i3] < -8) pos[i3] = 8;

        if (pos[i3 + 1] > 8) pos[i3 + 1] = -8;

        if (pos[i3 + 1] < -8) pos[i3 + 1] = 8;
      }

      geometry.attributes.position.needsUpdate = true;

      particles.rotation.y += 0.0005;

      particles.rotation.x += 0.0001;

      renderer.render(scene, camera);

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 w-full h-full opacity-40">
        <canvas ref={shaderCanvasRef} className="w-full h-full" />
      </div>

      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <div ref={threeContainerRef} className="w-full h-full" />
      </div>

      <div className="noise-overlay absolute inset-0 z-10" />
    </div>
  );
};
