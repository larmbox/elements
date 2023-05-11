import { ref as H, watch as et, useSlots as Ao, computed as x, useAttrs as Lo, defineComponent as q, openBlock as $, createBlock as U, resolveDynamicComponent as wt, mergeProps as W, toDisplayString as ae, createElementBlock as P, createElementVNode as F, createCommentVNode as j, normalizeClass as C, resolveComponent as I, withCtx as z, renderSlot as A, createVNode as N, onMounted as At, nextTick as Qe, Teleport as Lt, Fragment as io, renderList as Do, onUpdated as Io, onUnmounted as lo, Transition as Fo, withDirectives as Po, vShow as Ro, createApp as Bo } from "vue";
var le = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.DEFAULT = "md", e.LARGE = "lg", e))(le || {}), re = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.ERROR = "error", e.SUCCESS = "success", e))(re || {}), h = /* @__PURE__ */ ((e) => (e.EThemeProvider = "EThemeProvider", e.EButton = "EButton", e.ECheckbox = "ECheckbox", e.EIcon = "EIcon", e.EInput = "EInput", e.ELoading = "ELoading", e.EModal = "EModal", e.ERadio = "ERadio", e.ESelect = "ESelect", e.ESwitch = "ESwitch", e.ETextarea = "ETextarea", e.ETooltip = "ETooltip", e.EFormControl = "EFormControl", e))(h || {});
function zo() {
  return {
    screenReaderClass: "sr"
  };
}
function Xt(e) {
  const t = e.replace(/^#/, "");
  return t.length === 3 ? t[0] + t[0] + t[1] + t[1] + t[2] + t[2] : t;
}
function ce(e) {
  return e.toString(16);
}
function Gt(e) {
  return parseInt(e, 16);
}
function co(e, t, o = 1) {
  if (o > 1 || o < 0)
    throw new Error("Weight must be between 0 and 1.");
  const r = [];
  e = Xt(e), t = Xt(t);
  const n = t.length - 1;
  for (let a = 0; a <= n; a += 2) {
    const i = Gt(e.slice(a, a + 2)), s = Gt(t.slice(a, a + 2)), l = ce(
      Math.round(
        s + (i - s) * (o * 100 / 100)
      )
    ).padStart(2, "0");
    r.push(l);
  }
  return `#${r.join("")}`;
}
function Oe(e, t) {
  return co("#fff", e, t);
}
function Ae(e, t) {
  return co("#000", e, t);
}
function Je(e, t) {
  if (!/^#[0-9A-F]{6}$/i.test(t))
    throw new Error(
      `createPalette only accepts valid 6-character HEX codes. Received '${t}'.`
    );
  const o = (1 - 1 / 7) / 7;
  return {
    [e]: t,
    [`${e}-1`]: Oe(t, o * 7),
    [`${e}-2`]: Oe(t, o * 6),
    [`${e}-3`]: Oe(t, o * 5),
    [`${e}-4`]: Oe(t, o * 4),
    [`${e}-5`]: Oe(t, o * 3),
    [`${e}-6`]: Oe(t, o * 2),
    [`${e}-7`]: Oe(t, o),
    [`${e}-8`]: t,
    [`${e}-9`]: Ae(t, o),
    [`${e}-10`]: Ae(t, o * 2),
    [`${e}-11`]: Ae(t, o * 3),
    [`${e}-12`]: Ae(t, o * 4),
    [`${e}-13`]: Ae(t, o * 5),
    [`${e}-14`]: Ae(t, o * 6),
    [`${e}-15`]: Ae(t, o * 7),
    [`${e}-T10`]: t + ce(128 - 25 * 4),
    [`${e}-T20`]: t + ce(128 - 25 * 3),
    [`${e}-T30`]: t + ce(128 - 25 * 2),
    [`${e}-T40`]: t + ce(128 - 25),
    [`${e}-T50`]: t + ce(128 - 1),
    [`${e}-T60`]: t + ce(128 + 25),
    [`${e}-T70`]: t + ce(128 + 25 * 2),
    [`${e}-T80`]: t + ce(128 + 25 * 3),
    [`${e}-T90`]: t + ce(128 + 25 * 4)
  };
}
function Mo() {
  const e = () => typeof window < "u";
  return {
    isClient: e,
    isServer: () => !e()
  };
}
const ut = "global", jo = (e) => {
  const { isClient: t } = Mo(), o = e.prefix, r = o + h.EThemeProvider, n = (m, b) => {
    const g = {};
    for (let [w, D] of Object.entries(m)) {
      let O = "--";
      o && (O += `${o}`), b && (O += `${b}-`), O += w, o && typeof D == "string" && D.includes("var(--") && (D = D.replaceAll("var(--", `var(--${o}`)), g[O] = D;
    }
    return g;
  }, a = H({}), i = H("default"), s = H([]), l = H([
    { id: ut, content: "" }
  ]), d = (m) => {
    i.value = m, v();
  }, c = ({ name: m, variables: b }) => {
    const g = s.value.findIndex(({ name: w }) => w === m);
    g !== -1 ? (m === e.theme && (b = { ...Kt, ...b }), s.value[g] = { name: m, variables: n(b) }) : s.value.push({ name: m, variables: n(b) });
  };
  t() && et(
    () => i.value,
    () => {
      const m = document.getElementsByTagName("html")[0];
      m && m.setAttribute("data-theme", i.value);
    }
  );
  const u = (m, b) => {
    a.value[m] || (a.value[m] = n(b, m), v());
  }, v = (m = ut) => {
    const b = s.value.find(({ name: E }) => E === i.value), g = s.value.find(({ name: E }) => E === e.theme);
    let w = (g == null ? void 0 : g.variables) || {};
    for (const E of Object.values(a.value))
      w = { ...w, ...E };
    w = { ...w, ...b == null ? void 0 : b.variables };
    const D = () => {
      const E = m === ut ? ":root" : `#${m}`, f = Object.entries(w).map(([y, k]) => `${y}:${k}`).join(";");
      return `${E}{${f}}`;
    }, O = l.value.findIndex((E) => E.id === m);
    O !== -1 ? l.value[O].content = D() : l.value.push({ id: m, content: D() });
  }, p = (m = ut) => {
    if (t()) {
      const b = document.getElementById(`${r}${m}`);
      b && b.remove();
    }
  };
  return t() && et(
    () => l.value,
    () => {
      for (const { id: m, content: b } of l.value) {
        let g = document.getElementById(`${r}--${m}`);
        const w = document.getElementsByTagName("head")[0];
        g || (g = document.createElement("style"), g.id = `${r}--${m}`, w.appendChild(g)), g.innerHTML = b;
      }
    },
    { deep: !0 }
  ), c({ name: e.theme, variables: Kt }), {
    theme: i,
    providers: l,
    createPalette: Je,
    destroy: p,
    registerComponentStyle: u,
    registerTheme: c,
    setTheme: d
  };
}, Be = 1, Kt = {
  spacing: `${Be}rem`,
  "spacing-xs": `${Be * 0.5}rem`,
  "spacing-sm": `${Be * 0.75}rem`,
  "spacing-md": `${Be}rem`,
  "spacing-lg": `${Be * 1.25}rem`,
  "spacing-xl": `${Be * 1.5}rem`,
  "font-weight-light": 300,
  "font-weight-normal": 400,
  "font-weight-medium": 500,
  "font-weight-semibold": 600,
  "font-weight-bold": 700,
  "border-radius": "6px",
  "border-width": "1px",
  text: "1rem",
  "text-sm": "0.875rem",
  "text-md": "var(--text)",
  "text-lg": "1.125rem",
  "line-height": 1.25,
  "line-height-sm": 1.25,
  "line-height-md": "var(--line-height)",
  "line-height-lg": 1.25,
  "focus-shadow-size": "4px",
  "transition-time": ".1s",
  "transition-type": "linear",
  "border-color": "#dadada",
  "border-color--disabled": "var(--border-color)",
  "z-index-base": 400,
  "z-index-modal": 401,
  "z-index-tooltip": 402,
  "placeholder-color": "gray",
  "placeholder-color--hover": "var(--placeholder-color)",
  "placeholder-color--focus": "var(--placeholder-color)",
  "placeholder-color--disabled": "var(--placeholder-color)",
  "text-color": "#2c3e50",
  "text-color--hover": "var(--text-color)",
  "text-color--focus": "var(--text-color)",
  "text-color--disabled": "var(--text-color)",
  "text-color--light": "#6c7782",
  "contrast-color": "#fff",
  "contrast-color--hover": "var(--contrast-color)",
  "contrast-color--focus": "var(--contrast-color)",
  "contrast-color--disabled": "var(--contrast-color)",
  "background-color": "#fff",
  "background-color--hover": "var(--background-color)",
  "background-color--focus": "var(--background-color)",
  "background-color--disabled": "#f4f4f4",
  "body-background-color": "var(--background-color)",
  ...Je("primary", "#0969da"),
  ...Je("secondary", "#1f2225"),
  ...Je("success", "#1d9e64"),
  ...Je("error", "#cb2960")
}, Ze = "e", ue = {
  Modal: `${Ze}-md`,
  Tooltip: `${Ze}-tt`,
  Toast: `${Ze}-to`
};
function No() {
  if (typeof document > "u")
    return;
  let e = document.getElementById(Ze);
  e || (e = document.createElement("div"), e.id = Ze, document.body.appendChild(e)), Object.values(ue).forEach((t) => {
    let o = document.getElementById(t);
    o || (o = document.createElement("div"), o.setAttribute("id", t), e.appendChild(o));
  });
}
const Vo = (e) => {
  const t = H([]), o = (i, s, l = !1) => {
    var u;
    const d = new CustomEvent("open", {
      detail: s,
      bubbles: !0
    }), c = document.getElementById(`e-${i}-ref`);
    if (!c)
      return console.error(`Unknown modal '${i}'.`);
    t.value.length && !l && r(t.value[t.value.length - 1].id, !0), c.dispatchEvent(d), t.value.find((v) => v.id === i) || (t.value.push({ id: i, data: s }), (u = document.getElementById(ue.Modal)) == null || u.setAttribute("data-e-active", "true"), t.value.length === 1 && (document.body.style.paddingRight = a() + "px"), document.body.style.overflowY = "hidden");
  }, r = (i, s = !1) => {
    var c;
    const l = new CustomEvent("close", {
      bubbles: !0
    });
    !i && t.value.length && (i = t.value[t.value.length - 1].id);
    const d = document.getElementById(`e-${i}-ref`);
    if (d && d.dispatchEvent(l), !s)
      if (t.value = t.value.filter((u) => u.id !== i), !t.value.length)
        (c = document.getElementById(ue.Modal)) == null || c.removeAttribute("data-e-active"), setTimeout(() => {
          document.body.style.paddingRight = "0", document.body.style.overflowY = "";
        }, 250);
      else {
        const u = t.value[t.value.length - 1];
        o(u.id, u.data, !0);
      }
  }, n = () => {
    t.value = t.value.slice(-1), r();
  }, a = (i) => i ? i.offsetWidth - i.clientWidth : window.innerWidth - document.body.clientWidth;
  return {
    close: r,
    closeAll: n,
    open: o
  };
}, Jt = (e) => typeof e == "object" && !Array.isArray(e), uo = (e, t) => {
  const o = (n) => Jt(t[n]) && e[n] && Jt(e[n]), r = Object.getOwnPropertyNames(t).map((n) => ({
    [n]: o(n) ? uo(e[n], t[n]) : t[n]
  })).reduce((n, a) => ({ ...n, ...a }), {});
  return {
    ...e,
    ...r
  };
}, Ho = {
  prefix: "",
  theme: "default",
  components: {
    [h.EThemeProvider]: {
      name: h.EThemeProvider,
      props: {
        destroyDelay: 0
      },
      options: {}
    },
    [h.EButton]: {
      name: h.EButton,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        tag: "button"
      },
      options: {}
    },
    [h.ECheckbox]: {
      name: h.ECheckbox,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        feedbackType: "error"
      },
      options: {
        iconChecked: "check",
        iconIndeterminate: "dash"
      }
    },
    [h.EIcon]: {
      name: h.EIcon,
      props: {
        prefix: "",
        tag: "span",
        type: "class"
      },
      options: {}
    },
    [h.EInput]: {
      name: h.EInput,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        type: "text",
        feedbackType: "error"
      },
      options: {}
    },
    [h.ELoading]: {
      name: h.ELoading,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        mode: "spinner",
        role: "progressbar"
      },
      options: {}
    },
    [h.EModal]: {
      name: h.EModal,
      props: {
        size: le.DEFAULT,
        closeOnRouteChange: !0,
        closeOnBackdrop: !1,
        closeable: !0
      },
      options: { closeIcon: "x-lg" }
    },
    [h.ERadio]: {
      name: h.ERadio,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        feedbackType: "error"
      },
      options: {}
    },
    [h.ESelect]: {
      name: h.ESelect,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        feedbackType: "error",
        options: []
      },
      options: { icon: "chevron-expand" }
    },
    [h.ESwitch]: {
      name: h.ESwitch,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        feedbackType: "error"
      },
      options: {
        checkedIcon: "check",
        uncheckedIcon: "x"
      }
    },
    [h.ETextarea]: {
      name: h.ETextarea,
      props: {
        size: le.DEFAULT,
        variant: re.PRIMARY,
        feedbackType: "error"
      },
      options: {}
    },
    [h.ETooltip]: {
      name: h.ETooltip,
      props: {
        variant: re.SECONDARY,
        placement: "top",
        delay: 0,
        trigger: "hover",
        arrow: { padding: 8 },
        offset: [0, 8],
        disableTouch: !1
      },
      options: {}
    },
    [h.EFormControl]: {
      name: h.EFormControl,
      props: {},
      options: {}
    }
  }
};
let $t;
function Uo(e) {
  const t = H(
    uo(Ho, (e == null ? void 0 : e.config) || {})
  ), o = Vo(t.value), r = jo(t.value);
  return No(), {
    config: t,
    uuid: () => "L" + (Math.random().toString(36) + "00000000000000000").slice(2, 9),
    modal: o,
    theming: r
  };
}
function X(e, t = !1) {
  return (!$t || t) && ($t = Uo(e)), $t;
}
function Ve() {
  const { modal: e, uuid: t, theming: o, config: r } = X();
  return {
    config: r,
    uuid: t,
    theming: {
      theme: o.theme,
      setTheme: o.setTheme,
      registerTheme: o.registerTheme,
      createPalette: o.createPalette
    },
    modal: {
      open: e.open,
      close: e.close,
      closeAll: e.closeAll
    }
  };
}
function V(e) {
  const t = Ao(), { config: o } = X(), r = (...d) => d.find(
    (c) => !!c || typeof c == "boolean" || typeof c == "number"
  ), n = (d, c, u = !0) => s(d, "-", c, u), a = (d, c, u = !0) => s(d, "--", c, u), i = (d, c, u = !0) => s(d || "", "", c, u), s = (d, c = "", u, v = !0) => {
    const p = (b) => `${v ? o.value.prefix : ""}${u || (e == null ? void 0 : e.name)}${c}${b}`, m = {};
    return typeof d == "string" ? p(d) : (Object.entries(d).forEach(
      ([b, g]) => m[p(b)] = g || !1
    ), m);
  };
  return {
    hasSlot: (d) => !!t[d],
    first: r,
    css: {
      modifier: a,
      element: n,
      base: i
    }
  };
}
function Fe(e) {
  return { blockClass: x(
    () => e.props.value.block ? V(e).css.modifier("block") : void 0
  ) };
}
const Pe = {
  block: {
    type: Boolean,
    default: void 0
  }
}, Z = {
  id: {
    type: String
  }
};
function ie(e, t) {
  return Wo(e, t);
}
function Wo(e, t) {
  const { uuid: o } = Ve(), r = Lo(), n = (c, u) => Object.assign(
    {},
    c,
    ...Object.entries(u).map(([v, p]) => p === void 0 ? {} : { [v]: p })
  ), a = ge(e), i = x(() => n(a.props, t)), s = (c, u) => {
    if (c = Object.assign({}, c), !u || !u.include && !u.exclude)
      return c;
    const v = (p, m) => (typeof c[p] == "function" && p.startsWith("on") && (p = p.substring(2), p = p.charAt(0).toLowerCase() + p.slice(1)), !!m.includes(p));
    if (u.include)
      for (const p of Object.keys(c))
        v(p, u.include) || delete c[p];
    if (u.exclude)
      for (const p of Object.keys(c))
        v(p, u.exclude) && delete c[p];
    return c;
  }, l = (c) => s(i.value, c), d = (c) => s(r, c);
  return {
    props: i,
    id: x(() => t.id || o()),
    name: a.name,
    options: a.options,
    bindProps: l,
    bindAttrs: d
  };
}
function ge(e) {
  const { config: t } = Ve(), o = t.value.components[e];
  if (!o)
    throw new Error(`Component '${e}' does not exist in configuration.`);
  return o;
}
const ye = {
  disabled: {
    type: Boolean,
    default: void 0
  }
};
function He(e) {
  const { uuid: t } = Ve(), { hasSlot: o, css: r } = V(e), n = x(
    () => e.props.value.feedbackType && e.props.value.feedback ? r.modifier(`feedback-${e.props.value.feedbackType}`) : void 0
  ), a = x(() => {
    if (e.props.value.highlight !== !1 && (e.props.value.highlight || e.props.value.feedback))
      return r.modifier("highlight");
  }), i = x(() => {
    const { feedback: s, label: l, description: d } = e.props.value;
    return !!s || !!l || !!d || !!("hint" in e.props.value && e.props.value.hint) || o("feedback") || o("label") || o("description") || o("hint");
  });
  return {
    feedbackClass: n,
    highlightClass: a,
    hasLabels: i,
    ariaLabelledby: t(),
    ariaDescribedby: t()
  };
}
const he = {
  label: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  description: {
    type: String
  },
  name: {
    type: String
  },
  feedback: {
    type: String
  },
  feedbackType: {
    type: String,
    default: "error"
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: [String, Number, Boolean]
  },
  highlight: {
    type: Boolean,
    required: !1,
    default: void 0
  }
}, mt = {
  ...he,
  placeholder: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: void 0
  },
  hint: {
    type: String
  },
  autocomplete: {
    type: Boolean,
    default: void 0
  },
  value: {
    type: [String, Number],
    default: void 0
  },
  modelValue: {
    type: [String, Number]
  }
}, qo = {
  activeClass: {
    type: String
  },
  exactActiveClass: {
    type: String
  },
  append: {
    type: Boolean,
    default: void 0
  },
  exact: {
    type: Boolean,
    default: void 0
  },
  replace: {
    type: Boolean,
    default: void 0
  },
  to: {
    type: [String, Object]
  },
  prefetch: {
    type: Boolean,
    default: void 0
  },
  noPrefetch: {
    type: Boolean,
    default: void 0
  },
  href: {
    type: String
  },
  target: {
    type: String
  },
  rel: {
    type: String
  }
};
function pe(e) {
  return {
    sizeClass: x(
      () => V(e).css.modifier(e.props.value.size)
    )
  };
}
const fe = {
  size: {
    type: String
  }
};
function Ee(e) {
  return {
    variantClass: x(
      () => V(e).css.modifier(e.props.value.variant)
    )
  };
}
function po(e) {
  return { outlineClass: x(
    () => e.props.value.outline ? V(e).css.modifier("outline") : null
  ), ...Ee(e) };
}
const ve = {
  variant: {
    type: String
  }
}, Yo = {
  ...ve,
  outline: {
    type: Boolean,
    default: void 0
  }
}, Xo = {}, Go = {
  ...Z,
  className: {
    type: String
  },
  prefix: {
    type: String
  },
  type: {
    type: String
  },
  tag: {
    type: String
  },
  i: {
    type: String
  },
  icon: {
    type: String
  }
}, Ko = q({
  name: h.EIcon,
  props: Go,
  inheritAttrs: !1,
  setup(e) {
    const t = ie(h.EIcon, e), {
      theming: { registerComponentStyle: o }
    } = X();
    return o(t.name, Xo), {
      ...t,
      ...V(t)
    };
  }
}), Y = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
};
function Jo(e, t, o, r, n, a) {
  return e.props.type === "inline" ? ($(), U(wt(e.props.tag), W({
    key: 0,
    class: [e.css.base(), e.props.className],
    "aria-hidden": "true"
  }, e.bindAttrs(), {
    textContent: ae(`${e.props.prefix}${e.props.icon || e.props.i}`)
  }), null, 16, ["class", "textContent"])) : ($(), U(wt(e.props.tag), W({
    key: 1,
    class: [
      e.css.base(),
      e.props.className,
      `${e.props.prefix}${e.props.icon || e.props.i}`
    ],
    "aria-hidden": "true"
  }, e.bindAttrs()), null, 16, ["class"]));
}
const rt = /* @__PURE__ */ Y(Ko, [["render", Jo]]), Qo = {
  size: "var(--text)",
  "size-sm": "var(--text-sm)",
  "size-lg": "var(--text-lg)"
}, Zo = {
  ...Z,
  ...fe,
  ...ve,
  mode: {
    type: String
  },
  role: {
    type: String
  },
  label: {
    type: String
  },
  loading: {
    type: Boolean,
    default: void 0
  }
}, xo = q({
  name: h.ELoading,
  props: Zo,
  inheritAttrs: !1,
  setup(e) {
    const t = ie(
      h.ELoading,
      e
    ), {
      theming: { registerComponentStyle: o }
    } = X();
    o(t.name, Qo);
    const { screenReaderClass: r } = zo(), { sizeClass: n } = pe(t), { variantClass: a } = Ee(t), i = x(() => t.props.value.mode === "dots");
    return {
      ...t,
      ...V(t),
      screenReaderClass: r,
      sizeClass: n,
      variantClass: a,
      isDots: i
    };
  }
}), _o = ["id"], er = {
  key: 0,
  role: "presentation"
}, tr = {
  key: 1,
  role: "presentation"
}, or = {
  key: 2,
  role: "presentation"
}, rr = ["textContent"];
function nr(e, t, o, r, n, a) {
  return $(), P("div", W({
    id: e.id,
    class: [e.css.base(), e.css.modifier(e.props.mode), e.sizeClass, e.variantClass],
    "aria-busy": "true"
  }, { ...e.bindProps({ include: ["role"] }), ...e.bindAttrs() }), [
    F("div", null, [
      e.isDots ? ($(), P("div", er)) : j("", !0),
      e.isDots ? ($(), P("div", tr)) : j("", !0),
      e.isDots ? ($(), P("div", or)) : j("", !0)
    ]),
    e.props.label ? ($(), P("span", {
      key: 0,
      class: C(e.screenReaderClass),
      textContent: ae(e.props.label)
    }, null, 10, rr)) : j("", !0)
  ], 16, _o);
}
const ar = /* @__PURE__ */ Y(xo, [["render", nr]]), sr = {
  "padding-x": "calc(var(--spacing) * 0.75)",
  "padding-y": "calc(var(--spacing) * 0.4375)",
  "padding-x-sm": "calc(var(--spacing) * 0.5)",
  "padding-y-sm": "calc(var(--spacing) * 0.28125)",
  "padding-x-lg": "var(--spacing)",
  "padding-y-lg": "calc(var(--spacing) * 0.59375)",
  "border-radius": "var(--border-radius)",
  "border-width": "var(--border-width)",
  "font-size": "var(--text-md)",
  "font-size-sm": "var(--text-sm)",
  "font-size-lg": "var(--text-lg)",
  "line-height": "var(--line-height)",
  "line-height-sm": "var(--line-height-sm)",
  "line-height-lg": "var(--line-height-lg)",
  "font-weight": "var(--font-weight-normal)"
}, ir = {
  ...Z,
  ...Pe,
  ...ye,
  ...fe,
  ...qo,
  ...Yo,
  tag: {
    type: String,
    inherit: !0
  },
  type: {
    type: String
  },
  icon: {
    type: String
  },
  iconLeft: {
    type: String
  },
  iconRight: {
    type: String
  },
  loading: {
    type: Boolean,
    default: void 0
  }
}, lr = q({
  name: h.EButton,
  props: ir,
  components: { EIcon: rt, ELoading: ar },
  inheritAttrs: !1,
  setup(e) {
    const t = ie(
      h.EButton,
      e
    ), {
      theming: { registerComponentStyle: o }
    } = X();
    o(t.name, sr);
    const { blockClass: r } = Fe(t), { sizeClass: n } = pe(t), { variantClass: a, outlineClass: i } = po(t);
    return {
      ...t,
      ...V(t),
      blockClass: r,
      outlineClass: i,
      sizeClass: n,
      variantClass: a
    };
  }
});
function cr(e, t, o, r, n, a) {
  const i = I("ELoading"), s = I("EIcon");
  return $(), U(wt(e.props.tag), W({
    id: e.id,
    class: [
      e.css.base(),
      e.blockClass,
      e.outlineClass,
      e.sizeClass,
      e.variantClass,
      e.css.modifier({
        block: e.props.block,
        loading: e.props.loading,
        "icon-left": !!e.props.iconLeft,
        "icon-right": !!e.props.iconRight
      })
    ],
    "active-class": e.props.tag.toLowerCase().includes("link") ? e.props.activeClass : void 0
  }, {
    ...e.bindProps({
      exclude: [
        "size",
        "tag",
        "variant",
        "icon",
        "iconLeft",
        "iconRight",
        "outline",
        "loading"
      ]
    }),
    ...e.bindAttrs()
  }), {
    default: z(() => [
      e.props.loading ? ($(), U(i, {
        key: 0,
        size: e.props.size,
        variant: "inherit"
      }, null, 8, ["size"])) : j("", !0),
      F("div", {
        class: C(e.css.element("content"))
      }, [
        e.props.icon ? ($(), U(s, {
          key: 0,
          icon: e.props.icon
        }, null, 8, ["icon"])) : j("", !0),
        e.props.iconLeft ? ($(), U(s, {
          key: 1,
          icon: e.props.iconLeft
        }, null, 8, ["icon"])) : j("", !0),
        e.hasSlot("default") ? A(e.$slots, "default", {
          key: 2,
          class: C(e.css.element(`${e.name}-slot`))
        }) : j("", !0),
        e.props.iconRight ? ($(), U(s, {
          key: 3,
          icon: e.props.iconRight
        }, null, 8, ["icon"])) : j("", !0)
      ], 2)
    ]),
    _: 3
  }, 16, ["id", "class", "active-class"]);
}
const Xa = /* @__PURE__ */ Y(lr, [["render", cr]]), dr = q({
  name: h.EFormControl,
  props: {
    field: {
      type: Boolean,
      default: !1
    },
    margin: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return {
      name: ge(h.EFormControl).name,
      ...V()
    };
  }
});
function ur(e, t, o, r, n, a) {
  return $(), P("div", {
    class: C([e.css.base("", e.name), e.css.modifier({ field: e.field, margin: e.margin }, e.name)])
  }, [
    A(e.$slots, "default")
  ], 2);
}
const Ue = /* @__PURE__ */ Y(dr, [["render", ur]]), pr = q({
  name: "EFormControlDescription",
  props: {
    useSlot: {
      type: Boolean
    },
    id: Z.id,
    description: he.description,
    aria: {
      type: String
    }
  },
  setup() {
    return {
      name: ge(h.EFormControl).name,
      ...V()
    };
  }
}), fr = ["id", "textContent"];
function vr(e, t, o, r, n, a) {
  return !e.description && e.useSlot ? ($(), P("div", {
    key: 0,
    class: C(e.css.element("description", e.name))
  }, [
    A(e.$slots, "default")
  ], 2)) : e.description ? ($(), P("span", {
    key: 1,
    id: e.aria,
    class: C(e.css.element("description", e.name)),
    textContent: ae(e.description)
  }, null, 10, fr)) : j("", !0);
}
const We = /* @__PURE__ */ Y(pr, [["render", vr]]), mr = q({
  name: "EFormControlFeedback",
  props: {
    useSlot: {
      type: Boolean
    },
    feedback: he.feedback,
    feedbackType: he.feedbackType
  },
  setup(e, t) {
    return {
      name: ge(h.EFormControl).name,
      ...V()
    };
  }
}), br = ["textContent"];
function hr(e, t, o, r, n, a) {
  return !e.feedback && e.useSlot ? ($(), P("div", {
    key: 0,
    class: C([
      e.css.element("feedback", e.name),
      e.css.modifier(e.feedbackType, e.css.element("feedback", e.name, !1))
    ])
  }, [
    A(e.$slots, "default")
  ], 2)) : e.feedback ? ($(), P("span", {
    key: 1,
    class: C([
      e.css.element("feedback", e.name),
      e.css.modifier(e.feedbackType, e.css.element("feedback", e.name, !1))
    ]),
    textContent: ae(e.feedback)
  }, null, 10, br)) : j("", !0);
}
const qe = /* @__PURE__ */ Y(mr, [["render", hr]]), gr = q({
  name: "EFormControlLabel",
  props: {
    useSlot: {
      type: Boolean
    },
    for: Z.id,
    label: he.label,
    aria: {
      type: String
    }
  },
  setup() {
    return {
      name: ge(h.EFormControl).name,
      ...V()
    };
  }
}), yr = ["id", "for", "textContent"];
function Er(e, t, o, r, n, a) {
  return !e.label && e.useSlot ? ($(), P("div", {
    key: 0,
    class: C(e.css.element("label", e.name))
  }, [
    A(e.$slots, "default")
  ], 2)) : e.label ? ($(), P("label", {
    key: 1,
    id: e.aria,
    for: e.$props.for,
    class: C(e.css.element("label", e.name)),
    textContent: ae(e.label)
  }, null, 10, yr)) : j("", !0);
}
const Ye = /* @__PURE__ */ Y(gr, [["render", Er]]), kr = {
  size: "1.5rem",
  "line-height": "var(--line-height)",
  "size-sm": "1.25rem",
  "line-height-sm": "var(--line-height-sm)",
  "size-lg": "1.75rem",
  "line-height-lg": "var(--line-height-lg)",
  "border-radius": "var(--border-radius)",
  "focus-shadow-size": "var(--focus-shadow-size)",
  "border-width": "var(--border-width)",
  "border-color": "var(--border-color)"
}, $r = {
  ...Z,
  ...ye,
  ...Pe,
  ...he,
  ...fe,
  ...ve,
  indeterminate: { type: Boolean, default: void 0 },
  checked: { type: Boolean, default: void 0 }
}, Cr = q({
  name: h.ECheckbox,
  props: $r,
  emits: ["input", "update:modelValue"],
  components: {
    EFormControl: Ue,
    EFormControlLabel: Ye,
    EFormControlDescription: We,
    EFormControlFeedback: qe,
    EIcon: rt
  },
  inheritAttrs: !1,
  setup(e, { emit: t }) {
    const o = ie(
      h.ECheckbox,
      e
    ), {
      theming: { registerComponentStyle: r }
    } = X();
    r(o.name, kr);
    const { blockClass: n } = Fe(o), {
      ariaDescribedby: a,
      ariaLabelledby: i,
      feedbackClass: s,
      highlightClass: l,
      hasLabels: d
    } = He(o), { sizeClass: c } = pe(o), { variantClass: u } = Ee(o), v = (p) => {
      t("input", p), t("update:modelValue", p.target.checked);
    };
    return {
      ...o,
      ...V(o),
      blockClass: n,
      feedbackClass: s,
      highlightClass: l,
      sizeClass: c,
      variantClass: u,
      ariaDescribedby: a,
      ariaLabelledby: i,
      hasLabels: d,
      onInput: v
    };
  }
}), wr = ["id", "invalid", "checked", "aria-labelledby", "aria-describedby"];
function Sr(e, t, o, r, n, a) {
  const i = I("EIcon"), s = I("EFormControlLabel"), l = I("EFormControlDescription"), d = I("EFormControlFeedback"), c = I("EFormControl");
  return $(), U(c, W({
    class: [
      e.css.base(),
      e.blockClass,
      e.feedbackClass,
      e.highlightClass,
      e.sizeClass,
      e.variantClass
    ]
  }, {
    ...e.bindAttrs({
      exclude: ["blur", "change", "focus", "focusin", "focusout"]
    })
  }), {
    default: z(() => [
      F("div", {
        class: C(e.css.element("inner"))
      }, [
        F("div", null, [
          F("input", W({
            id: e.id,
            type: "checkbox",
            invalid: e.props.feedback && e.props.feedbackType === "error",
            checked: e.modelValue || e.props.checked,
            "aria-labelledby": e.props.label ? e.ariaLabelledby : void 0,
            "aria-describedby": e.props.description ? e.ariaDescribedby : void 0,
            onInput: t[0] || (t[0] = (...u) => e.onInput && e.onInput(...u))
          }, {
            ...e.bindProps({
              include: ["autofocus", "disabled", "name", "value"]
            }),
            ...e.bindAttrs({
              include: ["blur", "change", "focus", "focusin", "focusout"]
            })
          }), null, 16, wr),
          F("div", {
            class: C(e.css.element("box"))
          }, [
            e.props.indeterminate ? ($(), U(i, {
              key: 0,
              icon: e.options.iconIndeterminate,
              class: C(e.css.element("icon"))
            }, null, 8, ["icon", "class"])) : ($(), U(i, {
              key: 1,
              icon: e.options.iconChecked,
              class: C(e.css.element("icon"))
            }, null, 8, ["icon", "class"]))
          ], 2),
          N(s, {
            for: e.id,
            label: e.props.label,
            "use-slot": e.hasSlot("label"),
            aria: e.ariaLabelledby
          }, {
            default: z(() => [
              A(e.$slots, "label", { id: e.id })
            ]),
            _: 3
          }, 8, ["for", "label", "use-slot", "aria"])
        ]),
        e.hasLabels ? ($(), P("div", {
          key: 0,
          class: C(e.css.element("context"))
        }, [
          N(l, {
            description: e.props.description,
            "use-slot": e.hasSlot("description"),
            aria: e.ariaDescribedby
          }, {
            default: z(() => [
              A(e.$slots, "description")
            ]),
            _: 3
          }, 8, ["description", "use-slot", "aria"]),
          N(d, {
            feedback: e.props.feedback,
            "feedback-type": e.props.feedbackType,
            "use-slot": e.hasSlot("feedback")
          }, {
            default: z(() => [
              A(e.$slots, "feedback")
            ]),
            _: 3
          }, 8, ["feedback", "feedback-type", "use-slot"])
        ], 2)) : j("", !0)
      ], 2)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Ga = /* @__PURE__ */ Y(Cr, [["render", Sr]]), Tr = q({
  name: "EFormControlHint",
  props: {
    useSlot: {
      type: Boolean
    },
    hint: mt.hint,
    aria: {
      type: String
    }
  },
  setup() {
    return {
      name: ge(h.EFormControl).name,
      ...V()
    };
  }
}), Or = ["id", "textContent"];
function Ar(e, t, o, r, n, a) {
  return !e.hint && e.useSlot ? ($(), P("div", {
    key: 0,
    class: C(e.css.element("hint", e.name))
  }, [
    A(e.$slots, "default")
  ], 2)) : e.hint ? ($(), P("span", {
    key: 1,
    id: e.aria,
    class: C(e.css.element("hint", e.name)),
    textContent: ae(e.hint)
  }, null, 10, Or)) : j("", !0);
}
const Dt = /* @__PURE__ */ Y(Tr, [["render", Ar]]), Lr = {
  "border-radius": "var(--border-radius)",
  "border-width": "var(--border-width)",
  "border-color": "var(--border-color)",
  "border-color--disabled": "var(--border-color--disabled)",
  "text-color": "var(--text-color)",
  "text-color--hover": "var(--text-color--hover)",
  "text-color--focus": "var(--text-color--focus)",
  "text-color--disabled": "var(--text-color--disabled)",
  "placeholder-color": "var(--placeholder-color)",
  "placeholder-color--hover": "var(--placeholder-color--hover)",
  "placeholder-color--focus": "var(--placeholder-color--focus)",
  "placeholder-color--disabled": "var(--placeholder-color--disabled)",
  "background-color": "var(--background-color)",
  "background-color--hover": "var(--background-color--hover)",
  "background-color--focus": "var(--background-color--focus)",
  "background-color--disabled": "var(--background-color--disabled)",
  "padding-x": "calc(var(--spacing) * 0.75)",
  "padding-y": "calc(var(--spacing) * 0.4375)",
  "font-size": "var(--text-md)",
  "line-height": "var(--line-height)",
  "padding-x-sm": "calc(var(--spacing) * 0.5)",
  "padding-y-sm": "calc(var(--spacing) * 0.28125)",
  "font-size-sm": "var(--text-sm)",
  "line-height-sm": "var(--line-height-sm)",
  "padding-x-lg": "var(--spacing)",
  "padding-y-lg": "calc(var(--spacing) * 0.59375)",
  "font-size-lg": "var(--text-lg)",
  "line-height-lg": "var(--line-height-lg)"
}, Dr = {
  ...Z,
  ...mt,
  ...ye,
  ...fe,
  ...ve,
  ...Pe,
  type: {
    type: String
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  step: {
    type: Number
  }
}, Ir = q({
  name: h.EInput,
  props: Dr,
  emits: ["update:modelValue", "input"],
  components: {
    EFormControl: Ue,
    EFormControlLabel: Ye,
    EFormControlHint: Dt,
    EFormControlDescription: We,
    EFormControlFeedback: qe
  },
  inheritAttrs: !1,
  setup(e, { emit: t }) {
    const o = ie(
      h.EInput,
      e
    ), {
      theming: { registerComponentStyle: r }
    } = X();
    r(o.name, Lr);
    const { blockClass: n } = Fe(o), { feedbackClass: a, highlightClass: i, ariaDescribedby: s, ariaLabelledby: l } = He(o), { sizeClass: d } = pe(o), { variantClass: c } = po(o), u = (v) => {
      t("input", v), t("update:modelValue", v.target.value);
    };
    return {
      ...o,
      ...V(o),
      blockClass: n,
      feedbackClass: a,
      highlightClass: i,
      sizeClass: d,
      variantClass: c,
      ariaDescribedby: s,
      ariaLabelledby: l,
      onInput: u
    };
  }
}), Fr = ["id", "invalid", "value", "placeholder", "aria-labelledby", "aria-describedby"];
function Pr(e, t, o, r, n, a) {
  const i = I("EFormControlLabel"), s = I("EFormControlDescription"), l = I("EFormControlFeedback"), d = I("EFormControlHint"), c = I("EFormControl");
  return $(), U(c, W({
    field: "",
    class: [
      e.css.base(),
      e.blockClass,
      e.feedbackClass,
      e.highlightClass,
      e.sizeClass,
      e.variantClass
    ]
  }, {
    ...e.bindAttrs({
      exclude: ["blur", "change", "focus", "focusin", "focusout"]
    })
  }), {
    default: z(() => [
      N(i, {
        for: e.id,
        aria: e.ariaLabelledby,
        label: e.props.label,
        "use-slot": e.hasSlot("label")
      }, {
        default: z(() => [
          A(e.$slots, "label", { id: e.id })
        ]),
        _: 3
      }, 8, ["for", "aria", "label", "use-slot"]),
      N(s, {
        description: e.props.description,
        "use-slot": e.hasSlot("description"),
        aria: e.ariaDescribedby
      }, {
        default: z(() => [
          A(e.$slots, "description")
        ]),
        _: 3
      }, 8, ["description", "use-slot", "aria"]),
      F("div", {
        class: C(e.css.element("inner"))
      }, [
        F("div", {
          class: C(e.css.element("element"))
        }, [
          F("input", W({
            id: e.id,
            invalid: e.props.feedback && e.props.feedbackType === "error",
            value: e.modelValue || e.props.value,
            placeholder: e.first(e.props.placeholder, e.props.label),
            "aria-labelledby": e.props.label ? e.ariaLabelledby : void 0,
            "aria-describedby": e.props.description || e.props.hint ? e.ariaDescribedby : void 0,
            onInput: t[0] || (t[0] = (...u) => e.onInput && e.onInput(...u))
          }, {
            ...e.bindProps({
              include: [
                "min",
                "max",
                "step",
                "autofocus",
                "autocomplete",
                "type",
                "name",
                "disabled",
                "readonly"
              ]
            }),
            ...e.bindAttrs({
              include: ["blur", "change", "focus", "focusin", "focusout"]
            })
          }), null, 16, Fr)
        ], 2)
      ], 2),
      N(l, {
        feedback: e.props.feedback,
        "feedback-type": e.props.feedbackType,
        "use-slot": e.hasSlot("feedback")
      }, {
        default: z(() => [
          A(e.$slots, "feedback")
        ]),
        _: 3
      }, 8, ["feedback", "feedback-type", "use-slot"]),
      N(d, {
        hint: e.props.hint,
        "use-slot": e.hasSlot("hint"),
        aria: e.props.description ? void 0 : e.ariaDescribedby
      }, {
        default: z(() => [
          A(e.$slots, "hint")
        ]),
        _: 3
      }, 8, ["hint", "use-slot", "aria"])
    ]),
    _: 3
  }, 16, ["class"]);
}
const Ka = /* @__PURE__ */ Y(Ir, [["render", Pr]]), Rr = {
  "border-radius": "var(--border-radius)",
  "background-color": "var(--body-background-color)",
  size: "34rem",
  "size-sm": "28rem",
  "size-lg": "40rem"
}, Br = {
  ...Z,
  ...fe,
  title: {
    type: String
  },
  description: {
    type: String
  },
  closeable: {
    type: Boolean,
    default: !0
  },
  closeOnBackdrop: { type: Boolean, default: void 0 },
  closeOnRouteChange: { type: Boolean, default: !0 }
}, zr = 250, Mr = q({
  name: h.EModal,
  props: Br,
  components: {
    EIcon: rt
  },
  setup(e) {
    const t = ie(
      h.EModal,
      e
    ), {
      uuid: o,
      modal: r,
      theming: { registerComponentStyle: n }
    } = X();
    n(t.name, Rr);
    const { css: a } = V(t), { sizeClass: i } = pe(t), { enable: s, disable: l } = Nr(), d = e.id || o(), c = o(), u = o(), v = H(!1), p = H(!1), m = H(!1), b = H(null);
    let g = null;
    const w = () => {
      if (f.value || document.getElementById(ue.Modal + "-backdrop"))
        return;
      const B = document.getElementById(ue.Modal);
      f.value = document.createElement("div"), f.value.id = ue.Modal + "-backdrop", f.value.className = a.element("backdrop"), B.appendChild(f.value);
    };
    At(() => {
      typeof document > "u" || (w(), v.value = !0);
    });
    const D = H(null), O = H(null), E = H(null), f = H(null);
    et(
      () => [e],
      () => {
        Qe(() => {
          L();
        });
      }
    );
    const y = (B) => {
      const M = document.getElementById(ue.Modal);
      f.value = M.firstElementChild, f.value.addEventListener("click", R), p.value = !0, b.value = B.detail, window.addEventListener("resize", L), window.addEventListener("keydown", k), g = document.activeElement, e.closeOnRouteChange && jr(() => {
        r.closeAll();
      }), Qe(() => {
        m.value = !0, s(d), L();
      });
    }, k = (B) => {
      B.key === "Escape" && (e.closeable ? r.close() : T());
    }, T = () => {
      const B = "e-shake", M = document.getElementById(d);
      !M || (M == null ? void 0 : M.classList.contains(B)) || (M.classList.add(B), setTimeout(() => {
        M.classList.remove(B);
      }, 500));
    }, S = () => {
      m.value = !1, l(), g && g.focus(), window.removeEventListener("resize", L), window.removeEventListener("keydown", k), f.value && f.value.removeEventListener("click", R), setTimeout(() => {
        m.value || (p.value = !1);
      }, zr);
    }, R = () => {
      if (e.closeable && e.closeOnBackdrop)
        r.close();
      else
        return T();
    }, L = () => {
      var B, M;
      O.value && (O.value.style.maxHeight = `calc(100vh - ${(((B = D.value) == null ? void 0 : B.clientHeight) || 0) + (((M = E.value) == null ? void 0 : M.clientHeight) || 0) + 2}px - 3.5rem)`);
    };
    return {
      ...t,
      ...V(t),
      sizeClass: i,
      teleportTarget: `#${ue.Modal}`,
      active: p,
      visible: m,
      onOpen: y,
      onClose: S,
      header: D,
      body: O,
      footer: E,
      headerId: u,
      bodyId: c,
      data: b,
      onBackdropClick: R,
      modal: r,
      ready: v
    };
  }
}), jr = (e) => {
  if (typeof document > "u")
    return;
  let t = location.pathname;
  const o = new MutationObserver(() => {
    location.pathname !== t && (t = location.pathname, e());
  }), r = { subtree: !0, childList: !0 };
  o.observe(document, r);
}, Nr = () => {
  let e, t;
  const o = (a) => {
    const i = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', s = document.getElementById(a);
    if (!s)
      return;
    e = s.querySelectorAll(
      i
    )[0];
    const l = s.querySelectorAll(i);
    t = l[l.length - 1], document.addEventListener("keydown", r);
    const c = s.querySelectorAll("h1, h2, h3, h4, h5, h6")[0];
    c ? (c.setAttribute("tabindex", "-10"), c.focus()) : e.focus();
  }, r = (a) => {
    (a.key === "Tab" || a.keyCode === 9) && (a.shiftKey ? document.activeElement === e && (t.focus(), a.preventDefault()) : document.activeElement === t && (e.focus(), a.preventDefault()));
  };
  return { enable: o, disable: () => {
    document.removeEventListener("keydown", r);
  } };
}, Vr = ["id"], Hr = ["id", "aria-labelledby", "aria-describedby"], Ur = ["id"], Wr = ["textContent"], qr = ["textContent"], Yr = ["id"], Xr = ["id"];
function Gr(e, t, o, r, n, a) {
  const i = I("EIcon");
  return $(), P("div", {
    id: `e-${e.id}-ref`,
    style: { display: "inline" },
    onOpen: t[1] || (t[1] = (...s) => e.onOpen && e.onOpen(...s)),
    onClose: t[2] || (t[2] = (...s) => e.onClose && e.onClose(...s))
  }, [
    e.ready ? ($(), U(Lt, {
      key: 0,
      to: e.teleportTarget
    }, [
      e.active ? ($(), P("div", {
        key: 0,
        id: e.id,
        ref: e.id,
        class: C([e.css.base(), e.sizeClass, { [e.css.modifier("visible")]: e.visible }]),
        role: "dialog",
        "aria-labelledby": e.headerId,
        "aria-describedby": e.bodyId
      }, [
        F("div", {
          class: C(e.css.element("inner"))
        }, [
          F("div", {
            class: C(e.css.element("content"))
          }, [
            F("div", {
              class: C(e.css.element("header")),
              ref: "header",
              id: e.headerId,
              tabindex: "-1"
            }, [
              F("div", null, [
                !e.title && e.hasSlot("title") ? A(e.$slots, "default", {
                  key: 0,
                  data: e.data
                }) : e.title ? ($(), P("h5", {
                  key: 1,
                  textContent: ae(e.title),
                  class: C(e.css.element("title"))
                }, null, 10, Wr)) : j("", !0),
                !e.description && e.hasSlot("description") ? A(e.$slots, "default", {
                  key: 2,
                  data: e.data
                }) : e.description ? ($(), P("span", {
                  key: 3,
                  textContent: ae(e.description),
                  class: C(e.css.element("description"))
                }, null, 10, qr)) : j("", !0)
              ]),
              e.closeable ? ($(), P("button", {
                key: 0,
                class: C(e.css.element("close")),
                "aria-label": "Close Modal",
                onClick: t[0] || (t[0] = (s) => e.modal.close())
              }, [
                N(i, {
                  icon: e.options.closeIcon
                }, null, 8, ["icon"])
              ], 2)) : j("", !0)
            ], 10, Ur),
            e.hasSlot("body-raw") ? ($(), P("div", {
              key: 0,
              class: C([
                e.css.element("body"),
                e.css.modifier("raw", e.css.element("body"), !1)
              ]),
              ref: "body",
              id: e.bodyId
            }, [
              A(e.$slots, "body-raw", {
                data: e.data,
                close: e.modal.close
              })
            ], 10, Yr)) : j("", !0),
            e.hasSlot("body") || e.hasSlot("default") ? ($(), P("div", {
              key: 1,
              class: C(e.css.element("body")),
              ref: "body",
              id: e.bodyId
            }, [
              e.hasSlot("body") ? A(e.$slots, "body", {
                key: 0,
                close: () => e.modal.close(e.id),
                data: e.data
              }) : A(e.$slots, "default", {
                key: 1,
                close: () => e.modal.close(e.id),
                data: e.data
              })
            ], 10, Xr)) : j("", !0),
            e.hasSlot("footer") || e.hasSlot("footer-left") || e.hasSlot("footer-right") ? ($(), P("div", {
              key: 2,
              class: C(e.css.element("footer")),
              ref: "footer"
            }, [
              e.hasSlot("footer") ? A(e.$slots, "footer", {
                key: 0,
                close: () => e.modal.close(e.id),
                data: e.data
              }) : e.hasSlot("footer-left") ? A(e.$slots, "footer-left", {
                key: 1,
                close: () => e.modal.close(e.id),
                data: e.data
              }) : j("", !0),
              F("div", {
                class: C(e.css.element("footer-fill"))
              }, null, 2),
              e.hasSlot("footer-right") ? A(e.$slots, "footer-right", {
                key: 2,
                close: () => e.modal.close(e.id),
                data: e.data
              }) : j("", !0)
            ], 2)) : j("", !0)
          ], 2)
        ], 2)
      ], 10, Hr)) : j("", !0)
    ], 8, ["to"])) : j("", !0)
  ], 40, Vr);
}
const Ja = /* @__PURE__ */ Y(Mr, [["render", Gr]]), Kr = {
  size: "1.5rem",
  "size-sm": "1.25rem",
  "size-lg": "1.75rem",
  "border-radius": "50%",
  "focus-shadow-size": "var(--focus-shadow-size)",
  "border-width": "var(--border-width)",
  "border-color": "var(--border-color)"
}, Jr = {
  ...Z,
  ...he,
  ...ye,
  ...fe,
  ...Pe,
  ...ve,
  checked: {
    type: Boolean,
    default: void 0
  }
}, Qr = q({
  name: h.ERadio,
  props: Jr,
  emits: ["input", "update:modelValue"],
  components: {
    EFormControl: Ue,
    EFormControlLabel: Ye,
    EFormControlDescription: We,
    EFormControlFeedback: qe
  },
  inheritAttrs: !1,
  setup(e, { emit: t }) {
    const o = ie(
      h.ERadio,
      e
    ), {
      theming: { registerComponentStyle: r }
    } = X();
    r(o.name, Kr);
    const { blockClass: n } = Fe(o), {
      ariaDescribedby: a,
      ariaLabelledby: i,
      feedbackClass: s,
      highlightClass: l,
      hasLabels: d
    } = He(o), { sizeClass: c } = pe(o), { variantClass: u } = Ee(o), v = (p) => {
      t("input", p), t("update:modelValue", p.target.value);
    };
    return {
      ...o,
      ...V(o),
      blockClass: n,
      feedbackClass: s,
      highlightClass: l,
      sizeClass: c,
      variantClass: u,
      ariaDescribedby: a,
      ariaLabelledby: i,
      hasLabels: d,
      onInput: v
    };
  }
}), Zr = ["id", "checked", "aria-labelledby", "aria-describedby"];
function xr(e, t, o, r, n, a) {
  const i = I("EFormControlLabel"), s = I("EFormControlDescription"), l = I("EFormControlFeedback"), d = I("EFormControl");
  return $(), U(d, W({
    class: [
      e.css.base(),
      e.blockClass,
      e.feedbackClass,
      e.highlightClass,
      e.sizeClass,
      e.variantClass
    ]
  }, {
    ...e.bindAttrs({
      exclude: ["blur", "change", "focus", "focusin", "focusout"]
    })
  }), {
    default: z(() => [
      F("div", {
        class: C(e.css.element("inner"))
      }, [
        F("div", null, [
          F("input", W({
            id: e.id,
            type: "radio",
            checked: e.modelValue === e.value || e.checked,
            "aria-labelledby": e.props.label ? e.ariaLabelledby : void 0,
            "aria-describedby": e.props.description ? e.ariaDescribedby : void 0,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
          }, {
            ...e.bindProps({
              include: ["autofocus", "disabled", "name", "value"]
            }),
            ...e.bindAttrs({
              include: ["blur", "change", "focus", "focusin", "focusout"]
            })
          }), null, 16, Zr),
          F("div", {
            class: C(e.css.element("box"))
          }, [
            F("div", {
              class: C(e.css.element("inner-box"))
            }, null, 2)
          ], 2),
          N(i, {
            for: e.id,
            label: e.props.label,
            "use-slot": e.hasSlot("label"),
            aria: e.ariaLabelledby
          }, {
            default: z(() => [
              A(e.$slots, "label", { id: e.id })
            ]),
            _: 3
          }, 8, ["for", "label", "use-slot", "aria"])
        ]),
        e.hasLabels ? ($(), P("div", {
          key: 0,
          class: C(e.css.element("context"))
        }, [
          N(s, {
            description: e.props.description,
            "use-slot": e.hasSlot("description"),
            aria: e.ariaDescribedby
          }, {
            default: z(() => [
              A(e.$slots, "description")
            ]),
            _: 3
          }, 8, ["description", "use-slot", "aria"]),
          N(l, {
            feedback: e.props.feedback,
            "feedback-type": e.props.feedbackType,
            "use-slot": e.hasSlot("feedback")
          }, {
            default: z(() => [
              A(e.$slots, "feedback")
            ]),
            _: 3
          }, 8, ["feedback", "feedback-type", "use-slot"])
        ], 2)) : j("", !0)
      ], 2)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Qa = /* @__PURE__ */ Y(Qr, [["render", xr]]), _r = {
  "border-radius": "var(--border-radius)",
  "border-width": "var(--border-width)",
  "border-color": "var(--border-color)",
  "border-color--disabled": "var(--border-color--disabled)",
  "text-color": "var(--text-color)",
  "text-color--hover": "var(--text-color--hover)",
  "text-color--focus": "var(--text-color--focus)",
  "text-color--disabled": "var(--text-color--disabled)",
  "placeholder-color": "var(--placeholder-color)",
  "placeholder-color--hover": "var(--placeholder-color--hover)",
  "placeholder-color--focus": "var(--placeholder-color--focus)",
  "placeholder-color--disabled": "var(--placeholder-color--disabled)",
  "background-color": "var(--background-color)",
  "background-color--hover": "var(--background-color--hover)",
  "background-color--focus": "var(--background-color--focus)",
  "background-color--disabled": "var(--background-color--disabled)",
  "padding-x": "calc(var(--spacing) * 0.75)",
  "padding-y": "calc(var(--spacing) * 0.4375)",
  "font-size": "var(--text-md)",
  "line-height": "var(--line-height)",
  "padding-x-sm": "calc(var(--spacing) * 0.5)",
  "padding-y-sm": "calc(var(--spacing) * 0.28125)",
  "font-size-sm": "var(--text-sm)",
  "line-height-sm": "var(--line-height-sm)",
  "padding-x-lg": "var(--spacing)",
  "padding-y-lg": "calc(var(--spacing) * 0.59375)",
  "font-size-lg": "var(--text-lg)",
  "line-height-lg": "var(--line-height-lg)"
}, en = {
  ...Z,
  ...mt,
  ...ye,
  ...fe,
  ...ve,
  ...Pe,
  options: {
    type: Array
  }
}, tn = q({
  name: h.ESelect,
  props: en,
  emits: ["input", "update:modelValue"],
  components: {
    EIcon: rt,
    EFormControl: Ue,
    EFormControlLabel: Ye,
    EFormControlHint: Dt,
    EFormControlDescription: We,
    EFormControlFeedback: qe
  },
  inheritAttrs: !1,
  setup(e, { emit: t }) {
    const o = ie(
      h.ESelect,
      e
    ), {
      theming: { registerComponentStyle: r }
    } = X();
    r(o.name, _r);
    const { blockClass: n } = Fe(o), { feedbackClass: a, highlightClass: i, ariaDescribedby: s, ariaLabelledby: l } = He(o), { sizeClass: d } = pe(o), { variantClass: c } = Ee(o), u = (v) => {
      const p = v.target;
      let m = 0;
      for (const w of Object.values(p.options))
        w.disabled && m++;
      const b = p.options.selectedIndex - m, g = o.props.value.options[b].value;
      t("input", v), t("update:modelValue", g);
    };
    return {
      ...o,
      ...V(o),
      blockClass: n,
      feedbackClass: a,
      highlightClass: i,
      sizeClass: d,
      variantClass: c,
      ariaDescribedby: s,
      ariaLabelledby: l,
      onInput: u
    };
  }
}), on = ["id", "invalid", "value", "aria-labelledby", "aria-describedby"], rn = ["textContent"], nn = ["value", "textContent"];
function an(e, t, o, r, n, a) {
  const i = I("EFormControlLabel"), s = I("EFormControlDescription"), l = I("EIcon"), d = I("EFormControlFeedback"), c = I("EFormControlHint"), u = I("EFormControl");
  return $(), U(u, W({
    field: "",
    class: [
      e.css.base(),
      e.blockClass,
      e.feedbackClass,
      e.highlightClass,
      e.sizeClass,
      e.variantClass
    ]
  }, {
    ...e.bindAttrs({
      exclude: ["blur", "change", "focus", "focusin", "focusout"]
    })
  }), {
    default: z(() => [
      N(i, {
        for: e.id,
        aria: e.ariaLabelledby,
        label: e.props.label,
        "use-slot": e.hasSlot("label")
      }, {
        default: z(() => [
          A(e.$slots, "label", { id: e.id })
        ]),
        _: 3
      }, 8, ["for", "aria", "label", "use-slot"]),
      N(s, {
        description: e.props.description,
        "use-slot": e.hasSlot("description"),
        aria: e.ariaDescribedby
      }, {
        default: z(() => [
          A(e.$slots, "description")
        ]),
        _: 3
      }, 8, ["description", "use-slot", "aria"]),
      F("div", {
        class: C(e.css.element("inner"))
      }, [
        F("div", {
          class: C(e.css.element("element"))
        }, [
          F("select", W({
            id: e.id,
            invalid: e.props.feedback && e.props.feedbackType === "error",
            value: e.modelValue || e.props.value,
            "aria-labelledby": e.props.label ? e.ariaLabelledby : void 0,
            "aria-describedby": e.props.description || e.props.hint ? e.ariaDescribedby : void 0,
            onInput: t[0] || (t[0] = (...v) => e.onInput && e.onInput(...v))
          }, {
            ...e.bindProps({
              include: ["autofocus", "disabled", "name"]
            }),
            ...e.bindAttrs({
              include: ["blur", "change", "focus", "focusin", "focusout"]
            })
          }), [
            e.props.placeholder ? ($(), P("option", {
              key: 0,
              selected: !0,
              disabled: "",
              value: "_",
              textContent: ae(e.props.placeholder)
            }, null, 8, rn)) : j("", !0),
            ($(!0), P(io, null, Do(e.props.options || [], ({ value: v, label: p }, m) => ($(), P("option", {
              key: m,
              value: v || "",
              textContent: ae(p)
            }, null, 8, nn))), 128))
          ], 16, on),
          N(l, {
            icon: e.options.icon,
            class: C(e.css.element("icon"))
          }, null, 8, ["icon", "class"])
        ], 2)
      ], 2),
      N(d, {
        feedback: e.props.feedback,
        "feedback-type": e.props.feedbackType,
        "use-slot": e.hasSlot("feedback")
      }, {
        default: z(() => [
          A(e.$slots, "feedback")
        ]),
        _: 3
      }, 8, ["feedback", "feedback-type", "use-slot"]),
      N(c, {
        hint: e.props.hint,
        "use-slot": e.hasSlot("hint"),
        aria: e.props.description ? void 0 : e.ariaDescribedby
      }, {
        default: z(() => [
          A(e.$slots, "hint")
        ]),
        _: 3
      }, 8, ["hint", "use-slot", "aria"])
    ]),
    _: 3
  }, 16, ["class"]);
}
const Za = /* @__PURE__ */ Y(tn, [["render", an]]), sn = {
  size: "1.5rem",
  "size-sm": "1.25rem",
  "size-lg": "1.75rem",
  "border-radius": "calc(var(--border-radius) * 16)",
  "focus-shadow-size": "var(--focus-shadow-size)",
  "border-width": "var(--border-width)",
  "border-color": "var(--border-color)",
  "background-color": "var(--background-color)",
  "background-color--hover": "var(--background-color--hover)",
  "background-color--focus": "var(--background-color--focus)",
  "background-color--disabled": "var(--background-color--disabled)"
}, ln = {
  ...Z,
  ...he,
  ...ye,
  ...fe,
  ...Pe,
  ...ve,
  checked: {
    type: Boolean,
    default: void 0
  }
}, cn = q({
  name: h.ESwitch,
  props: ln,
  emits: ["input", "update:modelValue"],
  components: {
    EFormControl: Ue,
    EFormControlLabel: Ye,
    EFormControlDescription: We,
    EFormControlFeedback: qe,
    EIcon: rt
  },
  inheritAttrs: !1,
  setup(e, { emit: t }) {
    const o = ie(
      h.ESwitch,
      e
    ), {
      theming: { registerComponentStyle: r }
    } = X();
    r(o.name, sn);
    const { blockClass: n } = Fe(o), {
      ariaDescribedby: a,
      ariaLabelledby: i,
      feedbackClass: s,
      highlightClass: l,
      hasLabels: d
    } = He(o), { sizeClass: c } = pe(o), { variantClass: u } = Ee(o), v = (p) => {
      t("input", p), t("update:modelValue", p.target.checked);
    };
    return {
      ...o,
      ...V(o),
      blockClass: n,
      feedbackClass: s,
      highlightClass: l,
      sizeClass: c,
      variantClass: u,
      ariaDescribedby: a,
      ariaLabelledby: i,
      hasLabels: d,
      onInput: v
    };
  }
}), dn = ["id", "checked", "aria-labelledby", "aria-describedby"];
function un(e, t, o, r, n, a) {
  const i = I("EIcon"), s = I("EFormControlLabel"), l = I("EFormControlDescription"), d = I("EFormControlFeedback"), c = I("EFormControl");
  return $(), U(c, W({
    class: [
      e.css.base(),
      e.blockClass,
      e.feedbackClass,
      e.highlightClass,
      e.sizeClass,
      e.variantClass
    ]
  }, {
    ...e.bindAttrs({
      exclude: ["blur", "change", "focus", "focusin", "focusout"]
    })
  }), {
    default: z(() => [
      F("div", {
        class: C(e.css.element("inner"))
      }, [
        F("div", null, [
          F("input", W({
            id: e.id,
            type: "checkbox",
            checked: e.modelValue || e.props.checked,
            "aria-labelledby": e.props.label ? e.ariaLabelledby : void 0,
            "aria-describedby": e.props.description ? e.ariaDescribedby : void 0,
            onInput: t[0] || (t[0] = (...u) => e.onInput && e.onInput(...u))
          }, {
            ...e.bindProps({
              include: ["autofocus", "disabled", "name", "value"]
            }),
            ...e.bindAttrs({
              include: ["blur", "change", "focus", "focusin", "focusout"]
            })
          }), null, 16, dn),
          F("div", {
            class: C(e.css.element("box"))
          }, [
            F("div", {
              class: C(e.css.element("inner-box"))
            }, [
              N(i, {
                icon: e.options.checkedIcon,
                class: C(e.css.element("icon"))
              }, null, 8, ["icon", "class"]),
              N(i, {
                icon: e.options.uncheckedIcon,
                class: C(e.css.element("icon"))
              }, null, 8, ["icon", "class"])
            ], 2)
          ], 2),
          N(s, {
            for: e.id,
            label: e.props.label,
            "use-slot": e.hasSlot("label"),
            aria: e.ariaLabelledby
          }, {
            default: z(() => [
              A(e.$slots, "label", { id: e.id })
            ]),
            _: 3
          }, 8, ["for", "label", "use-slot", "aria"])
        ]),
        e.hasLabels ? ($(), P("div", {
          key: 0,
          class: C(e.css.element("context"))
        }, [
          N(l, {
            description: e.props.description,
            "use-slot": e.hasSlot("description"),
            aria: e.ariaDescribedby
          }, {
            default: z(() => [
              A(e.$slots, "description")
            ]),
            _: 3
          }, 8, ["description", "use-slot", "aria"]),
          N(d, {
            feedback: e.props.feedback,
            "feedback-type": e.props.feedbackType,
            "use-slot": e.hasSlot("feedback")
          }, {
            default: z(() => [
              A(e.$slots, "feedback")
            ]),
            _: 3
          }, 8, ["feedback", "feedback-type", "use-slot"])
        ], 2)) : j("", !0)
      ], 2)
    ]),
    _: 3
  }, 16, ["class"]);
}
const xa = /* @__PURE__ */ Y(cn, [["render", un]]), pn = {
  "border-radius": "var(--border-radius)",
  "border-width": "var(--border-width)",
  "border-color": "var(--border-color)",
  "border-color--disabled": "var(--border-color--disabled)",
  "text-color": "var(--text-color)",
  "text-color--hover": "var(--text-color--hover)",
  "text-color--focus": "var(--text-color--focus)",
  "text-color--disabled": "var(--text-color--disabled)",
  "placeholder-color": "var(--placeholder-color)",
  "placeholder-color--hover": "var(--placeholder-color--hover)",
  "placeholder-color--focus": "var(--placeholder-color--focus)",
  "placeholder-color--disabled": "var(--placeholder-color--disabled)",
  "background-color": "var(--background-color)",
  "background-color--hover": "var(--background-color--hover)",
  "background-color--focus": "var(--background-color--focus)",
  "background-color--disabled": "var(--background-color--disabled)",
  "padding-x": "calc(var(--spacing) * 0.75)",
  "padding-y": "calc(var(--spacing) * 0.4375)",
  "font-size": "var(--text-md)",
  "line-height": "var(--line-height)",
  "padding-x-sm": "calc(var(--spacing) * 0.5)",
  "padding-y-sm": "calc(var(--spacing) * 0.28125)",
  "font-size-sm": "var(--text-sm)",
  "line-height-sm": "var(--line-height-sm)",
  "padding-x-lg": "var(--spacing)",
  "padding-y-lg": "calc(var(--spacing) * 0.59375)",
  "font-size-lg": "var(--text-lg)",
  "line-height-lg": "var(--line-height-lg)"
}, fn = {
  ...Z,
  ...mt,
  ...ye,
  ...fe,
  ...ve,
  ...Pe,
  rows: {
    type: Number
  },
  cols: {
    type: Number
  },
  resize: {
    type: String,
    default: "both",
    required: !1
  }
}, vn = q({
  name: h.ETextarea,
  props: fn,
  emits: ["update:modelValue", "input"],
  components: {
    EFormControl: Ue,
    EFormControlLabel: Ye,
    EFormControlHint: Dt,
    EFormControlDescription: We,
    EFormControlFeedback: qe
  },
  inheritAttrs: !1,
  setup(e, { emit: t }) {
    const o = ie(
      h.ETextarea,
      e
    ), {
      theming: { registerComponentStyle: r }
    } = X();
    r(o.name, pn);
    const { blockClass: n } = Fe(o), { feedbackClass: a, ariaLabelledby: i, ariaDescribedby: s, highlightClass: l } = He(o), { sizeClass: d } = pe(o), { variantClass: c } = Ee(o), u = (v) => {
      t("input", v), t("update:modelValue", v.target.value);
    };
    return {
      ...o,
      ...V(o),
      blockClass: n,
      feedbackClass: a,
      highlightClass: l,
      sizeClass: d,
      variantClass: c,
      ariaLabelledby: i,
      ariaDescribedby: s,
      onInput: u
    };
  }
}), mn = ["id", "invalid", "value", "placeholder", "aria-labelledby", "aria-describedby"];
function bn(e, t, o, r, n, a) {
  const i = I("EFormControlLabel"), s = I("EFormControlDescription"), l = I("EFormControlFeedback"), d = I("EFormControlHint"), c = I("EFormControl");
  return $(), U(c, W({
    field: "",
    class: [
      e.css.base(),
      e.blockClass,
      e.feedbackClass,
      e.highlightClass,
      e.sizeClass,
      e.variantClass
    ]
  }, {
    ...e.bindAttrs({
      exclude: ["blur", "change", "focus", "focusin", "focusout"]
    })
  }), {
    default: z(() => [
      N(i, {
        for: e.id,
        label: e.props.label,
        "use-slot": e.hasSlot("label"),
        aria: e.ariaLabelledby
      }, {
        default: z(() => [
          A(e.$slots, "label", { id: e.id })
        ]),
        _: 3
      }, 8, ["for", "label", "use-slot", "aria"]),
      N(s, {
        description: e.props.description,
        "use-slot": e.hasSlot("description"),
        aria: e.ariaDescribedby
      }, {
        default: z(() => [
          A(e.$slots, "description")
        ]),
        _: 3
      }, 8, ["description", "use-slot", "aria"]),
      F("div", {
        class: C(e.css.element("inner"))
      }, [
        F("textarea", W({
          id: e.id,
          invalid: e.props.feedback && e.props.feedbackType === "error",
          value: e.modelValue || e.props.value,
          placeholder: e.first(e.props.placeholder, e.props.label),
          "aria-labelledby": e.props.label ? e.ariaLabelledby : void 0,
          "aria-describedby": e.props.description || e.props.hint ? e.ariaDescribedby : void 0,
          style: `resize: ${e.props.resize}`,
          onInput: t[0] || (t[0] = (...u) => e.onInput && e.onInput(...u))
        }, {
          ...e.bindProps({
            include: [
              "autofocus",
              "autocomplete",
              "disabled",
              "name",
              "readonly",
              "rows",
              "cols"
            ]
          }),
          ...e.bindAttrs({
            include: ["blur", "change", "focus", "focusin", "focusout"]
          })
        }), null, 16, mn)
      ], 2),
      N(l, {
        feedback: e.props.feedback,
        "feedback-type": e.props.feedbackType,
        "use-slot": e.hasSlot("feedback")
      }, {
        default: z(() => [
          A(e.$slots, "feedback")
        ]),
        _: 3
      }, 8, ["feedback", "feedback-type", "use-slot"]),
      N(d, {
        hint: e.props.hint,
        "use-slot": e.hasSlot("hint"),
        aria: e.props.description ? void 0 : e.ariaDescribedby
      }, {
        default: z(() => [
          A(e.$slots, "hint")
        ]),
        _: 3
      }, 8, ["hint", "use-slot", "aria"])
    ]),
    _: 3
  }, 16, ["class"]);
}
const _a = /* @__PURE__ */ Y(vn, [["render", bn]]), hn = {
  theme: {
    type: Object
  },
  global: {
    type: Boolean,
    default: void 0
  },
  destroyDelay: {
    type: Number
  }
}, gn = q({
  name: "EThemeProvider",
  props: hn,
  setup(e, t) {
    const { uuid: o, render: r, destroy: n, components: a } = X(), i = e.global ? "global" : o(), s = () => {
      r(i);
    };
    return At(s), Io(s), et(() => [a], s, { deep: !0 }), lo(() => setTimeout(() => n(i), e.destroyDelay)), { id: i };
  }
}), yn = ["id", "global"];
function En(e, t, o, r, n, a) {
  return $(), P("div", {
    id: e.global ? void 0 : e.id,
    global: e.global ? "1" : void 0
  }, [
    A(e.$slots, "default")
  ], 8, yn);
}
const kn = /* @__PURE__ */ Y(gn, [["render", En]]);
var G = "top", _ = "bottom", ee = "right", K = "left", bt = "auto", nt = [G, _, ee, K], ze = "start", tt = "end", $n = "clippingParents", fo = "viewport", Ke = "popper", Cn = "reference", Qt = /* @__PURE__ */ nt.reduce(function(e, t) {
  return e.concat([t + "-" + ze, t + "-" + tt]);
}, []), vo = /* @__PURE__ */ [].concat(nt, [bt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ze, t + "-" + tt]);
}, []), wn = "beforeRead", Sn = "read", Tn = "afterRead", On = "beforeMain", An = "main", Ln = "afterMain", Dn = "beforeWrite", In = "write", Fn = "afterWrite", St = [wn, Sn, Tn, On, An, Ln, Dn, In, Fn];
function de(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function te(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ie(e) {
  var t = te(e).Element;
  return e instanceof t || e instanceof Element;
}
function Q(e) {
  var t = te(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function It(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = te(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Pn(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, n = t.attributes[o] || {}, a = t.elements[o];
    !Q(a) || !de(a) || (Object.assign(a.style, r), Object.keys(n).forEach(function(i) {
      var s = n[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Rn(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var n = t.elements[r], a = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), s = i.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !Q(n) || !de(n) || (Object.assign(n.style, s), Object.keys(a).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
const Bn = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Pn,
  effect: Rn,
  requires: ["computeStyles"]
};
function ne(e) {
  return e.split("-")[0];
}
var De = Math.max, vt = Math.min, Me = Math.round;
function Tt() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function mo() {
  return !/^((?!chrome|android).)*safari/i.test(Tt());
}
function je(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), n = 1, a = 1;
  t && Q(e) && (n = e.offsetWidth > 0 && Me(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Me(r.height) / e.offsetHeight || 1);
  var i = Ie(e) ? te(e) : window, s = i.visualViewport, l = !mo() && o, d = (r.left + (l && s ? s.offsetLeft : 0)) / n, c = (r.top + (l && s ? s.offsetTop : 0)) / a, u = r.width / n, v = r.height / a;
  return {
    width: u,
    height: v,
    top: c,
    right: d + u,
    bottom: c + v,
    left: d,
    x: d,
    y: c
  };
}
function Ft(e) {
  var t = je(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function bo(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && It(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function se(e) {
  return te(e).getComputedStyle(e);
}
function zn(e) {
  return ["table", "td", "th"].indexOf(de(e)) >= 0;
}
function ke(e) {
  return ((Ie(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ht(e) {
  return de(e) === "html" ? e : e.assignedSlot || e.parentNode || (It(e) ? e.host : null) || ke(e);
}
function Zt(e) {
  return !Q(e) || se(e).position === "fixed" ? null : e.offsetParent;
}
function Mn(e) {
  var t = /firefox/i.test(Tt()), o = /Trident/i.test(Tt());
  if (o && Q(e)) {
    var r = se(e);
    if (r.position === "fixed")
      return null;
  }
  var n = ht(e);
  for (It(n) && (n = n.host); Q(n) && ["html", "body"].indexOf(de(n)) < 0; ) {
    var a = se(n);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function at(e) {
  for (var t = te(e), o = Zt(e); o && zn(o) && se(o).position === "static"; )
    o = Zt(o);
  return o && (de(o) === "html" || de(o) === "body" && se(o).position === "static") ? t : o || Mn(e) || t;
}
function Pt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xe(e, t, o) {
  return De(e, vt(t, o));
}
function jn(e, t, o) {
  var r = xe(e, t, o);
  return r > o ? o : r;
}
function ho() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function go(e) {
  return Object.assign({}, ho(), e);
}
function yo(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var Nn = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, go(typeof t != "number" ? t : yo(t, nt));
};
function Vn(e) {
  var t, o = e.state, r = e.name, n = e.options, a = o.elements.arrow, i = o.modifiersData.popperOffsets, s = ne(o.placement), l = Pt(s), d = [K, ee].indexOf(s) >= 0, c = d ? "height" : "width";
  if (!(!a || !i)) {
    var u = Nn(n.padding, o), v = Ft(a), p = l === "y" ? G : K, m = l === "y" ? _ : ee, b = o.rects.reference[c] + o.rects.reference[l] - i[l] - o.rects.popper[c], g = i[l] - o.rects.reference[l], w = at(a), D = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, O = b / 2 - g / 2, E = u[p], f = D - v[c] - u[m], y = D / 2 - v[c] / 2 + O, k = xe(E, y, f), T = l;
    o.modifiersData[r] = (t = {}, t[T] = k, t.centerOffset = k - y, t);
  }
}
function Hn(e) {
  var t = e.state, o = e.options, r = o.element, n = r === void 0 ? "[data-popper-arrow]" : r;
  if (n != null && !(typeof n == "string" && (n = t.elements.popper.querySelector(n), !n))) {
    if (process.env.NODE_ENV !== "production" && (Q(n) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !bo(t.elements.popper, n)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = n;
  }
}
const Un = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Vn,
  effect: Hn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ne(e) {
  return e.split("-")[1];
}
var Wn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qn(e) {
  var t = e.x, o = e.y, r = window, n = r.devicePixelRatio || 1;
  return {
    x: Me(t * n) / n || 0,
    y: Me(o * n) / n || 0
  };
}
function xt(e) {
  var t, o = e.popper, r = e.popperRect, n = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, u = e.isFixed, v = i.x, p = v === void 0 ? 0 : v, m = i.y, b = m === void 0 ? 0 : m, g = typeof c == "function" ? c({
    x: p,
    y: b
  }) : {
    x: p,
    y: b
  };
  p = g.x, b = g.y;
  var w = i.hasOwnProperty("x"), D = i.hasOwnProperty("y"), O = K, E = G, f = window;
  if (d) {
    var y = at(o), k = "clientHeight", T = "clientWidth";
    if (y === te(o) && (y = ke(o), se(y).position !== "static" && s === "absolute" && (k = "scrollHeight", T = "scrollWidth")), y = y, n === G || (n === K || n === ee) && a === tt) {
      E = _;
      var S = u && y === f && f.visualViewport ? f.visualViewport.height : y[k];
      b -= S - r.height, b *= l ? 1 : -1;
    }
    if (n === K || (n === G || n === _) && a === tt) {
      O = ee;
      var R = u && y === f && f.visualViewport ? f.visualViewport.width : y[T];
      p -= R - r.width, p *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, d && Wn), B = c === !0 ? qn({
    x: p,
    y: b
  }) : {
    x: p,
    y: b
  };
  if (p = B.x, b = B.y, l) {
    var M;
    return Object.assign({}, L, (M = {}, M[E] = D ? "0" : "", M[O] = w ? "0" : "", M.transform = (f.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + b + "px)" : "translate3d(" + p + "px, " + b + "px, 0)", M));
  }
  return Object.assign({}, L, (t = {}, t[E] = D ? b + "px" : "", t[O] = w ? p + "px" : "", t.transform = "", t));
}
function Yn(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, n = r === void 0 ? !0 : r, a = o.adaptive, i = a === void 0 ? !0 : a, s = o.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var d = se(t.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return d.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ne(t.placement),
    variation: Ne(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, xt(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, xt(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Xn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Yn,
  data: {}
};
var pt = {
  passive: !0
};
function Gn(e) {
  var t = e.state, o = e.instance, r = e.options, n = r.scroll, a = n === void 0 ? !0 : n, i = r.resize, s = i === void 0 ? !0 : i, l = te(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(c) {
    c.addEventListener("scroll", o.update, pt);
  }), s && l.addEventListener("resize", o.update, pt), function() {
    a && d.forEach(function(c) {
      c.removeEventListener("scroll", o.update, pt);
    }), s && l.removeEventListener("resize", o.update, pt);
  };
}
const Kn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Gn,
  data: {}
};
var Jn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ft(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jn[t];
  });
}
var Qn = {
  start: "end",
  end: "start"
};
function _t(e) {
  return e.replace(/start|end/g, function(t) {
    return Qn[t];
  });
}
function Rt(e) {
  var t = te(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Bt(e) {
  return je(ke(e)).left + Rt(e).scrollLeft;
}
function Zn(e, t) {
  var o = te(e), r = ke(e), n = o.visualViewport, a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (n) {
    a = n.width, i = n.height;
    var d = mo();
    (d || !d && t === "fixed") && (s = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + Bt(e),
    y: l
  };
}
function xn(e) {
  var t, o = ke(e), r = Rt(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, a = De(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), i = De(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), s = -r.scrollLeft + Bt(e), l = -r.scrollTop;
  return se(n || o).direction === "rtl" && (s += De(o.clientWidth, n ? n.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function zt(e) {
  var t = se(e), o = t.overflow, r = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + n + r);
}
function Eo(e) {
  return ["html", "body", "#document"].indexOf(de(e)) >= 0 ? e.ownerDocument.body : Q(e) && zt(e) ? e : Eo(ht(e));
}
function _e(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = Eo(e), n = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = te(r), i = n ? [a].concat(a.visualViewport || [], zt(r) ? r : []) : r, s = t.concat(i);
  return n ? s : s.concat(_e(ht(i)));
}
function Ot(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _n(e, t) {
  var o = je(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function eo(e, t, o) {
  return t === fo ? Ot(Zn(e, o)) : Ie(t) ? _n(t, o) : Ot(xn(ke(e)));
}
function ea(e) {
  var t = _e(ht(e)), o = ["absolute", "fixed"].indexOf(se(e).position) >= 0, r = o && Q(e) ? at(e) : e;
  return Ie(r) ? t.filter(function(n) {
    return Ie(n) && bo(n, r) && de(n) !== "body";
  }) : [];
}
function ta(e, t, o, r) {
  var n = t === "clippingParents" ? ea(e) : [].concat(t), a = [].concat(n, [o]), i = a[0], s = a.reduce(function(l, d) {
    var c = eo(e, d, r);
    return l.top = De(c.top, l.top), l.right = vt(c.right, l.right), l.bottom = vt(c.bottom, l.bottom), l.left = De(c.left, l.left), l;
  }, eo(e, i, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ko(e) {
  var t = e.reference, o = e.element, r = e.placement, n = r ? ne(r) : null, a = r ? Ne(r) : null, i = t.x + t.width / 2 - o.width / 2, s = t.y + t.height / 2 - o.height / 2, l;
  switch (n) {
    case G:
      l = {
        x: i,
        y: t.y - o.height
      };
      break;
    case _:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case ee:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case K:
      l = {
        x: t.x - o.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var d = n ? Pt(n) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (a) {
      case ze:
        l[d] = l[d] - (t[c] / 2 - o[c] / 2);
        break;
      case tt:
        l[d] = l[d] + (t[c] / 2 - o[c] / 2);
        break;
    }
  }
  return l;
}
function ot(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, n = r === void 0 ? e.placement : r, a = o.strategy, i = a === void 0 ? e.strategy : a, s = o.boundary, l = s === void 0 ? $n : s, d = o.rootBoundary, c = d === void 0 ? fo : d, u = o.elementContext, v = u === void 0 ? Ke : u, p = o.altBoundary, m = p === void 0 ? !1 : p, b = o.padding, g = b === void 0 ? 0 : b, w = go(typeof g != "number" ? g : yo(g, nt)), D = v === Ke ? Cn : Ke, O = e.rects.popper, E = e.elements[m ? D : v], f = ta(Ie(E) ? E : E.contextElement || ke(e.elements.popper), l, c, i), y = je(e.elements.reference), k = ko({
    reference: y,
    element: O,
    strategy: "absolute",
    placement: n
  }), T = Ot(Object.assign({}, O, k)), S = v === Ke ? T : y, R = {
    top: f.top - S.top + w.top,
    bottom: S.bottom - f.bottom + w.bottom,
    left: f.left - S.left + w.left,
    right: S.right - f.right + w.right
  }, L = e.modifiersData.offset;
  if (v === Ke && L) {
    var B = L[n];
    Object.keys(R).forEach(function(M) {
      var $e = [ee, _].indexOf(M) >= 0 ? 1 : -1, Ce = [G, _].indexOf(M) >= 0 ? "y" : "x";
      R[M] += B[Ce] * $e;
    });
  }
  return R;
}
function oa(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, n = o.boundary, a = o.rootBoundary, i = o.padding, s = o.flipVariations, l = o.allowedAutoPlacements, d = l === void 0 ? vo : l, c = Ne(r), u = c ? s ? Qt : Qt.filter(function(m) {
    return Ne(m) === c;
  }) : nt, v = u.filter(function(m) {
    return d.indexOf(m) >= 0;
  });
  v.length === 0 && (v = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var p = v.reduce(function(m, b) {
    return m[b] = ot(e, {
      placement: b,
      boundary: n,
      rootBoundary: a,
      padding: i
    })[ne(b)], m;
  }, {});
  return Object.keys(p).sort(function(m, b) {
    return p[m] - p[b];
  });
}
function ra(e) {
  if (ne(e) === bt)
    return [];
  var t = ft(e);
  return [_t(e), t, _t(t)];
}
function na(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var n = o.mainAxis, a = n === void 0 ? !0 : n, i = o.altAxis, s = i === void 0 ? !0 : i, l = o.fallbackPlacements, d = o.padding, c = o.boundary, u = o.rootBoundary, v = o.altBoundary, p = o.flipVariations, m = p === void 0 ? !0 : p, b = o.allowedAutoPlacements, g = t.options.placement, w = ne(g), D = w === g, O = l || (D || !m ? [ft(g)] : ra(g)), E = [g].concat(O).reduce(function(Re, me) {
      return Re.concat(ne(me) === bt ? oa(t, {
        placement: me,
        boundary: c,
        rootBoundary: u,
        padding: d,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : me);
    }, []), f = t.rects.reference, y = t.rects.popper, k = /* @__PURE__ */ new Map(), T = !0, S = E[0], R = 0; R < E.length; R++) {
      var L = E[R], B = ne(L), M = Ne(L) === ze, $e = [G, _].indexOf(B) >= 0, Ce = $e ? "width" : "height", J = ot(t, {
        placement: L,
        boundary: c,
        rootBoundary: u,
        altBoundary: v,
        padding: d
      }), oe = $e ? M ? ee : K : M ? _ : G;
      f[Ce] > y[Ce] && (oe = ft(oe));
      var st = ft(oe), we = [];
      if (a && we.push(J[B] <= 0), s && we.push(J[oe] <= 0, J[st] <= 0), we.every(function(Re) {
        return Re;
      })) {
        S = L, T = !1;
        break;
      }
      k.set(L, we);
    }
    if (T)
      for (var it = m ? 3 : 1, gt = function(me) {
        var Ge = E.find(function(ct) {
          var Se = k.get(ct);
          if (Se)
            return Se.slice(0, me).every(function(yt) {
              return yt;
            });
        });
        if (Ge)
          return S = Ge, "break";
      }, Xe = it; Xe > 0; Xe--) {
        var lt = gt(Xe);
        if (lt === "break")
          break;
      }
    t.placement !== S && (t.modifiersData[r]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const aa = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: na,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function to(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function oo(e) {
  return [G, ee, _, K].some(function(t) {
    return e[t] >= 0;
  });
}
function sa(e) {
  var t = e.state, o = e.name, r = t.rects.reference, n = t.rects.popper, a = t.modifiersData.preventOverflow, i = ot(t, {
    elementContext: "reference"
  }), s = ot(t, {
    altBoundary: !0
  }), l = to(i, r), d = to(s, n, a), c = oo(l), u = oo(d);
  t.modifiersData[o] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": u
  });
}
const ia = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sa
};
function la(e, t, o) {
  var r = ne(e), n = [K, G].indexOf(r) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * n, [K, ee].indexOf(r) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function ca(e) {
  var t = e.state, o = e.options, r = e.name, n = o.offset, a = n === void 0 ? [0, 0] : n, i = vo.reduce(function(c, u) {
    return c[u] = la(u, t.rects, a), c;
  }, {}), s = i[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i;
}
const da = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ca
};
function ua(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = ko({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const pa = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ua,
  data: {}
};
function fa(e) {
  return e === "x" ? "y" : "x";
}
function va(e) {
  var t = e.state, o = e.options, r = e.name, n = o.mainAxis, a = n === void 0 ? !0 : n, i = o.altAxis, s = i === void 0 ? !1 : i, l = o.boundary, d = o.rootBoundary, c = o.altBoundary, u = o.padding, v = o.tether, p = v === void 0 ? !0 : v, m = o.tetherOffset, b = m === void 0 ? 0 : m, g = ot(t, {
    boundary: l,
    rootBoundary: d,
    padding: u,
    altBoundary: c
  }), w = ne(t.placement), D = Ne(t.placement), O = !D, E = Pt(w), f = fa(E), y = t.modifiersData.popperOffsets, k = t.rects.reference, T = t.rects.popper, S = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, R = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (a) {
      var M, $e = E === "y" ? G : K, Ce = E === "y" ? _ : ee, J = E === "y" ? "height" : "width", oe = y[E], st = oe + g[$e], we = oe - g[Ce], it = p ? -T[J] / 2 : 0, gt = D === ze ? k[J] : T[J], Xe = D === ze ? -T[J] : -k[J], lt = t.elements.arrow, Re = p && lt ? Ft(lt) : {
        width: 0,
        height: 0
      }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ho(), Ge = me[$e], ct = me[Ce], Se = xe(0, k[J], Re[J]), yt = O ? k[J] / 2 - it - Se - Ge - R.mainAxis : gt - Se - Ge - R.mainAxis, $o = O ? -k[J] / 2 + it + Se + ct + R.mainAxis : Xe + Se + ct + R.mainAxis, Et = t.elements.arrow && at(t.elements.arrow), Co = Et ? E === "y" ? Et.clientTop || 0 : Et.clientLeft || 0 : 0, Mt = (M = L == null ? void 0 : L[E]) != null ? M : 0, wo = oe + yt - Mt - Co, So = oe + $o - Mt, jt = xe(p ? vt(st, wo) : st, oe, p ? De(we, So) : we);
      y[E] = jt, B[E] = jt - oe;
    }
    if (s) {
      var Nt, To = E === "x" ? G : K, Oo = E === "x" ? _ : ee, Te = y[f], dt = f === "y" ? "height" : "width", Vt = Te + g[To], Ht = Te - g[Oo], kt = [G, K].indexOf(w) !== -1, Ut = (Nt = L == null ? void 0 : L[f]) != null ? Nt : 0, Wt = kt ? Vt : Te - k[dt] - T[dt] - Ut + R.altAxis, qt = kt ? Te + k[dt] + T[dt] - Ut - R.altAxis : Ht, Yt = p && kt ? jn(Wt, Te, qt) : xe(p ? Wt : Vt, Te, p ? qt : Ht);
      y[f] = Yt, B[f] = Yt - Te;
    }
    t.modifiersData[r] = B;
  }
}
const ma = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: va,
  requiresIfExists: ["offset"]
};
function ba(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ha(e) {
  return e === te(e) || !Q(e) ? Rt(e) : ba(e);
}
function ga(e) {
  var t = e.getBoundingClientRect(), o = Me(t.width) / e.offsetWidth || 1, r = Me(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function ya(e, t, o) {
  o === void 0 && (o = !1);
  var r = Q(t), n = Q(t) && ga(t), a = ke(t), i = je(e, n, o), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((de(t) !== "body" || zt(a)) && (s = ha(t)), Q(t) ? (l = je(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Bt(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function Ea(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function n(a) {
    o.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!o.has(s)) {
        var l = t.get(s);
        l && n(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || n(a);
  }), r;
}
function ka(e) {
  var t = Ea(e);
  return St.reduce(function(o, r) {
    return o.concat(t.filter(function(n) {
      return n.phase === r;
    }));
  }, []);
}
function $a(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function be(e) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    o[r - 1] = arguments[r];
  return [].concat(o).reduce(function(n, a) {
    return n.replace(/%s/, a);
  }, e);
}
var Le = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ca = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', ro = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function wa(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), ro).filter(function(o, r, n) {
      return n.indexOf(o) === r;
    }).forEach(function(o) {
      switch (o) {
        case "name":
          typeof t.name != "string" && console.error(be(Le, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(be(Le, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          St.indexOf(t.phase) < 0 && console.error(be(Le, t.name, '"phase"', "either " + St.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(be(Le, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(be(Le, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(be(Le, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(be(Le, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + ro.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + o + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(n) {
          return n.name === r;
        }) == null && console.error(be(Ca, String(t.name), r, r));
      });
    });
  });
}
function Sa(e, t) {
  var o = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var n = t(r);
    if (!o.has(n))
      return o.add(n), !0;
  });
}
function Ta(e) {
  var t = e.reduce(function(o, r) {
    var n = o[r.name];
    return o[r.name] = n ? Object.assign({}, n, r, {
      options: Object.assign({}, n.options, r.options),
      data: Object.assign({}, n.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var no = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Oa = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ao = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function so() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Aa(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, n = t.defaultOptions, a = n === void 0 ? ao : n;
  return function(s, l, d) {
    d === void 0 && (d = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ao, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, u = [], v = !1, p = {
      state: c,
      setOptions: function(w) {
        var D = typeof w == "function" ? w(c.options) : w;
        b(), c.options = Object.assign({}, a, c.options, D), c.scrollParents = {
          reference: Ie(s) ? _e(s) : s.contextElement ? _e(s.contextElement) : [],
          popper: _e(l)
        };
        var O = ka(Ta([].concat(r, c.options.modifiers)));
        if (c.orderedModifiers = O.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Sa([].concat(O, c.options.modifiers), function(L) {
            var B = L.name;
            return B;
          });
          if (wa(E), ne(c.options.placement) === bt) {
            var f = c.orderedModifiers.find(function(L) {
              var B = L.name;
              return B === "flip";
            });
            f || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = se(l), k = y.marginTop, T = y.marginRight, S = y.marginBottom, R = y.marginLeft;
          [k, T, S, R].some(function(L) {
            return parseFloat(L);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), p.update();
      },
      forceUpdate: function() {
        if (!v) {
          var w = c.elements, D = w.reference, O = w.popper;
          if (!so(D, O)) {
            process.env.NODE_ENV !== "production" && console.error(no);
            return;
          }
          c.rects = {
            reference: ya(D, at(O), c.options.strategy === "fixed"),
            popper: Ft(O)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(L) {
            return c.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var E = 0, f = 0; f < c.orderedModifiers.length; f++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Oa);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, f = -1;
              continue;
            }
            var y = c.orderedModifiers[f], k = y.fn, T = y.options, S = T === void 0 ? {} : T, R = y.name;
            typeof k == "function" && (c = k({
              state: c,
              options: S,
              name: R,
              instance: p
            }) || c);
          }
        }
      },
      update: $a(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!so(s, l))
      return process.env.NODE_ENV !== "production" && console.error(no), p;
    p.setOptions(d).then(function(g) {
      !v && d.onFirstUpdate && d.onFirstUpdate(g);
    });
    function m() {
      c.orderedModifiers.forEach(function(g) {
        var w = g.name, D = g.options, O = D === void 0 ? {} : D, E = g.effect;
        if (typeof E == "function") {
          var f = E({
            state: c,
            name: w,
            instance: p,
            options: O
          }), y = function() {
          };
          u.push(f || y);
        }
      });
    }
    function b() {
      u.forEach(function(g) {
        return g();
      }), u = [];
    }
    return p;
  };
}
var La = [Kn, pa, Xn, Bn, da, aa, ma, Un, ia], Da = /* @__PURE__ */ Aa({
  defaultModifiers: La
});
const Ia = {
  "max-width": "24rem",
  "arrow-size": "8px",
  "padding-x": "calc(var(--spacing) * 0.75)",
  "padding-y": "calc(var(--spacing) * 0.4375)",
  "border-radius": "var(--border-radius)",
  "font-size": "var(--text-md)",
  "text-color": "var(--text-color)",
  "background-color": "var(--background-color)"
}, Fa = {
  ...Z,
  ...ve,
  ...ye,
  placement: String,
  delay: Number,
  trigger: String,
  offset: Array,
  arrow: Object,
  disableTouch: { type: Boolean, default: void 0 },
  interactive: { type: Boolean, default: void 0 }
}, Pa = q({
  name: h.ETooltip,
  props: {
    ...Fa,
    element: { type: Object, default: null },
    binding: {
      type: Object,
      default: void 0
    }
  },
  setup(e, t) {
    var E;
    const o = ie(
      h.ETooltip,
      e
    ), {
      theming: { registerComponentStyle: r }
    } = X();
    r(o.name, Ia);
    const { variantClass: n } = Ee(o), { uuid: a } = X(), i = H(!1), s = H(!1), l = {
      trigger: { id: a(), element: e.element },
      content: { id: a(), element: null }
    };
    let d, c;
    const u = !!((E = e.binding) != null && E.value), v = x(
      () => {
        let f = {
          ...ge(h.ETooltip).props
        };
        if (u)
          f = { ...f, ...e.binding.value };
        else {
          const { delay: y, trigger: k, placement: T, variant: S } = e;
          S && (f.variant = S), y && (f.delay = y), k && (f.trigger = k), T && (f.placement = T);
        }
        return f;
      }
    );
    At(() => {
      Qe(() => {
        var f;
        window.matchMedia("(pointer: coarse)").matches && (s.value = !0), l.trigger.element || (l.trigger.element = document.getElementById(l.trigger.id)), l.content.element = document.getElementById(l.content.id), d = Da(l.trigger.element, l.content.element, {
          placement: v.value.placement,
          modifiers: [
            {
              name: "arrow",
              options: {
                padding: (f = v.value.arrow) == null ? void 0 : f.padding
              }
            },
            {
              name: "offset",
              options: {
                offset: v.value.offset
              }
            }
          ]
        }), p();
      });
    }), lo(() => {
      c && c.onUnmounted();
    });
    const p = () => {
      !l.trigger.element || (v.value.trigger === "click" ? c = w() : s.value ? e.disableTouch || (c = g()) : c = D());
    }, m = () => {
      i.value = !0, Qe(() => {
        d.forceUpdate();
      });
    }, b = () => {
      i.value = !1;
    };
    et(
      () => [v.value],
      async () => {
        Qe(() => {
          i.value && d.forceUpdate();
        });
      }
    );
    const g = () => {
      const f = l.trigger.element, y = l.content.element;
      if (!f || !y)
        return;
      let k = null, T = !1;
      const S = () => {
        f.style.userSelect = "none", k = setTimeout(() => {
          m(), e.interactive && (T = !0);
        }, 750);
      }, R = () => {
        if (T) {
          O(y);
          return;
        }
        f.style.userSelect = "", k && clearTimeout(k), b();
      };
      return f.addEventListener("touchstart", S), f.addEventListener("touchend", R), { onUnmounted: () => {
        f.removeEventListener("touchstart", S), f.removeEventListener("touchend", R);
      } };
    }, w = () => {
      const f = l.trigger.element, y = l.content.element;
      if (!f || !y)
        return;
      let k = null;
      const T = () => {
        if (e.interactive ? O(y) : O(f), i.value)
          return b();
        k = setTimeout(() => {
          m();
        }, v.value.delay);
      }, S = () => {
        k && clearTimeout(k), b();
      };
      return f.addEventListener("click", T), e.interactive || f.addEventListener("blur", S), { onUnmounted: () => {
        f.removeEventListener("focus", T), f.removeEventListener("blur", S);
      } };
    }, D = () => {
      const f = l.trigger.element, y = l.content.element;
      if (!f || !y)
        return;
      let k = null, T = null;
      const S = () => {
        T && clearTimeout(T), k = setTimeout(() => {
          m();
        }, v.value.delay);
      }, R = () => {
        k && clearTimeout(k), e.interactive ? T = setTimeout(() => b(), 333) : b();
      }, L = () => {
        T && clearTimeout(T);
      }, B = () => {
        k && clearTimeout(k), b();
      };
      return f.addEventListener("mouseenter", S), f.addEventListener("mouseleave", R), e.interactive && (y.addEventListener("mouseenter", L), y.addEventListener("mouseleave", B)), { onUnmounted: () => {
        f.removeEventListener("mouseenter", S), f.removeEventListener("mouseleave", R), e.interactive && (y.removeEventListener("mouseenter", L), y.removeEventListener("mouseenter", B));
      } };
    }, O = (f) => {
      const y = (S) => !!S && !!(S.offsetWidth || S.offsetHeight || S.getClientRects().length), k = (S) => {
        !f.contains(S.target) && y(f) && (b(), T());
      }, T = () => {
        document.removeEventListener("click", k);
      };
      document.addEventListener("click", k);
    };
    return {
      ...o,
      ...V(o),
      variantClass: n,
      options: v,
      el: l,
      TELEPORT_TARGET: `#${ue.Tooltip}`,
      Teleport: Lt,
      active: i,
      isDirective: u,
      isTouch: s,
      hasText: x(() => v.value.text !== null && typeof v.value.text < "u")
    };
  }
}), Ra = ["id"], Ba = ["id"], za = ["id"], Ma = ["textContent"];
function ja(e, t, o, r, n, a) {
  return $(), P(io, null, [
    !e.isDirective && e.hasSlot("trigger") ? ($(), P("div", W({
      key: 0,
      id: e.el.trigger.id
    }, e.$attrs, {
      class: [e.css.element("trigger")]
    }), [
      A(e.$slots, "trigger")
    ], 16, Ra)) : j("", !0),
    ($(), U(Lt, { to: e.TELEPORT_TARGET }, [
      F("div", {
        id: e.id,
        class: C([e.css.base(), e.css.modifier(e.options.variant)])
      }, [
        N(Fo, {
          name: "lb-tooltip-animation",
          appear: ""
        }, {
          default: z(() => [
            Po(F("div", {
              id: e.el.content.id,
              class: C(e.css.element("inner"))
            }, [
              F("div", {
                class: C(e.css.element("content"))
              }, [
                F("div", {
                  class: C(e.css.element("arrow")),
                  "data-popper-arrow": ""
                }, null, 2),
                e.isDirective ? ($(), P("span", {
                  key: 0,
                  textContent: ae(e.options.text)
                }, null, 8, Ma)) : A(e.$slots, "content", { key: 1 })
              ], 2)
            ], 10, za), [
              [Ro, e.active && !e.disabled && (e.hasText || !e.isDirective)]
            ])
          ]),
          _: 3
        })
      ], 10, Ba)
    ], 8, ["to"]))
  ], 64);
}
const Na = /* @__PURE__ */ Y(Pa, [["render", ja]]), Va = () => ({
  name: "open-modal",
  directive: {
    mounted(e, t, o) {
      e.addEventListener("click", () => {
        let r, n;
        if (typeof t.value == "object")
          r = t.value.name, n = t.value.data;
        else if (t.value)
          r = t.value;
        else
          return console.warn(
            "Modal directive missing binding value:",
            e
          );
        const { modal: a } = Ve();
        a.open(r, n);
      });
    }
  }
}), Ha = () => ({
  name: "close-modal",
  directive: {
    mounted(e, t, o) {
      e.addEventListener("click", () => {
        const { modal: r } = Ve();
        r.close(t.value);
      });
    }
  }
}), Ct = "data-e-tooltip", Ua = () => {
  const e = {}, t = (o, r) => {
    if (typeof r.value > "u")
      return console.warn("Tooltip directive missing binding value:", o);
    const a = {
      ...ge(h.ETooltip).options,
      text: void 0,
      variant: re.SECONDARY
    };
    if (typeof r.value != "object" ? a.text = r.value.toString() : Object.assign(a, r.value), r.arg) {
      const i = r.arg;
      i.includes(":") ? (a.trigger = i.split(":")[0], a.placement = Wa(i.split(":")[1])) : a.trigger = i;
    }
    return a;
  };
  return {
    name: "tooltip",
    directive: {
      updated(o, r, n) {
        const a = t(o, r);
        a && (e[o.getAttribute(Ct)].value = a);
      },
      mounted(o, r, n) {
        const a = t(o, r);
        if (!a)
          return;
        const { uuid: i } = Ve(), s = i();
        e[s] = H(a), o.setAttribute(Ct, s);
        const l = document.createElement("div");
        o.appendChild(l), l.style.display = "inline", Bo(Na, {
          id: s,
          element: o,
          binding: e[s]
        }).mount(l);
      },
      unmounted(o, r, n) {
        const a = document.getElementById(
          o.getAttribute(Ct)
        );
        a && a.remove();
      }
    }
  };
}, Wa = (e) => {
  for (const t of ["auto", "top", "bottom", "right", "left"])
    e.startsWith(t) && !e.endsWith(t) && (e = e.replace(t, `${t}-`));
  return e;
}, qa = "0.0.28";
function es(e = {}) {
  const t = e.components || [], o = [];
  X(e, !0);
  function r(i, s, l) {
    i.component(s) || i.component(s, l);
  }
  function n(i, s) {
    i.component(s.name) || i.directive(s.name, s.directive);
  }
  function a(i) {
    o.includes(i) || (o.push(i), r(i, h.EThemeProvider, kn), n(i, Ua()), n(i, Va()), n(i, Ha()), t.forEach((s) => {
      const { name: l } = s;
      r(i, l, s);
    }));
  }
  return {
    version: qa,
    install: a
  };
}
export {
  h as Component,
  Xa as EButton,
  Ga as ECheckbox,
  rt as EIcon,
  Ka as EInput,
  ar as ELoading,
  Ja as EModal,
  Qa as ERadio,
  Za as ESelect,
  xa as ESwitch,
  _a as ETextarea,
  kn as EThemeProvider,
  Na as ETooltip,
  le as Size,
  re as Variant,
  es as createElements,
  Ve as useElements,
  qa as version
};
