/* @ds-bundle: {"format":3,"namespace":"PingwireDesignSystem_ac271e","components":[{"name":"App","sourcePath":"uploads/pingwire_brand_guidelines.tsx"}],"sourceHashes":{"ui_kits/app/Dashboard.jsx":"52ecedcb5bfa","ui_kits/app/Shell.jsx":"1533b7e4653d","ui_kits/marketing/Nav.jsx":"5b05a6035e78","ui_kits/marketing/Sections.jsx":"5e63b9278672","uploads/pingwire_brand_guidelines.tsx":"4f2976f5d483"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PingwireDesignSystem_ac271e = window.PingwireDesignSystem_ac271e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/Dashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

window.Dashboard = function Dashboard() {
  const [sel, setSel] = React.useState(0);
  const alerts = [{
    severity: "high",
    name: "Dmitri K.",
    country: "RU",
    amount: "$42,180.00",
    rule: "Sanctions list match · OFAC SDN",
    time: "2 min ago"
  }, {
    severity: "medium",
    name: "Acme Holdings",
    country: "KY",
    amount: "$128,440.00",
    rule: "Structuring pattern · 9 tx in 24h",
    time: "17 min ago"
  }, {
    severity: "high",
    name: "N. Johansen",
    country: "VE",
    amount: "$9,850.00",
    rule: "High-risk jurisdiction · velocity",
    time: "41 min ago"
  }, {
    severity: "medium",
    name: "BrightWire Ltd",
    country: "GB",
    amount: "$56,000.00",
    rule: "PEP match · Tier 2",
    time: "1 hr ago"
  }, {
    severity: "low",
    name: "M. Castro",
    country: "MX",
    amount: "$2,420.00",
    rule: "Round-number structuring",
    time: "3 hr ago"
  }, {
    severity: "low",
    name: "Helios GmbH",
    country: "DE",
    amount: "$18,700.00",
    rule: "First transaction · new entity",
    time: "5 hr ago"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "#F9FAFA",
      flex: 1,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    eye: "Open alerts",
    value: "312",
    delta: "8% vs last wk"
  }), /*#__PURE__*/React.createElement(StatCard, {
    eye: "Avg. resolution",
    value: "4.2h",
    delta: "12% faster",
    deltaPos: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    eye: "Screening latency",
    value: "84ms",
    delta: "within SLO",
    deltaPos: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    eye: "Cases this month",
    value: "1,204",
    delta: "3% vs last mo",
    deltaPos: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #D1DCDA",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(18,65,49,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid #E0E0E0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#238061",
      textTransform: "uppercase",
      letterSpacing: "0.12em"
    }
  }, "Needs review"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "#124131",
      marginTop: 2
    }
  }, "Recent alerts")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "1.5px solid #D1DCDA",
      color: "#124131",
      borderRadius: 6,
      padding: "6px 12px",
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "All severities"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "1.5px solid #D1DCDA",
      color: "#124131",
      borderRadius: 6,
      padding: "6px 12px",
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Last 24h"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 110px 110px 150px 90px",
      gap: 12,
      padding: "10px 20px",
      background: "#F9FAFA",
      fontSize: 10,
      fontWeight: 700,
      color: "#999",
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, /*#__PURE__*/React.createElement("div", null, "Severity"), /*#__PURE__*/React.createElement("div", null, "Entity \xB7 Rule"), /*#__PURE__*/React.createElement("div", null, "Country"), /*#__PURE__*/React.createElement("div", null, "Amount"), /*#__PURE__*/React.createElement("div", null, "Time"), /*#__PURE__*/React.createElement("div", null)), alerts.map((a, i) => /*#__PURE__*/React.createElement(AlertRow, _extends({
    key: i
  }, a, {
    selected: sel === i,
    onClick: () => setSel(i)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#124131",
      color: "#fff",
      borderRadius: 12,
      padding: "22px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#ACC3BD",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 10
    }
  }, "Detection rate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 800,
      color: "#ECA400",
      letterSpacing: "-0.02em"
    }
  }, "99.7%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#ACC3BD",
      lineHeight: 1.65,
      marginTop: 8
    }
  }, "AI-driven detection with near-zero false positives across 40+ watchlists.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(236,164,0,0.07)",
      border: "1px solid rgba(236,164,0,0.25)",
      borderRadius: 12,
      padding: "20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#8A6000",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 10
    }
  }, "Tip"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#124131",
      marginBottom: 6
    }
  }, "3 new risk rules available"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#999",
      lineHeight: 1.65,
      marginBottom: 12
    }
  }, "Based on patterns in your last 30 days of alerts."), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#ECA400",
      color: "#1A1A1A",
      border: "none",
      borderRadius: 7,
      padding: "8px 14px",
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Review rules \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(40,199,111,0.07)",
      border: "1px solid rgba(40,199,111,0.30)",
      borderRadius: 12,
      padding: "20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#1A7A45",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 10
    }
  }, "\u2713 Audit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#124131",
      marginBottom: 6
    }
  }, "Q3 review passed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#999",
      lineHeight: 1.65
    }
  }, "All 312 rules applied cleanly. Full trail exportable.")))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shell.jsx
try { (() => {
/* global React */

window.Sidebar = function Sidebar({
  active,
  onNav
}) {
  const items = [{
    k: "dashboard",
    l: "Dashboard",
    g: "▦"
  }, {
    k: "alerts",
    l: "Alerts",
    g: "⚡",
    badge: 12
  }, {
    k: "transactions",
    l: "Transactions",
    g: "⇄"
  }, {
    k: "cases",
    l: "Case Manager",
    g: "☰"
  }, {
    k: "rules",
    l: "Rule Engine",
    g: "⚙"
  }, {
    k: "watchlists",
    l: "Watchlists",
    g: "⊛"
  }, {
    k: "reports",
    l: "Reports",
    g: "▤"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      background: "#124131",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid rgba(172,195,189,0.15)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid rgba(172,195,189,0.12)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: "#ECA400",
      color: "#1A1A1A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: 12
    }
  }, ">p"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      letterSpacing: "-0.02em"
    }
  }, ">pingwire_")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 10px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: "#5A8A78",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      padding: "10px 12px 6px"
    }
  }, "Monitor"), items.map(i => {
    const on = active === i.k;
    return /*#__PURE__*/React.createElement("button", {
      key: i.k,
      onClick: () => onNav?.(i.k),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: on ? "rgba(236,164,0,0.12)" : "transparent",
        border: "none",
        color: on ? "#ECA400" : "#ACC3BD",
        padding: "9px 12px",
        borderRadius: 7,
        fontSize: 13,
        fontWeight: on ? 700 : 500,
        cursor: "pointer",
        textAlign: "left",
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        textAlign: "center",
        fontSize: 14,
        opacity: on ? 1 : 0.8
      }
    }, i.g), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, i.l), i.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#E4572E",
        color: "#fff",
        fontSize: 10,
        fontWeight: 700,
        borderRadius: 9999,
        padding: "1px 7px"
      }
    }, i.badge));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: "1px solid rgba(172,195,189,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "#238061",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 12
    }
  }, "AR"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Anna Roth"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#5A8A78",
      letterSpacing: "0.05em"
    }
  }, "ACME CORP \xB7 ADMIN")))));
};
window.TopBar = function TopBar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderBottom: "1px solid #D1DCDA",
      padding: "0 28px",
      height: 58,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: "#999",
      textTransform: "uppercase",
      letterSpacing: "0.12em"
    }
  }, "Compliance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "#124131",
      letterSpacing: "-0.01em",
      marginTop: 2
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#F7F9F8",
      border: "1px solid #E0E8E5",
      borderRadius: 8,
      padding: "7px 12px",
      width: 260
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#999",
      fontSize: 12
    }
  }, "\u2315"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search alerts, transactions, cases\u2026",
    style: {
      flex: 1,
      background: "none",
      border: "none",
      outline: "none",
      fontSize: 12,
      color: "#124131"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(18,65,49,0.08)",
      border: "1px solid rgba(18,65,49,0.2)",
      borderRadius: 9999,
      padding: "4px 12px",
      fontSize: 11,
      fontWeight: 700,
      color: "#124131",
      letterSpacing: "0.05em"
    }
  }, "\u25CF LIVE"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#ECA400",
      color: "#1A1A1A",
      border: "none",
      borderRadius: 7,
      padding: "8px 16px",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 0 18px rgba(236,164,0,0.30)"
    }
  }, "+ New case")));
};
window.StatCard = function StatCard({
  eye,
  value,
  delta,
  deltaPos
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #D1DCDA",
      borderRadius: 12,
      padding: "18px 20px",
      boxShadow: "0 1px 4px rgba(18,65,49,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#238061",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 8
    }
  }, eye), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      color: "#124131",
      letterSpacing: "-0.02em"
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: deltaPos ? "#1A7A45" : "#E4572E",
      marginTop: 6
    }
  }, deltaPos ? "▲" : "▼", " ", delta));
};
window.AlertRow = function AlertRow({
  severity,
  name,
  country,
  amount,
  rule,
  time,
  selected,
  onClick
}) {
  const sevMap = {
    high: {
      bg: "rgba(228,87,46,0.10)",
      bd: "rgba(228,87,46,0.35)",
      tx: "#E4572E",
      l: "HIGH"
    },
    medium: {
      bg: "rgba(236,164,0,0.12)",
      bd: "rgba(236,164,0,0.40)",
      tx: "#8A6000",
      l: "MED"
    },
    low: {
      bg: "rgba(35,128,97,0.10)",
      bd: "rgba(35,128,97,0.30)",
      tx: "#238061",
      l: "LOW"
    }
  }[severity];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 110px 110px 150px 90px",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px",
      borderBottom: "1px solid #E0E0E0",
      background: selected ? "rgba(236,164,0,0.04)" : "#fff",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: sevMap.bg,
      border: `1px solid ${sevMap.bd}`,
      borderRadius: 9999,
      padding: "3px 10px",
      fontSize: 10,
      fontWeight: 700,
      color: sevMap.tx,
      letterSpacing: "0.08em",
      justifySelf: "start"
    }
  }, sevMap.l), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#124131"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#999",
      marginTop: 2
    }
  }, rule)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#124131",
      fontWeight: 500
    }
  }, country), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#124131",
      fontWeight: 700,
      fontFamily: "ui-monospace, Menlo, monospace"
    }
  }, amount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#999"
    }
  }, time), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "1.5px solid #124131",
      color: "#124131",
      borderRadius: 6,
      padding: "5px 10px",
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer",
      justifySelf: "end"
    }
  }, "Review"));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
