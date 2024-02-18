import { ref as B, watch as Q, computed as F, useAttrs as Pt, useSlots as Zt, getCurrentInstance as eo, Comment as to, defineComponent as D, createVNode as m, mergeProps as R, onMounted as Je, onUnmounted as at, nextTick as Ct, onBeforeUnmount as oo, Teleport as qt, onUpdated as ro, unref as ce, shallowRef as no, getCurrentScope as ao, onScopeDispose as io, shallowReadonly as le, Fragment as lo, Transition as so, createApp as co } from "vue";
var E = /* @__PURE__ */ ((e) => (e.EButton = "EButton", e.ECheckbox = "ECheckbox", e.EIcon = "EIcon", e.EInput = "EInput", e.ELoading = "ELoading", e.EModal = "EModal", e.ERadio = "ERadio", e.ESelect = "ESelect", e.ESwitch = "ESwitch", e.ETextarea = "ETextarea", e.ETooltip = "ETooltip", e.EFormInput = "EFormInput", e.EFormInputField = "EFormInputField", e.EFormLabel = "EFormLabel", e.EFormDescription = "EFormDescription", e.EFormHint = "EFormHint", e.EFormFeedback = "EFormFeedback", e.EThemeProvider = "EThemeProvider", e))(E || {});
const M = {
  props: {
    block: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {}
}, uo = {
  prefix: "",
  theme: "default",
  components: {
    [E.EButton]: {
      name: E.EButton,
      props: {
        variant: "primary",
        tag: "button"
      }
    },
    [E.ECheckbox]: {
      name: E.ECheckbox,
      props: {
        variant: "primary",
        iconChecked: "check",
        iconIndeterminate: "dash"
      }
    },
    [E.EFormDescription]: {
      name: E.EFormDescription,
      props: {}
    },
    [E.EFormFeedback]: {
      name: E.EFormFeedback,
      props: {}
    },
    [E.EFormHint]: {
      name: E.EFormHint,
      props: {}
    },
    [E.EFormInput]: {
      name: E.EFormInput,
      props: {}
    },
    [E.EFormInputField]: {
      name: E.EFormInputField,
      props: {}
    },
    [E.EFormLabel]: {
      name: E.EFormLabel,
      props: {}
    },
    [E.EIcon]: {
      name: E.EIcon,
      props: {
        prefix: "",
        tag: "span",
        type: "class",
        width: "1em",
        height: "1em"
      }
    },
    [E.EInput]: {
      name: E.EInput,
      props: {
        variant: "primary"
      }
    },
    [E.ELoading]: {
      name: E.ELoading,
      props: {
        role: "progressbar"
      }
    },
    [E.EModal]: {
      name: E.EModal,
      props: {
        size: "md",
        transitionDuration: 100,
        closeable: ["escape", "outside", "route"],
        closeButton: {
          title: "Close Modal",
          ariaLabel: "Close Modal",
          icon: "x-lg"
        }
      }
    },
    [E.ERadio]: {
      name: E.ERadio,
      props: {
        variant: "primary"
      }
    },
    [E.ESelect]: {
      name: E.ESelect,
      props: {
        variant: "primary",
        options: [],
        icon: "chevron-expand"
      }
    },
    [E.ESwitch]: {
      name: E.ESwitch,
      props: {
        variant: "primary"
      }
    },
    [E.ETextarea]: {
      name: E.ETextarea,
      props: {
        resize: "vertical",
        variant: "primary"
      }
    },
    [E.EThemeProvider]: {
      name: E.EThemeProvider,
      props: {}
    },
    [E.ETooltip]: {
      name: E.ETooltip,
      props: {
        flip: !0,
        triggers: ["hover", "focus"],
        placement: "top",
        delay: 0,
        offset: 12,
        padding: 8,
        arrow: {
          size: 8
        }
      }
    }
  }
}, ue = "ETeleportTarget";
function fo() {
  if (typeof document > "u")
    return;
  let e = document.getElementById(ue);
  e || (e = document.createElement("div"), e.id = ue, document.body.appendChild(e));
}
function Vt(e, t) {
  const o = (l) => Lt(t[l]) && e[l] && Lt(e[l]), r = Object.getOwnPropertyNames(t).map((l) => ({
    [l]: o(l) ? Vt(e[l], t[l]) : t[l]
  })).reduce((l, n) => ({ ...l, ...n }), {});
  return {
    ...e,
    ...r
  };
}
function Lt(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function po(e) {
  const t = B([]), o = e.components.EModal.props.transitionDuration || 100, r = (i, u, c = !1) => {
    var p;
    t.value.length && !c && l(t.value[t.value.length - 1].id, !0);
    const g = t.value.findIndex((y) => y.id === i);
    g === -1 ? (t.value.push({ id: i, data: u, idle: !1 }), (p = document.getElementById(ue)) == null || p.setAttribute("data-modal-active", "true"), t.value.length === 1 && (document.body.style.paddingRight = a() + "px"), document.body.style.overflowY = "hidden") : t.value[g].idle = !1;
  }, l = (i, u = !1) => {
    var g;
    !i && t.value.length && (i = t.value[t.value.length - 1].id);
    const c = t.value.findIndex((p) => p.id === i);
    if (c !== -1)
      if (u)
        t.value[c].idle = !0;
      else if (t.value = t.value.filter((p) => p.id !== i), t.value.length) {
        const p = t.value[c - 1];
        p && p.idle && r(p.id, p.data, !0);
      } else
        (g = document.getElementById(ue)) == null || g.removeAttribute("data-modal-active"), setTimeout(() => {
          t.value.length === 0 && (document.body.style.paddingRight = "0", document.body.style.overflowY = "");
        }, o);
  }, n = () => {
    t.value = t.value.slice(-1), l();
  }, a = () => window.innerWidth - document.body.clientWidth;
  return {
    close: l,
    closeAll: n,
    stack: t,
    open: r
  };
}
function Ye() {
  return typeof window < "u";
}
function jt() {
  return !Ye();
}
const Te = "ElementsTheme";
function vo(e) {
  const t = e.prefix, o = t, r = (f, s) => {
    const v = {};
    for (let [h, d] of Object.entries(f)) {
      let b = "--";
      t && (b += `${t}`), s && (b += `${s}-`), b += h, t && typeof d == "string" && d.includes("var(--") && (d = d.replaceAll("var(--", `var(--${t}`)), v[b] = d;
    }
    return v;
  }, l = B({}), n = B(e.theme || "default"), a = B([]), i = B([
    { id: Te, content: "" }
  ]), u = (f) => {
    if (!a.value.find(({ name: s }) => s === f))
      throw new Error(`Theme '${f}' has not been registered.`);
    n.value = f, p();
  }, c = ({ name: f, variables: s }) => {
    const v = a.value.findIndex(({ name: h }) => h === f);
    v !== -1 ? (f === e.theme && (s = { ...Rt, ...s }), a.value[v] = { name: f, variables: r(s) }) : a.value.push({ name: f, variables: r(s) });
  };
  Ye() && Q(
    () => n.value,
    () => {
      const f = document.getElementsByTagName("html")[0];
      f && f.setAttribute("data-theme", n.value);
    }
  );
  const g = (f, s) => {
    l.value[f] || (l.value[f] = r(s, f), p());
  }, p = (f = Te, s) => {
    const v = s ? a.value.find(({ name: k }) => k === s) : a.value.find(({ name: k }) => k === n.value), h = a.value.find(({ name: k }) => k === e.theme);
    let d = (h == null ? void 0 : h.variables) || {};
    for (const k of Object.values(l.value))
      d = { ...d, ...k };
    d = { ...d, ...v == null ? void 0 : v.variables };
    const b = () => {
      const k = f === Te ? ":root" : `#${f}`, T = Object.entries(d).map(([w, x]) => `${w}:${x}`).join(";");
      return `${k}{${T}}`;
    }, S = i.value.findIndex((k) => k.id === f);
    S !== -1 ? i.value[S].content = b() : i.value.push({ id: f, content: b() });
  }, y = (f = Te) => {
    if (Ye()) {
      const s = document.getElementById(`${o}${f}`);
      s && s.remove();
    }
  };
  return Ye() && Q(
    () => i.value,
    () => {
      for (const { id: f, content: s } of i.value) {
        let v = document.getElementById(`${o}__${f}`);
        const h = document.getElementsByTagName("head")[0];
        v || (v = document.createElement("style"), v.id = `${o}__${f}`, h.appendChild(v)), v.innerHTML = s;
      }
    },
    { deep: !0 }
  ), c({ name: e.theme, variables: Rt }), {
    theme: n,
    providers: i,
    components: l,
    destroy: y,
    render: p,
    registerComponentStyle: g,
    registerTheme: c,
    setTheme: u
  };
}
const se = 1, Rt = {
  spacing: `${se}rem`,
  "spacing-xs": `${se * 0.5}rem`,
  "spacing-sm": `${se * 0.75}rem`,
  "spacing-md": `${se}rem`,
  "spacing-lg": `${se * 1.25}rem`,
  "spacing-xl": `${se * 1.5}rem`,
  "font-weight-light": 300,
  "font-weight-normal": 400,
  "font-weight-medium": 500,
  "font-weight-semibold": 600,
  "font-weight-bold": 700,
  "font-size": "1rem",
  "font-size-sm": "0.875rem",
  "font-size-md": "var(--font-size)",
  "font-size-lg": "1.125rem",
  "line-height": 1.65,
  "box-shadow": "0 0 1px 1px rgba(0, 0, 0, 0.05)",
  "focus-shadow-size": "4px",
  "transition-time": ".1s",
  "transition-type": "linear",
  "border-radius": "0.25rem",
  "border-width": "1px",
  "border-color": "#dadada",
  "border-color--hover": "var(--border-color)",
  "border-color--focus": "var(--border-color)",
  "border-color--disabled": "var(--border-color)",
  "placeholder-color": "gray",
  "placeholder-color--hover": "var(--placeholder-color)",
  "placeholder-color--focus": "var(--placeholder-color)",
  "placeholder-color--disabled": "var(--placeholder-color)",
  "text-color": "#2c3e50",
  "text-color--light": "#6c7782",
  "text-color--hover": "var(--text-color)",
  "text-color--focus": "var(--text-color)",
  "text-color--disabled": "var(--text-color--light)",
  "contrast-color": "#fff",
  "contrast-color--hover": "var(--contrast-color)",
  "contrast-color--focus": "var(--contrast-color)",
  "contrast-color--disabled": "var(--contrast-color)",
  "background-color": "#fff",
  "background-color--hover": "#f2f2f2",
  "background-color--focus": "var(--background-color)",
  "background-color--active": "var(--background-color)",
  "background-color--disabled": "#f4f4f4",
  "body-color": "var(--background-color)",
  "primary-color": "#2c4bff",
  "primary-color--hover": "#2665c4",
  "primary-color--focus": "var(--primary-color)",
  "primary-color--active": "var(--primary-color)",
  "primary-color--disabled": "#70aaff",
  "primary-background-color": "var(--primary-color)",
  "primary-background-color--hover": "var(--primary-color--hover)",
  "primary-background-color--focus": "var(--primary-color--focus)",
  "primary-background-color--active": "var(--primary-color--active)",
  "primary-background-color--disabled": "var(--primary-color--disabled)",
  "primary-border-color": "var(--primary-color--hover)",
  "primary-border-color--hover": "#2057a8",
  "primary-border-color--focus": "var(--primary-border-color)",
  "primary-border-color--active": "var(--primary-border-color)",
  "primary-border-color--disabled": "#91bdff",
  "primary-box-shadow-color": "#2b73df35",
  "primary-contrast-color": "var(--contrast-color)",
  "primary-contrast-color--disabled": "var(--primary-contrast-color)",
  // The feedback color is used for input error messages.
  "feedback-color": "#b22454",
  "feedback-color--hover": "#991f48",
  "feedback-color--focus": "var(--feedback-color)",
  "feedback-color--active": "var(--feedback-color)",
  "feedback-color--disabled": "#70aaff",
  "feedback-background-color": "var(--feedback-color)",
  "feedback-background-color--hover": "var(--feedback-color--hover)",
  "feedback-background-color--focus": "var(--feedback-color--focus)",
  "feedback-background-color--active": "var(--feedback-color--active)",
  "feedback-background-color--disabled": "var(--feedback-color--disabled)",
  "feedback-border-color": "var(--feedback-color--hover)",
  "feedback-border-color--hover": "#801a3d",
  "feedback-border-color--focus": "var(--feedback-border-color)",
  "feedback-border-color--active": "var(--feedback-border-color)",
  "feedback-border-color--disabled": "#adc9f3",
  "feedback-box-shadow-color": "#df2b2b36",
  "feedback-contrast-color": "var(--contrast-color)",
  "feedback-contrast-color--disabled": "var(--feedback-contrast-color)"
};
let tt;
function mo(e) {
  const t = B(Vt(uo, (e == null ? void 0 : e.config) || {})), o = po(t.value), r = vo(t.value);
  return fo(), {
    config: t,
    uuid: () => "L" + (Math.random().toString(36) + "00000000000000000").slice(2, 9),
    modal: o,
    theming: r
  };
}
function V(e, t = !1) {
  return (!tt || t) && (tt = mo(e)), tt;
}
function me() {
  const { modal: e, uuid: t, theming: o, config: r } = V();
  return {
    config: r,
    uuid: t,
    modal: {
      open: e.open,
      close: e.close,
      closeAll: e.closeAll
    },
    theming: {
      theme: o.theme,
      setTheme: o.setTheme,
      registerTheme: o.registerTheme,
      providers: o.providers
    }
  };
}
function z(e, t) {
  const { uuid: o } = me(), r = (n, a) => Object.assign(
    {},
    n,
    ...Object.entries(a).map(([i, u]) => u === void 0 ? {} : { [i]: u })
  ), l = bo(e.name);
  return {
    id: F(
      () => "id" in t && t.id ? t.id : o()
    ),
    name: l.name,
    props: F(() => r(l.props, t)),
    emits: e.emits,
    style: r(e.style, l.style || {}),
    slots: {}
    // Slots have no actual implementation.
  };
}
function bo(e) {
  const { config: t } = me(), o = t.value.components[e];
  if (!o)
    throw new Error(`Component '${e}' does not exist in configuration.`);
  return o;
}
const L = {
  props: {
    id: {
      type: String,
      default: void 0
    }
  },
  emits: {}
};
function _(e) {
  const t = Pt(), o = Zt(), { config: r } = V(), l = eo(), n = (p) => {
    l.render = p;
  }, a = (...p) => p.find((y) => y !== void 0), i = (p, y = "", f, s = !0) => {
    const v = (d) => `${s ? r.value.prefix : ""}${f || (e == null ? void 0 : e.name)}${y}${d}`, h = {};
    return typeof p == "string" ? v(p) : (Object.entries(p).forEach(
      ([d, b]) => h[v(d)] = b || !1
    ), h);
  }, u = (p, y = !0) => {
    const f = o[p];
    if (f) {
      const s = f({});
      if (y && s.length)
        return !0;
      for (const v of s)
        if (v.type !== to)
          return !0;
    }
    return !1;
  }, c = {
    /**
     * Returns true if the component has been provided a slot with name, even if
     * it is empty or only contains a comment.
     * This is useful if the slot content has been "v-if'ed" away, but you still
     * want to know if the slot has been provided.
     *
     * @param name The name of the slot to search for.
     */
    exists: (p) => u(p),
    /**
     * Returns true if the component has been provided a slot with name and has
     * content other than a comment.
     *
     * @param name The name of the slot to search for.
     */
    active: (p) => u(p, !1),
    /**
     * Returns the content of the slot with name.
     * Partial because we cannot force the user to provide a slot.
     */
    node: o
  }, g = {
    /**
     *
     * @param suffix
     * @param name
     */
    element: (p, y, f = !0) => i(p, "-", y, f),
    /**
     *
     * @param suffix
     * @param name
     */
    modifier: (p, y, f = !0) => i(p, "--", y, f),
    /**
     *
     * @param suffix
     * @param name
     */
    base: i("", "", void 0, !1)
  };
  return {
    attrs: t,
    slot: c,
    css: g,
    first: a,
    render: n
  };
}
const q = {
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {}
}, Ot = {
  props: {
    activeClass: {
      type: String,
      default: void 0
    },
    exactActiveClass: {
      type: String,
      default: void 0
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
      type: Object,
      default: void 0
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
      type: String,
      default: void 0
    },
    target: {
      type: String,
      default: void 0
    },
    rel: {
      type: String,
      default: void 0
    }
  },
  emits: {}
}, $ = {
  props: {
    variant: {
      type: String
    }
  },
  emits: {}
}, Ce = {
  name: E.EIcon,
  props: {
    ...L.props,
    className: {
      type: String,
      default: void 0
    },
    prefix: {
      type: String,
      _preset: !0
    },
    type: {
      type: String,
      _preset: !0
    },
    tag: {
      type: String,
      _preset: !0,
      _verbose: !1
    },
    icon: {
      type: String,
      required: !0
    },
    sprite: {
      type: String,
      default: void 0
    },
    width: {
      type: String,
      _preset: !0
    },
    height: {
      type: String,
      _preset: !0
    }
  },
  emits: {
    ...L.emits
  },
  style: {}
}, X = /* @__PURE__ */ D({
  name: Ce.name,
  props: Ce.props,
  emits: Ce.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z(Ce, e), {
      css: o,
      attrs: r,
      render: l
    } = _(t), {
      theming: {
        registerComponentStyle: n
      }
    } = V();
    n(t.name, t.style);
    const a = t.props;
    l(() => a.value.type === "inline" ? m(a.value.tag, R({
      id: t.id.value,
      class: [o.base, a.value.className],
      "aria-hidden": !0
    }, r), {
      default: () => [a.value.prefix, a.value.icon]
    }) : a.value.type === "class" ? m(a.value.tag, R({
      id: t.id.value,
      class: [o.base, a.value.className, `${a.value.prefix}${a.value.icon}`],
      "aria-hidden": !0
    }, r), null) : m("svg", R({
      id: t.id.value,
      fill: "currentColor",
      class: [o.base, a.value.className],
      "aria-hidden": !0,
      width: a.value.width,
      height: a.value.height
    }, r), [a.value.type === "svg" && a.value.sprite ? m("use", {
      href: `${a.value.sprite}#${a.value.prefix}${a.value.icon}`
    }, null) : m("image", {
      href: `${a.value.prefix}${a.value.icon}`
    }, null)]));
  }
});
function go() {
  return {
    sr: "ESr"
  };
}
const Le = {
  name: E.ELoading,
  props: {
    ...L.props,
    role: {
      type: String,
      _preset: !0
    },
    label: {
      type: String,
      default: void 0
    }
  },
  emits: {
    ...L.emits
  },
  style: {
    "border-width": "calc(var(--border-width) * 2)",
    "animation-time": "calc(var(--transition-time) * 8)"
  }
}, Bt = /* @__PURE__ */ D({
  name: Le.name,
  props: Le.props,
  emits: Le.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = Pt(), o = z(Le, e), {
      css: r,
      render: l
    } = _(o), {
      sr: n
    } = go(), {
      theming: {
        registerComponentStyle: a
      }
    } = V();
    a(o.name, o.style);
    const i = o.props;
    l(() => m("div", R({
      id: o.id.value,
      class: r.base,
      "aria-busy": !0
    }, t), [i.value.label && m("span", {
      class: n
    }, [i.value.label])]));
  }
}), Re = {
  name: E.EButton,
  props: {
    ...L.props,
    ...M.props,
    ...q.props,
    ...Ot.props,
    ...$.props,
    variant: {
      ...$.props.variant,
      _preset: !0
    },
    tag: {
      type: String,
      _preset: !0,
      _verbose: !1
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
      type: Boolean
    }
  },
  emits: {
    ...M.emits,
    ...L.emits,
    ...q.emits,
    ...Ot.emits,
    ...$.emits
  },
  style: {
    "padding-x": "calc(var(--spacing) * 0.75)",
    "padding-y": "calc(var(--spacing) * 0.25)",
    "border-width": "var(--border-width)",
    "border-radius": "var(--border-radius)",
    "font-size": "var(--font-size-md)",
    "font-weight": "var(--font-weight-normal)",
    "line-height": "var(--line-height)"
  }
}, sr = /* @__PURE__ */ D({
  name: Re.name,
  props: Re.props,
  emits: Re.emits,
  components: {
    EIcon: X,
    ELoading: Bt
  },
  inheritAttrs: !1,
  setup(e) {
    const t = z(Re, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), {
      theming: {
        registerComponentStyle: a
      }
    } = V(), i = t.props;
    a(t.name, t.style), n(() => m(i.value.tag, R({
      id: t.id.value,
      type: i.value.type,
      to: i.value.to,
      replace: i.value.replace,
      href: i.value.href,
      target: i.value.target,
      rel: i.value.rel,
      disabled: i.value.disabled ? "true" : void 0,
      "active-class": i.value.activeClass,
      "exact-active-class": i.value.exactActiveClass,
      exact: i.value.exact,
      "pre-fetch": i.value.prefetch,
      "no-prefetch": i.value.noPrefetch,
      class: [o.base, o.modifier({
        block: i.value.block,
        [i.value.variant]: !0,
        loading: i.value.loading,
        "icon-left": !!i.value.iconLeft || !!i.value.icon,
        "icon-right": !!i.value.iconRight
      })]
    }, r), {
      default: () => {
        var u, c;
        return [i.value.loading && m(Bt, null, null), m("div", {
          class: o.element("content")
        }, [i.value.icon && m(X, {
          icon: i.value.icon
        }, null), i.value.iconLeft && m(X, {
          icon: i.value.iconLeft
        }, null), (c = (u = l.node).default) == null ? void 0 : c.call(u, {}), i.value.iconRight && m(X, {
          icon: i.value.iconRight
        }, null)])];
      }
    }));
  }
});
function be(e) {
  const { uuid: t } = me(), { slot: o } = _(e), r = F(() => {
    const { feedback: c, description: g } = e.props.value;
    return !!c || !!g || o.exists("feedback") || o.exists("description");
  }), l = F(() => {
    const { required: c, ariaRequired: g } = e.props.value;
    return c || g;
  }), n = F(() => {
    const { ariaInvalid: c, feedback: g } = e.props.value;
    if (c)
      return c;
    if (g)
      return !0;
    if (o.exists("feedback"))
      return !0;
  }), a = F(() => {
    const { ariaLabelledby: c, label: g } = e.props.value;
    if (c)
      return c;
    if (g || o.exists("label"))
      return t();
  }), i = F(() => {
    const { ariaDescribedby: c, description: g } = e.props.value;
    if (c)
      return c;
    if (g || o.exists("description"))
      return t();
  }), u = F(() => {
    const { ariaErrormessage: c, feedback: g } = e.props.value;
    if (c)
      return c;
    if (g || o.exists("feedback"))
      return t();
  });
  return {
    hasContext: r,
    ariaLabelledby: a,
    ariaDescribedby: i,
    ariaErrormessage: u,
    ariaRequired: l,
    ariaInvalid: n
  };
}
const te = {
  props: {
    label: {
      type: String,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    name: {
      type: String,
      default: void 0
    },
    required: {
      type: Boolean,
      default: void 0
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: void 0
    },
    ariaRequired: {
      type: Boolean,
      default: void 0
    },
    ariaLabelledby: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    },
    ariaErrormessage: {
      type: String,
      default: void 0
    },
    feedback: {
      type: String,
      default: void 0
    },
    highlight: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "update:modelValue": (e) => !0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    input: (e) => !0
  }
}, fe = {
  props: {
    ...te.props,
    hint: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: void 0
    }
  },
  emits: {
    ...te.emits,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "update:modelValue": (e) => !0
  }
}, Oe = {
  name: E.EFormDescription,
  props: {
    ...L.props,
    text: {
      type: String
    },
    useSlot: {
      type: Boolean
    },
    aria: {
      type: String
    }
  },
  emits: {},
  style: {}
}, ge = /* @__PURE__ */ D({
  name: Oe.name,
  props: Oe.props,
  emits: Oe.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z(Oe, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), a = t.props;
    n(() => {
      var i, u;
      return a.value.text ? m("span", R({
        id: a.value.aria,
        class: o.base
      }, r), [a.value.text]) : m("div", R({
        id: a.value.aria,
        class: o.base
      }, r), [(u = (i = l.node).default) == null ? void 0 : u.call(i, {})]);
    });
  }
}), Be = {
  name: E.EFormFeedback,
  props: {
    ...L.props,
    text: {
      type: String,
      default: void 0
    },
    aria: {
      type: String,
      default: void 0
    }
  },
  emits: {},
  style: {}
}, he = /* @__PURE__ */ D({
  name: Be.name,
  props: Be.props,
  emits: Be.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z(Be, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), a = t.props;
    n(() => {
      var i, u;
      return a.value.text ? m("span", R({
        id: a.value.aria,
        class: o.base
      }, r), [a.value.text]) : m("div", R({
        id: a.value.aria,
        class: o.base
      }, r), [(u = (i = l.node).default) == null ? void 0 : u.call(i, {})]);
    });
  }
}), $e = {
  name: E.EFormInput,
  props: {
    ...L.props,
    feedback: {
      type: Boolean,
      default: void 0
    },
    highlight: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {},
  style: {}
}, we = /* @__PURE__ */ D({
  name: $e.name,
  props: $e.props,
  emits: $e.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z($e, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), a = t.props;
    n(() => {
      var i, u;
      return m("div", R({
        class: [o.base, {
          [o.modifier("highlight")]: a.value.highlight === !1 ? !1 : a.value.highlight || a.value.feedback,
          [o.modifier("feedback")]: a.value.feedback
        }]
      }, r), [(u = (i = l.node).default) == null ? void 0 : u.call(i, {})]);
    });
  }
}), Ie = {
  name: E.EFormLabel,
  props: {
    ...L.props,
    /**
     * The label text to display.
     */
    text: {
      type: String,
      default: void 0
    },
    for: {
      type: String,
      default: void 0
    },
    useSlot: {
      type: Boolean,
      default: void 0
    },
    aria: {
      type: String,
      default: void 0
    },
    required: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {},
  style: {}
}, ye = /* @__PURE__ */ D({
  name: Ie.name,
  props: Ie.props,
  emits: Ie.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z(Ie, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), a = t.props;
    n(() => {
      var i, u;
      return a.value.text ? m("label", R({
        id: a.value.aria,
        for: a.value.for,
        class: [o.base, o.modifier({
          required: a.value.required
        })]
      }, r), [a.value.text]) : m("div", R({
        id: a.value.aria,
        class: [o.base, o.modifier({
          required: a.value.required
        })]
      }, r), [(u = (i = l.node).default) == null ? void 0 : u.call(i, {})]);
    });
  }
}), Fe = {
  name: E.ECheckbox,
  props: {
    ...M.props,
    ...L.props,
    ...q.props,
    ...te.props,
    ...$.props,
    variant: {
      ...$.props.variant,
      _preset: !0
    },
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    iconIndeterminate: {
      type: String,
      _preset: !0
    },
    iconChecked: {
      type: String,
      _preset: !0
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    value: {
      type: [String, Boolean, Number, Object],
      default: void 0
    },
    modelValue: {
      type: [String, Boolean, Number, Object],
      default: void 0
    }
  },
  emits: {
    ...M.emits,
    ...L.emits,
    ...q.emits,
    ...te.emits,
    ...$.emits
  },
  style: {
    size: "1.5rem",
    "line-height": "var(--line-height)",
    "focus-shadow-size": "var(--focus-shadow-size)",
    "border-radius": "var(--border-radius)",
    "border-width": "var(--border-width)",
    "border-color": "var(--border-color)",
    "border-color--disabled": "var(--border-color--disabled)",
    "background-color": "var(--background-color)",
    "background-color--disabled": "var(--background-color--disabled)"
  }
}, cr = /* @__PURE__ */ D({
  name: Fe.name,
  props: Fe.props,
  emits: Fe.emits,
  inheritAttrs: !1,
  setup(e, {
    emit: t
  }) {
    const o = z(Fe, e), {
      css: r,
      attrs: l,
      slot: n,
      first: a,
      render: i
    } = _(o), {
      ariaDescribedby: u,
      ariaErrormessage: c,
      ariaInvalid: g,
      ariaLabelledby: p,
      ariaRequired: y,
      hasContext: f
    } = be(o), {
      theming: {
        registerComponentStyle: s
      }
    } = V();
    s(o.name, o.style);
    const v = o.props, h = (d) => {
      t("input", d), t("update:modelValue", d.target.checked);
    };
    i(() => m(we, {
      feedback: !!v.value.feedback || n.active("feedback"),
      highlight: v.value.highlight,
      class: [r.base, r.modifier({
        block: v.value.block,
        [v.value.variant]: !0
      })]
    }, {
      default: () => [m("div", {
        class: r.element("inner")
      }, [m("div", null, [m("input", R({
        id: o.id.value,
        type: "checkbox",
        checked: a(v.value.modelValue, v.value.checked),
        "aria-labelledby": p.value,
        "aria-describedby": u.value,
        disabled: v.value.disabled,
        value: v.value.value,
        name: v.value.name,
        autofocus: v.value.autofocus,
        required: v.value.required,
        "aria-required": y.value,
        "aria-invalid": g.value,
        "aria-errormessage": c.value,
        onInput: h
      }, l), null), m("div", {
        class: r.element("target")
      }, [v.value.indeterminate ? m(X, {
        icon: v.value.iconIndeterminate,
        class: r.element("icon")
      }, null) : m(X, {
        icon: v.value.iconChecked,
        class: r.element("icon")
      }, null)]), (n.active("label") || v.value.label) && m(ye, {
        for: o.id.value,
        text: v.value.label,
        aria: p.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).label) == null ? void 0 : b.call(d, {
            id: o.id.value
          })];
        }
      })]), f.value && m("div", {
        class: r.element("context")
      }, [(n.active("description") || v.value.description) && m(ge, {
        text: v.value.description,
        aria: u.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).description) == null ? void 0 : b.call(d, {})];
        }
      }), (n.active("feedback") || v.value.feedback) && m(he, {
        text: v.value.feedback,
        aria: c.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).feedback) == null ? void 0 : b.call(d, {})];
        }
      })])])]
    }));
  }
}), _e = {
  name: E.EFormHint,
  props: {
    ...L.props,
    text: {
      type: String,
      default: void 0
    },
    aria: {
      type: String,
      default: void 0
    }
  },
  emits: {},
  style: {}
}, it = /* @__PURE__ */ D({
  name: _e.name,
  props: _e.props,
  emits: _e.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z(_e, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), a = t.props;
    n(() => {
      var i, u;
      return a.value.text ? m("span", R({
        id: a.value.aria,
        class: o.base
      }, r), [a.value.text]) : m("div", R({
        id: a.value.aria,
        class: o.base
      }, r), [(u = (i = l.node).default) == null ? void 0 : u.call(i, {})]);
    });
  }
}), De = {
  name: E.EFormInputField,
  props: {
    ...L.props,
    feedback: {
      type: Boolean,
      default: void 0
    },
    highlight: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {},
  style: {}
}, lt = /* @__PURE__ */ D({
  name: De.name,
  props: De.props,
  emits: De.emits,
  inheritAttrs: !1,
  components: {
    EFormInput: we
  },
  setup(e) {
    const t = z(De, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), a = t.props;
    n(() => m(we, R({
      feedback: a.value.feedback,
      highlight: a.value.highlight,
      class: o.base
    }, r), {
      default: () => {
        var i, u;
        return [(u = (i = l.node).default) == null ? void 0 : u.call(i, {})];
      }
    }));
  }
}), ze = {
  name: E.EInput,
  props: {
    ...M.props,
    ...L.props,
    ...q.props,
    ...fe.props,
    ...$.props,
    variant: {
      ...$.props.variant,
      _preset: !0
    },
    type: {
      type: String,
      default: void 0
    },
    min: {
      type: [String, Number],
      default: void 0
    },
    max: {
      type: [String, Number],
      default: void 0
    },
    step: {
      type: [String, Number],
      default: void 0
    },
    value: {
      type: [String, Boolean, Number, Object],
      default: void 0
    },
    modelValue: {
      type: [String, Boolean, Number, Object],
      default: void 0
    },
    placeholder: {
      type: String,
      default: void 0
    },
    readonly: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {
    ...M.emits,
    ...L.emits,
    ...q.emits,
    ...fe.emits,
    ...$.emits
  },
  style: {
    "padding-x": "calc(var(--spacing) * 0.75)",
    "padding-y": "calc(var(--spacing) * 0.25)",
    "font-size": "var(--font-size-md)",
    "line-height": "var(--line-height)",
    "focus-shadow-size": "var(--focus-shadow-size)",
    "border-radius": "var(--border-radius)",
    "border-width": "var(--border-width)",
    "border-color": "var(--border-color)",
    "border-color--disabled": "var(--border-color--disabled)",
    "text-color": "var(--text-color)",
    "text-color--disabled": "var(--text-color--disabled)",
    "placeholder-color": "var(--placeholder-color)",
    "placeholder-color--disabled": "var(--placeholder-color--disabled)",
    "background-color": "var(--background-color)",
    "background-color--disabled": "var(--background-color--disabled)"
  }
}, dr = /* @__PURE__ */ D({
  name: ze.name,
  props: ze.props,
  emits: ze.emits,
  inheritAttrs: !1,
  setup(e, {
    emit: t
  }) {
    const o = z(ze, e), {
      css: r,
      attrs: l,
      slot: n,
      first: a,
      render: i
    } = _(o), {
      ariaDescribedby: u,
      ariaErrormessage: c,
      ariaInvalid: g,
      ariaLabelledby: p,
      ariaRequired: y
    } = be(o), {
      theming: {
        registerComponentStyle: f
      }
    } = V();
    f(o.name, o.style);
    const s = o.props, v = (h) => {
      t("input", h), t("update:modelValue", h.target.value);
    };
    i(() => m(lt, {
      feedback: !!s.value.feedback,
      highlight: s.value.highlight,
      class: [r.base, r.modifier({
        block: s.value.block,
        [s.value.variant]: !0
      })]
    }, {
      default: () => [(n.active("label") || s.value.label) && m(ye, {
        for: o.id.value,
        text: s.value.label,
        aria: p.value,
        required: s.value.required
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).label) == null ? void 0 : d.call(h, {
            id: o.id.value
          })];
        }
      }), (n.active("description") || s.value.description) && m(ge, {
        text: s.value.description,
        aria: u.value
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).description) == null ? void 0 : d.call(h, {})];
        }
      }), m("div", {
        class: r.element("inner")
      }, [m("input", R({
        id: o.id.value,
        class: r.element("target"),
        type: s.value.type,
        placeholder: s.value.placeholder,
        disabled: s.value.disabled,
        value: a(s.value.modelValue, s.value.value),
        name: s.value.name,
        autofocus: s.value.autofocus,
        required: s.value.required,
        readonly: s.value.readonly,
        "aria-labelledby": p.value,
        "aria-describedby": u.value,
        "aria-required": y.value,
        "aria-invalid": g.value,
        "aria-errormessage": c.value,
        "aria-readonly": s.value.readonly,
        onInput: v
      }, l), null)]), (n.active("feedback") || s.value.feedback) && m(he, {
        text: s.value.feedback,
        aria: c.value
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).feedback) == null ? void 0 : d.call(h, {})];
        }
      }), (n.active("hint") || s.value.hint) && m(it, {
        text: s.value.hint
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).hint) == null ? void 0 : d.call(h, {
            id: o.id.value
          })];
        }
      })]
    }));
  }
});
function ho() {
  let e, t, o;
  const r = (a, i) => {
    const u = document.getElementById(a);
    if (!u || o)
      return;
    i && i.focus && (o = i);
    const c = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    e = u.querySelectorAll(
      c
    )[0];
    const g = u.querySelectorAll(c);
    t = g[g.length - 1], document.addEventListener("keydown", l);
    const p = u.querySelector("[data-focus-target]") || u;
    p && p.focus && (p.setAttribute("tabindex", "-1"), p.focus && p.focus());
  }, l = (a) => {
    (a.key === "Tab" || a.keyCode === 9) && (a.shiftKey ? document.activeElement === e && (t.focus(), a.preventDefault()) : document.activeElement === t && (e.focus(), a.preventDefault()));
  };
  return { attach: r, release: () => {
    o && o.focus(), o = void 0, document.removeEventListener("keydown", l);
  } };
}
function yo(e) {
  if (jt())
    return;
  let t = null, o = location.pathname;
  Je(() => {
    t = new MutationObserver(() => {
      location.pathname !== o && (o = location.pathname, e());
    });
    const r = { subtree: !0, childList: !0 };
    t.observe(document, r);
  }), at(() => t == null ? void 0 : t.disconnect());
}
const $t = {
  props: {
    size: {
      type: String,
      _preset: !0
    }
  },
  emits: {}
}, Pe = {
  name: E.EModal,
  props: {
    ...L.props,
    ...$t.props,
    size: {
      ...$t.props.size,
      _preset: !0
    },
    title: {
      type: String,
      default: void 0
    },
    description: {
      type: String,
      default: void 0
    },
    closeable: {
      type: [Array],
      default: void 0,
      _preset: !0,
      _verbose: !0
    },
    closeButton: {
      type: [Object, Boolean],
      default: void 0,
      _preset: !0,
      _verbose: !0
    },
    transitionDuration: {
      type: Number,
      _preset: !0
    },
    rejectCloseClass: {
      type: String,
      default: void 0
    },
    ariaLabelledby: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: {
    ...L.emits,
    close: () => !0,
    open: () => !0,
    "reject-close": () => !0,
    show: () => !0,
    hide: () => !0
  },
  style: {
    "border-radius": "var(--border-radius)",
    "background-color": "var(--background-color)",
    "body-color": "var(--body-color)",
    size: "34rem",
    "size-sm": "28rem",
    "size-lg": "40rem",
    "z-index": 10,
    "line-height": "var(--line-height)",
    "reject-close": "reject-close",
    "transition-time": "var(--transition-time)",
    "title-font-size": "calc(var(--font-size) * 1.5)",
    "description-text-color": "var(--text-color--light)",
    "description-font-size": "var(--font-size-sm)"
  }
}, qe = ue, ur = /* @__PURE__ */ D({
  name: Pe.name,
  props: Pe.props,
  emits: Pe.emits,
  inheritAttrs: !1,
  setup(e, {
    emit: t
  }) {
    const o = z(Pe, e), {
      css: r,
      attrs: l,
      slot: n,
      render: a,
      first: i
    } = _(o), u = ho(), c = o.props, {
      uuid: g,
      modal: p,
      theming: {
        registerComponentStyle: y
      }
    } = V();
    y(o.name, o.style);
    const f = c.value.id || g(), s = {
      body: g(),
      header: g(),
      footer: g()
    }, v = B(!1), h = B(!1), d = B(!1), b = B(null);
    let S = null, k = null, T = null, w = null;
    const x = {
      outside: null,
      keydown: null,
      resize: null
    }, O = () => {
      if (jt())
        return;
      const A = "outside", C = document.getElementById(qe);
      w = document.getElementById(`${qe}-${A}`), !w && C && (w = document.createElement("div"), w.id = `${qe}-${A}`, w.className = r.element(A), C.appendChild(w));
    };
    Je(() => {
      O(), v.value = !0;
    }), Q(() => [c], () => {
      Ct(() => K());
    }), Q(() => [p.stack.value], () => {
      const A = p.stack.value.find((C) => C.id === f);
      A ? A.idle ? U(!0) : h.value ? A.idle || I(A.data, !0) : I(A.data) : h.value && U();
    }, {
      deep: !0
    });
    const I = async (A, C = !1) => {
      h.value = !0, C === !1 ? (t("open"), b.value = A) : t("show"), x.outside = new AbortController(), x.resize = new AbortController(), x.keydown = new AbortController(), window.addEventListener("resize", H, {
        signal: x.resize.signal
      }), window.addEventListener("keydown", (J) => Y(f, J), {
        signal: x.keydown.signal
      }), w && w.addEventListener("click", () => j(f), {
        signal: x.outside.signal
      }), Ct(() => {
        k = document.getElementById(s.body), S = document.getElementById(s.header), T = document.getElementById(s.footer), h.value && (d.value = !0, u.attach(f, document.activeElement || void 0), K());
      });
    };
    oo(() => p.close(f)), yo(() => {
      c.value.closeable.includes("route") && p.close(f);
    });
    const U = (A = !1) => {
      var C, J, xe;
      (C = x.resize) == null || C.abort(), (J = x.keydown) == null || J.abort(), (xe = x.outside) == null || xe.abort(), d.value = !1, setTimeout(() => {
        !A && !d.value ? (h.value = !1, t("close"), u.release()) : A && t("hide");
      }, c.value.transitionDuration);
    }, Y = (A, C) => {
      C.key === "Escape" && (c.value.closeable.includes("escape") ? p.close(A) : P());
    }, j = (A) => {
      c.value.closeable.includes("outside") ? p.close(A) : P();
    }, K = () => {
      k && (k.style.maxHeight = `calc(100vh - ${((S == null ? void 0 : S.clientHeight) || 0) + ((T == null ? void 0 : T.clientHeight) || 0)} - 3.5rem)`);
    }, P = () => {
      if (t("reject-close"), c.value.rejectCloseClass === null)
        return;
      const A = c.value.rejectCloseClass || `${o.name}--reject-close`, C = document.getElementById(f);
      !C || C != null && C.classList.contains(A) || (C.classList.add(A), setTimeout(() => {
        C.classList.remove(A);
      }, 500));
    }, H = K;
    a(() => v.value ? m(qt, {
      to: `#${qe}`
    }, {
      default: () => {
        var A, C, J, xe, pt, vt, mt, bt, gt, ht, yt, xt, wt, Et, kt, St, At, Tt;
        return [h.value && m("div", R({
          id: o.id.value,
          class: [r.base, r.modifier({
            [c.value.size]: !0,
            visible: d.value
          })],
          role: "dialog",
          "aria-labelledby": i(c.value.ariaLabelledby, s.header),
          "aria-describedby": i(c.value.ariaDescribedby, s.header)
        }, l), [m("div", {
          class: r.element("inner")
        }, [m("div", {
          class: r.element("content")
        }, [(c.value.title || c.value.description || n.active("title") || n.active("description")) && m("div", {
          class: r.element("header"),
          id: s.header
        }, [m("div", null, [!c.value.title && n.active("title") ? m("div", {
          class: r.element("title")
        }, [(C = (A = n.node).title) == null ? void 0 : C.call(A, {
          data: b.value,
          close: p.close
        })]) : c.value.title && m("span", {
          class: r.element("title")
        }, [c.value.title]), !c.value.description && n.active("description") ? m("div", {
          class: r.element("description")
        }, [(xe = (J = n.node).description) == null ? void 0 : xe.call(J, {
          data: b.value,
          close: p.close
        })]) : c.value.description && m("span", {
          class: r.element("description")
        }, [c.value.description])]), c.value.closeButton !== !1 && m("button", {
          title: c.value.closeButton.title,
          class: r.element("close"),
          "aria-label": c.value.closeButton.ariaLabel,
          onClick: () => p.close()
        }, [m(X, {
          icon: c.value.closeButton.icon
        }, null)])]), m("div", {
          "data-focus-target": "true"
        }, null), n.active("header-extension") && m("div", {
          class: r.element("header-extension")
        }, [(vt = (pt = n.node)["header-extension"]) == null ? void 0 : vt.call(pt, {
          data: b.value,
          close: p.close
        })]), n.active("body-raw") && m("div", {
          id: s.body,
          class: [r.element("body"), r.modifier("raw", r.element("body"), !1)]
        }, [(bt = (mt = n.node)["body-raw"]) == null ? void 0 : bt.call(mt, {
          data: b.value,
          close: p.close
        })]), n.active("body") || n.active("default") && m("div", {
          id: s.body,
          class: r.element("body")
        }, [n.active("body") ? (ht = (gt = n.node).body) == null ? void 0 : ht.call(gt, {
          data: b.value,
          close: () => p.close(o.id.value)
        }) : (xt = (yt = n.node).default) == null ? void 0 : xt.call(yt, {
          data: b.value,
          close: () => p.close(o.id.value)
        })]), (n.active("footer") || n.active("footer-left") || n.active("footer-right")) && m("div", {
          class: r.element("footer")
        }, [m("div", null, [n.active("footer") ? (Et = (wt = n.node).footer) == null ? void 0 : Et.call(wt, {
          data: b.value,
          close: () => p.close(o.id.value)
        }) : n.active("footer-left") && ((St = (kt = n.node)["footer-left"]) == null ? void 0 : St.call(kt, {
          data: b.value,
          close: () => p.close(o.id.value)
        }))]), m("div", null, [n.active("footer-right") && ((Tt = (At = n.node)["footer-right"]) == null ? void 0 : Tt.call(At, {
          data: b.value,
          close: () => p.close(o.id.value)
        }))])])])])])];
      }
    }) : m("div", null, null));
  }
}), Ve = {
  name: E.ERadio,
  props: {
    ...M.props,
    ...L.props,
    ...q.props,
    ...te.props,
    ...$.props,
    variant: {
      ...$.props.variant,
      _preset: !0
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    value: {
      type: [String, Boolean, Number, Object],
      default: void 0
    },
    modelValue: {
      type: [String, Boolean, Number, Object],
      default: void 0
    }
  },
  emits: {
    ...M.emits,
    ...L.emits,
    ...q.emits,
    ...te.emits,
    ...$.emits
  },
  style: {
    size: "1.5rem",
    "line-height": "var(--line-height)",
    "focus-shadow-size": "var(--focus-shadow-size)",
    "border-radius": "50%",
    "border-width": "var(--border-width)",
    "border-color": "var(--border-color)",
    "border-color--disabled": "var(--border-color--disabled)",
    "background-color": "var(--background-color)",
    "background-color--disabled": "var(--background-color--disabled)"
  }
}, fr = /* @__PURE__ */ D({
  name: Ve.name,
  props: Ve.props,
  emits: Ve.emits,
  inheritAttrs: !1,
  setup(e, {
    emit: t
  }) {
    const o = z(Ve, e), {
      css: r,
      attrs: l,
      slot: n,
      first: a,
      render: i
    } = _(o), {
      ariaDescribedby: u,
      ariaErrormessage: c,
      ariaInvalid: g,
      ariaLabelledby: p,
      ariaRequired: y,
      hasContext: f
    } = be(o), {
      theming: {
        registerComponentStyle: s
      }
    } = V();
    s(o.name, o.style);
    const v = o.props, h = (d) => {
      t("input", d), t("update:modelValue", d.target.checked);
    };
    i(() => m(we, {
      feedback: !!v.value.feedback,
      highlight: v.value.highlight,
      class: [r.base, r.modifier({
        block: v.value.block,
        [v.value.variant]: !0
      })]
    }, {
      default: () => [m("div", {
        class: r.element("inner")
      }, [m("div", null, [m("input", R({
        id: o.id.value,
        type: "radio",
        checked: a(v.value.modelValue, v.value.checked),
        "aria-labelledby": p.value,
        "aria-describedby": u.value,
        disabled: v.value.disabled,
        value: v.value.value,
        name: v.value.name,
        autofocus: v.value.autofocus,
        required: v.value.required,
        "aria-required": y.value,
        "aria-invalid": g.value,
        "aria-errormessage": c.value,
        onInput: h
      }, l), null), m("div", {
        class: r.element("target")
      }, [m("div", {
        class: r.element("inner-target")
      }, null)]), (n.active("label") || v.value.label) && m(ye, {
        for: o.id.value,
        text: v.value.label,
        aria: p.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).label) == null ? void 0 : b.call(d, {
            id: o.id.value
          })];
        }
      })]), f.value && m("div", {
        class: r.element("context")
      }, [(n.active("description") || v.value.description) && m(ge, {
        text: v.value.description,
        aria: u.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).description) == null ? void 0 : b.call(d, {})];
        }
      }), (n.active("feedback") || v.value.feedback) && m(he, {
        text: v.value.feedback,
        aria: c.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).feedback) == null ? void 0 : b.call(d, {})];
        }
      })])])]
    }));
  }
}), je = {
  name: E.ESelect,
  props: {
    ...M.props,
    ...L.props,
    ...q.props,
    ...fe.props,
    ...$.props,
    variant: {
      ...$.props.variant,
      _preset: !0
    },
    options: {
      type: Array,
      _preset: !0
    },
    icon: {
      type: String,
      _preset: !0
    },
    value: {
      type: [String, Boolean, Number, Object],
      default: void 0
    },
    modelValue: {
      type: [String, Boolean, Number, Object],
      default: void 0
    }
  },
  emits: {
    ...M.emits,
    ...L.emits,
    ...q.emits,
    ...fe.emits,
    ...$.emits
  },
  style: {
    "padding-x": "calc(var(--spacing) * 0.75)",
    "padding-y": "calc(var(--spacing) * 0.25)",
    "font-size": "var(--font-size-md)",
    "line-height": "var(--line-height)",
    "focus-shadow-size": "var(--focus-shadow-size)",
    "border-radius": "var(--border-radius)",
    "border-width": "var(--border-width)",
    "border-color": "var(--border-color)",
    "border-color--disabled": "var(--border-color--disabled)",
    "text-color": "var(--text-color)",
    "text-color--disabled": "var(--text-color--disabled)",
    "placeholder-color": "var(--placeholder-color)",
    "placeholder-color--disabled": "var(--placeholder-color--disabled)",
    "background-color": "var(--background-color)",
    "background-color--disabled": "var(--background-color--disabled)"
  }
}, pr = /* @__PURE__ */ D({
  name: je.name,
  props: je.props,
  emits: je.emits,
  inheritAttrs: !1,
  setup(e, {
    emit: t
  }) {
    const o = z(je, e), {
      css: r,
      attrs: l,
      slot: n,
      render: a,
      first: i
    } = _(o), {
      ariaDescribedby: u,
      ariaErrormessage: c,
      ariaInvalid: g,
      ariaLabelledby: p,
      ariaRequired: y
    } = be(o), {
      theming: {
        registerComponentStyle: f
      }
    } = V();
    f(o.name, o.style);
    const s = o.props, v = (d) => {
      const b = d.target;
      let S = 0;
      for (const w of Object.values(b.options))
        w.disabled && S++;
      const k = b.options.selectedIndex - S, T = s.value.options[k].value;
      t("input", d), t("update:modelValue", T);
    }, h = (d) => {
      if (d !== void 0)
        return d === null ? "" : d;
    };
    a(() => m(lt, {
      feedback: !!s.value.feedback,
      highlight: s.value.highlight,
      class: [r.base, r.modifier({
        block: s.value.block,
        [s.value.variant]: !0
      })]
    }, {
      default: () => [(n.active("label") || s.value.label) && m(ye, {
        for: o.id.value,
        text: s.value.label,
        aria: p.value,
        required: s.value.required
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).label) == null ? void 0 : b.call(d, {
            id: o.id.value
          })];
        }
      }), (n.active("description") || s.value.description) && m(ge, {
        text: s.value.description,
        aria: u.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).description) == null ? void 0 : b.call(d, {})];
        }
      }), m("div", {
        class: r.element("inner")
      }, [m("div", null, [m("select", R({
        id: o.id.value,
        class: r.element("target"),
        disabled: s.value.disabled,
        value: i(s.value.modelValue, s.value.value),
        name: s.value.name,
        autofocus: s.value.autofocus,
        required: s.value.required,
        "aria-labelledby": p.value,
        "aria-describedby": u.value,
        "aria-required": y.value,
        "aria-invalid": g.value,
        "aria-errormessage": c.value,
        onInput: v
      }, l), [(s.value.options || []).map(({
        value: d,
        label: b,
        disabled: S
      }, k) => m("option", {
        key: k,
        value: h(d),
        disabled: S
      }, [b]))]), m(X, {
        icon: s.value.icon,
        class: r.element("icon")
      }, null)])]), (n.active("feedback") || s.value.feedback) && m(he, {
        text: s.value.feedback,
        aria: c.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).feedback) == null ? void 0 : b.call(d, {})];
        }
      }), (n.active("hint") || s.value.hint) && m(it, {
        text: s.value.hint
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).hint) == null ? void 0 : b.call(d, {
            id: o.id.value
          })];
        }
      })]
    }));
  }
}), Me = {
  name: E.ESwitch,
  props: {
    ...M.props,
    ...L.props,
    ...q.props,
    ...te.props,
    ...$.props,
    variant: {
      ...$.props.variant,
      _preset: !0
    },
    iconChecked: {
      type: String,
      default: void 0
    },
    iconUnchecked: {
      type: String,
      default: void 0
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    value: {
      type: [String, Boolean, Number, Object],
      default: void 0
    },
    modelValue: {
      type: [String, Boolean, Number, Object],
      default: void 0
    }
  },
  emits: {
    ...M.emits,
    ...L.emits,
    ...q.emits,
    ...te.emits,
    ...$.emits
  },
  style: {
    size: "1.5rem",
    "toggle-background-color": "var(--border-color)",
    "line-height": "var(--line-height)",
    "focus-shadow-size": "var(--focus-shadow-size)",
    "border-radius": "var(--border-radius)",
    "border-width": "var(--border-width)",
    "border-color": "var(--border-color)",
    "border-color--disabled": "var(--border-color--disabled)",
    "background-color": "var(--background-color)",
    "background-color--disabled": "var(--background-color--disabled)"
  }
}, vr = /* @__PURE__ */ D({
  name: Me.name,
  props: Me.props,
  emits: Me.emits,
  inheritAttrs: !1,
  setup(e, {
    emit: t
  }) {
    const o = z(Me, e), {
      css: r,
      attrs: l,
      slot: n,
      first: a,
      render: i
    } = _(o), {
      ariaDescribedby: u,
      ariaErrormessage: c,
      ariaInvalid: g,
      ariaLabelledby: p,
      ariaRequired: y,
      hasContext: f
    } = be(o), {
      theming: {
        registerComponentStyle: s
      }
    } = V();
    s(o.name, o.style);
    const v = o.props, h = (d) => {
      t("input", d), t("update:modelValue", d.target.checked);
    };
    i(() => m(we, {
      feedback: !!v.value.feedback,
      highlight: v.value.highlight,
      class: [r.base, r.modifier({
        block: v.value.block,
        [v.value.variant]: !0
      })]
    }, {
      default: () => [m("div", {
        class: r.element("inner")
      }, [m("div", null, [m("input", R({
        id: o.id.value,
        type: "checkbox",
        checked: a(v.value.modelValue, v.value.checked),
        "aria-labelledby": p.value,
        "aria-describedby": u.value,
        disabled: v.value.disabled,
        value: v.value.value,
        name: v.value.name,
        autofocus: v.value.autofocus,
        required: v.value.required,
        "aria-required": y.value,
        "aria-invalid": g.value,
        "aria-errormessage": c.value,
        onInput: h
      }, l), null), m("div", {
        class: r.element("target")
      }, [m("div", {
        class: r.element("inner-target")
      }, [v.value.iconChecked && m(X, {
        icon: v.value.iconChecked,
        class: [r.element("icon"), r.element("icon--checked")]
      }, null), v.value.iconUnchecked && m(X, {
        icon: v.value.iconUnchecked,
        class: [r.element("icon"), r.element("icon--unchecked")]
      }, null)])]), (n.active("label") || v.value.label) && m(ye, {
        for: o.id.value,
        text: v.value.label,
        aria: p.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).label) == null ? void 0 : b.call(d, {
            id: o.id.value
          })];
        }
      })]), f.value && m("div", {
        class: r.element("context")
      }, [(n.active("description") || v.value.description) && m(ge, {
        text: v.value.description,
        aria: u.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).description) == null ? void 0 : b.call(d, {})];
        }
      }), (n.active("feedback") || v.value.feedback) && m(he, {
        text: v.value.feedback,
        aria: c.value
      }, {
        default: () => {
          var d, b;
          return [(b = (d = n.node).feedback) == null ? void 0 : b.call(d, {})];
        }
      })])])]
    }));
  }
}), Ne = {
  name: E.ETextarea,
  props: {
    ...M.props,
    ...L.props,
    ...q.props,
    ...fe.props,
    ...$.props,
    variant: {
      ...$.props.variant,
      _preset: !0
    },
    rows: {
      type: Number,
      default: void 0
    },
    cols: {
      type: Number,
      default: void 0
    },
    resize: {
      type: String,
      _preset: !0
    },
    value: {
      type: [String, Number],
      default: void 0
    },
    modelValue: {
      type: [String, Number],
      default: void 0
    },
    placeholder: {
      type: String,
      default: void 0
    },
    readonly: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {
    ...M.emits,
    ...L.emits,
    ...q.emits,
    ...fe.emits,
    ...$.emits
  },
  style: {
    "padding-x": "calc(var(--spacing) * 0.75)",
    "padding-y": "calc(var(--spacing) * 0.25)",
    "font-size": "var(--font-size-md)",
    "line-height": "var(--line-height)",
    "focus-shadow-size": "var(--focus-shadow-size)",
    "border-radius": "var(--border-radius)",
    "border-width": "var(--border-width)",
    "border-color": "var(--border-color)",
    "border-color--disabled": "var(--border-color--disabled)",
    "text-color": "var(--text-color)",
    "text-color--disabled": "var(--text-color--disabled)",
    "placeholder-color": "var(--placeholder-color)",
    "placeholder-color--disabled": "var(--placeholder-color--disabled)",
    "background-color": "var(--background-color)",
    "background-color--disabled": "var(--background-color--disabled)"
  }
}, mr = /* @__PURE__ */ D({
  name: Ne.name,
  props: Ne.props,
  emits: Ne.emits,
  inheritAttrs: !1,
  setup(e, {
    emit: t
  }) {
    const o = z(Ne, e), {
      css: r,
      attrs: l,
      slot: n,
      first: a,
      render: i
    } = _(o), {
      ariaDescribedby: u,
      ariaErrormessage: c,
      ariaInvalid: g,
      ariaLabelledby: p,
      ariaRequired: y
    } = be(o), {
      theming: {
        registerComponentStyle: f
      }
    } = V();
    f(o.name, o.style);
    const s = o.props, v = (h) => {
      t("input", h), t("update:modelValue", h.target.value);
    };
    i(() => m(lt, {
      feedback: !!s.value.feedback,
      highlight: s.value.highlight,
      class: [r.base, r.modifier({
        block: s.value.block,
        [s.value.variant]: !0
      })]
    }, {
      default: () => [(n.active("label") || s.value.label) && m(ye, {
        for: o.id.value,
        text: s.value.label,
        aria: p.value,
        required: s.value.required
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).label) == null ? void 0 : d.call(h, {
            id: o.id.value
          })];
        }
      }), (n.active("description") || s.value.description) && m(ge, {
        text: s.value.description,
        aria: u.value
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).description) == null ? void 0 : d.call(h, {})];
        }
      }), m("div", {
        class: r.element("inner")
      }, [m("textarea", R({
        id: o.id.value,
        class: r.element("target"),
        placeholder: s.value.placeholder,
        disabled: s.value.disabled,
        value: a(s.value.modelValue, s.value.value),
        name: s.value.name,
        style: {
          resize: s.value.resize
        },
        cols: s.value.cols,
        rows: s.value.rows,
        autofocus: s.value.autofocus,
        required: s.value.required,
        readonly: s.value.readonly,
        "aria-labelledby": p.value,
        "aria-describedby": u.value,
        "aria-required": y.value,
        "aria-invalid": g.value,
        "aria-errormessage": c.value,
        "aria-readonly": s.value.readonly,
        onInput: v
      }, l), null)]), (n.active("feedback") || s.value.feedback) && m(he, {
        text: s.value.feedback,
        aria: c.value
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).feedback) == null ? void 0 : d.call(h, {})];
        }
      }), (n.active("hint") || s.value.hint) && m(it, {
        text: s.value.hint
      }, {
        default: () => {
          var h, d;
          return [(d = (h = n.node).hint) == null ? void 0 : d.call(h, {
            id: o.id.value
          })];
        }
      })]
    }));
  }
}), He = {
  name: E.EThemeProvider,
  props: {
    ...L.props,
    theme: {
      type: Object,
      required: !0,
      _verbose: !0
    },
    global: {
      type: Boolean,
      default: void 0
    },
    destroyDelay: {
      type: Number,
      default: void 0
    }
  },
  emits: {},
  style: {}
}, br = /* @__PURE__ */ D({
  name: He.name,
  props: He.props,
  emits: He.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z(He, e), {
      render: o,
      slot: r,
      attrs: l
    } = _(t), {
      uuid: n,
      theming: {
        registerTheme: a,
        render: i,
        destroy: u
      }
    } = V(), c = t.props, g = c.value.global ? "global" : n(), p = () => {
      c.value.theme && (a({
        name: c.value.theme.name,
        variables: c.value.theme.variables
      }), i(g, c.value.theme.name));
    };
    Je(p), ro(p), at(() => setTimeout(() => u(g), c.value.destroyDelay)), o(() => {
      var y, f;
      return m("div", R({
        id: c.value.global ? void 0 : g,
        "data-global": c.value.global ? "1" : void 0
      }, l), [(f = (y = r.node).default) == null ? void 0 : f.call(y, {
        id: g
      })]);
    });
  }
}), pe = Math.min, ne = Math.max, Xe = Math.round, We = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), xo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, wo = {
  start: "end",
  end: "start"
};
function ot(e, t, o) {
  return ne(e, pe(t, o));
}
function ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ae(e) {
  return e.split("-")[0];
}
function Se(e) {
  return e.split("-")[1];
}
function Mt(e) {
  return e === "x" ? "y" : "x";
}
function st(e) {
  return e === "y" ? "height" : "width";
}
function Qe(e) {
  return ["top", "bottom"].includes(ae(e)) ? "y" : "x";
}
function ct(e) {
  return Mt(Qe(e));
}
function Eo(e, t, o) {
  o === void 0 && (o = !1);
  const r = Se(e), l = ct(e), n = st(l);
  let a = l === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (a = Ge(a)), [a, Ge(a)];
}
function ko(e) {
  const t = Ge(e);
  return [rt(e), t, rt(t)];
}
function rt(e) {
  return e.replace(/start|end/g, (t) => wo[t]);
}
function So(e, t, o) {
  const r = ["left", "right"], l = ["right", "left"], n = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? l : r : t ? r : l;
    case "left":
    case "right":
      return t ? n : a;
    default:
      return [];
  }
}
function Ao(e, t, o, r) {
  const l = Se(e);
  let n = So(ae(e), o === "start", r);
  return l && (n = n.map((a) => a + "-" + l), t && (n = n.concat(n.map(rt)))), n;
}
function Ge(e) {
  return e.replace(/left|right|bottom|top/g, (t) => xo[t]);
}
function To(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nt(e) {
  return typeof e != "number" ? To(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ke(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function It(e, t, o) {
  let {
    reference: r,
    floating: l
  } = e;
  const n = Qe(t), a = ct(t), i = st(a), u = ae(t), c = n === "y", g = r.x + r.width / 2 - l.width / 2, p = r.y + r.height / 2 - l.height / 2, y = r[i] / 2 - l[i] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: g,
        y: r.y - l.height
      };
      break;
    case "bottom":
      f = {
        x: g,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: r.x - l.width,
        y: p
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Se(t)) {
    case "start":
      f[a] -= y * (o && c ? -1 : 1);
      break;
    case "end":
      f[a] += y * (o && c ? -1 : 1);
      break;
  }
  return f;
}
const Co = async (e, t, o) => {
  const {
    placement: r = "bottom",
    strategy: l = "absolute",
    middleware: n = [],
    platform: a
  } = o, i = n.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: l
  }), {
    x: g,
    y: p
  } = It(c, r, u), y = r, f = {}, s = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: h,
      fn: d
    } = i[v], {
      x: b,
      y: S,
      data: k,
      reset: T
    } = await d({
      x: g,
      y: p,
      initialPlacement: r,
      placement: y,
      strategy: l,
      middlewareData: f,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (g = b ?? g, p = S ?? p, f = {
      ...f,
      [h]: {
        ...f[h],
        ...k
      }
    }, T && s <= 50) {
      s++, typeof T == "object" && (T.placement && (y = T.placement), T.rects && (c = T.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: l
      }) : T.rects), {
        x: g,
        y: p
      } = It(c, y, u)), v = -1;
      continue;
    }
  }
  return {
    x: g,
    y: p,
    placement: y,
    strategy: l,
    middlewareData: f
  };
};
async function Ht(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: r,
    y: l,
    platform: n,
    rects: a,
    elements: i,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: p = "floating",
    altBoundary: y = !1,
    padding: f = 0
  } = ke(t, e), s = Nt(f), h = i[y ? p === "floating" ? "reference" : "floating" : p], d = Ke(await n.getClippingRect({
    element: (o = await (n.isElement == null ? void 0 : n.isElement(h))) == null || o ? h : h.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: g,
    strategy: u
  })), b = p === "floating" ? {
    ...a.floating,
    x: r,
    y: l
  } : a.reference, S = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(i.floating)), k = await (n.isElement == null ? void 0 : n.isElement(S)) ? await (n.getScale == null ? void 0 : n.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Ke(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: S,
    strategy: u
  }) : b);
  return {
    top: (d.top - T.top + s.top) / k.y,
    bottom: (T.bottom - d.bottom + s.bottom) / k.y,
    left: (d.left - T.left + s.left) / k.x,
    right: (T.right - d.right + s.right) / k.x
  };
}
const Lo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: r,
      placement: l,
      rects: n,
      platform: a,
      elements: i,
      middlewareData: u
    } = t, {
      element: c,
      padding: g = 0
    } = ke(e, t) || {};
    if (c == null)
      return {};
    const p = Nt(g), y = {
      x: o,
      y: r
    }, f = ct(l), s = st(f), v = await a.getDimensions(c), h = f === "y", d = h ? "top" : "left", b = h ? "bottom" : "right", S = h ? "clientHeight" : "clientWidth", k = n.reference[s] + n.reference[f] - y[f] - n.floating[s], T = y[f] - n.reference[f], w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let x = w ? w[S] : 0;
    (!x || !await (a.isElement == null ? void 0 : a.isElement(w))) && (x = i.floating[S] || n.floating[s]);
    const O = k / 2 - T / 2, I = x / 2 - v[s] / 2 - 1, U = pe(p[d], I), Y = pe(p[b], I), j = U, K = x - v[s] - Y, P = x / 2 - v[s] / 2 + O, H = ot(j, P, K), A = !u.arrow && Se(l) != null && P != H && n.reference[s] / 2 - (P < j ? U : Y) - v[s] / 2 < 0, C = A ? P < j ? P - j : P - K : 0;
    return {
      [f]: y[f] + C,
      data: {
        [f]: H,
        centerOffset: P - H - C,
        ...A && {
          alignmentOffset: C
        }
      },
      reset: A
    };
  }
}), Ro = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, r;
      const {
        placement: l,
        middlewareData: n,
        rects: a,
        initialPlacement: i,
        platform: u,
        elements: c
      } = t, {
        mainAxis: g = !0,
        crossAxis: p = !0,
        fallbackPlacements: y,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: s = "none",
        flipAlignment: v = !0,
        ...h
      } = ke(e, t);
      if ((o = n.arrow) != null && o.alignmentOffset)
        return {};
      const d = ae(l), b = ae(i) === i, S = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), k = y || (b || !v ? [Ge(i)] : ko(i));
      !y && s !== "none" && k.push(...Ao(i, v, s, S));
      const T = [i, ...k], w = await Ht(t, h), x = [];
      let O = ((r = n.flip) == null ? void 0 : r.overflows) || [];
      if (g && x.push(w[d]), p) {
        const j = Eo(l, a, S);
        x.push(w[j[0]], w[j[1]]);
      }
      if (O = [...O, {
        placement: l,
        overflows: x
      }], !x.every((j) => j <= 0)) {
        var I, U;
        const j = (((I = n.flip) == null ? void 0 : I.index) || 0) + 1, K = T[j];
        if (K)
          return {
            data: {
              index: j,
              overflows: O
            },
            reset: {
              placement: K
            }
          };
        let P = (U = O.filter((H) => H.overflows[0] <= 0).sort((H, A) => H.overflows[1] - A.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!P)
          switch (f) {
            case "bestFit": {
              var Y;
              const H = (Y = O.map((A) => [A.placement, A.overflows.filter((C) => C > 0).reduce((C, J) => C + J, 0)]).sort((A, C) => A[1] - C[1])[0]) == null ? void 0 : Y[0];
              H && (P = H);
              break;
            }
            case "initialPlacement":
              P = i;
              break;
          }
        if (l !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
async function Oo(e, t) {
  const {
    placement: o,
    platform: r,
    elements: l
  } = e, n = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)), a = ae(o), i = Se(o), u = Qe(o) === "y", c = ["left", "top"].includes(a) ? -1 : 1, g = n && u ? -1 : 1, p = ke(t, e);
  let {
    mainAxis: y,
    crossAxis: f,
    alignmentAxis: s
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return i && typeof s == "number" && (f = i === "end" ? s * -1 : s), u ? {
    x: f * g,
    y: y * c
  } : {
    x: y * c,
    y: f * g
  };
}
const Bo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: r
      } = t, l = await Oo(t, e);
      return {
        x: o + l.x,
        y: r + l.y,
        data: l
      };
    }
  };
}, $o = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: r,
        placement: l
      } = t, {
        mainAxis: n = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (h) => {
            let {
              x: d,
              y: b
            } = h;
            return {
              x: d,
              y: b
            };
          }
        },
        ...u
      } = ke(e, t), c = {
        x: o,
        y: r
      }, g = await Ht(t, u), p = Qe(ae(l)), y = Mt(p);
      let f = c[y], s = c[p];
      if (n) {
        const h = y === "y" ? "top" : "left", d = y === "y" ? "bottom" : "right", b = f + g[h], S = f - g[d];
        f = ot(b, f, S);
      }
      if (a) {
        const h = p === "y" ? "top" : "left", d = p === "y" ? "bottom" : "right", b = s + g[h], S = s - g[d];
        s = ot(b, s, S);
      }
      const v = i.fn({
        ...t,
        [y]: f,
        [p]: s
      });
      return {
        ...v,
        data: {
          x: v.x - o,
          y: v.y - r
        }
      };
    }
  };
};
function re(e) {
  return Wt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function N(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ee(e) {
  var t;
  return (t = (Wt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wt(e) {
  return e instanceof Node || e instanceof N(e).Node;
}
function Z(e) {
  return e instanceof Element || e instanceof N(e).Element;
}
function G(e) {
  return e instanceof HTMLElement || e instanceof N(e).HTMLElement;
}
function Ft(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof N(e).ShadowRoot;
}
function Ae(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: r,
    display: l
  } = W(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + o) && !["inline", "contents"].includes(l);
}
function Io(e) {
  return ["table", "td", "th"].includes(re(e));
}
function dt(e) {
  const t = ut(), o = W(e);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (o.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (o.contain || "").includes(r));
}
function Fo(e) {
  let t = ve(e);
  for (; G(t) && !Ze(t); ) {
    if (dt(t))
      return t;
    t = ve(t);
  }
  return null;
}
function ut() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ze(e) {
  return ["html", "body", "#document"].includes(re(e));
}
function W(e) {
  return N(e).getComputedStyle(e);
}
function et(e) {
  return Z(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function ve(e) {
  if (re(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ft(e) && e.host || // Fallback.
    ee(e)
  );
  return Ft(t) ? t.host : t;
}
function Ut(e) {
  const t = ve(e);
  return Ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : G(t) && Ae(t) ? t : Ut(t);
}
function Ee(e, t, o) {
  var r;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const l = Ut(e), n = l === ((r = e.ownerDocument) == null ? void 0 : r.body), a = N(l);
  return n ? t.concat(a, a.visualViewport || [], Ae(l) ? l : [], a.frameElement && o ? Ee(a.frameElement) : []) : t.concat(l, Ee(l, [], o));
}
function Yt(e) {
  const t = W(e);
  let o = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const l = G(e), n = l ? e.offsetWidth : o, a = l ? e.offsetHeight : r, i = Xe(o) !== n || Xe(r) !== a;
  return i && (o = n, r = a), {
    width: o,
    height: r,
    $: i
  };
}
function ft(e) {
  return Z(e) ? e : e.contextElement;
}
function de(e) {
  const t = ft(e);
  if (!G(t))
    return oe(1);
  const o = t.getBoundingClientRect(), {
    width: r,
    height: l,
    $: n
  } = Yt(t);
  let a = (n ? Xe(o.width) : o.width) / r, i = (n ? Xe(o.height) : o.height) / l;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const _o = /* @__PURE__ */ oe(0);
function Xt(e) {
  const t = N(e);
  return !ut() || !t.visualViewport ? _o : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Do(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== N(e) ? !1 : t;
}
function ie(e, t, o, r) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const l = e.getBoundingClientRect(), n = ft(e);
  let a = oe(1);
  t && (r ? Z(r) && (a = de(r)) : a = de(e));
  const i = Do(n, o, r) ? Xt(n) : oe(0);
  let u = (l.left + i.x) / a.x, c = (l.top + i.y) / a.y, g = l.width / a.x, p = l.height / a.y;
  if (n) {
    const y = N(n), f = r && Z(r) ? N(r) : r;
    let s = y.frameElement;
    for (; s && r && f !== y; ) {
      const v = de(s), h = s.getBoundingClientRect(), d = W(s), b = h.left + (s.clientLeft + parseFloat(d.paddingLeft)) * v.x, S = h.top + (s.clientTop + parseFloat(d.paddingTop)) * v.y;
      u *= v.x, c *= v.y, g *= v.x, p *= v.y, u += b, c += S, s = N(s).frameElement;
    }
  }
  return Ke({
    width: g,
    height: p,
    x: u,
    y: c
  });
}
function zo(e) {
  let {
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const l = G(o), n = ee(o);
  if (o === n)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = oe(1);
  const u = oe(0);
  if ((l || !l && r !== "fixed") && ((re(o) !== "body" || Ae(n)) && (a = et(o)), G(o))) {
    const c = ie(o);
    i = de(o), u.x = c.x + o.clientLeft, u.y = c.y + o.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - a.scrollLeft * i.x + u.x,
    y: t.y * i.y - a.scrollTop * i.y + u.y
  };
}
function Po(e) {
  return Array.from(e.getClientRects());
}
function Gt(e) {
  return ie(ee(e)).left + et(e).scrollLeft;
}
function qo(e) {
  const t = ee(e), o = et(e), r = e.ownerDocument.body, l = ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), n = ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -o.scrollLeft + Gt(e);
  const i = -o.scrollTop;
  return W(r).direction === "rtl" && (a += ne(t.clientWidth, r.clientWidth) - l), {
    width: l,
    height: n,
    x: a,
    y: i
  };
}
function Vo(e, t) {
  const o = N(e), r = ee(e), l = o.visualViewport;
  let n = r.clientWidth, a = r.clientHeight, i = 0, u = 0;
  if (l) {
    n = l.width, a = l.height;
    const c = ut();
    (!c || c && t === "fixed") && (i = l.offsetLeft, u = l.offsetTop);
  }
  return {
    width: n,
    height: a,
    x: i,
    y: u
  };
}
function jo(e, t) {
  const o = ie(e, !0, t === "fixed"), r = o.top + e.clientTop, l = o.left + e.clientLeft, n = G(e) ? de(e) : oe(1), a = e.clientWidth * n.x, i = e.clientHeight * n.y, u = l * n.x, c = r * n.y;
  return {
    width: a,
    height: i,
    x: u,
    y: c
  };
}
function _t(e, t, o) {
  let r;
  if (t === "viewport")
    r = Vo(e, o);
  else if (t === "document")
    r = qo(ee(e));
  else if (Z(t))
    r = jo(t, o);
  else {
    const l = Xt(e);
    r = {
      ...t,
      x: t.x - l.x,
      y: t.y - l.y
    };
  }
  return Ke(r);
}
function Kt(e, t) {
  const o = ve(e);
  return o === t || !Z(o) || Ze(o) ? !1 : W(o).position === "fixed" || Kt(o, t);
}
function Mo(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let r = Ee(e, [], !1).filter((i) => Z(i) && re(i) !== "body"), l = null;
  const n = W(e).position === "fixed";
  let a = n ? ve(e) : e;
  for (; Z(a) && !Ze(a); ) {
    const i = W(a), u = dt(a);
    !u && i.position === "fixed" && (l = null), (n ? !u && !l : !u && i.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || Ae(a) && !u && Kt(e, a)) ? r = r.filter((g) => g !== a) : l = i, a = ve(a);
  }
  return t.set(e, r), r;
}
function No(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: r,
    strategy: l
  } = e;
  const a = [...o === "clippingAncestors" ? Mo(t, this._c) : [].concat(o), r], i = a[0], u = a.reduce((c, g) => {
    const p = _t(t, g, l);
    return c.top = ne(p.top, c.top), c.right = pe(p.right, c.right), c.bottom = pe(p.bottom, c.bottom), c.left = ne(p.left, c.left), c;
  }, _t(t, i, l));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Ho(e) {
  return Yt(e);
}
function Wo(e, t, o) {
  const r = G(t), l = ee(t), n = o === "fixed", a = ie(e, !0, n, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = oe(0);
  if (r || !r && !n)
    if ((re(t) !== "body" || Ae(l)) && (i = et(t)), r) {
      const c = ie(t, !0, n, t);
      u.x = c.x + t.clientLeft, u.y = c.y + t.clientTop;
    } else
      l && (u.x = Gt(l));
  return {
    x: a.left + i.scrollLeft - u.x,
    y: a.top + i.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function Dt(e, t) {
  return !G(e) || W(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Jt(e, t) {
  const o = N(e);
  if (!G(e))
    return o;
  let r = Dt(e, t);
  for (; r && Io(r) && W(r).position === "static"; )
    r = Dt(r, t);
  return r && (re(r) === "html" || re(r) === "body" && W(r).position === "static" && !dt(r)) ? o : r || Fo(e) || o;
}
const Uo = async function(e) {
  let {
    reference: t,
    floating: o,
    strategy: r
  } = e;
  const l = this.getOffsetParent || Jt, n = this.getDimensions;
  return {
    reference: Wo(t, await l(o), r),
    floating: {
      x: 0,
      y: 0,
      ...await n(o)
    }
  };
};
function Yo(e) {
  return W(e).direction === "rtl";
}
const Xo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zo,
  getDocumentElement: ee,
  getClippingRect: No,
  getOffsetParent: Jt,
  getElementRects: Uo,
  getClientRects: Po,
  getDimensions: Ho,
  getScale: de,
  isElement: Z,
  isRTL: Yo
};
function Go(e, t) {
  let o = null, r;
  const l = ee(e);
  function n() {
    clearTimeout(r), o && o.disconnect(), o = null;
  }
  function a(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), n();
    const {
      left: c,
      top: g,
      width: p,
      height: y
    } = e.getBoundingClientRect();
    if (i || t(), !p || !y)
      return;
    const f = We(g), s = We(l.clientWidth - (c + p)), v = We(l.clientHeight - (g + y)), h = We(c), b = {
      rootMargin: -f + "px " + -s + "px " + -v + "px " + -h + "px",
      threshold: ne(0, pe(1, u)) || 1
    };
    let S = !0;
    function k(T) {
      const w = T[0].intersectionRatio;
      if (w !== u) {
        if (!S)
          return a();
        w ? a(!1, w) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      o = new IntersectionObserver(k, {
        ...b,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(k, b);
    }
    o.observe(e);
  }
  return a(!0), n;
}
function Ko(e, t, o, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: n = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, c = ft(e), g = l || n ? [...c ? Ee(c) : [], ...Ee(t)] : [];
  g.forEach((d) => {
    l && d.addEventListener("scroll", o, {
      passive: !0
    }), n && d.addEventListener("resize", o);
  });
  const p = c && i ? Go(c, o) : null;
  let y = -1, f = null;
  a && (f = new ResizeObserver((d) => {
    let [b] = d;
    b && b.target === c && f && (f.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      f && f.observe(t);
    })), o();
  }), c && !u && f.observe(c), f.observe(t));
  let s, v = u ? ie(e) : null;
  u && h();
  function h() {
    const d = ie(e);
    v && (d.x !== v.x || d.y !== v.y || d.width !== v.width || d.height !== v.height) && o(), v = d, s = requestAnimationFrame(h);
  }
  return o(), () => {
    g.forEach((d) => {
      l && d.removeEventListener("scroll", o), n && d.removeEventListener("resize", o);
    }), p && p(), f && f.disconnect(), f = null, u && cancelAnimationFrame(s);
  };
}
const Jo = (e, t, o) => {
  const r = /* @__PURE__ */ new Map(), l = {
    platform: Xo,
    ...o
  }, n = {
    ...l.platform,
    _c: r
  };
  return Co(e, t, {
    ...l,
    platform: n
  });
};
function nt(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function Qo(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = nt(ce(e.element));
      return o == null ? {} : Lo({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Qt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zt(e, t) {
  const o = Qt(e);
  return Math.round(t * o) / o;
}
function Zo(e, t, o) {
  o === void 0 && (o = {});
  const r = o.whileElementsMounted, l = F(() => {
    var x;
    return (x = ce(o.open)) != null ? x : !0;
  }), n = F(() => ce(o.middleware)), a = F(() => {
    var x;
    return (x = ce(o.placement)) != null ? x : "bottom";
  }), i = F(() => {
    var x;
    return (x = ce(o.strategy)) != null ? x : "absolute";
  }), u = F(() => {
    var x;
    return (x = ce(o.transform)) != null ? x : !0;
  }), c = F(() => nt(e.value)), g = F(() => nt(t.value)), p = B(0), y = B(0), f = B(i.value), s = B(a.value), v = no({}), h = B(!1), d = F(() => {
    const x = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!g.value)
      return x;
    const O = zt(g.value, p.value), I = zt(g.value, y.value);
    return u.value ? {
      ...x,
      transform: "translate(" + O + "px, " + I + "px)",
      ...Qt(g.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: O + "px",
      top: I + "px"
    };
  });
  let b;
  function S() {
    c.value == null || g.value == null || Jo(c.value, g.value, {
      middleware: n.value,
      placement: a.value,
      strategy: i.value
    }).then((x) => {
      p.value = x.x, y.value = x.y, f.value = x.strategy, s.value = x.placement, v.value = x.middlewareData, h.value = !0;
    });
  }
  function k() {
    typeof b == "function" && (b(), b = void 0);
  }
  function T() {
    if (k(), r === void 0) {
      S();
      return;
    }
    if (c.value != null && g.value != null) {
      b = r(c.value, g.value, S);
      return;
    }
  }
  function w() {
    l.value || (h.value = !1);
  }
  return Q([n, a, i], S, {
    flush: "sync"
  }), Q([c, g], T, {
    flush: "sync"
  }), Q(l, w, {
    flush: "sync"
  }), ao() && io(k), {
    x: le(p),
    y: le(y),
    strategy: le(f),
    placement: le(s),
    middlewareData: le(v),
    isPositioned: le(h),
    floatingStyles: d,
    update: S
  };
}
const Ue = {
  name: E.ETooltip,
  props: {
    ...L.props,
    ...q.props,
    placement: {
      type: String,
      _preset: !0
    },
    delay: {
      type: [Number, Object],
      default: void 0,
      _preset: !0
    },
    flip: {
      type: Boolean,
      default: void 0,
      _preset: !0
    },
    triggers: {
      type: Array,
      default: void 0,
      _preset: !0,
      _verbose: !1
    },
    padding: {
      type: [Number, Object],
      default: void 0,
      _preset: !0
    },
    offset: {
      type: Number,
      _preset: !0
    },
    arrow: {
      type: [Object, Boolean],
      default: void 0,
      _preset: !0,
      _verbose: !0
    },
    text: {
      type: String,
      default: void 0
    },
    /**
     * Binding is a copy of props, but reactive. Used by directive.
     * Do not use this directly.
     *
     * TODO: Exclude this from emitted declarations.
     */
    binding: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Object,
      default: void 0,
      _verbose: !1
    }
  },
  emits: {},
  style: {
    "max-width": "24rem",
    "padding-x": "calc(var(--spacing) * 0.75)",
    "padding-y": "calc(var(--spacing) * 0.4375)",
    "border-radius": "var(--border-radius)",
    "font-size": "var(--font-size-md)",
    "text-color": "var(--text-color)",
    "background-color": "var(--background-color)",
    "box-shadow": "var(--box-shadow)",
    "z-index": 15
  }
}, er = ue, tr = /* @__PURE__ */ D({
  name: Ue.name,
  props: Ue.props,
  emits: Ue.emits,
  inheritAttrs: !1,
  setup(e) {
    const t = z(Ue, e), {
      css: o,
      attrs: r,
      slot: l,
      render: n
    } = _(t), {
      theming: {
        registerComponentStyle: a
      }
    } = V();
    a(t.name, t.style);
    const i = F(() => t.props.value.binding ? {
      ...t.props.value,
      ...t.props.value.binding.value
    } : t.props.value), u = B(null), c = B(null), g = B(null), p = B(!1), y = B("top"), f = {
      focusin: null,
      focusout: null,
      mouseenter: null,
      mouseleave: null
    }, s = {
      show: [],
      hide: []
    }, v = F(() => {
      const w = [Bo(i.value.offset), $o({
        padding: i.value.padding
      })];
      return i.value.flip && w.push(Ro()), i.value.arrow && w.push(Qo({
        element: g
      })), w;
    }), h = F(() => i.value.placement), d = () => Zo(u, c, {
      placement: h,
      middleware: v,
      whileElementsMounted: Ko
    });
    Je(() => {
      const w = document.getElementById(t.id.value);
      w && (f.focusin = new AbortController(), f.focusout = new AbortController(), f.mouseenter = new AbortController(), f.mouseleave = new AbortController(), i.value.triggers.includes("focus") && (w.addEventListener("focusin", b, {
        signal: f.focusin.signal
      }), w.addEventListener("focusout", S, {
        signal: f.focusout.signal
      })), i.value.triggers.includes("hover") && (w.addEventListener("mouseenter", b, {
        signal: f.mouseenter.signal
      }), w.addEventListener("mouseleave", S, {
        signal: f.mouseleave.signal
      })));
    }), at(() => {
      var w, x, O, I;
      (w = f.focusin) == null || w.abort(), (x = f.focusout) == null || x.abort(), (O = f.mouseenter) == null || O.abort(), (I = f.mouseleave) == null || I.abort();
    });
    const b = () => {
      const w = typeof i.value.delay == "number" ? i.value.delay : i.value.delay.show;
      for (const x of s.hide)
        clearTimeout(x);
      s.hide = [], w ? s.show.push(setTimeout(() => {
        p.value = !0;
      }, w)) : p.value = !0;
    }, S = () => {
      const w = typeof i.value.delay == "number" ? i.value.delay : i.value.delay.hide;
      for (const x of s.show)
        clearTimeout(x);
      s.show = [], w ? s.hide.push(setTimeout(() => {
        p.value = !1;
      }, w)) : p.value = !1;
    }, k = d();
    Q(() => i.value, () => {
      k.update();
    });
    const T = F(() => {
      var I, U, Y;
      const w = i.value.arrow !== !1 ? (I = i.value.arrow) == null ? void 0 : I.size : 0;
      let x, O;
      return (U = k.middlewareData.value.arrow) != null && U.x && (x = k.middlewareData.value.arrow.x), (Y = k.middlewareData.value.arrow) != null && Y.y && (O = k.middlewareData.value.arrow.y), {
        width: `${w}px`,
        height: `${w}px`,
        left: x ? `${x}px` : void 0,
        top: O ? `${O}px` : void 0,
        [y.value]: `${w * -1 / 2}px`
      };
    });
    Q(() => k.placement.value, () => {
      const w = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }, x = k.placement.value.split("-")[0];
      x && w[x] && (y.value = w[x]);
    }, {
      immediate: !0
    }), n(() => {
      var w, x;
      return m(lo, null, [m("span", R({
        id: t.id.value,
        ref: u,
        class: o.element("trigger")
      }, r), [(x = (w = l.node).reference) == null ? void 0 : x.call(w, {
        id: t.id.value
      })]), m(qt, {
        to: `#${er}`
      }, {
        default: () => [m(so, {
          name: o.element("animation"),
          appear: !0
        }, {
          default: () => {
            var O, I;
            return [p.value && !i.value.disabled && m("div", {
              ref: c,
              class: o.base,
              style: k.floatingStyles.value
            }, [i.value.binding ? m("span", null, [i.value.text]) : (I = (O = l.node).content) == null ? void 0 : I.call(O, {}), i.value.arrow !== !1 && m("div", {
              class: o.element("arrow"),
              ref: g,
              style: T.value
            }, null)])];
          }
        })]
      })]);
    });
  }
}), or = {
  mounted(e, t) {
    e._click = () => {
      let o, r;
      if (typeof t.value == "object")
        o = t.value.name, r = t.value.data;
      else if (t.value)
        o = t.value;
      else
        return console.warn(
          "Modal directive is missing binding value:",
          e
        );
      me().modal.open(o, r);
    }, e.addEventListener("click", e._click);
  },
  unmounted(e) {
    e && e.removeEventListener("click", e._click);
  }
}, rr = {
  mounted(e, t) {
    e._click = () => me().modal.close(t.value), e.addEventListener("click", e._click);
  },
  unmounted(e) {
    e && e.removeEventListener("click", e._click);
  }
}, nr = {
  mounted(e) {
    e._click = me().modal.closeAll, e.addEventListener("click", e._click);
  },
  unmounted(e) {
    e && e.removeEventListener("click", e._click);
  }
}, ar = {
  mounted(e, t) {
    if (e.binding)
      return;
    if (!e || !e.parentNode)
      return console.warn("Tooltip reference is not a valid element.");
    const o = document.createElement("div");
    e.parentNode.insertBefore(o, e);
    const r = typeof t.value == "object" ? t.value : { text: t.value };
    e.binding = B(r), e.app = co(tr, {
      binding: e.binding
    }), e.app.mount(o), o.children[0].appendChild(e);
  },
  unmounted(e) {
    e && e.app && e.app.unmount();
  },
  updated(e, t) {
    if (e) {
      const o = typeof t.value == "object" ? t.value : { text: t.value };
      e.binding.value = o;
    }
  }
}, ir = "0.1.1";
function gr(e = {}) {
  const t = e.components || [], o = [];
  V(e, !0);
  function r(a, i, u) {
    a.component(i) || a.component(i, u);
  }
  function l(a, i, u) {
    a.directive(i) || a.directive(i, u);
  }
  function n(a) {
    o.includes(a) || (o.push(a), l(a, "tooltip", ar), l(a, "modal-close", rr), l(a, "modal-close-all", nr), l(a, "modal-open", or), t.forEach((i) => {
      const { name: u } = i;
      r(a, u, i);
    }));
  }
  return {
    version: ir,
    install: n
  };
}
export {
  E as Component,
  sr as EButton,
  cr as ECheckbox,
  ge as EFormDescription,
  he as EFormFeedback,
  it as EFormHint,
  we as EFormInput,
  lt as EFormInputField,
  ye as EFormLabel,
  X as EIcon,
  dr as EInput,
  Bt as ELoading,
  ur as EModal,
  fr as ERadio,
  pr as ESelect,
  vr as ESwitch,
  mr as ETextarea,
  br as EThemeProvider,
  tr as ETooltip,
  gr as createElements,
  me as useElements,
  ho as useFocusTrap,
  yo as useRouteObserver,
  ir as version
};
