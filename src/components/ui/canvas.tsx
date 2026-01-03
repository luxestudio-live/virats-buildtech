import { useEffect } from "react";

// The effect is global, so this component should be rendered at the root (e.g., in _app.tsx)
export const CanvasGlowEffect = () => {
  useEffect(() => {
    if (typeof document === 'undefined' || !document.body.classList.contains('glow-cursor-enabled')) return;
    // Setup variables as in the provided code
    let ctx: CanvasRenderingContext2D | null = null;
    let f: any, e = 0, pos: any = {}, lines: any[] = [], animationId: number;
    const E = {
      debug: true,
      friction: 0.5,
      trails: 80,
      size: 50,
      dampening: 0.025,
      tension: 0.99,
    };
    function Node(this: any) {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }
    function n(this: any, e: any) {
      this.init(e || {});
    }
    n.prototype = {
      init: function (e: any) {
        this.phase = e.phase || 0;
        this.offset = e.offset || 0;
        this.frequency = e.frequency || 0.001;
        this.amplitude = e.amplitude || 1;
      },
      update: function () {
        this.phase += this.frequency;
        return (e = this.offset + Math.sin(this.phase) * this.amplitude);
      },
      value: function () {
        return e;
      },
    };
    function Line(this: any, e: any) {
      this.init(e || {});
    }
    Line.prototype = {
      init: function (e: any) {
        this.spring = e.spring + 0.1 * Math.random() - 0.05;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];
        for (let n = 0; n < E.size; n++) {
          let t = new (Node as any)();
          t.x = pos.x;
          t.y = pos.y;
          this.nodes.push(t);
        }
      },
      update: function () {
        let e = this.spring,
          t = this.nodes[0];
        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;
        for (let i = 0, a = this.nodes.length; i < a; i++) {
          t = this.nodes[i];
          if (i > 0) {
            let n = this.nodes[i - 1];
            t.vx += (n.x - t.x) * e;
            t.vy += (n.y - t.y) * e;
            t.vx += n.vx * E.dampening;
            t.vy += n.vy * E.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= E.tension;
        }
      },
      draw: function () {
        let e, t, n = this.nodes[0].x, i = this.nodes[0].y;
        ctx!.beginPath();
        ctx!.moveTo(n, i);
        for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
          e = this.nodes[a];
          t = this.nodes[a + 1];
          n = 0.5 * (e.x + t.x);
          i = 0.5 * (e.y + t.y);
          ctx!.quadraticCurveTo(e.x, e.y, n, i);
        }
        e = this.nodes[this.nodes.length - 2];
        t = this.nodes[this.nodes.length - 1];
        ctx!.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx!.stroke();
        ctx!.closePath();
      },
    };
    function render() {
      if (!ctx || !(ctx as any).running) return;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `hsla(${Math.round(f.update())},100%,50%,0.025)`;
      ctx.lineWidth = 10;
      for (let t = 0; t < E.trails; t++) {
        let e = lines[t];
        if (e && typeof e.update === 'function' && typeof e.draw === 'function') {
          e.update();
          e.draw();
        }
      }
      (ctx as any).frame++;
      animationId = window.requestAnimationFrame(render);
    }
    function resizeCanvas() {
      ctx!.canvas.width = window.innerWidth - 20;
      ctx!.canvas.height = window.innerHeight;
    }
    function onMousemove(e: any) {
      function o() {
        lines = [];
        for (let e = 0; e < E.trails; e++)
          lines.push(new (Line as any)({ spring: 0.45 + (e / E.trails) * 0.025 }));
      }
      function c(e: any) {
        if (e.touches) {
          pos.x = e.touches[0].pageX;
          pos.y = e.touches[0].pageY;
        } else {
          pos.x = e.clientX;
          pos.y = e.clientY;
        }
        e.preventDefault();
      }
      function l(e: any) {
        if (e.touches && e.touches.length === 1) {
          pos.x = e.touches[0].pageX;
          pos.y = e.touches[0].pageY;
        }
      }
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.addEventListener("mousemove", c);
      document.addEventListener("touchmove", c);
      document.addEventListener("touchstart", l);
      c(e);
      o();
      render();
    }
    // Setup canvas
    let canvas = document.createElement("canvas");
    canvas.id = "canvas-glow-effect";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "50";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    (ctx as any).running = true;
    (ctx as any).frame = 1;
    pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    f = new (n as any)({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
      if (!(ctx as any).running) {
        (ctx as any).running = true;
        render();
      }
    });
    window.addEventListener("blur", () => {
      (ctx as any).running = false;
    });
    resizeCanvas();
    return () => {
      (ctx as any).running = false;
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", render);
      window.removeEventListener("blur", render);
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);
  return null;
};