window.Nav = function Nav({
  current = "home",
  onNav
}) {
  const items = ["Home", "Solutions", "Developers", "Resources", "About"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: "#fff",
      borderBottom: "2px solid #238061",
      padding: "0 32px",
      height: 62,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 10,
      boxShadow: "0 1px 4px rgba(18,65,49,0.08)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav?.("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: "#124131",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 800,
      fontSize: 12
    }
  }, ">p"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: "#124131",
      letterSpacing: "-0.02em"
    }
  }, ">pingwire_")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, items.map(i => {
    const key = i.toLowerCase();
    const active = current === key;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav?.(key);
      },
      style: {
        padding: "8px 14px",
        borderRadius: 6,
        fontSize: 13,
        fontWeight: 500,
        textDecoration: "none",
        color: active ? "#124131" : "#999",
        background: active ? "rgba(18,65,49,0.04)" : "transparent"
      }
    }, i);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      color: "#124131",
      fontWeight: 600,
      fontSize: 13,
      cursor: "pointer"
    }
  }, "Sign In"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#ECA400",
      color: "#1A1A1A",
      border: "none",
      borderRadius: 7,
      padding: "8px 18px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 0 20px rgba(236,164,0,0.35)"
    }
  }, "Contact us")));
};
window.Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#124131",
      color: "#fff",
      padding: "48px 64px",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 48,
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 12
    }
  }, ">pingwire_"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#ACC3BD",
      fontSize: 13,
      lineHeight: 1.7,
      maxWidth: 320
    }
  }, "Built for Good. Precise AML and predictable growth for teams that care about the financial ecosystem."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(172,195,189,0.12)",
      border: "1px solid rgba(172,195,189,0.25)",
      borderRadius: 9999,
      padding: "4px 12px",
      fontSize: 11,
      fontWeight: 700,
      color: "#ACC3BD",
      letterSpacing: "0.05em"
    }
  }, "\uD83D\uDD12 SOC2"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(172,195,189,0.12)",
      border: "1px solid rgba(172,195,189,0.25)",
      borderRadius: 9999,
      padding: "4px 12px",
      fontSize: 11,
      fontWeight: 700,
      color: "#ACC3BD",
      letterSpacing: "0.05em"
    }
  }, "\u2713 ISO 27001"))), [{
    title: "Product",
    links: ["Transaction monitoring", "Screening", "Case management", "Reporting", "Pricing"]
  }, {
    title: "Developers",
    links: ["API reference", "Quick start", "Changelog", "Status"]
  }, {
    title: "Company",
    links: ["About", "Careers", "Contact", "Privacy"]
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#ECA400",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 14
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: "block",
      color: "#ACC3BD",
      fontSize: 13,
      textDecoration: "none",
      padding: "4px 0"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(172,195,189,0.15)",
      marginTop: 40,
      paddingTop: 20,
      fontSize: 11,
      color: "#5A8A78",
      textAlign: "center",
      letterSpacing: "0.05em"
    }
  }, "\xA9 2025 PINGWIRE  \xB7  BUILT FOR GOOD"));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
/* global React */
const {
  useState: useStateHero
} = React;
window.Hero = function Hero() {
  const [q, setQ] = useStateHero("");
  const chips = ["⚡ Transaction monitoring", "🔗 Integrations", "▷ Does Pingwire fit us?"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#F9FAFA",
      padding: "64px 32px 72px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-10%",
      left: "50%",
      transform: "translateX(-50%)",
      width: 900,
      height: 460,
      borderRadius: "50%",
      background: "radial-gradient(ellipse,rgba(236,164,0,0.13) 0%,rgba(236,164,0,0.04) 50%,transparent 72%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "rgba(236,164,0,0.12)",
      border: "1px solid rgba(236,164,0,0.40)",
      borderRadius: 9999,
      padding: "5px 16px",
      fontSize: 11,
      fontWeight: 700,
      color: "#8A6000",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "#ECA400"
    }
  }), "Next-Gen AML"), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "relative",
      fontSize: 56,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      color: "#124131",
      margin: 0
    }
  }, "Precise AML."), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "relative",
      fontSize: 56,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      color: "#ECA400",
      margin: "0 0 20px"
    }
  }, "Predictable Growth."), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      fontSize: 16,
      color: "#555",
      maxWidth: 560,
      margin: "0 auto 36px",
      lineHeight: 1.65
    }
  }, "Secure your financial ecosystem with intelligent, real-time threat detection powered by advanced generative AI."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 620,
      margin: "0 auto",
      background: "#fff",
      borderRadius: 18,
      padding: "28px 28px 22px",
      border: "1px solid #E8EDEC",
      boxShadow: "0 4px 32px rgba(18,65,49,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "#124131",
      marginBottom: 16,
      textAlign: "left"
    }
  }, "How can we help you today?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 16
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setQ(c.replace(/^\S+\s/, "")),
    style: {
      background: "transparent",
      border: "1px solid #D1DCDA",
      borderRadius: 9999,
      padding: "7px 14px",
      fontSize: 12,
      fontWeight: 500,
      color: "#124131",
      cursor: "pointer"
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "#F7F9F8",
      border: "1px solid #E0E8E5",
      borderRadius: 12,
      padding: "10px 10px 10px 16px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Ask Pingwire AI anything about compliance...",
    style: {
      flex: 1,
      background: "none",
      border: "none",
      outline: "none",
      fontSize: 13,
      color: "#124131",
      fontFamily: "inherit"
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "#238061",
      border: "none",
      cursor: "pointer",
      color: "#fff",
      fontSize: 14
    }
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 24,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "#999",
      fontWeight: 600,
      letterSpacing: "0.05em"
    }
  }, "\uD83D\uDD12 SOC2 COMPLIANT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "#999",
      fontWeight: 600,
      letterSpacing: "0.05em"
    }
  }, "\u2713 ISO 27001"))));
};
window.FeatureGrid = function FeatureGrid() {
  const features = [{
    eye: "Real-time",
    title: "Transaction Monitoring",
    body: "Screen transactions against 40+ global watchlists with sub-100ms response time.",
    kind: "default"
  }, {
    eye: "AI-driven",
    title: "99.7% Accuracy",
    body: "Detect risk with near-zero false positives. Every alert has an explainable trail.",
    kind: "dark"
  }, {
    eye: "One day",
    title: "Fast Onboarding",
    body: "Integrate with our REST API in under one day. SDKs for Node, Python, Go.",
    kind: "highlight"
  }, {
    eye: "Audit-ready",
    title: "Full audit trail",
    body: "Every rule change, every alert, every decision — captured and queryable.",
    kind: "default"
  }, {
    eye: "Scale",
    title: "Built for volume",
    body: "Production-tested at >10M transactions/day with predictable latency.",
    kind: "dark"
  }, {
    eye: "Trusted",
    title: "SOC2 + ISO 27001",
    body: "Independently audited. Enterprise-grade security by default.",
    kind: "highlight"
  }];
  const styleFor = k => k === "dark" ? {
    bg: "#124131",
    border: "transparent",
    eye: "#ACC3BD",
    title: "#fff",
    body: "#ACC3BD"
  } : k === "highlight" ? {
    bg: "rgba(236,164,0,0.07)",
    border: "rgba(236,164,0,0.25)",
    eye: "#8A6000",
    title: "#124131",
    body: "#999"
  } : {
    bg: "#fff",
    border: "#D1DCDA",
    eye: "#238061",
    title: "#124131",
    body: "#999"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 32px",
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#238061",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      marginBottom: 10
    }
  }, "Platform"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: "#124131",
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "Compliance as a growth engine.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, features.map(f => {
    const s = styleFor(f.kind);
    return /*#__PURE__*/React.createElement("div", {
      key: f.title,
      style: {
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: 12,
        padding: "28px 28px 30px",
        boxShadow: f.kind === "default" ? "0 1px 4px rgba(18,65,49,0.08)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: s.eye,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: 12
      }
    }, f.eye), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        color: s.title,
        marginBottom: 10,
        letterSpacing: "-0.01em"
      }
    }, f.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: s.body,
        lineHeight: 1.7
      }
    }, f.body));
  })));
};
window.Stats = function Stats() {
  const stats = [{
    n: "99.7%",
    l: "Detection accuracy"
  }, {
    n: "<100ms",
    l: "Screening response"
  }, {
    n: "40+",
    l: "Global watchlists"
  }, {
    n: "10M+",
    l: "Daily transactions"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#124131",
      padding: "56px 32px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32,
      maxWidth: 1000,
      margin: "0 auto",
      textAlign: "center"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: "#ECA400",
      letterSpacing: "-0.03em"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#ACC3BD",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginTop: 6
    }
  }, s.l)))));
};
window.CTABlock = function CTABlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      background: "#124131",
      borderRadius: 20,
      padding: "56px 40px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-30%",
      right: "-10%",
      width: 500,
      height: 500,
      borderRadius: "50%",
      background: "radial-gradient(ellipse,rgba(236,164,0,0.2) 0%,transparent 65%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#ECA400",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      marginBottom: 14
    }
  }, "Built for Good"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.02em",
      margin: "0 0 12px"
    }
  }, "See Pingwire on your data."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "rgba(255,255,255,0.75)",
      lineHeight: 1.7,
      maxWidth: 480,
      margin: "0 auto 28px"
    }
  }, "Bring a sample dataset. We'll show you real alerts in under an hour \u2014 no setup, no commitment."), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "#ECA400",
      color: "#1A1A1A",
      border: "none",
      borderRadius: 8,
      padding: "14px 28px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 0 20px rgba(236,164,0,0.35)"
    }
  }, "Book a demo \u2192"))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

// uploads/pingwire_brand_guidelines.tsx
try { (() => {
const {
  useState
} = React;
const ACCENTS = {
  marigold: {
    name: "Marigold",
    primary: "#ECA400",
    primaryText: "#1A1A1A",
    primaryRgb: "236,164,0",
    glow: "rgba(236,164,0,0.13)",
    glowEdge: "rgba(236,164,0,0.04)",
    badgeBg: "rgba(236,164,0,0.12)",
    badgeBorder: "rgba(236,164,0,0.40)",
    badgeText: "#8A6000",
    cardBg: "rgba(236,164,0,0.07)",
    cardBgDark: "rgba(236,164,0,0.10)",
    cardBorder: "rgba(236,164,0,0.25)",
    cardText: "#8A6000",
    inputFocus: "#ECA400",
    inputShadow: "rgba(236,164,0,0.20)",
    navTabBg: "#ECA400",
    navTabText: "#1A1A1A",
    dot: "#ECA400"
  },
  freshSky: {
    name: "Fresh Sky",
    primary: "#00A6ED",
    primaryText: "#FFFFFF",
    primaryRgb: "0,166,237",
    glow: "rgba(0,166,237,0.12)",
    glowEdge: "rgba(0,166,237,0.03)",
    badgeBg: "rgba(0,166,237,0.10)",
    badgeBorder: "rgba(0,166,237,0.38)",
    badgeText: "#006FA8",
    cardBg: "rgba(0,166,237,0.07)",
    cardBgDark: "rgba(0,166,237,0.12)",
    cardBorder: "rgba(0,166,237,0.22)",
    cardText: "#006FA8",
    inputFocus: "#00A6ED",
    inputShadow: "rgba(0,166,237,0.18)",
    navTabBg: "#00A6ED",
    navTabText: "#FFFFFF",
    dot: "#00A6ED"
  },
  slateIndigo: {
    name: "Slate Indigo",
    primary: "#5158BB",
    primaryText: "#FFFFFF",
    primaryRgb: "81,88,187",
    glow: "rgba(81,88,187,0.11)",
    glowEdge: "rgba(81,88,187,0.03)",
    badgeBg: "rgba(81,88,187,0.10)",
    badgeBorder: "rgba(81,88,187,0.35)",
    badgeText: "#3A3F8F",
    cardBg: "rgba(81,88,187,0.07)",
    cardBgDark: "rgba(81,88,187,0.12)",
    cardBorder: "rgba(81,88,187,0.22)",
    cardText: "#3A3F8F",
    inputFocus: "#5158BB",
    inputShadow: "rgba(81,88,187,0.18)",
    navTabBg: "#5158BB",
    navTabText: "#FFFFFF",
    dot: "#5158BB"
  },
  paleSky: {
    name: "Pale Sky",
    primary: "#C6E0FF",
    primaryText: "#1A3A5C",
    primaryRgb: "198,224,255",
    glow: "rgba(198,224,255,0.45)",
    glowEdge: "rgba(198,224,255,0.10)",
    badgeBg: "rgba(198,224,255,0.40)",
    badgeBorder: "rgba(100,160,230,0.45)",
    badgeText: "#1A5A9A",
    cardBg: "rgba(198,224,255,0.25)",
    cardBgDark: "rgba(198,224,255,0.35)",
    cardBorder: "rgba(100,160,230,0.30)",
    cardText: "#1A5A9A",
    inputFocus: "#7ABAFF",
    inputShadow: "rgba(100,160,230,0.22)",
    navTabBg: "#C6E0FF",
    navTabText: "#1A3A5C",
    dot: "#7ABAFF"
  }
};
const LIGHT = {
  pageBg: "#F9FAFA",
  surfacePrimary: "#FFFFFF",
  surfaceSecond: "#D1DCDA",
  border: "#D1DCDA",
  borderSubtle: "#E0E0E0",
  navBg: "#FFFFFF",
  navText: "#124131",
  navMuted: "#999999",
  headingText: "#124131",
  bodyText: "#000000",
  mutedText: "#999999",
  placeholderText: "#B8B8B8",
  cardBg: "#FFFFFF",
  cardBgAlt: "#F9FAFA",
  cardBgDark: "#124131",
  cardTextDark: "#FFFFFF",
  cardMutedDark: "#ACC3BD",
  inputBg: "#FFFFFF",
  inputBorder: "#E0E0E0",
  sectionLabel: "#999999",
  sectionRule: "#E0E0E0",
  ruleCardBg: "#F9FAFA",
  ruleCardBorder: "#D1DCDA",
  ruleCardHead: "#124131",
  ruleCardBody: "#999999",
  spacingBg: "#F9FAFA",
  radiusBg: "#D1DCDA",
  shadowCardBg: "#FFFFFF",
  badgeLiveBg: "rgba(18,65,49,0.08)",
  badgeLiveBorder: "rgba(18,65,49,0.2)",
  badgeLiveText: "#124131"
};
const DARK = {
  pageBg: "#0B2920",
  surfacePrimary: "#124131",
  surfaceSecond: "#1A4D3A",
  border: "rgba(172,195,189,0.15)",
  borderSubtle: "rgba(172,195,189,0.10)",
  navBg: "#124131",
  navText: "#FFFFFF",
  navMuted: "#ACC3BD",
  headingText: "#FFFFFF",
  bodyText: "#E5EBEA",
  mutedText: "#ACC3BD",
  placeholderText: "#5A8A78",
  cardBg: "#1A4D3A",
  cardBgAlt: "#124131",
  cardBgDark: "#0B2920",
  cardTextDark: "#FFFFFF",
  cardMutedDark: "#ACC3BD",
  inputBg: "rgba(255,255,255,0.06)",
  inputBorder: "rgba(172,195,189,0.25)",
  sectionLabel: "#5A8A78",
  sectionRule: "rgba(172,195,189,0.12)",
  ruleCardBg: "rgba(255,255,255,0.04)",
  ruleCardBorder: "rgba(172,195,189,0.12)",
  ruleCardHead: "#E5EBEA",
  ruleCardBody: "#ACC3BD",
  spacingBg: "rgba(255,255,255,0.03)",
  radiusBg: "#1A4D3A",
  shadowCardBg: "#1A4D3A",
  badgeLiveBg: "rgba(35,128,97,0.15)",
  badgeLiveBorder: "rgba(35,128,97,0.35)",
  badgeLiveText: "#ACC3BD"
};
const B = {
  mainGreen: "#124131",
  darkGreen: "#238061",
  lightGreen3: "#ACC3BD",
  lightGreen2: "#D1DCDA",
  brightSnow: "#F9FAFA",
  flame: "#E4572E",
  marigold: "#ECA400",
  success: "#28C76F"
};
const colorTokens = [{
  name: "Deep Forest",
  hex: "#0B2920",
  note: "Dark page background"
}, {
  name: "Main Green",
  hex: "#124131",
  note: "Brand, hero bg, nav, footer"
}, {
  name: "Dark Green",
  hex: "#238061",
  note: "CTAs, links, active states"
}, {
  name: "Success",
  hex: "#28C76F",
  note: "Confirmations, verified states"
}, {
  name: "Light Green 3",
  hex: "#ACC3BD",
  note: "Dividers, icon fills"
}, {
  name: "Light Green 2",
  hex: "#D1DCDA",
  note: "Card surfaces"
}, {
  name: "Bright Snow",
  hex: "#F9FAFA",
  note: "Page backgrounds"
}, {
  name: "Fresh Sky",
  hex: "#00A6ED",
  note: "Accent option"
}, {
  name: "Slate Indigo",
  hex: "#5158BB",
  note: "Accent option"
}, {
  name: "Pale Sky",
  hex: "#C6E0FF",
  note: "Accent option"
}, {
  name: "Black",
  hex: "#000000",
  note: "Body copy"
}, {
  name: "Gray 1",
  hex: "#E0E0E0",
  note: "Borders, rule lines"
}, {
  name: "Gray 2",
  hex: "#B8B8B8",
  note: "Placeholders"
}, {
  name: "Gray 3",
  hex: "#999999",
  note: "Secondary body text"
}, {
  name: "Marigold",
  hex: "#ECA400",
  note: "Primary CTA (accent)"
}, {
  name: "Flame",
  hex: "#E4572E",
  note: "Alerts, destructive"
}];
const typeScale = [{
  label: "Display / H1",
  size: "48px",
  weight: 800,
  lh: "1.05",
  sample: "Precise AML."
}, {
  label: "H2",
  size: "36px",
  weight: 700,
  lh: "1.15",
  sample: "Transaction Monitoring"
}, {
  label: "H3",
  size: "24px",
  weight: 600,
  lh: "1.25",
  sample: "Real-time threat detection"
}, {
  label: "H4 / Label",
  size: "18px",
  weight: 600,
  lh: "1.35",
  sample: "Feature overview"
}, {
  label: "Body Large",
  size: "16px",
  weight: 400,
  lh: "1.65",
  sample: "Secure your financial ecosystem with intelligent, real-time threat detection.",
  bodyColor: true
}, {
  label: "Body",
  size: "14px",
  weight: 400,
  lh: "1.65",
  sample: "Configure your monitoring rules with precision and a full audit trail.",
  bodyColor: true
}, {
  label: "Caption / Meta",
  size: "12px",
  weight: 600,
  lh: "1.5",
  sample: "SOC2 COMPLIANT  •  ISO 27001"
}];
const TABS = [{
  id: "cover",
  label: "Home"
}, {
  id: "narrative",
  label: "Narrative"
}, {
  id: "values",
  label: "Values"
}, {
  id: "principles",
  label: "Principles"
}, {
  id: "voice",
  label: "Tone of Voice"
}, {
  id: "logo",
  label: "Logo"
}, {
  id: "colors",
  label: "Colour"
}, {
  id: "typography",
  label: "Typography"
}, {
  id: "spacing",
  label: "Spacing"
}, {
  id: "components",
  label: "Components"
}];
function App() {
  const [theme, setTheme] = useState("light");
  const [tab, setTab] = useState("cover");
  const [accentKey, setAccent] = useState("marigold");
  const T = theme === "light" ? LIGHT : DARK;
  const A = ACCENTS[accentKey];
  const isDark = theme === "dark";
  const Section = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.14em",
      color: T.sectionLabel,
      textTransform: "uppercase",
      marginBottom: 16,
      paddingBottom: 8,
      borderBottom: `1px solid ${T.sectionRule}`
    }
  }, title), children);
  const Rule = ({
    label,
    desc,
    check
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.ruleCardBg,
      borderRadius: 8,
      padding: "14px 16px",
      border: `1px solid ${check === "yes" ? "rgba(40,199,111,0.35)" : check === "no" ? "rgba(228,87,46,0.30)" : T.ruleCardBorder}`
    }
  }, check && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      marginBottom: 6
    }
  }, check === "yes" ? "✅" : "❌"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: T.ruleCardHead,
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.ruleCardBody,
      lineHeight: 1.6
    }
  }, desc));
  const ValueCard = ({
    title,
    body,
    color
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: "24px 28px",
      border: `1px solid ${T.border}`,
      borderLeft: `4px solid ${color || B.darkGreen}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: T.headingText,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.mutedText,
      lineHeight: 1.7
    }
  }, body));
  const ToneSlider = ({
    left,
    right,
    pos
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      fontSize: 13,
      fontWeight: 500,
      color: T.mutedText,
      textAlign: "right"
    }
  }, left), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: T.border,
      borderRadius: 2,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `${pos}%`,
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: B.darkGreen,
      border: `3px solid ${isDark ? "#0B2920" : "#fff"}`,
      boxShadow: `0 0 0 2px ${B.darkGreen}`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      fontSize: 13,
      fontWeight: 500,
      color: T.mutedText
    }
  }, right));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.pageBg,
      minHeight: "100vh",
      fontFamily: "'Inter',-apple-system,sans-serif",
      color: T.bodyText,
      transition: "background 0.25s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.navBg,
      borderBottom: `2px solid ${B.darkGreen}`,
      padding: "0 32px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: !isDark ? "0 1px 4px rgba(18,65,49,0.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: B.mainGreen,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 13,
      fontWeight: 800
    }
  }, ">p")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: T.navText,
      letterSpacing: "-0.02em"
    }
  }, "Brand Guidelines")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(t => t === "light" ? "dark" : "light"),
    style: {
      background: isDark ? A.primary : B.mainGreen,
      color: isDark ? A.primaryText : "#fff",
      border: "none",
      borderRadius: 7,
      padding: "5px 12px",
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, isDark ? "☀ Light" : "☾ Dark"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      overflowX: "auto",
      paddingBottom: 1
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      background: tab === t.id ? A.navTabBg : "transparent",
      color: tab === t.id ? A.navTabText : T.navMuted,
      border: `1px solid ${tab === t.id ? A.navTabBg : T.border}`,
      borderRadius: "6px 6px 0 0",
      borderBottom: "none",
      padding: "6px 14px",
      fontSize: 11,
      fontWeight: 600,
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "all 0.15s"
    }
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "36px 40px 80px",
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, tab === "cover" && /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "75vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: isDark ? "#0B2920" : B.mainGreen,
      borderRadius: 20,
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-20%",
      right: "-5%",
      width: 600,
      height: 600,
      borderRadius: "50%",
      background: "radial-gradient(ellipse,rgba(35,128,97,0.5) 0%,transparent 65%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-30%",
      left: "-5%",
      width: 400,
      height: 400,
      borderRadius: "50%",
      background: "radial-gradient(ellipse,rgba(35,128,97,0.3) 0%,transparent 65%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.16em",
      color: B.darkGreen,
      textTransform: "uppercase",
      marginBottom: 28
    }
  }, "November 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: "#FFFFFF",
      letterSpacing: "-0.01em",
      marginBottom: 8,
      opacity: 0.6
    }
  }, ">pingwire_"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      fontWeight: 800,
      color: "#FFFFFF",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      marginBottom: 8
    }
  }, "Brand"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      fontWeight: 800,
      color: "#FFFFFF",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      marginBottom: 32
    }
  }, "Guidelines"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 2,
      background: B.darkGreen,
      borderRadius: 2,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "rgba(255,255,255,0.65)",
      lineHeight: 1.75,
      maxWidth: 520,
      marginBottom: 40
    }
  }, "This document defines how Pingwire looks, sounds, and communicates. It covers strategy, identity, voice, and the full component system. Use it to build with consistency and confidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, [{
    label: "Strategy",
    tabs: ["narrative", "values", "principles"]
  }, {
    label: "Voice",
    tabs: ["voice"]
  }, {
    label: "Identity",
    tabs: ["logo", "colors", "typography"]
  }, {
    label: "System",
    tabs: ["spacing", "components"]
  }].map(({
    label,
    tabs: t
  }) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => setTab(t[0]),
    style: {
      background: "rgba(255,255,255,0.08)",
      color: "#FFFFFF",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: 8,
      padding: "10px 20px",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      backdropFilter: "blur(4px)"
    }
  }, label, " \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 12,
      marginTop: 16
    }
  }, [{
    label: "Brand Narrative",
    desc: "Built for Good",
    tab: "narrative"
  }, {
    label: "Tone of Voice",
    desc: "4 dimensions defined",
    tab: "voice"
  }, {
    label: "Colour System",
    desc: "16 tokens",
    tab: "colors"
  }, {
    label: "Components",
    desc: "Buttons, cards, inputs",
    tab: "components"
  }].map(({
    label,
    desc,
    tab: t
  }) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => setTab(t),
    style: {
      background: T.cardBg,
      border: `1px solid ${T.border}`,
      borderRadius: 12,
      padding: "18px 20px",
      textAlign: "left",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: B.darkGreen,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText
    }
  }, desc))))), tab === "narrative" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: isDark ? "#0B2920" : B.mainGreen,
      borderRadius: 16,
      padding: "48px 52px",
      marginBottom: 40,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-30%",
      right: "-10%",
      width: 500,
      height: 500,
      borderRadius: "50%",
      background: `radial-gradient(ellipse,${A.glow} 0%,transparent 65%)`,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.14em",
      color: A.primary,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Brand Narrative"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: "#FFFFFF",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      marginBottom: 4
    }
  }, "Built for"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: A.primary,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      marginBottom: 24
    }
  }, "Good."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "rgba(255,255,255,0.75)",
      lineHeight: 1.7,
      maxWidth: 580
    }
  }, "Our Brand Narrative is a shorthand philosophy that describes what Pingwire stands for. It sums up the key benefit Pingwire provides: preventing financial crime, and having a positive impact on the world.")), /*#__PURE__*/React.createElement(Section, {
    title: "The Full Narrative"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, [{
    q: "Why we exist",
    a: "Pingwire is a platform built to create a positive impact and to protect what matters. To stop financial crime. To empower honest businesses. And to make compliance a source of strength, not a cost center."
  }, {
    q: "What we believe",
    a: "We believe in turning responsibility into momentum. When compliance is clear, fast, and grounded in real insight, it becomes a growth engine. A source of trust. A way to scale without compromise."
  }, {
    q: "What we do",
    a: "The Pingwire platform helps teams detect risk faster, prove their impact instantly, and stay ahead of threats. Because when compliance works, good companies thrive. And bad actors don't."
  }, {
    q: "Why we're here",
    a: "That's why we're here. Built for good is not a tagline. It's a direction. Everything we build, say, and do is oriented around a single outcome: a safer financial world."
  }].map(({
    q,
    a
  }) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: "22px 24px",
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: B.darkGreen,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.bodyText,
      lineHeight: 1.75
    }
  }, a)))))), tab === "values" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: T.headingText,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, "Company Values"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.mutedText,
      lineHeight: 1.7,
      maxWidth: 560
    }
  }, "Values define how Pingwire teams operate every day. They guide decisions, habits, and standards. They shape how you collaborate, build products, and support customers.")), /*#__PURE__*/React.createElement(Section, {
    title: "The Five Values"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ValueCard, {
    title: "Work Together, Own the Outcome",
    body: "We operate with clarity, responsibility, and trust. We speak up, follow through, and solve problems as one team.",
    color: B.darkGreen
  }), /*#__PURE__*/React.createElement(ValueCard, {
    title: "Customer at Heart",
    body: "We put genuine care into solving problems for others, internally and externally. The customer should always feel like we have their back.",
    color: A.primary
  }), /*#__PURE__*/React.createElement(ValueCard, {
    title: "Strive for Mastery",
    body: "We build deep expertise and sharpen it constantly. Trust is earned through precision, curiosity, and clarity.",
    color: B.darkGreen
  }), /*#__PURE__*/React.createElement(ValueCard, {
    title: "Invent Better",
    body: "We solve problems with imagination and clarity. Creativity is practical. We use it to build what doesn't exist yet and simplify what does.",
    color: A.primary
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(ValueCard, {
    title: "Efficiency",
    body: "We use time and technology wisely. Being fast when it matters. Efficiency helps us scale without waste.",
    color: B.lightGreen3
  })))), /*#__PURE__*/React.createElement(Section, {
    title: "Values vs Brand Principles"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      border: `1px solid ${T.border}`,
      overflow: "hidden"
    }
  }, [{
    label: "Audience",
    val: "Internal: team, hiring",
    brand: "External: customers, market"
  }, {
    label: "Function",
    val: "Guide behaviour and culture",
    brand: "Guide expression and tone"
  }, {
    label: "Touchpoints",
    val: "Onboarding, performance reviews",
    brand: "Marketing, design, voice"
  }, {
    label: "Example",
    val: '"Strive for mastery"',
    brand: '"Positive"'
  }].map(({
    label,
    val,
    brand
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "grid",
      gridTemplateColumns: "140px 1fr 1fr",
      padding: "14px 20px",
      borderBottom: i < 3 ? `1px solid ${T.border}` : "none",
      background: i % 2 === 0 ? T.surfacePrimary : T.cardBgAlt,
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: T.headingText
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText
    }
  }, val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: B.darkGreen,
      fontWeight: 500
    }
  }, brand)))))), tab === "principles" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: T.headingText,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, "Brand Principles"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.mutedText,
      lineHeight: 1.7,
      maxWidth: 560
    }
  }, "Brand principles have an external focus. They guide how the brand shows up in the world: visually, verbally, emotionally. They shape tone of voice, design, storytelling, and customer perception. Together they define \"Built for Good.\"")), /*#__PURE__*/React.createElement(Section, {
    title: "The Five Principles"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 16
    }
  }, [{
    title: "Driven by Purpose",
    body: "We are guided by our mission to stop financial crime. Every product decision, every line of copy, every design choice exists in service of that mission.",
    accent: B.darkGreen
  }, {
    title: "Clarity Above All",
    body: "Whether it's a dashboard or a paragraph, our job is to make the hard parts simple. Our product and voice remove friction and guesswork.",
    accent: A.primary
  }, {
    title: "Empowering",
    body: "Pingwire exists to enable customers to do more with more. Our product removes limits and scales their capabilities and impact.",
    accent: B.darkGreen
  }, {
    title: "Progressive",
    body: "We challenge how things are done, anticipate what's coming, and help the market move forward. We're not here to blend in. We're here to lead.",
    accent: A.primary
  }, {
    title: "Reliable",
    body: "We earn trust through consistency. From uptime to messaging, we show up in the same clear, confident way, every time.",
    accent: B.lightGreen3
  }].map(({
    title,
    body,
    accent
  }) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: "20px 24px",
      border: `1px solid ${T.border}`,
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: accent,
      display: "inline-block",
      marginRight: 6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.headingText
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.mutedText,
      lineHeight: 1.7
    }
  }, body)))))), tab === "voice" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: T.headingText,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, "Tone of Voice"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.mutedText,
      lineHeight: 1.7,
      maxWidth: 600
    }
  }, "This model defines how Pingwire sounds by placing communication on four clear dimensions. It gives a shared baseline for consistency and trust, ensuring tone supports clarity, credibility, and confidence across every touchpoint. Model developed by The Nielsen Norman Group.")), /*#__PURE__*/React.createElement(Section, {
    title: "The Four Dimensions"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: "32px 36px",
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement(ToneSlider, {
    left: "Funny",
    right: "Serious",
    pos: 78
  }), /*#__PURE__*/React.createElement(ToneSlider, {
    left: "Formal",
    right: "Casual",
    pos: 52
  }), /*#__PURE__*/React.createElement(ToneSlider, {
    left: "Respectful",
    right: "Irreverent",
    pos: 22
  }), /*#__PURE__*/React.createElement(ToneSlider, {
    left: "Enthusiastic",
    right: "Matter of fact",
    pos: 48
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Tone by Scenario"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      border: `1px solid ${T.border}`,
      overflow: "hidden"
    }
  }, [{
    scenario: "Onboarding",
    tone: "Serious, Respectful, Slightly Casual, Matter-of-fact",
    why: "Builds trust quickly and reduces friction during first setup."
  }, {
    scenario: "Error Messages",
    tone: "Serious, Respectful, Formal, Matter-of-fact",
    why: "Keeps users calm and focused on the next step, not the mistake."
  }, {
    scenario: "System Notifications",
    tone: "Serious, Neutral, Formal, Matter-of-fact",
    why: "Communicates outcomes clearly without creating unnecessary urgency."
  }, {
    scenario: "Tooltips / Help Copy",
    tone: "Serious, Respectful, Slightly Casual, Matter-of-fact",
    why: "Explains complex topics clearly without sounding instructional or cold."
  }, {
    scenario: "Emails",
    tone: "Serious, Respectful, Slightly Casual, Calm",
    why: "Maintains trust while sounding human and attentive."
  }, {
    scenario: "Marketing / Website",
    tone: "Serious, Respectful, Slightly Casual, Moderately Enthusiastic",
    why: "Signals leadership and purpose without overstating claims."
  }].map(({
    scenario,
    tone,
    why
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: scenario,
    style: {
      display: "grid",
      gridTemplateColumns: "160px 1fr 1fr",
      padding: "14px 20px",
      borderBottom: i < 5 ? `1px solid ${T.border}` : "none",
      background: i % 2 === 0 ? T.surfacePrimary : T.cardBgAlt,
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: T.headingText
    }
  }, scenario), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: B.darkGreen,
      fontWeight: 500,
      lineHeight: 1.6
    }
  }, tone), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.mutedText,
      lineHeight: 1.6
    }
  }, why))))), /*#__PURE__*/React.createElement(Section, {
    title: "Do's and Don'ts"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Be precise, calm, and factual.",
    desc: "Lead with information. Remove anything that doesn't add clarity or value.",
    check: "yes"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't joke about financial crime, AML, KYC, sanctions, or enforcement.",
    desc: "The subject matter is serious. Treat it that way.",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Explain complex topics in plain language.",
    desc: "Use correct regulatory terms, then immediately clarify them.",
    check: "yes"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't use alarmist, judgmental, or playful language.",
    desc: "This undermines credibility and erodes trust.",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Guide users clearly toward the next step.",
    desc: "Every piece of copy should reduce confusion, not add to it.",
    check: "yes"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't overpromise or speculate without evidence.",
    desc: "Earn confidence through accuracy.",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Signal confidence through clarity, not emotion.",
    desc: "Calm certainty outperforms hype every time in this space.",
    check: "yes"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't hide meaning behind jargon, acronyms, or buzzwords.",
    desc: "If you need to explain the term, explain it immediately.",
    check: "no"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Voice Differentiation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: "20px 22px",
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: B.darkGreen,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, "Contrast with Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T.headingText,
      marginBottom: 6
    }
  }, "Clear, confident, and human."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText,
      lineHeight: 1.65
    }
  }, "Most compliance tools sound like systems. Pingwire sounds like a partner.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: "20px 22px",
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: B.darkGreen,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, "Values-Forward"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T.headingText,
      marginBottom: 6
    }
  }, "Purpose, empathy, capability."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText,
      lineHeight: 1.65
    }
  }, "These are core traits of the brand character, visible in every sentence.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: "20px 22px",
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: B.darkGreen,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, "Not Neutral"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: T.headingText,
      marginBottom: 6
    }
  }, "A stance is character."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText,
      lineHeight: 1.65
    }
  }, "Pingwire has taken a clear position. That's where most compliance tools fall short."))))), tab === "logo" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: T.headingText,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, "Logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.mutedText,
      lineHeight: 1.7,
      maxWidth: 520
    }
  }, "Three approved versions. Use the right one for the right background. Never alter, restyle, or add effects to the logo.")), /*#__PURE__*/React.createElement(Section, {
    title: "Approved Versions"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16
    }
  }, [{
    label: "Positive",
    desc: "Green on light. Standard expression.",
    bg: "#F9FAFA",
    color: B.mainGreen,
    border: "#E0E0E0"
  }, {
    label: "Negative",
    desc: "White on green. Use on dark backgrounds.",
    bg: B.mainGreen,
    color: "#FFFFFF",
    border: "transparent"
  }, {
    label: "Black",
    desc: "Monochrome, high-contrast contexts only.",
    bg: "#F9FAFA",
    color: "#000000",
    border: "#E0E0E0"
  }].map(({
    label,
    desc,
    bg,
    color,
    border
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      background: T.cardBg,
      borderRadius: 12,
      overflow: "hidden",
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${border}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color,
      letterSpacing: "-0.03em",
      fontFamily: "Inter,sans-serif"
    }
  }, ">pingwire_")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: T.headingText,
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: T.mutedText
    }
  }, desc)))))), /*#__PURE__*/React.createElement(Section, {
    title: "Shorthand Mark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 18,
      background: B.mainGreen,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 26,
      fontWeight: 800
    }
  }, ">p")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 18,
      background: "#F9FAFA",
      border: `2px solid ${B.lightGreen2}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: B.mainGreen,
      fontSize: 26,
      fontWeight: 800
    }
  }, ">p"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText,
      lineHeight: 1.7
    }
  }, "The shorthand mark (>p) is a compact expression of identity. Use it on social profiles, presentation slides, internal tools, or tight UI contexts. Positive (dark on light) and negative (light on dark) versions only.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Never rotate or stretch the mark.",
    desc: "",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Never add text or icons inside the mark.",
    desc: "",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Maintain clear space around it.",
    desc: "",
    check: "yes"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't use in low-contrast settings.",
    desc: "",
    check: "no"
  })))), /*#__PURE__*/React.createElement(Section, {
    title: "What Not to Do"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Don't alter color, opacity, or orientation.",
    desc: "The logo must always appear in an approved color at 100% opacity in its original orientation.",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't add taglines, shadows, or effects.",
    desc: "No drop shadows, glows, gradients, outlines, or decorative elements around or over the logo.",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't use outdated or neon colors.",
    desc: "Only use approved brand palette colors. No custom or off-palette colorways.",
    check: "no"
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Don't separate the logomark from the logotype.",
    desc: "The >p mark and wordmark must always appear together unless using the shorthand mark system.",
    check: "no"
  })))), tab === "colors" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Brand Color Tokens"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
      gap: 12
    }
  }, colorTokens.map(({
    name,
    hex,
    note
  }) => {
    const light = ["#000000", "#0B2920", "#124131", "#238061", "#28C76F", "#E4572E", "#891A1C", "#00A6ED", "#5158BB"].includes(hex);
    return /*#__PURE__*/React.createElement("div", {
      key: hex,
      style: {
        borderRadius: 10,
        overflow: "hidden",
        border: `1px solid ${T.border}`,
        background: T.cardBg
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: hex,
        height: 56,
        display: "flex",
        alignItems: "flex-end",
        padding: "5px 10px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: light ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.55)",
        fontSize: 10,
        fontWeight: 700,
        fontFamily: "monospace"
      }
    }, hex)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 10px 10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: T.headingText
      }
    }, name), note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: T.mutedText,
        marginTop: 2
      }
    }, note)));
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Colour Usage Rules"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Main Green is the brand anchor.",
    desc: "#124131 for hero backgrounds, nav, footer. Never use as a CTA button fill."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Accent drives action.",
    desc: `${A.name} (${A.primary}) for primary CTAs, glows, active states, and highlight cards.`
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Dark Green for interactive elements.",
    desc: "#238061 for secondary CTAs, hover states, active nav items, and links."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Secondary palette is intentional.",
    desc: "Flame (#E4572E) for alerts and destructive actions only. Success (#28C76F) for confirmations and verified states."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Light greens define surface depth.",
    desc: "Bright Snow (#F9FAFA) page bg. #D1DCDA card surfaces. #ACC3BD borders and dividers."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Greys handle text hierarchy.",
    desc: "#000000 body, #999999 muted, #B8B8B8 placeholders, #E0E0E0 rule lines and borders."
  })))), tab === "typography" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Type Scale \u2014 Inter"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      overflow: "hidden",
      border: `1px solid ${T.border}`
    }
  }, typeScale.map(({
    label,
    size,
    weight,
    lh,
    sample,
    bodyColor
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "grid",
      gridTemplateColumns: "160px 1fr",
      padding: "20px 24px",
      borderBottom: i < typeScale.length - 1 ? `1px solid ${T.border}` : "none",
      background: i % 2 === 0 ? T.surfacePrimary : T.cardBgAlt,
      alignItems: "start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: B.darkGreen,
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.mutedText,
      marginTop: 4,
      fontFamily: "monospace"
    }
  }, size, " \xB7 ", weight, " \xB7 ", lh, "lh")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size,
      fontWeight: weight,
      lineHeight: lh,
      color: bodyColor ? T.bodyText : T.headingText
    }
  }, sample))))), /*#__PURE__*/React.createElement(Section, {
    title: "Typography Rules"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "One family: Inter.",
    desc: "Weights 400 to 800. No secondary typeface. No serif. No system fonts in brand contexts."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Headlines in brand color.",
    desc: "Main Green (#124131) on light backgrounds. White on dark or green backgrounds."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "No italic in UI.",
    desc: "Use weight changes for emphasis. Italic breaks rhythm in data-dense layouts."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Minimum body size: 14px.",
    desc: "Body text at 14px minimum with a 1.65 line height for readability in dense product contexts."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Caption always 12px weight 600.",
    desc: "Used for compliance badges, metadata labels, and secondary identifiers."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Letter-spacing on caps labels.",
    desc: "Use 0.08 to 0.14em letter-spacing on uppercase labels and section headers."
  })))), tab === "spacing" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Spacing Scale \u2014 4px Base Unit"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.spacingBg,
      borderRadius: 12,
      padding: 24,
      border: `1px solid ${T.border}`
    }
  }, [4, 8, 12, 16, 24, 32, 48, 64, 96].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      fontSize: 12,
      fontWeight: 700,
      color: T.headingText,
      fontFamily: "monospace"
    }
  }, s, "px"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: s,
      height: 16,
      background: A.primary,
      borderRadius: 3,
      minWidth: 3,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: T.mutedText
    }
  }, {
    4: "Icon gap, tight inline labels",
    8: "Badge padding, inline spacing",
    12: "Button padding-y, input internal",
    16: "Button padding-x, card padding sm",
    24: "Card padding, component gap",
    32: "Card gap, row spacing",
    48: "Section padding, column gap",
    64: "Hero padding, section gap",
    96: "Page section margin"
  }[s]))))), /*#__PURE__*/React.createElement(Section, {
    title: "Border Radius"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }
  }, [["sm 4px", 4], ["md 8px", 8], ["lg 12px", 12], ["xl 16px", 16], ["Pill", 9999]].map(([name, r]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      background: T.radiusBg,
      border: `2px solid ${A.primary}`,
      borderRadius: r === 9999 ? 36 : r,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 700,
      color: T.headingText
    }
  }, r === 9999 ? "∞" : r), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.mutedText,
      marginTop: 6
    }
  }, name))))), /*#__PURE__*/React.createElement(Section, {
    title: "Shadow System"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }
  }, [["Card", "0 1px 4px rgba(18,65,49,0.10)"], ["Elevated", "0 4px 16px rgba(18,65,49,0.14)"], ["Modal", "0 20px 48px rgba(18,65,49,0.22)"], ["CTA Glow", `0 0 20px rgba(${A.primaryRgb},0.40)`]].map(([name, shadow]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: T.shadowCardBg,
      borderRadius: 10,
      padding: "20px 24px",
      boxShadow: shadow,
      border: `1px solid ${T.border}`,
      minWidth: 130,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: T.headingText
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: T.mutedText,
      marginTop: 6,
      wordBreak: "break-all",
      fontFamily: "monospace"
    }
  }, shadow))))), /*#__PURE__*/React.createElement(Section, {
    title: "Layout Modes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    label: "Heroic",
    desc: "Full-bleed imagery. Strong contrast with dark overlay. Maximum visual impact for campaign moments."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Flood Fill",
    desc: "Content-first approach using the brand palette. No photography. Typography and colour do the work."
  }), /*#__PURE__*/React.createElement(Rule, {
    label: "Split",
    desc: "Pairs imagery with copy in a two-column grid. Balances visual and informational content."
  })))), tab === "components" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Buttons"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "center",
      background: T.cardBgAlt,
      padding: 24,
      borderRadius: 12,
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: A.primary,
      color: A.primaryText,
      border: "none",
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: `0 0 20px rgba(${A.primaryRgb},0.35)`
    }
  }, "Primary CTA"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: B.mainGreen,
      color: "#FFFFFF",
      border: "none",
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Dark Primary"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      color: T.headingText,
      border: `1.5px solid ${isDark ? "rgba(255,255,255,0.4)" : B.mainGreen}`,
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Secondary"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      color: A.primary,
      border: `1.5px solid ${A.primary}`,
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Outlined"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: B.success,
      color: "#FFFFFF",
      border: "none",
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 0 18px rgba(40,199,111,0.35)"
    }
  }, "Success"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: B.flame,
      color: "#FFFFFF",
      border: "none",
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Destructive"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: A.primary,
      color: A.primaryText,
      border: "none",
      borderRadius: 6,
      padding: "7px 16px",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Small"), /*#__PURE__*/React.createElement("button", {
    disabled: true,
    style: {
      background: T.border,
      color: T.mutedText,
      border: `1px solid ${T.border}`,
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: 14,
      fontWeight: 600,
      cursor: "not-allowed"
    }
  }, "Disabled"))), /*#__PURE__*/React.createElement(Section, {
    title: "Badges & Tags"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center",
      padding: "20px 0"
    }
  }, [{
    label: "NEXT-GEN AML",
    bg: A.badgeBg,
    border: A.badgeBorder,
    color: A.badgeText
  }, {
    label: "SOC2 Compliant",
    bg: "rgba(35,128,97,0.12)",
    border: "rgba(35,128,97,0.35)",
    color: B.darkGreen
  }, {
    label: "ISO 27001",
    bg: "rgba(35,128,97,0.12)",
    border: "rgba(35,128,97,0.35)",
    color: B.darkGreen
  }, {
    label: "✓ Verified",
    bg: "rgba(40,199,111,0.12)",
    border: "rgba(40,199,111,0.40)",
    color: "#1A7A45"
  }, {
    label: "● Live",
    bg: T.badgeLiveBg,
    border: T.badgeLiveBorder,
    color: T.badgeLiveText
  }, {
    label: "Beta",
    bg: isDark ? "rgba(172,195,189,0.12)" : B.lightGreen2,
    border: isDark ? "rgba(172,195,189,0.25)" : B.lightGreen3,
    color: isDark ? B.lightGreen3 : B.mainGreen
  }, {
    label: "Alert",
    bg: "rgba(228,87,46,0.10)",
    border: "rgba(228,87,46,0.35)",
    color: B.flame
  }].map(({
    label,
    bg,
    border,
    color
  }) => /*#__PURE__*/React.createElement("span", {
    key: label,
    style: {
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 9999,
      padding: "4px 12px",
      fontSize: 11,
      fontWeight: 700,
      color,
      letterSpacing: "0.05em"
    }
  }, label)))), /*#__PURE__*/React.createElement(Section, {
    title: "Input Fields"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 420
    }
  }, [{
    label: "Default",
    val: "",
    ph: "you@company.com",
    border: T.inputBorder,
    shadow: "none",
    bg: T.inputBg,
    labelColor: T.headingText
  }, {
    label: "Focused",
    val: "acme-corp.io",
    ph: "",
    border: A.inputFocus,
    shadow: `0 0 0 3px ${A.inputShadow}`,
    bg: T.inputBg,
    labelColor: T.headingText
  }, {
    label: "Success",
    val: "acme-corp.io",
    ph: "",
    border: B.success,
    shadow: "0 0 0 3px rgba(40,199,111,0.18)",
    bg: isDark ? "rgba(40,199,111,0.08)" : "rgba(40,199,111,0.04)",
    labelColor: "#1A7A45",
    success: true
  }, {
    label: "Error",
    val: "",
    ph: "Invalid value",
    border: B.flame,
    shadow: "none",
    bg: isDark ? "rgba(228,87,46,0.08)" : "rgba(228,87,46,0.04)",
    labelColor: B.flame,
    error: true
  }].map(({
    label,
    val,
    ph,
    border,
    shadow,
    bg,
    labelColor,
    error,
    success
  }) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: labelColor,
      display: "block",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    defaultValue: val,
    placeholder: ph,
    style: {
      width: "100%",
      background: bg,
      border: `1.5px solid ${border}`,
      borderRadius: 8,
      padding: "11px 14px",
      fontSize: 14,
      color: T.bodyText,
      outline: "none",
      fontFamily: "Inter,sans-serif",
      boxSizing: "border-box",
      boxShadow: shadow
    }
  }), success && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#1A7A45",
      marginTop: 4,
      fontWeight: 500
    }
  }, "\u2713 Domain verified successfully."), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: B.flame,
      marginTop: 4,
      fontWeight: 500
    }
  }, "This field is required."))))), /*#__PURE__*/React.createElement(Section, {
    title: "Cards"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBg,
      borderRadius: 12,
      padding: 24,
      border: `1px solid ${T.border}`,
      boxShadow: !isDark ? "0 1px 4px rgba(18,65,49,0.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: B.darkGreen,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, "Default Card"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.headingText,
      marginBottom: 8
    }
  }, "Real-time Screening"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText,
      lineHeight: 1.6
    }
  }, "Screen transactions against 40+ global watchlists with sub-100ms response time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.cardBgDark,
      borderRadius: 12,
      padding: 24,
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: B.lightGreen3,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, "Dark Card"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.cardTextDark,
      marginBottom: 8
    }
  }, "99.7% Accuracy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.cardMutedDark,
      lineHeight: 1.6
    }
  }, "AI-driven detection with near-zero false positives.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: isDark ? A.cardBgDark : A.cardBg,
      borderRadius: 12,
      padding: 24,
      border: `1px solid ${A.cardBorder}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: A.cardText,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, "Highlight Card"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.headingText,
      marginBottom: 8
    }
  }, "Fast Onboarding"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText,
      lineHeight: 1.6
    }
  }, "Integrate with our REST API in under one day.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: isDark ? "rgba(40,199,111,0.10)" : "rgba(40,199,111,0.07)",
      borderRadius: 12,
      padding: 24,
      border: "1px solid rgba(40,199,111,0.30)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#1A7A45",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 10
    }
  }, "Success Card"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.headingText,
      marginBottom: 8
    }
  }, "Onboarding Complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.mutedText,
      lineHeight: 1.6
    }
  }, "Your AML configuration is live and screening transactions."))))), tab === "patterns" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Navigation Bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.navBg,
      borderRadius: 10,
      border: `1px solid ${T.border}`,
      padding: "0 24px",
      height: 58,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: !isDark ? "0 1px 4px rgba(18,65,49,0.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: T.navText
    }
  }, ">pingwire_"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, ["Home", "Solutions", "Developers", "Resources", "About"].map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    style: {
      background: "transparent",
      color: T.navMuted,
      border: "none",
      padding: "6px 12px",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      borderRadius: 6
    }
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      color: T.navText,
      border: "none",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Sign In"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: A.primary,
      color: A.primaryText,
      border: "none",
      borderRadius: 7,
      padding: "7px 18px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Contact us")))), /*#__PURE__*/React.createElement(Section, {
    title: "Hero Section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: isDark ? "#0B2920" : "#F9FAFA",
      borderRadius: 14,
      padding: "48px 48px 52px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      border: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "0%",
      left: "50%",
      transform: "translate(-50%,0%)",
      width: 700,
      height: 360,
      borderRadius: "50%",
      background: `radial-gradient(ellipse,${A.glow} 0%,${A.glowEdge} 50%,transparent 72%)`,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: A.badgeBg,
      border: `1px solid ${A.badgeBorder}`,
      borderRadius: 9999,
      padding: "4px 14px",
      fontSize: 11,
      fontWeight: 700,
      color: A.badgeText,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 20,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: A.dot,
      display: "inline-block"
    }
  }), "Next-Gen AML"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      fontWeight: 800,
      lineHeight: 1.05,
      marginBottom: 6,
      letterSpacing: "-0.03em",
      color: isDark ? "#FFFFFF" : B.mainGreen,
      position: "relative"
    }
  }, "Precise AML."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      fontWeight: 800,
      lineHeight: 1.05,
      color: A.primary,
      marginBottom: 16,
      letterSpacing: "-0.03em",
      position: "relative"
    }
  }, "Predictable Growth."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: isDark ? B.lightGreen3 : "#555555",
      maxWidth: 540,
      margin: "0 auto 32px",
      lineHeight: 1.65,
      position: "relative"
    }
  }, "Secure your financial ecosystem with intelligent, real-time threat detection powered by advanced generative AI."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 600,
      margin: "0 auto",
      background: isDark ? "#124131" : "#FFFFFF",
      borderRadius: 18,
      padding: "28px 28px 20px",
      border: `1px solid ${isDark ? "rgba(172,195,189,0.15)" : "#E8EDEC"}`,
      boxShadow: isDark ? "0 4px 32px rgba(0,0,0,0.3)" : "0 4px 32px rgba(18,65,49,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.headingText,
      marginBottom: 16
    }
  }, "How can we help you today?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      justifyContent: "center",
      marginBottom: 16
    }
  }, ["⚡ Transaction monitoring", "🔗 Integrations", "▷ Does Pingwire fit us?"].map(label => /*#__PURE__*/React.createElement("button", {
    key: label,
    style: {
      background: "transparent",
      border: `1px solid ${isDark ? "rgba(172,195,189,0.25)" : "#D1DCDA"}`,
      borderRadius: 9999,
      padding: "7px 14px",
      fontSize: 12,
      fontWeight: 500,
      color: T.bodyText,
      cursor: "pointer"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: isDark ? "rgba(255,255,255,0.06)" : "#F7F9F8",
      border: `1px solid ${isDark ? "rgba(172,195,189,0.2)" : "#E0E8E5"}`,
      borderRadius: 12,
      padding: "10px 10px 10px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13,
      color: T.placeholderText,
      textAlign: "left"
    }
  }, "Ask Pingwire AI anything about compliance..."), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: B.darkGreen,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FFFFFF",
      fontSize: 14
    }
  }, "\u25B6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 20,
      marginTop: 14
    }
  }, ["🔒 SOC2 Compliant", "✔ ISO 27001"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 11,
      color: T.mutedText,
      fontWeight: 600
    }
  }, t)))))), /*#__PURE__*/React.createElement(Section, {
    title: "Photography Guidelines"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16
    }
  }, [{
    type: "Close Up",
    desc: "Cropped mid-chest. Subject facing camera. Light and shadow balanced for depth."
  }, {
    type: "Half-Body",
    desc: "Relaxed posture. Body facing camera or slightly turned away. Balanced composition."
  }, {
    type: "Wide",
    desc: "Cropped mid-chest. Camera-facing or slightly turned. Background adapted to Pingwire green gradient in post."
  }].map(({
    type,
    desc
  }) => /*#__PURE__*/React.createElement("div", {
    key: type,
    style: {
      background: T.cardBg,
      borderRadius: 12,
      border: `1px solid ${T.border}`,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg, ${B.mainGreen}, ${B.darkGreen})`,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32
    }
  }, "\uD83D\uDC64")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: T.headingText,
      marginBottom: 6
    }
  }, type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.mutedText,
      lineHeight: 1.65
    }
  }, desc)))))))));
}
Object.assign(__ds_scope, { App });
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/pingwire_brand_guidelines.tsx", error: String((e && e.message) || e) }); }

__ds_ns.App = __ds_scope.App;

})();
