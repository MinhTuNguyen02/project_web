/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-unused-expressions */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "2.2.3"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"),
            b.text = a,
            d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (d = e.call(arguments, 2),
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && f.parentNode && (this.length = 1,
            this[0] = f),
            this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || n.uniqueSort(e),
            D.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = g = [],
                c || (f = c = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J),
        a.removeEventListener("load", J),
        n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(),
        "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J),
        a.addEventListener("load", J))),
        I.promise(b)
    }
    ,
    n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                K(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1,
    M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }),
            a[this.expando]
        },
        cache: function(a) {
            if (!L(a))
                return {};
            var b = a[this.expando];
            return b || (b = {},
            L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b)
                e[b] = c;
            else
                for (d in b)
                    e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b)
                    this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                    b in f ? d = [b, e] : (d = e,
                    d = d in f ? [d] : d.match(G) || [])),
                    c = d.length;
                    while (c--)
                        delete f[d[c]]
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M
      , O = new M
      , P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f),
                1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()),
                    void 0 !== c)
                        return c;
                    if (d = n.camelCase(a),
                    c = O.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = R(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    d = n.camelCase(a),
                    this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b),
                        a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = N.get(a, b),
            c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = N.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i")
      , U = ["Top", "Right", "Bottom", "Left"]
      , V = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var X = /^(?:checkbox|radio)$/i
      , Y = /<([\w:-]+)/
      , Z = /^$|\/(?:java|ecma)script/i
      , $ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $.optgroup = $.option,
    $.tbody = $.tfoot = $.colgroup = $.caption = $.thead,
    $.th = $.td;
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o],
            f || 0 === f)
                if ("object" === n.type(f))
                    n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                    h = (Y.exec(f) || ["", ""])[1].toLowerCase(),
                    i = $[h] || $._default,
                    g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2],
                    k = i[0];
                    while (k--)
                        g = g.lastChild;
                    n.merge(m, g.childNodes),
                    g = l.firstChild,
                    g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
        o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f),
            g = _(l.appendChild(f), "script"),
            j && aa(g),
            c) {
                k = 0;
                while (f = g[k++])
                    Z.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function() {
        var a = d.createDocumentFragment()
          , b = a.appendChild(d.createElement("div"))
          , c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/
      , ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0
    }
    function ha() {
        return !1
    }
    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = ha;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d,
                e = c.documentElement,
                f = c.body,
                a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga,
            a && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga,
            a && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga,
            a && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = ha),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , la = /<script|<style|<link/i
      , ma = /checked\s*(?:[^=]|=\s*.checked.)/i
      , na = /^true\/(.*)/
      , oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a),
            g = N.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a),
            i = n.extend({}, h),
            O.set(b, i))
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                ua(f, b, c, d)
            });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d),
        g = e.firstChild,
        1 === e.childNodes.length && (e = g),
        g || d)) {
            for (h = n.map(_(e, "script"), qa),
            i = h.length; o > m; m++)
                j = e,
                m !== p && (j = n.clone(j, !0, !0),
                i && n.merge(h, _(j, "script"))),
                c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                n.map(h, ra),
                m = 0; i > m; m++)
                    j = h[m],
                    Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(_(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h),
                f = _(a),
                d = 0,
                e = f.length; e > d; d++)
                    ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a),
                    g = g || _(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        sa(f[d], g[d]);
                else
                    sa(a, h);
            return g = _(h, "script"),
            g.length > 0 && aa(g, !i && _(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }),
    n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(_(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(_(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
                c = h === f ? this : this.clone(!0),
                n(e[h])[b](c),
                g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function za(a) {
        var b = d
          , c = xa[a];
        return c || (c = ya(a, b),
        "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = wa[0].contentDocument,
        b.write(),
        b.close(),
        c = ya(a, b),
        wa.detach()),
        xa[a] = c),
        c
    }
    var Aa = /^margin/
      , Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i")
      , Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
      , Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Ea = d.documentElement;
    !function() {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box",
            h.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === h.style.backgroundClip,
            g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            g.appendChild(h);
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                h.innerHTML = "",
                Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top,
                f = "2px" === d.marginLeft,
                c = "4px" === d.width,
                h.style.marginRight = "50%",
                e = "4px" === d.marginRight,
                Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(),
                    b
                },
                boxSizingReliable: function() {
                    return null == c && i(),
                    c
                },
                pixelMarginRight: function() {
                    return null == c && i(),
                    e
                },
                reliableMarginLeft: function() {
                    return null == c && i(),
                    f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    h.style.width = "1px",
                    Ea.appendChild(g),
                    b = !parseFloat(a.getComputedStyle(c).marginRight),
                    Ea.removeChild(g),
                    h.removeChild(c),
                    b
                }
            })
        }
    }();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 !== g ? g + "" : g
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/
      , Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ka = ["Webkit", "O", "Moz", "ms"]
      , La = d.createElement("div").style;
    function Ma(a) {
        if (a in La)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
          , c = Ka.length;
        while (c--)
            if (a = Ka[c] + b,
            a in La)
                return a
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + U[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }
    function Pa(b, c, e) {
        var f = !0
          , g = "width" === c ? b.offsetWidth : b.offsetHeight
          , h = Ca(b)
          , i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])),
        0 >= g || null == g) {
            if (g = Fa(b, c, h),
            (0 > g || null == g) && (g = b.style[c]),
            Ba.test(g))
                return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]),
            g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = N.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d),
            "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Fa(a, b, d)),
            "normal" === e && b in Ja && (e = Ja[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                c = n.css(a, b)),
                Na(a, c, g)
            }
        }
    }),
    n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }),
    n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a,b,c,d,e)
    }
    n.Tween = Ra,
    Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
            this
        }
    },
    Ra.prototype.init.prototype = Ra.prototype,
    Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = Ra.prototype.init,
    n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }),
        Sa = n.now()
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = U[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Ua.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = N.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ya(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, Ya, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                _a.tweeners[c] = _a.tweeners[c] || [],
                _a.tweeners[c].unshift(b)
        },
        prefilters: [Za],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = N.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        Sa = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(Ta),
        Ta = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = d.createElement("input")
          , b = d.createElement("select")
          , c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        l.checkOn = "" !== a.value,
        l.optSelected = c.selected,
        b.disabled = !0,
        l.optDisabled = !c.disabled,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        l.radioValue = "t" === a.value
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        }
    }),
    ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b],
            bb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            bb[b] = f),
            e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i
      , db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = fb(this),
                    b && N.set(this, "__className__", b),
                    this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var gb = /\r/g
      , hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            l = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q,
                    ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode)
                        p.push(h),
                        i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : o.bindType || q,
                    m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"),
                    m && m.apply(h, c),
                    m = l && h[l],
                    m && m.apply && L(h) && (b.result = m.apply(h, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l],
                i && (e[l] = null),
                n.event.triggered = q,
                e[q](),
                n.event.triggered = void 0,
                i && (e[l] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b),
            d.isDefaultPrevented() && c.preventDefault()
        }
    }),
    n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    l.focusin = "onfocusin"in a,
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b);
                e || d.addEventListener(a, c, !0),
                N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0),
                N.remove(d, b))
            }
        }
    });
    var jb = a.location
      , kb = n.now()
      , lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var mb = /#.*$/
      , nb = /([?&])_=[^&]*/
      , ob = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , qb = /^(?:GET|HEAD)$/
      , rb = /^\/\//
      , sb = {}
      , tb = {}
      , ub = "*/".concat("*")
      , vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function xb(a, b, c, d) {
        var e = {}
          , f = a === tb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a,
                    t[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > v)
                            for (b in a)
                                s[b] = [s[b], a[b]];
                        else
                            x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b),
                    z(0, b),
                    this
                }
            };
            if (q.promise(x).complete = r.add,
            x.success = x.done,
            x.error = x.fail,
            m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"),
            m.type = c.method || c.type || m.method || m.type,
            m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""],
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url,
                    j.href = j.href,
                    m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)),
            xb(sb, m, c, x),
            2 === v)
                return x;
            k = n.event && m.global,
            k && 0 === n.active++ && n.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !qb.test(m.type),
            f = m.url,
            m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data,
            delete m.data),
            m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType),
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
                return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1,
                k && p.trigger("ajaxSend", [x, m]),
                2 === v)
                    return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1,
                    e.send(t, z)
                } catch (y) {
                    if (!(2 > v))
                        throw y;
                    z(-1, y)
                }
            } else
                z(-1, "No Transport");
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2,
                i && a.clearTimeout(i),
                e = void 0,
                g = h || "",
                x.readyState = b > 0 ? 4 : 0,
                j = b >= 200 && 300 > b || 304 === b,
                d && (u = zb(m, x, d)),
                u = Ab(m, u, x, j),
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"),
                w && (n.lastModified[f] = w),
                w = x.getResponseHeader("etag"),
                w && (n.etag[f] = w)),
                204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state,
                l = u.data,
                t = u.error,
                j = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                x.status = b,
                x.statusText = (c || y) + "",
                j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
                x.statusCode(s),
                s = void 0,
                k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
                r.fireWith(o, [x, y]),
                k && (p.trigger("ajaxComplete", [x, m]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    }
    ;
    var Bb = /%20/g
      , Cb = /\[\]$/
      , Db = /\r?\n/g
      , Eb = /^(?:submit|button|image|reset|file)$/i
      , Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var Hb = {
        0: 200,
        1223: 204
    }
      , Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials"in Ib,
    l.ajax = Ib = !!Ib,
    n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
                    for (g in b.xhrFields)
                        h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e)
                    h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                        "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }
                ,
                h.onload = c(),
                d = h.onerror = c("error"),
                void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }
                ,
                c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c)
                        throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = []
      , Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Jb.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb)
            return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (e = d.getBoundingClientRect(),
                c = Mb(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Ea
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b),
            Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }),
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery
      , Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob),
        b && a.jQuery === n && (a.jQuery = Nb),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
              , e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))),
            e.forEach(function(t) {
                var e, n, i;
                e = o,
                i = r[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g,
    u = u && u.hasOwnProperty("default") ? u.default : u;
    var e = "transitionend";
    function n(t) {
        var e = this
          , n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t),
        this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()),
            document.getElementById(t); )
                ;
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = g(t).css("transition-duration")
              , n = g(t).css("transition-delay")
              , i = parseFloat(e)
              , o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = e[i]
                      , s = r && _.isElement(r) ? "element" : (a = r,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n,
    g.event.special[_.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (g(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert"
      , r = "bs.alert"
      , a = "." + r
      , c = g.fn[o]
      , h = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }
      , f = "alert"
      , d = "fade"
      , m = "show"
      , p = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, r),
            this._element = null
        }
        ,
        t._getRootElement = function(t) {
            var e = _.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = g(t).closest("." + f)[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(t) {
            var e = g.Event(h.CLOSE);
            return g(t).trigger(e),
            e
        }
        ,
        t._removeElement = function(e) {
            var n = this;
            if (g(e).removeClass(m),
            g(e).hasClass(d)) {
                var t = _.getTransitionDurationFromElement(e);
                g(e).one(_.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(t) {
            g(t).detach().trigger(h.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(r);
                e || (e = new i(this),
                t.data(r, e)),
                "close" === n && e[n](this)
            })
        }
        ,
        i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
    g.fn[o] = p._jQueryInterface,
    g.fn[o].Constructor = p,
    g.fn[o].noConflict = function() {
        return g.fn[o] = c,
        p._jQueryInterface
    }
    ;
    var v = "button"
      , y = "bs.button"
      , E = "." + y
      , C = ".data-api"
      , T = g.fn[v]
      , S = "active"
      , b = "btn"
      , I = "focus"
      , D = '[data-toggle^="button"]'
      , w = '[data-toggle="buttons"]'
      , A = 'input:not([type="hidden"])'
      , N = ".active"
      , O = ".btn"
      , k = {
        CLICK_DATA_API: "click" + E + C,
        FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
    }
      , P = function() {
        function n(t) {
            this._element = t
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0
              , e = !0
              , n = g(this._element).closest(w)[0];
            if (n) {
                var i = this._element.querySelector(A);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(S))
                            t = !1;
                        else {
                            var o = n.querySelector(N);
                            o && g(o).removeClass(S)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(S),
                        g(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)),
            t && g(this._element).toggleClass(S)
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, y),
            this._element = null
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(y);
                t || (t = new n(this),
                g(this).data(y, t)),
                "toggle" === e && t[e]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        n
    }();
    g(document).on(k.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)),
        P._jQueryInterface.call(g(e), "toggle")
    }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }),
    g.fn[v] = P._jQueryInterface,
    g.fn[v].Constructor = P,
    g.fn[v].noConflict = function() {
        return g.fn[v] = T,
        P._jQueryInterface
    }
    ;
    var L = "carousel"
      , j = "bs.carousel"
      , H = "." + j
      , R = ".data-api"
      , x = g.fn[L]
      , F = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , W = "next"
      , q = "prev"
      , M = "left"
      , K = "right"
      , Q = {
        SLIDE: "slide" + H,
        SLID: "slid" + H,
        KEYDOWN: "keydown" + H,
        MOUSEENTER: "mouseenter" + H,
        MOUSELEAVE: "mouseleave" + H,
        TOUCHSTART: "touchstart" + H,
        TOUCHMOVE: "touchmove" + H,
        TOUCHEND: "touchend" + H,
        POINTERDOWN: "pointerdown" + H,
        POINTERUP: "pointerup" + H,
        DRAG_START: "dragstart" + H,
        LOAD_DATA_API: "load" + H + R,
        CLICK_DATA_API: "click" + H + R
    }
      , B = "carousel"
      , V = "active"
      , Y = "slide"
      , z = "carousel-item-right"
      , X = "carousel-item-left"
      , $ = "carousel-item-next"
      , G = "carousel-item-prev"
      , J = "pointer-event"
      , Z = ".active"
      , tt = ".active.carousel-item"
      , et = ".carousel-item"
      , nt = ".carousel-item img"
      , it = ".carousel-item-next, .carousel-item-prev"
      , ot = ".carousel-indicators"
      , rt = "[data-slide], [data-slide-to]"
      , st = '[data-ride="carousel"]'
      , at = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , lt = function() {
        function r(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(ot),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var t = r.prototype;
        return t.next = function() {
            this._isSliding || this._slide(W)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(q)
        }
        ,
        t.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(it) && (_.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(tt);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    g(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = n < t ? W : q;
                    this._slide(i, this._items[t])
                }
        }
        ,
        t.dispose = function() {
            g(this._element).off(H),
            g.removeData(this._element, j),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, F, t),
            _.typeCheckConfig(L, t, U),
            t
        }
        ,
        t._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                0 < e && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(Q.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        t._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var e = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                    n._handleSwipe(),
                    "hover" === n._config.pause && (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    n.touchTimeout = setTimeout(function(t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval))
                };
                g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                    return t.preventDefault()
                }),
                this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                    return e(t)
                }),
                g(this._element).on(Q.POINTERUP, function(t) {
                    return i(t)
                }),
                this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                    return e(t)
                }),
                g(this._element).on(Q.TOUCHMOVE, function(t) {
                    var e;
                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                }),
                g(this._element).on(Q.TOUCHEND, function(t) {
                    return i(t)
                }))
            }
        }
        ,
        t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [],
            this._items.indexOf(t)
        }
        ,
        t._getItemByDirection = function(t, e) {
            var n = t === W
              , i = t === q
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + (t === q ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector(tt))
              , o = g.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return g(this._element).trigger(o),
            o
        }
        ,
        t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                g(e).removeClass(V);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && g(n).addClass(V)
            }
        }
        ,
        t._slide = function(t, e) {
            var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = t === W ? (n = X,
            i = $,
            M) : (n = z,
            i = G,
            K),
            l && g(l).hasClass(V))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(l);
                var u = g.Event(Q.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (g(this._element).hasClass(Y)) {
                    g(l).addClass(i),
                    _.reflow(l),
                    g(s).addClass(n),
                    g(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    f) : this._config.defaultInterval || this._config.interval;
                    var d = _.getTransitionDurationFromElement(s);
                    g(s).one(_.TRANSITION_END, function() {
                        g(l).removeClass(n + " " + i).addClass(V),
                        g(s).removeClass(V + " " + i + " " + n),
                        r._isSliding = !1,
                        setTimeout(function() {
                            return g(r._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else
                    g(s).removeClass(V),
                    g(l).addClass(V),
                    this._isSliding = !1,
                    g(this._element).trigger(u);
                h && this.cycle()
            }
        }
        ,
        r._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this).data(j)
                  , e = l({}, F, g(this).data());
                "object" == typeof i && (e = l({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new r(this,e),
                g(this).data(j, t)),
                "number" == typeof i)
                    t.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else
                    e.interval && e.ride && (t.pause(),
                    t.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
                var n = g(e)[0];
                if (n && g(n).hasClass(B)) {
                    var i = l({}, g(n).data(), g(this).data())
                      , o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1),
                    r._jQueryInterface.call(g(n), i),
                    o && g(n).data(j).to(o),
                    t.preventDefault()
                }
            }
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return F
            }
        }]),
        r
    }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
    g(window).on(Q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            lt._jQueryInterface.call(i, i.data())
        }
    }),
    g.fn[L] = lt._jQueryInterface,
    g.fn[L].Constructor = lt,
    g.fn[L].noConflict = function() {
        return g.fn[L] = x,
        lt._jQueryInterface
    }
    ;
    var ct = "collapse"
      , ht = "bs.collapse"
      , ut = "." + ht
      , ft = g.fn[ct]
      , dt = {
        toggle: !0,
        parent: ""
    }
      , gt = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , _t = {
        SHOW: "show" + ut,
        SHOWN: "shown" + ut,
        HIDE: "hide" + ut,
        HIDDEN: "hidden" + ut,
        CLICK_DATA_API: "click" + ut + ".data-api"
    }
      , mt = "show"
      , pt = "collapse"
      , vt = "collapsing"
      , yt = "collapsed"
      , Et = "width"
      , Ct = "height"
      , Tt = ".show, .collapsing"
      , St = '[data-toggle="collapse"]'
      , bt = function() {
        function a(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = _.getSelectorFromElement(r)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = a.prototype;
        return t.toggle = function() {
            g(this._element).hasClass(mt) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
            })).length && (t = null),
            !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                var i = g.Event(_t.SHOW);
                if (g(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                    e || g(t).data(ht, null));
                    var o = this._getDimension();
                    g(this._element).removeClass(pt).addClass(vt),
                    this._element.style[o] = 0,
                    this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                      , s = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        g(n._element).removeClass(vt).addClass(pt).addClass(mt),
                        n._element.style[o] = "",
                        n.setTransitioning(!1),
                        g(n._element).trigger(_t.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[o] = this._element[r] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                var e = g.Event(_t.HIDE);
                if (g(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    _.reflow(this._element),
                    g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var o = 0; o < i; o++) {
                            var r = this._triggerArray[o]
                              , s = _.getSelectorFromElement(r);
                            if (null !== s)
                                g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        t.setTransitioning(!1),
                        g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        t.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, ht),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(t) {
            return (t = l({}, dt, t)).toggle = Boolean(t.toggle),
            _.typeCheckConfig(ct, t, gt),
            t
        }
        ,
        t._getDimension = function() {
            return g(this._element).hasClass(Et) ? Et : Ct
        }
        ,
        t._getParent = function() {
            var t, n = this;
            _.isElement(this._config.parent) ? (t = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(t.querySelectorAll(e));
            return g(i).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(t, e) {
            var n = g(t).hasClass(mt);
            e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
        }
        ,
        a._getTargetFromElement = function(t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(ht)
                  , n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || (e = new a(this,n),
                t.data(ht, e)),
                "string" == typeof i) {
                    if ("undefined" == typeof e[i])
                        throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return dt
            }
        }]),
        a
    }();
    g(document).on(_t.CLICK_DATA_API, St, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this)
          , e = _.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this)
              , e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e)
        })
    }),
    g.fn[ct] = bt._jQueryInterface,
    g.fn[ct].Constructor = bt,
    g.fn[ct].noConflict = function() {
        return g.fn[ct] = ft,
        bt._jQueryInterface
    }
    ;
    var It = "dropdown"
      , Dt = "bs.dropdown"
      , wt = "." + Dt
      , At = ".data-api"
      , Nt = g.fn[It]
      , Ot = new RegExp("38|40|27")
      , kt = {
        HIDE: "hide" + wt,
        HIDDEN: "hidden" + wt,
        SHOW: "show" + wt,
        SHOWN: "shown" + wt,
        CLICK: "click" + wt,
        CLICK_DATA_API: "click" + wt + At,
        KEYDOWN_DATA_API: "keydown" + wt + At,
        KEYUP_DATA_API: "keyup" + wt + At
    }
      , Pt = "disabled"
      , Lt = "show"
      , jt = "dropup"
      , Ht = "dropright"
      , Rt = "dropleft"
      , xt = "dropdown-menu-right"
      , Ft = "position-static"
      , Ut = '[data-toggle="dropdown"]'
      , Wt = ".dropdown form"
      , qt = ".dropdown-menu"
      , Mt = ".navbar-nav"
      , Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , Qt = "top-start"
      , Bt = "top-end"
      , Vt = "bottom-start"
      , Yt = "bottom-end"
      , zt = "right-start"
      , Xt = "left-start"
      , $t = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , Gt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , Jt = function() {
        function c(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = c.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                var t = c._getParentFromElement(this._element)
                  , e = g(this._menu).hasClass(Lt);
                if (c._clearMenus(),
                !e) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = g.Event(kt.SHOW, n);
                    if (g(t).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof u)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                            this._popper = new u(o,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        g(this._menu).toggleClass(Lt),
                        g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                    }
                }
            }
        }
        ,
        t.show = function() {
            if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = g.Event(kt.SHOW, t)
                  , n = c._getParentFromElement(this._element);
                g(n).trigger(e),
                e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = g.Event(kt.HIDE, t)
                  , n = c._getParentFromElement(this._element);
                g(n).trigger(e),
                e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, Dt),
            g(this._element).off(wt),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            g(this._element).on(kt.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, this.constructor.Default, g(this._element).data(), t),
            _.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(qt))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = g(this._element.parentNode)
              , e = Vt;
            return t.hasClass(jt) ? (e = Qt,
            g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt),
            e
        }
        ,
        t._detectNavbar = function() {
            return 0 < g(this._element).closest(".navbar").length
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        t._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            t
        }
        ,
        c._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(Dt);
                if (t || (t = new c(this,"object" == typeof e ? e : null),
                g(this).data(Dt, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        c._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                    var o = c._getParentFromElement(e[n])
                      , r = g(e[n]).data(Dt)
                      , s = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (s.clickEvent = t),
                    r) {
                        var a = r._menu;
                        if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                            var l = g.Event(kt.HIDE, s);
                            g(o).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            e[n].setAttribute("aria-expanded", "false"),
                            g(a).removeClass(Lt),
                            g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(t) {
            var e, n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !g(this).hasClass(Pt))) {
                var e = c._getParentFromElement(this)
                  , n = g(e).hasClass(Lt);
                if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(Kt));
                    if (0 !== i.length) {
                        var o = i.indexOf(t.target);
                        38 === t.which && 0 < o && o--,
                        40 === t.which && o < i.length - 1 && o++,
                        o < 0 && (o = 0),
                        i[o].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var r = e.querySelector(Ut);
                        g(r).trigger("focus")
                    }
                    g(this).trigger("click")
                }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return $t
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Gt
            }
        }]),
        c
    }();
    g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Jt._jQueryInterface.call(g(this), "toggle")
    }).on(kt.CLICK_DATA_API, Wt, function(t) {
        t.stopPropagation()
    }),
    g.fn[It] = Jt._jQueryInterface,
    g.fn[It].Constructor = Jt,
    g.fn[It].noConflict = function() {
        return g.fn[It] = Nt,
        Jt._jQueryInterface
    }
    ;
    var Zt = "modal"
      , te = "bs.modal"
      , ee = "." + te
      , ne = g.fn[Zt]
      , ie = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , oe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , re = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api"
    }
      , se = "modal-dialog-scrollable"
      , ae = "modal-scrollbar-measure"
      , le = "modal-backdrop"
      , ce = "modal-open"
      , he = "fade"
      , ue = "show"
      , fe = ".modal-dialog"
      , de = ".modal-body"
      , ge = '[data-toggle="modal"]'
      , _e = '[data-dismiss="modal"]'
      , me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , pe = ".sticky-top"
      , ve = function() {
        function o(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(fe),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t = o.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        t.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                g(this._element).hasClass(he) && (this._isTransitioning = !0);
                var n = g.Event(re.SHOW, {
                    relatedTarget: t
                });
                g(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(re.CLICK_DISMISS, _e, function(t) {
                    return e.hide(t)
                }),
                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                    g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }
        ,
        t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = g.Event(re.HIDE);
                if (g(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = g(this._element).hasClass(he);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    g(document).off(re.FOCUSIN),
                    g(this._element).removeClass(ue),
                    g(this._element).off(re.CLICK_DISMISS),
                    g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                    i) {
                        var o = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            [window, this._element, this._dialog].forEach(function(t) {
                return g(t).off(ee)
            }),
            g(document).off(re.FOCUSIN),
            g.removeData(this._element, te),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, ie, t),
            _.typeCheckConfig(Zt, t, oe),
            t
        }
        ,
        t._showElement = function(t) {
            var e = this
              , n = g(this._element).hasClass(he);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0,
            n && _.reflow(this._element),
            g(this._element).addClass(ue),
            this._config.focus && this._enforceFocus();
            var i = g.Event(re.SHOWN, {
                relatedTarget: t
            })
              , o = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                g(e._element).trigger(i)
            };
            if (n) {
                var r = _.getTransitionDurationFromElement(this._dialog);
                g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
            } else
                o()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                e.hide())
            }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? g(window).on(re.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : g(window).off(re.RESIZE)
        }
        ,
        t._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                g(document.body).removeClass(ce),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(re.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (g(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(t) {
            var e = this
              , n = g(this._element).hasClass(he) ? he : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = le,
                n && this._backdrop.classList.add(n),
                g(this._backdrop).appendTo(document.body),
                g(this._element).on(re.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                }),
                n && _.reflow(this._backdrop),
                g(this._backdrop).addClass(ue),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                g(this._backdrop).removeClass(ue);
                var o = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (g(this._element).hasClass(he)) {
                    var r = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            } else
                t && t()
        }
        ,
        t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(me))
                  , e = [].slice.call(document.querySelectorAll(pe));
                g(t).each(function(t, e) {
                    var n = e.style.paddingRight
                      , i = g(e).css("padding-right");
                    g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }),
                g(e).each(function(t, e) {
                    var n = e.style.marginRight
                      , i = g(e).css("margin-right");
                    g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = g(document.body).css("padding-right");
                g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            g(document.body).addClass(ce)
        }
        ,
        t._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(me));
            g(t).each(function(t, e) {
                var n = g(e).data("padding-right");
                g(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll("" + pe));
            g(e).each(function(t, e) {
                var n = g(e).data("margin-right");
                "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = ae,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = g(this).data(te)
                  , e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new o(this,e),
                g(this).data(te, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else
                    e.show && t.show(i)
            })
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ie
            }
        }]),
        o
    }();
    g(document).on(re.CLICK_DATA_API, ge, function(t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        ve._jQueryInterface.call(g(e), o, this)
    }),
    g.fn[Zt] = ve._jQueryInterface,
    g.fn[Zt].Constructor = ve,
    g.fn[Zt].noConflict = function() {
        return g.fn[Zt] = ne,
        ve._jQueryInterface
    }
    ;
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Ee = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Se(t, s, e) {
        if (0 === t.length)
            return t;
        if (e && "function" == typeof e)
            return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
            var n = l[t]
              , i = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                return n.parentNode.removeChild(n),
                "continue";
            var o = [].slice.call(n.attributes)
              , r = [].concat(s["*"] || [], s[i] || []);
            o.forEach(function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                    for (var i = e.filter(function(t) {
                        return t instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, r) || n.removeAttribute(t.nodeName)
            })
        }, o = 0, r = l.length; o < r; o++)
            i(o);
        return n.body.innerHTML
    }
    var be = "tooltip"
      , Ie = "bs.tooltip"
      , De = "." + Ie
      , we = g.fn[be]
      , Ae = "bs-tooltip"
      , Ne = new RegExp("(^|\\s)" + Ae + "\\S+","g")
      , Oe = ["sanitize", "whiteList", "sanitizeFn"]
      , ke = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , Pe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Le = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Ee
    }
      , je = "show"
      , He = "out"
      , Re = {
        HIDE: "hide" + De,
        HIDDEN: "hidden" + De,
        SHOW: "show" + De,
        SHOWN: "shown" + De,
        INSERTED: "inserted" + De,
        CLICK: "click" + De,
        FOCUSIN: "focusin" + De,
        FOCUSOUT: "focusout" + De,
        MOUSEENTER: "mouseenter" + De,
        MOUSELEAVE: "mouseleave" + De
    }
      , xe = "fade"
      , Fe = "show"
      , Ue = ".tooltip-inner"
      , We = ".arrow"
      , qe = "hover"
      , Me = "focus"
      , Ke = "click"
      , Qe = "manual"
      , Be = function() {
        function i(t, e) {
            if ("undefined" == typeof u)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = g(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    g(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (g(this.getTipElement()).hasClass(Fe))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && g(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === g(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                g(this.element).trigger(t);
                var n = _.findShadowRoot(this.element)
                  , i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i)
                    return;
                var o = this.getTipElement()
                  , r = _.getUID(this.constructor.NAME);
                o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && g(o).addClass(xe);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                g(o).data(this.constructor.DATA_KEY, this),
                g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                g(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new u(this.element,o,{
                    placement: a,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: We
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }),
                g(o).addClass(Fe),
                "ontouchstart"in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                var c = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    g(e.element).trigger(e.constructor.Event.SHOWN),
                    t === He && e._leave(null, e)
                };
                if (g(this.tip).hasClass(xe)) {
                    var h = _.getTransitionDurationFromElement(this.tip);
                    g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        t.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , i = g.Event(this.constructor.Event.HIDE)
              , o = function() {
                e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                g(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (g(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (g(n).removeClass(Fe),
                "ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                this._activeTrigger[Ke] = !1,
                this._activeTrigger[Me] = !1,
                this._activeTrigger[qe] = !1,
                g(this.tip).hasClass(xe)) {
                    var r = _.getTransitionDurationFromElement(n);
                    g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass(Ae + "-" + t)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()),
            g(t).removeClass(xe + " " + Fe)
        }
        ,
        t.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)),
            t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
        }
        ,
        t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        t._getContainer = function() {
            return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
        }
        ,
        t._getAttachment = function(t) {
            return Pe[t.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                else if (t !== Qe) {
                    var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    g(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t)
                    })
                }
            }),
            g(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide()
            }),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
            g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout),
            e._hoverState = je,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === je && e.show()
            }, e.config.delay.show) : e.show())
        }
        ,
        t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = He,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === He && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(t) {
            var e = g(this.element).data();
            return Object.keys(e).forEach(function(t) {
                -1 !== Oe.indexOf(t) && delete e[t]
            }),
            "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            _.typeCheckConfig(be, t, this.constructor.DefaultType),
            t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        t._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(Ne);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        t._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (g(t).removeClass(xe),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ie)
                  , e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ie, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Le
            }
        }, {
            key: "NAME",
            get: function() {
                return be
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ie
            }
        }, {
            key: "Event",
            get: function() {
                return Re
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return De
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ke
            }
        }]),
        i
    }();
    g.fn[be] = Be._jQueryInterface,
    g.fn[be].Constructor = Be,
    g.fn[be].noConflict = function() {
        return g.fn[be] = we,
        Be._jQueryInterface
    }
    ;
    var Ve = "popover"
      , Ye = "bs.popover"
      , ze = "." + Ye
      , Xe = g.fn[Ve]
      , $e = "bs-popover"
      , Ge = new RegExp("(^|\\s)" + $e + "\\S+","g")
      , Je = l({}, Be.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Ze = l({}, Be.DefaultType, {
        content: "(string|element|function)"
    })
      , tn = "fade"
      , en = "show"
      , nn = ".popover-header"
      , on = ".popover-body"
      , rn = {
        HIDE: "hide" + ze,
        HIDDEN: "hidden" + ze,
        SHOW: "show" + ze,
        SHOWN: "shown" + ze,
        INSERTED: "inserted" + ze,
        CLICK: "click" + ze,
        FOCUSIN: "focusin" + ze,
        FOCUSOUT: "focusout" + ze,
        MOUSEENTER: "mouseenter" + ze,
        MOUSELEAVE: "mouseleave" + ze
    }
      , sn = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        (e.prototype.constructor = e).__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass($e + "-" + t)
        }
        ,
        o.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        o.setContent = function() {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(nn), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(on), e),
            t.removeClass(tn + " " + en)
        }
        ,
        o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(Ge);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ye)
                  , e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ye, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Je
            }
        }, {
            key: "NAME",
            get: function() {
                return Ve
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ye
            }
        }, {
            key: "Event",
            get: function() {
                return rn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ze
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ze
            }
        }]),
        i
    }(Be);
    g.fn[Ve] = sn._jQueryInterface,
    g.fn[Ve].Constructor = sn,
    g.fn[Ve].noConflict = function() {
        return g.fn[Ve] = Xe,
        sn._jQueryInterface
    }
    ;
    var an = "scrollspy"
      , ln = "bs.scrollspy"
      , cn = "." + ln
      , hn = g.fn[an]
      , un = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , fn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , dn = {
        ACTIVATE: "activate" + cn,
        SCROLL: "scroll" + cn,
        LOAD_DATA_API: "load" + cn + ".data-api"
    }
      , gn = "dropdown-item"
      , _n = "active"
      , mn = '[data-spy="scroll"]'
      , pn = ".nav, .list-group"
      , vn = ".nav-link"
      , yn = ".nav-item"
      , En = ".list-group-item"
      , Cn = ".dropdown"
      , Tn = ".dropdown-item"
      , Sn = ".dropdown-toggle"
      , bn = "offset"
      , In = "position"
      , Dn = function() {
        function n(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            g(this._scrollElement).on(dn.SCROLL, function(t) {
                return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? bn : In
              , o = "auto" === this._config.method ? t : this._config.method
              , r = o === In ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = _.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)),
                e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height)
                        return [g(e)[o]().top + r, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, ln),
            g(this._scrollElement).off(cn),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(t) {
            if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                var e = g(t.target).attr("id");
                e || (e = _.getUID(an),
                g(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return _.typeCheckConfig(an, t, fn),
            t
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n),
            n.addClass(_n)) : (n.addClass(_n),
            n.parents(pn).prev(vn + ", " + En).addClass(_n),
            n.parents(pn).prev(yn).children(vn).addClass(_n)),
            g(this._scrollElement).trigger(dn.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains(_n)
            }).forEach(function(t) {
                return t.classList.remove(_n)
            })
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(ln);
                if (t || (t = new n(this,"object" == typeof e && e),
                g(this).data(ln, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return un
            }
        }]),
        n
    }();
    g(window).on(dn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--; ) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data())
        }
    }),
    g.fn[an] = Dn._jQueryInterface,
    g.fn[an].Constructor = Dn,
    g.fn[an].noConflict = function() {
        return g.fn[an] = hn,
        Dn._jQueryInterface
    }
    ;
    var wn = "bs.tab"
      , An = "." + wn
      , Nn = g.fn.tab
      , On = {
        HIDE: "hide" + An,
        HIDDEN: "hidden" + An,
        SHOW: "show" + An,
        SHOWN: "shown" + An,
        CLICK_DATA_API: "click" + An + ".data-api"
    }
      , kn = "dropdown-menu"
      , Pn = "active"
      , Ln = "disabled"
      , jn = "fade"
      , Hn = "show"
      , Rn = ".dropdown"
      , xn = ".nav, .list-group"
      , Fn = ".active"
      , Un = "> li > .active"
      , Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , qn = ".dropdown-toggle"
      , Mn = "> .dropdown-menu .active"
      , Kn = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element);
                if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                    i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                }
                var s = g.Event(On.HIDE, {
                    relatedTarget: this._element
                })
                  , a = g.Event(On.SHOW, {
                    relatedTarget: i
                });
                if (i && g(i).trigger(s),
                g(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)),
                    this._activate(this._element, e);
                    var l = function() {
                        var t = g.Event(On.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , e = g.Event(On.SHOWN, {
                            relatedTarget: i
                        });
                        g(i).trigger(t),
                        g(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, wn),
            this._element = null
        }
        ,
        t._activate = function(t, e, n) {
            var i = this
              , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0]
              , r = n && o && g(o).hasClass(jn)
              , s = function() {
                return i._transitionComplete(t, o, n)
            };
            if (o && r) {
                var a = _.getTransitionDurationFromElement(o);
                g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        t._transitionComplete = function(t, e, n) {
            if (e) {
                g(e).removeClass(Pn);
                var i = g(e.parentNode).find(Mn)[0];
                i && g(i).removeClass(Pn),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (g(t).addClass(Pn),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            _.reflow(t),
            t.classList.contains(jn) && t.classList.add(Hn),
            t.parentNode && g(t.parentNode).hasClass(kn)) {
                var o = g(t).closest(Rn)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(qn));
                    g(r).addClass(Pn)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(wn);
                if (e || (e = new i(this),
                t.data(wn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    g(document).on(On.CLICK_DATA_API, Wn, function(t) {
        t.preventDefault(),
        Kn._jQueryInterface.call(g(this), "show")
    }),
    g.fn.tab = Kn._jQueryInterface,
    g.fn.tab.Constructor = Kn,
    g.fn.tab.noConflict = function() {
        return g.fn.tab = Nn,
        Kn._jQueryInterface
    }
    ;
    var Qn = "toast"
      , Bn = "bs.toast"
      , Vn = "." + Bn
      , Yn = g.fn[Qn]
      , zn = {
        CLICK_DISMISS: "click.dismiss" + Vn,
        HIDE: "hide" + Vn,
        HIDDEN: "hidden" + Vn,
        SHOW: "show" + Vn,
        SHOWN: "shown" + Vn
    }
      , Xn = "fade"
      , $n = "hide"
      , Gn = "show"
      , Jn = "showing"
      , Zn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ti = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , ei = '[data-dismiss="toast"]'
      , ni = function() {
        function i(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.show = function() {
            var t = this;
            g(this._element).trigger(zn.SHOW),
            this._config.animation && this._element.classList.add(Xn);
            var e = function() {
                t._element.classList.remove(Jn),
                t._element.classList.add(Gn),
                g(t._element).trigger(zn.SHOWN),
                t._config.autohide && t.hide()
            };
            if (this._element.classList.remove($n),
            this._element.classList.add(Jn),
            this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        t.hide = function(t) {
            var e = this;
            this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE),
            t ? this._close() : this._timeout = setTimeout(function() {
                e._close()
            }, this._config.delay))
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
            g(this._element).off(zn.CLICK_DISMISS),
            g.removeData(this._element, Bn),
            this._element = null,
            this._config = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}),
            _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
            t
        }
        ,
        t._setListeners = function() {
            var t = this;
            g(this._element).on(zn.CLICK_DISMISS, ei, function() {
                return t.hide(!0)
            })
        }
        ,
        t._close = function() {
            var t = this
              , e = function() {
                t._element.classList.add($n),
                g(t._element).trigger(zn.HIDDEN)
            };
            if (this._element.classList.remove(Gn),
            this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(Bn);
                if (e || (e = new i(this,"object" == typeof n && n),
                t.data(Bn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](this)
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Zn
            }
        }, {
            key: "Default",
            get: function() {
                return ti
            }
        }]),
        i
    }();
    g.fn[Qn] = ni._jQueryInterface,
    g.fn[Qn].Constructor = ni,
    g.fn[Qn].noConflict = function() {
        return g.fn[Qn] = Yn,
        ni._jQueryInterface
    }
    ,
    function() {
        if ("undefined" == typeof g)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = g.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    t.Util = _,
    t.Alert = p,
    t.Button = P,
    t.Carousel = lt,
    t.Collapse = bt,
    t.Dropdown = Jt,
    t.Modal = ve,
    t.Popover = sn,
    t.Scrollspy = Dn,
    t.Tab = Kn,
    t.Toast = ni,
    t.Tooltip = Be,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function(a, b) {
        "use strict";
        function c(b) {
            b && "custom" === b.errorMessagePosition && "function" == typeof b.errorMessageCustom && (a.formUtils.warn("Use of deprecated function errorMessageCustom, use config.submitErrorMessageCallback instead"),
            b.submitErrorMessageCallback = function(a, c) {
                b.errorMessageCustom(a, b.language.errorTitle, c, b)
            }
            )
        }
        function d(b) {
            if (b.errorMessagePosition && "object" == typeof b.errorMessagePosition) {
                a.formUtils.warn("Deprecated use of config parameter errorMessagePosition, use config.submitErrorMessageCallback instead");
                var c = b.errorMessagePosition;
                b.errorMessagePosition = "top",
                b.submitErrorMessageCallback = function() {
                    return c
                }
            }
        }
        function e(b) {
            var c = b.find("[data-validation-if-checked]");
            c.length && a.formUtils.warn('Detected use of attribute "data-validation-if-checked" which is deprecated. Use "data-validation-depends-on" provided by module "logic"'),
            c.on("beforeValidation", function() {
                var c = a(this)
                  , d = c.valAttr("if-checked")
                  , e = a('input[name="' + d + '"]', b)
                  , f = e.is(":checked")
                  , g = (a.formUtils.getValue(e) || "").toString()
                  , h = c.valAttr("if-checked-value");
                (!f || h && h !== g) && c.valAttr("skipped", !0)
            })
        }
        a.fn.validateForm = function(b, c) {
            return a.formUtils.warn("Use of deprecated function $.validateForm, use $.isValid instead"),
            this.isValid(b, c, !0)
        }
        ,
        a(window).on("validatorsLoaded formValidationSetup", function(b, f, g) {
            f || (f = a("form")),
            c(g),
            d(g),
            e(f)
        })
    }(a),
    function(a) {
        "use strict";
        var b = {
            resolveErrorMessage: function(a, b, c, d, e) {
                var f = d.validationErrorMsgAttribute + "-" + c.replace("validate_", "")
                  , g = a.attr(f);
                return g || (g = a.attr(d.validationErrorMsgAttribute),
                g || (g = "function" != typeof b.errorMessageKey ? e[b.errorMessageKey] : e[b.errorMessageKey(d)],
                g || (g = b.errorMessage))),
                g
            },
            getParentContainer: function(b) {
                if (b.valAttr("error-msg-container"))
                    return a(b.valAttr("error-msg-container"));
                var c = b.parent();
                if (!c.hasClass("form-group") && !c.closest("form").hasClass("form-horizontal")) {
                    var d = c.closest(".form-group");
                    if (d.length)
                        return d.eq(0)
                }
                return c
            },
            applyInputErrorStyling: function(a, b) {
                a.addClass(b.errorElementClass).removeClass("valid"),
                this.getParentContainer(a).addClass(b.inputParentClassOnError).removeClass(b.inputParentClassOnSuccess),
                "" !== b.borderColorOnError && a.css("border-color", b.borderColorOnError)
            },
            applyInputSuccessStyling: function(a, b) {
                a.addClass("valid"),
                this.getParentContainer(a).addClass(b.inputParentClassOnSuccess)
            },
            removeInputStylingAndMessage: function(a, c) {
                a.removeClass("valid").removeClass(c.errorElementClass).css("border-color", "");
                var d = b.getParentContainer(a);
                if (d.removeClass(c.inputParentClassOnError).removeClass(c.inputParentClassOnSuccess),
                "function" == typeof c.inlineErrorMessageCallback) {
                    var e = c.inlineErrorMessageCallback(a, !1, c);
                    e && e.html("")
                } else
                    d.find("." + c.errorMessageClass).remove()
            },
            removeAllMessagesAndStyling: function(c, d) {
                if ("function" == typeof d.submitErrorMessageCallback) {
                    var e = d.submitErrorMessageCallback(c, d);
                    e && e.html("")
                } else
                    c.find("." + d.errorMessageClass + ".alert").remove();
                c.find("." + d.errorElementClass + ",.valid").each(function() {
                    b.removeInputStylingAndMessage(a(this), d)
                })
            },
            setInlineMessage: function(b, c, d) {
                this.applyInputErrorStyling(b, d);
                var e, f = document.getElementById(b.attr("name") + "_err_msg"), g = !1, h = function(d) {
                    a.formUtils.$win.trigger("validationErrorDisplay", [b, d]),
                    d.html(c)
                }, i = function() {
                    var f = !1;
                    g.find("." + d.errorMessageClass).each(function() {
                        return this.inputReferer === b[0] ? (f = a(this),
                        !1) : void 0
                    }),
                    f ? c ? h(f) : f.remove() : "" !== c && (e = a('<div class="' + d.errorMessageClass + ' alert"></div>'),
                    h(e),
                    e[0].inputReferer = b[0],
                    g.prepend(e))
                };
                if (f)
                    a.formUtils.warn("Using deprecated element reference " + f.id),
                    g = a(f),
                    i();
                else if ("function" == typeof d.inlineErrorMessageCallback) {
                    if (g = d.inlineErrorMessageCallback(b, c, d),
                    !g)
                        return;
                    i()
                } else {
                    var j = this.getParentContainer(b);
                    e = j.find("." + d.errorMessageClass + ".help-block"),
                    0 === e.length && (e = a("<span></span>").addClass("help-block").addClass(d.errorMessageClass),
                    e.appendTo(j)),
                    h(e)
                }
            },
            setMessageInTopOfForm: function(b, c, d, e) {
                var f = '<div class="{errorMessageClass} alert alert-danger"><strong>{errorTitle}</strong><ul>{fields}</ul></div>'
                  , g = !1;
                if ("function" != typeof d.submitErrorMessageCallback || (g = d.submitErrorMessageCallback(b, c, d))) {
                    var h = {
                        errorTitle: e.errorTitle,
                        fields: "",
                        errorMessageClass: d.errorMessageClass
                    };
                    a.each(c, function(a, b) {
                        h.fields += "<li>" + b + "</li>"
                    }),
                    a.each(h, function(a, b) {
                        f = f.replace("{" + a + "}", b)
                    }),
                    g ? g.html(f) : b.children().eq(0).before(a(f))
                }
            }
        };
        a.formUtils = a.extend(a.formUtils || {}, {
            dialogs: b
        })
    }(a),
    function(a, b, c) {
        "use strict";
        var d = 0;
        a.fn.validateOnBlur = function(b, c) {
            var d = this
              , e = this.find("*[data-validation]");
            return e.each(function() {
                var e = a(this);
                if (e.is("[type=radio]")) {
                    var f = d.find('[type=radio][name="' + e.attr("name") + '"]');
                    f.bind("blur.validation", function() {
                        e.validateInputOnBlur(b, c, !0, "blur")
                    }),
                    c.validateCheckboxRadioOnClick && f.bind("click.validation", function() {
                        e.validateInputOnBlur(b, c, !0, "click")
                    })
                }
            }),
            e.bind("blur.validation", function() {
                a(this).validateInputOnBlur(b, c, !0, "blur")
            }),
            c.validateCheckboxRadioOnClick && this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation", function() {
                a(this).validateInputOnBlur(b, c, !0, "click")
            }),
            this
        }
        ,
        a.fn.validateOnEvent = function(b, c) {
            var d = "FORM" === this[0].nodeName ? this.find("*[data-validation-event]") : this;
            return d.each(function() {
                var d = a(this)
                  , e = d.valAttr("event");
                e && d.unbind(e + ".validation").bind(e + ".validation", function(d) {
                    9 !== (d || {}).keyCode && a(this).validateInputOnBlur(b, c, !0, e)
                })
            }),
            this
        }
        ,
        a.fn.showHelpOnFocus = function(b) {
            return b || (b = "data-validation-help"),
            this.find(".has-help-txt").valAttr("has-keyup-event", !1).removeClass("has-help-txt"),
            this.find("textarea,input").each(function() {
                var c = a(this)
                  , e = "jquery_form_help_" + ++d
                  , f = c.attr(b);
                f && c.addClass("has-help-txt").unbind("focus.help").bind("focus.help", function() {
                    var b = c.parent().find("." + e);
                    0 === b.length && (b = a("<span />").addClass(e).addClass("help").addClass("help-block").text(f).hide(),
                    c.after(b)),
                    b.fadeIn()
                }).unbind("blur.help").bind("blur.help", function() {
                    a(this).parent().find("." + e).fadeOut("slow")
                })
            }),
            this
        }
        ,
        a.fn.validate = function(b, c, d) {
            var e = a.extend({}, a.formUtils.LANG, d || {});
            this.each(function() {
                var d = a(this)
                  , f = d.closest("form").get(0).validationConfig || {};
                d.one("validation", function(a, c) {
                    "function" == typeof b && b(c, this, a)
                }),
                d.validateInputOnBlur(e, a.extend({}, f, c || {}), !0)
            })
        }
        ,
        a.fn.willPostponeValidation = function() {
            return (this.valAttr("suggestion-nr") || this.valAttr("postpone") || this.hasClass("hasDatepicker")) && !b.postponedValidation
        }
        ,
        a.fn.validateInputOnBlur = function(c, d, e, f) {
            if (a.formUtils.eventType = f,
            this.willPostponeValidation()) {
                var g = this
                  , h = this.valAttr("postpone") || 200;
                return b.postponedValidation = function() {
                    g.validateInputOnBlur(c, d, e, f),
                    b.postponedValidation = !1
                }
                ,
                setTimeout(function() {
                    b.postponedValidation && b.postponedValidation()
                }, h),
                this
            }
            c = a.extend({}, a.formUtils.LANG, c || {}),
            a.formUtils.dialogs.removeInputStylingAndMessage(this, d);
            var i = this
              , j = i.closest("form")
              , k = a.formUtils.validateInput(i, c, d, j, f);
            return e && i.unbind("keyup.validation"),
            k.shouldChangeDisplay && (k.isValid ? a.formUtils.dialogs.applyInputSuccessStyling(i, d) : a.formUtils.dialogs.setInlineMessage(i, k.errorMsg, d)),
            !k.isValid && e && i.bind("keyup.validation", function(b) {
                9 !== b.keyCode && a(this).validateInputOnBlur(c, d, !1, "keyup")
            }),
            this
        }
        ,
        a.fn.valAttr = function(a, b) {
            return b === c ? this.attr("data-validation-" + a) : b === !1 || null === b ? this.removeAttr("data-validation-" + a) : (a = a.length > 0 ? "-" + a : "",
            this.attr("data-validation" + a, b))
        }
        ,
        a.fn.isValid = function(b, c, d) {
            if (a.formUtils.isLoadingModules) {
                var e = this;
                return setTimeout(function() {
                    e.isValid(b, c, d)
                }, 200),
                null
            }
            c = a.extend({}, a.formUtils.defaultConfig(), c || {}),
            b = a.extend({}, a.formUtils.LANG, b || {}),
            d = d !== !1,
            a.formUtils.errorDisplayPreventedWhenHalted && (delete a.formUtils.errorDisplayPreventedWhenHalted,
            d = !1),
            a.formUtils.isValidatingEntireForm = !0,
            a.formUtils.haltValidation = !1;
            var f = function(b, e) {
                a.inArray(b, h) < 0 && h.push(b),
                i.push(e),
                e.attr("current-error", b),
                d && a.formUtils.dialogs.applyInputErrorStyling(e, c)
            }
              , g = []
              , h = []
              , i = []
              , j = this
              , k = function(b, d) {
                return "submit" === d || "button" === d || "reset" === d ? !0 : a.inArray(b, c.ignore || []) > -1
            };
            if (d && a.formUtils.dialogs.removeAllMessagesAndStyling(j, c),
            j.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function() {
                var d = a(this)
                  , e = d.attr("type")
                  , h = "radio" === e || "checkbox" === e
                  , i = d.attr("name");
                if (!k(i, e) && (!h || a.inArray(i, g) < 0)) {
                    h && g.push(i);
                    var l = a.formUtils.validateInput(d, b, c, j, "submit");
                    l.isValid ? l.isValid && l.shouldChangeDisplay && (d.valAttr("current-error", !1),
                    a.formUtils.dialogs.applyInputSuccessStyling(d, c)) : f(l.errorMsg, d)
                }
            }),
            "function" == typeof c.onValidate) {
                var l = c.onValidate(j);
                a.isArray(l) ? a.each(l, function(a, b) {
                    f(b.message, b.element)
                }) : l && l.element && l.message && f(l.message, l.element)
            }
            return a.formUtils.isValidatingEntireForm = !1,
            !a.formUtils.haltValidation && i.length > 0 ? (d && ("top" === c.errorMessagePosition ? a.formUtils.dialogs.setMessageInTopOfForm(j, h, c, b) : a.each(i, function(b, d) {
                a.formUtils.dialogs.setInlineMessage(d, d.attr("current-error"), c)
            }),
            c.scrollToTopOnError && a.formUtils.$win.scrollTop(j.offset().top - 20)),
            !1) : (!d && a.formUtils.haltValidation && (a.formUtils.errorDisplayPreventedWhenHalted = !0),
            !a.formUtils.haltValidation)
        }
        ,
        a.fn.restrictLength = function(b) {
            return new a.formUtils.lengthRestriction(this,b),
            this
        }
        ,
        a.fn.addSuggestions = function(b) {
            var c = !1;
            return this.find("input").each(function() {
                var d = a(this);
                c = a.split(d.attr("data-suggestions")),
                c.length > 0 && !d.hasClass("has-suggestions") && (a.formUtils.suggest(d, c, b),
                d.addClass("has-suggestions"))
            }),
            this
        }
    }(a, window),
    function(a) {
        "use strict";
        a.formUtils = a.extend(a.formUtils || {}, {
            isLoadingModules: !1,
            loadedModules: {},
            loadModules: function(b, c, d) {
                if (a.formUtils.isLoadingModules)
                    return void setTimeout(function() {
                        a.formUtils.loadModules(b, c, d)
                    }, 10);
                var e = !1
                  , f = function(b, c) {
                    var f = a.split(b)
                      , g = f.length
                      , h = function() {
                        g--,
                        0 === g && (a.formUtils.isLoadingModules = !1,
                        d && e && "function" == typeof d && d())
                    };
                    g > 0 && (a.formUtils.isLoadingModules = !0);
                    var i = "?_=" + (new Date).getTime()
                      , j = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                    a.each(f, function(b, d) {
                        if (d = a.trim(d),
                        0 === d.length)
                            h();
                        else {
                            var f = c + d + (".js" === d.slice(-3) ? "" : ".js")
                              , g = document.createElement("SCRIPT");
                            f in a.formUtils.loadedModules ? h() : (a.formUtils.loadedModules[f] = 1,
                            e = !0,
                            g.type = "text/javascript",
                            g.onload = h,
                            g.src = f + (".dev.js" === f.slice(-7) ? i : ""),
                            g.onerror = function() {
                                a.formUtils.warn("Unable to load form validation module " + f)
                            }
                            ,
                            g.onreadystatechange = function() {
                                "complete" !== this.readyState && "loaded" !== this.readyState || (h(),
                                this.onload = null,
                                this.onreadystatechange = null)
                            }
                            ,
                            j.appendChild(g))
                        }
                    })
                };
                if (c)
                    f(b, c);
                else {
                    var g = function() {
                        var c = !1;
                        return a('script[src*="form-validator"]').each(function() {
                            return c = this.src.substr(0, this.src.lastIndexOf("/")) + "/",
                            "/" === c && (c = ""),
                            !1
                        }),
                        c !== !1 ? (f(b, c),
                        !0) : !1
                    };
                    g() || a(g)
                }
            }
        })
    }(a),
    function(a) {
        "use strict";
        a.split = function(b, c) {
            if ("function" != typeof c) {
                if (!b)
                    return [];
                var d = [];
                return a.each(b.split(c ? c : /[,|\-\s]\s*/g), function(b, c) {
                    c = a.trim(c),
                    c.length && d.push(c)
                }),
                d
            }
            b && a.each(b.split(/[,|\-\s]\s*/g), function(b, d) {
                return d = a.trim(d),
                d.length ? c(d, b) : void 0
            })
        }
        ,
        a.validate = function(b) {
            var c = a.extend(a.formUtils.defaultConfig(), {
                form: "form",
                validateOnEvent: !1,
                validateOnBlur: !0,
                validateCheckboxRadioOnClick: !0,
                showHelpOnFocus: !0,
                addSuggestions: !0,
                modules: "",
                onModulesLoaded: null,
                language: !1,
                onSuccess: !1,
                onError: !1,
                onElementValidate: !1
            });
            if (b = a.extend(c, b || {}),
            b.lang && "en" !== b.lang) {
                var d = "lang/" + b.lang + ".js";
                b.modules += b.modules.length ? "," + d : d
            }
            a(b.form).each(function(c, d) {
                d.validationConfig = b;
                var e = a(d);
                e.trigger("formValidationSetup", [e, b]),
                e.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"),
                e.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"),
                e.bind("submit.validation", function(c) {
                    var d = a(this)
                      , e = function() {
                        return c.stopImmediatePropagation(),
                        !1
                    };
                    if (a.formUtils.haltValidation)
                        return e();
                    if (a.formUtils.isLoadingModules)
                        return setTimeout(function() {
                            d.trigger("submit.validation")
                        }, 200),
                        e();
                    var f = d.isValid(b.language, b);
                    if (a.formUtils.haltValidation)
                        return e();
                    if (!f || "function" != typeof b.onSuccess)
                        return f || "function" != typeof b.onError ? f ? !0 : e() : (b.onError(d),
                        e());
                    var g = b.onSuccess(d);
                    return g === !1 ? e() : void 0
                }).bind("reset.validation", function() {
                    a.formUtils.dialogs.removeAllMessagesAndStyling(e, b)
                }).addClass("has-validation-callback"),
                b.showHelpOnFocus && e.showHelpOnFocus(),
                b.addSuggestions && e.addSuggestions(),
                b.validateOnBlur && (e.validateOnBlur(b.language, b),
                e.bind("html5ValidationAttrsFound", function() {
                    e.validateOnBlur(b.language, b)
                })),
                b.validateOnEvent && e.validateOnEvent(b.language, b)
            }),
            "" !== b.modules && a.formUtils.loadModules(b.modules, !1, function() {
                "function" == typeof b.onModulesLoaded && b.onModulesLoaded();
                var c = "string" == typeof b.form ? a(b.form) : b.form;
                a.formUtils.$win.trigger("validatorsLoaded", [c, b])
            })
        }
    }(a),
    function(a, b) {
        "use strict";
        var c = a(b);
        a.formUtils = a.extend(a.formUtils || {}, {
            $win: c,
            defaultConfig: function() {
                return {
                    ignore: [],
                    errorElementClass: "error",
                    borderColorOnError: "#b94a48",
                    errorMessageClass: "form-error",
                    validationRuleAttribute: "data-validation",
                    validationErrorMsgAttribute: "data-validation-error-msg",
                    errorMessagePosition: "inline",
                    errorMessageTemplate: {
                        container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
                        messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
                        field: "<li>{msg}</li>"
                    },
                    scrollToTopOnError: !0,
                    dateFormat: "yyyy-mm-dd",
                    addValidClassOnAll: !1,
                    decimalSeparator: ".",
                    inputParentClassOnError: "has-error",
                    inputParentClassOnSuccess: "has-success",
                    validateHiddenInputs: !1,
                    inlineErrorMessageCallback: !1,
                    submitErrorMessageCallback: !1
                }
            },
            validators: {},
            _events: {
                load: [],
                valid: [],
                invalid: []
            },
            haltValidation: !1,
            isValidatingEntireForm: !1,
            addValidator: function(a) {
                var b = 0 === a.name.indexOf("validate_") ? a.name : "validate_" + a.name;
                void 0 === a.validateOnKeyUp && (a.validateOnKeyUp = !0),
                this.validators[b] = a
            },
            warn: function(a) {
                "console"in b ? "function" == typeof b.console.warn ? b.console.warn(a) : "function" == typeof b.console.log && b.console.log(a) : alert(a)
            },
            getValue: function(a, b) {
                var c = b ? b.find(a) : a;
                if (c.length > 0) {
                    var d = c.eq(0).attr("type");
                    return "radio" === d || "checkbox" === d ? c.filter(":checked").val() : c.val()
                }
                return !1
            },
            validateInput: function(b, c, d, e, f) {
                d = d || a.formUtils.defaultConfig(),
                c = c || a.formUtils.LANG;
                var g = this.getValue(b);
                b.valAttr("skipped", !1).one("beforeValidation", function() {
                    (b.attr("disabled") || !b.is(":visible") && !d.validateHiddenInputs) && b.valAttr("skipped", 1)
                }).trigger("beforeValidation", [g, d, c]);
                var h = "true" === b.valAttr("optional")
                  , i = !g && h
                  , j = b.attr(d.validationRuleAttribute)
                  , k = !0
                  , l = ""
                  , m = {
                    isValid: !0,
                    shouldChangeDisplay: !0,
                    errorMsg: ""
                };
                if (!j || i || b.valAttr("skipped"))
                    return m.shouldChangeDisplay = d.addValidClassOnAll,
                    m;
                var n = b.valAttr("ignore");
                return n && a.each(n.split(""), function(a, b) {
                    g = g.replace(new RegExp("\\" + b), "")
                }),
                a.split(j, function(h) {
                    0 !== h.indexOf("validate_") && (h = "validate_" + h);
                    var i = a.formUtils.validators[h];
                    if (!i)
                        throw new Error('Using undefined validator "' + h + '". Maybe you have forgotten to load the module that "' + h + '" belongs to?');
                    return "validate_checkbox_group" === h && (b = e.find('[name="' + b.attr("name") + '"]:eq(0)')),
                    ("keyup" !== f || i.validateOnKeyUp) && (k = i.validatorFunction(g, b, d, c, e)),
                    k ? void 0 : (l = a.formUtils.dialogs.resolveErrorMessage(b, i, h, d, c),
                    !1)
                }, " "),
                k === !1 ? (b.trigger("validation", !1),
                m.errorMsg = l,
                m.isValid = !1,
                m.shouldChangeDisplay = !0) : null === k ? m.shouldChangeDisplay = !1 : (b.trigger("validation", !0),
                m.shouldChangeDisplay = !0),
                "function" == typeof d.onElementValidate && null !== l && d.onElementValidate(m.isValid, b, e, l),
                b.trigger("afterValidation", [m, f]),
                m
            },
            parseDate: function(b, c, d) {
                var e, f, g, h, i = c.replace(/[a-zA-Z]/gi, "").substring(0, 1), j = "^", k = c.split(i || null);
                if (a.each(k, function(a, b) {
                    j += (a > 0 ? "\\" + i : "") + "(\\d{" + b.length + "})"
                }),
                j += "$",
                d) {
                    var l = [];
                    a.each(b.split(i), function(a, b) {
                        1 === b.length && (b = "0" + b),
                        l.push(b)
                    }),
                    b = l.join(i)
                }
                if (e = b.match(new RegExp(j)),
                null === e)
                    return !1;
                var m = function(b, c, d) {
                    for (var e = 0; e < c.length; e++)
                        if (c[e].substring(0, 1) === b)
                            return a.formUtils.parseDateInt(d[e + 1]);
                    return -1
                };
                return g = m("m", k, e),
                f = m("d", k, e),
                h = m("y", k, e),
                2 === g && f > 28 && (h % 4 !== 0 || h % 100 === 0 && h % 400 !== 0) || 2 === g && f > 29 && (h % 4 === 0 || h % 100 !== 0 && h % 400 === 0) || g > 12 || 0 === g ? !1 : this.isShortMonth(g) && f > 30 || !this.isShortMonth(g) && f > 31 || 0 === f ? !1 : [h, g, f]
            },
            parseDateInt: function(a) {
                return 0 === a.indexOf("0") && (a = a.replace("0", "")),
                parseInt(a, 10)
            },
            isShortMonth: function(a) {
                return a % 2 === 0 && 7 > a || a % 2 !== 0 && a > 7
            },
            lengthRestriction: function(b, c) {
                var d = parseInt(c.text(), 10)
                  , e = 0
                  , f = function() {
                    var a = b.val().length;
                    if (a > d) {
                        var f = b.scrollTop();
                        b.val(b.val().substring(0, d)),
                        b.scrollTop(f)
                    }
                    e = d - a,
                    0 > e && (e = 0),
                    c.text(e)
                };
                a(b).bind("keydown keyup keypress focus blur", f).bind("cut paste", function() {
                    setTimeout(f, 100)
                }),
                a(document).bind("ready", f)
            },
            numericRangeCheck: function(b, c) {
                var d = a.split(c)
                  , e = parseInt(c.substr(3), 10);
                return 1 === d.length && -1 === c.indexOf("min") && -1 === c.indexOf("max") && (d = [c, c]),
                2 === d.length && (b < parseInt(d[0], 10) || b > parseInt(d[1], 10)) ? ["out", d[0], d[1]] : 0 === c.indexOf("min") && e > b ? ["min", e] : 0 === c.indexOf("max") && b > e ? ["max", e] : ["ok"]
            },
            _numSuggestionElements: 0,
            _selectedSuggestion: null,
            _previousTypedVal: null,
            suggest: function(b, d, e) {
                var f = {
                    css: {
                        maxHeight: "150px",
                        background: "#FFF",
                        lineHeight: "150%",
                        textDecoration: "underline",
                        overflowX: "hidden",
                        overflowY: "auto",
                        border: "#CCC solid 1px",
                        borderTop: "none",
                        cursor: "pointer"
                    },
                    activeSuggestionCSS: {
                        background: "#E9E9E9"
                    }
                }
                  , g = function(a, b) {
                    var c = b.offset();
                    a.css({
                        width: b.outerWidth(),
                        left: c.left + "px",
                        top: c.top + b.outerHeight() + "px"
                    })
                };
                e && a.extend(f, e),
                f.css.position = "absolute",
                f.css["z-index"] = 9999,
                b.attr("autocomplete", "off"),
                0 === this._numSuggestionElements && c.bind("resize", function() {
                    a(".jquery-form-suggestions").each(function() {
                        var b = a(this)
                          , c = b.attr("data-suggest-container");
                        g(b, a(".suggestions-" + c).eq(0))
                    })
                }),
                this._numSuggestionElements++;
                var h = function(b) {
                    var c = b.valAttr("suggestion-nr");
                    a.formUtils._selectedSuggestion = null,
                    a.formUtils._previousTypedVal = null,
                    a(".jquery-form-suggestion-" + c).fadeOut("fast")
                };
                return b.data("suggestions", d).valAttr("suggestion-nr", this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest", function() {
                    a(this).trigger("keyup"),
                    a.formUtils._selectedSuggestion = null
                }).unbind("keyup.suggest").bind("keyup.suggest", function() {
                    var c = a(this)
                      , d = []
                      , e = a.trim(c.val()).toLocaleLowerCase();
                    if (e !== a.formUtils._previousTypedVal) {
                        a.formUtils._previousTypedVal = e;
                        var i = !1
                          , j = c.valAttr("suggestion-nr")
                          , k = a(".jquery-form-suggestion-" + j);
                        if (k.scrollTop(0),
                        "" !== e) {
                            var l = e.length > 2;
                            a.each(c.data("suggestions"), function(a, b) {
                                var c = b.toLocaleLowerCase();
                                return c === e ? (d.push("<strong>" + b + "</strong>"),
                                i = !0,
                                !1) : void ((0 === c.indexOf(e) || l && c.indexOf(e) > -1) && d.push(b.replace(new RegExp(e,"gi"), "<strong>$&</strong>")))
                            })
                        }
                        i || 0 === d.length && k.length > 0 ? k.hide() : d.length > 0 && 0 === k.length ? (k = a("<div></div>").css(f.css).appendTo("body"),
                        b.addClass("suggestions-" + j),
                        k.attr("data-suggest-container", j).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-" + j)) : d.length > 0 && !k.is(":visible") && k.show(),
                        d.length > 0 && e.length !== d[0].length && (g(k, c),
                        k.html(""),
                        a.each(d, function(b, d) {
                            a("<div></div>").append(d).css({
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                padding: "5px"
                            }).addClass("form-suggest-element").appendTo(k).click(function() {
                                c.focus(),
                                c.val(a(this).text()),
                                c.trigger("change"),
                                h(c)
                            })
                        }))
                    }
                }).unbind("keydown.validation").bind("keydown.validation", function(b) {
                    var c, d, e = b.keyCode ? b.keyCode : b.which, g = a(this);
                    if (13 === e && null !== a.formUtils._selectedSuggestion) {
                        if (c = g.valAttr("suggestion-nr"),
                        d = a(".jquery-form-suggestion-" + c),
                        d.length > 0) {
                            var i = d.find("div").eq(a.formUtils._selectedSuggestion).text();
                            g.val(i),
                            g.trigger("change"),
                            h(g),
                            b.preventDefault()
                        }
                    } else {
                        c = g.valAttr("suggestion-nr"),
                        d = a(".jquery-form-suggestion-" + c);
                        var j = d.children();
                        if (j.length > 0 && a.inArray(e, [38, 40]) > -1) {
                            38 === e ? (null === a.formUtils._selectedSuggestion ? a.formUtils._selectedSuggestion = j.length - 1 : a.formUtils._selectedSuggestion--,
                            a.formUtils._selectedSuggestion < 0 && (a.formUtils._selectedSuggestion = j.length - 1)) : 40 === e && (null === a.formUtils._selectedSuggestion ? a.formUtils._selectedSuggestion = 0 : a.formUtils._selectedSuggestion++,
                            a.formUtils._selectedSuggestion > j.length - 1 && (a.formUtils._selectedSuggestion = 0));
                            var k = d.innerHeight()
                              , l = d.scrollTop()
                              , m = d.children().eq(0).outerHeight()
                              , n = m * a.formUtils._selectedSuggestion;
                            return (l > n || n > l + k) && d.scrollTop(n),
                            j.removeClass("active-suggestion").css("background", "none").eq(a.formUtils._selectedSuggestion).addClass("active-suggestion").css(f.activeSuggestionCSS),
                            b.preventDefault(),
                            !1
                        }
                    }
                }).unbind("blur.suggest").bind("blur.suggest", function() {
                    h(a(this))
                }),
                b
            },
            LANG: {
                errorTitle: "Form submission failed!",
                requiredField: "This is a required field",
                requiredFields: "You have not answered all required fields",
                badTime: "You have not given a correct time",
                badEmail: "You have not given a correct e-mail address",
                badTelephone: "You have not given a correct phone number",
                badSecurityAnswer: "You have not given a correct answer to the security question",
                badDate: "You have not given a correct date",
                lengthBadStart: "The input value must be between ",
                lengthBadEnd: " characters",
                lengthTooLongStart: "The input value is longer than ",
                lengthTooShortStart: "The input value is shorter than ",
                notConfirmed: "Input values could not be confirmed",
                badDomain: "Incorrect domain value",
                badUrl: "The input value is not a correct URL",
                badCustomVal: "The input value is incorrect",
                andSpaces: " and spaces ",
                badInt: "The input value was not a correct number",
                badSecurityNumber: "Your social security number was incorrect",
                badUKVatAnswer: "Incorrect UK VAT Number",
                badUKNin: "Incorrect UK NIN",
                badUKUtr: "Incorrect UK UTR Number",
                badStrength: "The password isn't strong enough",
                badNumberOfSelectedOptionsStart: "You have to choose at least ",
                badNumberOfSelectedOptionsEnd: " answers",
                badAlphaNumeric: "The input value can only contain alphanumeric characters ",
                badAlphaNumericExtra: " and ",
                wrongFileSize: "The file you are trying to upload is too large (max %s)",
                wrongFileType: "Only files of type %s is allowed",
                groupCheckedRangeStart: "Please choose between ",
                groupCheckedTooFewStart: "Please choose at least ",
                groupCheckedTooManyStart: "Please choose a maximum of ",
                groupCheckedEnd: " item(s)",
                badCreditCard: "The credit card number is not correct",
                badCVV: "The CVV number was not correct",
                wrongFileDim: "Incorrect image dimensions,",
                imageTooTall: "the image can not be taller than",
                imageTooWide: "the image can not be wider than",
                imageTooSmall: "the image was too small",
                min: "min",
                max: "max",
                imageRatioNotAccepted: "Image ratio is not be accepted",
                badBrazilTelephoneAnswer: "The phone number entered is invalid",
                badBrazilCEPAnswer: "The CEP entered is invalid",
                badBrazilCPFAnswer: "The CPF entered is invalid",
                badPlPesel: "The PESEL entered is invalid",
                badPlNip: "The NIP entered is invalid",
                badPlRegon: "The REGON entered is invalid",
                badreCaptcha: "Please confirm that you are not a bot"
            }
        })
    }(a, window),
    function(a) {
        a.formUtils.addValidator({
            name: "email",
            validatorFunction: function(b) {
                var c = b.toLowerCase().split("@")
                  , d = c[0]
                  , e = c[1];
                if (d && e) {
                    if (0 === d.indexOf('"')) {
                        var f = d.length;
                        if (d = d.replace(/\"/g, ""),
                        d.length !== f - 2)
                            return !1
                    }
                    return a.formUtils.validators.validate_domain.validatorFunction(c[1]) && 0 !== d.indexOf(".") && "." !== d.substring(d.length - 1, d.length) && -1 === d.indexOf("..") && !/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(d)
                }
                return !1
            },
            errorMessage: "",
            errorMessageKey: "badEmail"
        }),
        a.formUtils.addValidator({
            name: "domain",
            validatorFunction: function(a) {
                return a.length > 0 && a.length <= 253 && !/[^a-zA-Z0-9]/.test(a.slice(-2)) && !/[^a-zA-Z0-9]/.test(a.substr(0, 1)) && !/[^a-zA-Z0-9\.\-]/.test(a) && 1 === a.split("..").length && a.split(".").length > 1
            },
            errorMessage: "",
            errorMessageKey: "badDomain"
        }),
        a.formUtils.addValidator({
            name: "required",
            validatorFunction: function(b, c, d, e, f) {
                switch (c.attr("type")) {
                case "checkbox":
                    return c.is(":checked");
                case "radio":
                    return f.find('input[name="' + c.attr("name") + '"]').filter(":checked").length > 0;
                default:
                    return "" !== a.trim(b)
                }
            },
            errorMessage: "",
            errorMessageKey: function(a) {
                return "top" === a.errorMessagePosition || "function" == typeof a.errorMessagePosition ? "requiredFields" : "requiredField"
            }
        }),
        a.formUtils.addValidator({
            name: "length",
            validatorFunction: function(b, c, d, e) {
                var f = c.valAttr("length")
                  , g = c.attr("type");
                if (void 0 === f)
                    return alert('Please add attribute "data-validation-length" to ' + c[0].nodeName + " named " + c.attr("name")),
                    !0;
                var h, i = "file" === g && void 0 !== c.get(0).files ? c.get(0).files.length : b.length, j = a.formUtils.numericRangeCheck(i, f);
                switch (j[0]) {
                case "out":
                    this.errorMessage = e.lengthBadStart + f + e.lengthBadEnd,
                    h = !1;
                    break;
                case "min":
                    this.errorMessage = e.lengthTooShortStart + j[1] + e.lengthBadEnd,
                    h = !1;
                    break;
                case "max":
                    this.errorMessage = e.lengthTooLongStart + j[1] + e.lengthBadEnd,
                    h = !1;
                    break;
                default:
                    h = !0
                }
                return h
            },
            errorMessage: "",
            errorMessageKey: ""
        }),
        a.formUtils.addValidator({
            name: "url",
            validatorFunction: function(b) {
                var c = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                if (c.test(b)) {
                    var d = b.split("://")[1]
                      , e = d.indexOf("/");
                    return e > -1 && (d = d.substr(0, e)),
                    a.formUtils.validators.validate_domain.validatorFunction(d)
                }
                return !1
            },
            errorMessage: "",
            errorMessageKey: "badUrl"
        }),
        a.formUtils.addValidator({
            name: "number",
            validatorFunction: function(a, b, c) {
                if ("" !== a) {
                    var d, e, f = b.valAttr("allowing") || "", g = b.valAttr("decimal-separator") || c.decimalSeparator, h = !1, i = b.valAttr("step") || "", j = !1, k = b.attr("data-sanitize") || "", l = k.match(/(^|[\s])numberFormat([\s]|$)/i);
                    if (l) {
                        if (!window.numeral)
                            throw new ReferenceError("The data-sanitize value numberFormat cannot be used without the numeral library. Please see Data Validation in http://www.formvalidator.net for more information.");
                        a.length && (a = String(numeral().unformat(a)))
                    }
                    if (-1 === f.indexOf("number") && (f += ",number"),
                    -1 === f.indexOf("negative") && 0 === a.indexOf("-"))
                        return !1;
                    if (f.indexOf("range") > -1 && (d = parseFloat(f.substring(f.indexOf("[") + 1, f.indexOf(";"))),
                    e = parseFloat(f.substring(f.indexOf(";") + 1, f.indexOf("]"))),
                    h = !0),
                    "" !== i && (j = !0),
                    "," === g) {
                        if (a.indexOf(".") > -1)
                            return !1;
                        a = a.replace(",", ".")
                    }
                    if ("" === a.replace(/[0-9-]/g, "") && (!h || a >= d && e >= a) && (!j || a % i === 0))
                        return !0;
                    if (f.indexOf("float") > -1 && null !== a.match(new RegExp("^([0-9-]+)\\.([0-9]+)$")) && (!h || a >= d && e >= a) && (!j || a % i === 0))
                        return !0
                }
                return !1
            },
            errorMessage: "",
            errorMessageKey: "badInt"
        }),
        a.formUtils.addValidator({
            name: "alphanumeric",
            validatorFunction: function(b, c, d, e) {
                var f = "^([a-zA-Z0-9"
                  , g = "]+)$"
                  , h = c.valAttr("allowing")
                  , i = "";
                if (h) {
                    i = f + h + g;
                    var j = h.replace(/\\/g, "");
                    j.indexOf(" ") > -1 && (j = j.replace(" ", ""),
                    j += e.andSpaces || a.formUtils.LANG.andSpaces),
                    this.errorMessage = e.badAlphaNumeric + e.badAlphaNumericExtra + j
                } else
                    i = f + g,
                    this.errorMessage = e.badAlphaNumeric;
                return new RegExp(i).test(b)
            },
            errorMessage: "",
            errorMessageKey: ""
        }),
        a.formUtils.addValidator({
            name: "custom",
            validatorFunction: function(a, b) {
                var c = new RegExp(b.valAttr("regexp"));
                return c.test(a)
            },
            errorMessage: "",
            errorMessageKey: "badCustomVal"
        }),
        a.formUtils.addValidator({
            name: "date",
            validatorFunction: function(b, c, d) {
                var e = c.valAttr("format") || d.dateFormat || "yyyy-mm-dd"
                  , f = "false" === c.valAttr("require-leading-zero");
                return a.formUtils.parseDate(b, e, f) !== !1
            },
            errorMessage: "",
            errorMessageKey: "badDate"
        }),
        a.formUtils.addValidator({
            name: "checkbox_group",
            validatorFunction: function(b, c, d, e, f) {
                var g = !0
                  , h = c.attr("name")
                  , i = a('input[type=checkbox][name^="' + h + '"]', f)
                  , j = i.filter(":checked").length
                  , k = c.valAttr("qty");
                if (void 0 === k) {
                    var l = c.get(0).nodeName;
                    alert('Attribute "data-validation-qty" is missing from ' + l + " named " + c.attr("name"))
                }
                var m = a.formUtils.numericRangeCheck(j, k);
                switch (m[0]) {
                case "out":
                    this.errorMessage = e.groupCheckedRangeStart + k + e.groupCheckedEnd,
                    g = !1;
                    break;
                case "min":
                    this.errorMessage = e.groupCheckedTooFewStart + m[1] + e.groupCheckedEnd,
                    g = !1;
                    break;
                case "max":
                    this.errorMessage = e.groupCheckedTooManyStart + m[1] + e.groupCheckedEnd,
                    g = !1;
                    break;
                default:
                    g = !0
                }
                if (!g) {
                    var n = function() {
                        i.unbind("click", n),
                        i.filter("*[data-validation]").validateInputOnBlur(e, d, !1, "blur")
                    };
                    i.bind("click", n)
                }
                return g
            }
        })
    }(a)
});
function _extends() {
    return (_extends = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
    ).apply(this, arguments)
}
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(t)
}
!function(t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e()
}(this, function() {
    "use strict";
    var t = "undefined" != typeof window
      , e = t && !("onscroll"in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)
      , n = t && "IntersectionObserver"in window
      , o = t && "classList"in document.createElement("p")
      , r = {
        elements_selector: "img",
        container: e || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        load_delay: 0,
        auto_unobserve: !0,
        callback_enter: null,
        callback_exit: null,
        callback_reveal: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        use_native: !1
    }
      , a = function(t, e) {
        var n, o = new t(e);
        try {
            n = new CustomEvent("LazyLoad::Initialized",{
                detail: {
                    instance: o
                }
            })
        } catch (t) {
            (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                instance: o
            })
        }
        window.dispatchEvent(n)
    };
    var i = function(t, e) {
        return t.getAttribute("data-" + e)
    }
      , s = function(t, e, n) {
        var o = "data-" + e;
        null !== n ? t.setAttribute(o, n) : t.removeAttribute(o)
    }
      , c = function(t) {
        return "true" === i(t, "was-processed")
    }
      , l = function(t, e) {
        return s(t, "ll-timeout", e)
    }
      , u = function(t) {
        return i(t, "ll-timeout")
    }
      , d = function(t, e) {
        t && t(e)
    }
      , f = function(t, e) {
        t._loadingCount += e,
        0 === t._elements.length && 0 === t._loadingCount && d(t._settings.callback_finish)
    }
      , _ = function(t) {
        for (var e, n = [], o = 0; e = t.children[o]; o += 1)
            "SOURCE" === e.tagName && n.push(e);
        return n
    }
      , v = function(t, e, n) {
        n && t.setAttribute(e, n)
    }
      , g = function(t, e) {
        v(t, "sizes", i(t, e.data_sizes)),
        v(t, "srcset", i(t, e.data_srcset)),
        v(t, "src", i(t, e.data_src))
    }
      , m = {
        IMG: function(t, e) {
            var n = t.parentNode;
            n && "PICTURE" === n.tagName && _(n).forEach(function(t) {
                g(t, e)
            });
            g(t, e)
        },
        IFRAME: function(t, e) {
            v(t, "src", i(t, e.data_src))
        },
        VIDEO: function(t, e) {
            _(t).forEach(function(t) {
                v(t, "src", i(t, e.data_src))
            }),
            v(t, "src", i(t, e.data_src)),
            t.load()
        }
    }
      , b = function(t, e) {
        var n, o, r = e._settings, a = t.tagName, s = m[a];
        if (s)
            return s(t, r),
            f(e, 1),
            void (e._elements = (n = e._elements,
            o = t,
            n.filter(function(t) {
                return t !== o
            })));
        !function(t, e) {
            var n = i(t, e.data_src)
              , o = i(t, e.data_bg);
            n && (t.style.backgroundImage = 'url("'.concat(n, '")')),
            o && (t.style.backgroundImage = o)
        }(t, r)
    }
      , h = function(t, e) {
        o ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
    }
      , p = function(t, e, n) {
        t.addEventListener(e, n)
    }
      , y = function(t, e, n) {
        t.removeEventListener(e, n)
    }
      , E = function(t, e, n) {
        y(t, "load", e),
        y(t, "loadeddata", e),
        y(t, "error", n)
    }
      , w = function(t, e, n) {
        var r = n._settings
          , a = e ? r.class_loaded : r.class_error
          , i = e ? r.callback_loaded : r.callback_error
          , s = t.target;
        !function(t, e) {
            o ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        }(s, r.class_loading),
        h(s, a),
        d(i, s),
        f(n, -1)
    }
      , I = function(t, e) {
        var n = function n(r) {
            w(r, !0, e),
            E(t, n, o)
        }
          , o = function o(r) {
            w(r, !1, e),
            E(t, n, o)
        };
        !function(t, e, n) {
            p(t, "load", e),
            p(t, "loadeddata", e),
            p(t, "error", n)
        }(t, n, o)
    }
      , k = ["IMG", "IFRAME", "VIDEO"]
      , A = function(t, e) {
        var n = e._observer;
        z(t, e),
        n && e._settings.auto_unobserve && n.unobserve(t)
    }
      , L = function(t) {
        var e = u(t);
        e && (clearTimeout(e),
        l(t, null))
    }
      , x = function(t, e) {
        var n = e._settings.load_delay
          , o = u(t);
        o || (o = setTimeout(function() {
            A(t, e),
            L(t)
        }, n),
        l(t, o))
    }
      , z = function(t, e, n) {
        var o = e._settings;
        !n && c(t) || (k.indexOf(t.tagName) > -1 && (I(t, e),
        h(t, o.class_loading)),
        b(t, e),
        function(t) {
            s(t, "was-processed", "true")
        }(t),
        d(o.callback_reveal, t),
        d(o.callback_set, t))
    }
      , O = function(t) {
        return !!n && (t._observer = new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                return function(t) {
                    return t.isIntersecting || t.intersectionRatio > 0
                }(e) ? function(t, e) {
                    var n = e._settings;
                    d(n.callback_enter, t),
                    n.load_delay ? x(t, e) : A(t, e)
                }(e.target, t) : function(t, e) {
                    var n = e._settings;
                    d(n.callback_exit, t),
                    n.load_delay && L(t)
                }(e.target, t)
            })
        }
        ,{
            root: (e = t._settings).container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px"
        }),
        !0);
        var e
    }
      , N = ["IMG", "IFRAME"]
      , C = function(t, e) {
        return function(t) {
            return t.filter(function(t) {
                return !c(t)
            })
        }((n = t || function(t) {
            return t.container.querySelectorAll(t.elements_selector)
        }(e),
        Array.prototype.slice.call(n)));
        var n
    }
      , M = function(t, e) {
        this._settings = function(t) {
            return _extends({}, r, t)
        }(t),
        this._loadingCount = 0,
        O(this),
        this.update(e)
    };
    return M.prototype = {
        update: function(t) {
            var n, o = this, r = this._settings;
            (this._elements = C(t, r),
            !e && this._observer) ? (function(t) {
                return t.use_native && "loading"in HTMLImageElement.prototype
            }(r) && ((n = this)._elements.forEach(function(t) {
                -1 !== N.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"),
                z(t, n))
            }),
            this._elements = C(t, r)),
            this._elements.forEach(function(t) {
                o._observer.observe(t)
            })) : this.loadAll()
        },
        destroy: function() {
            var t = this;
            this._observer && (this._elements.forEach(function(e) {
                t._observer.unobserve(e)
            }),
            this._observer = null),
            this._elements = null,
            this._settings = null
        },
        load: function(t, e) {
            z(t, this, e)
        },
        loadAll: function() {
            var t = this;
            this._elements.forEach(function(e) {
                A(e, t)
            })
        }
    },
    t && function(t, e) {
        if (e)
            if (e.length)
                for (var n, o = 0; n = e[o]; o += 1)
                    a(t, n);
            else
                a(t, e)
    }(M, window.lazyLoadOptions),
    M
});
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s)
        }
    }
    function t() {
        return (t = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function i(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function s(e, t) {
        void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((function(a) {
            void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a])
        }
        ))
    }
    var a = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function r() {
        var e = "undefined" != typeof document ? document : {};
        return s(e, a),
        e
    }
    var n = {
        document: a,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function l() {
        var e = "undefined" != typeof window ? window : {};
        return s(e, n),
        e
    }
    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function h() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function p(e, t, i) {
        return (p = h() ? Reflect.construct : function(e, t, i) {
            var s = [null];
            s.push.apply(s, t);
            var a = new (Function.bind.apply(e, s));
            return i && d(a, i.prototype),
            a
        }
        ).apply(null, arguments)
    }
    function u(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (u = function(e) {
            if (null === e || (i = e,
            -1 === Function.toString.call(i).indexOf("[native code]")))
                return e;
            var i;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, s)
            }
            function s() {
                return p(e, arguments, o(this).constructor)
            }
            return s.prototype = Object.create(e.prototype, {
                constructor: {
                    value: s,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            d(s, e)
        }
        )(e)
    }
    var c = function(e) {
        var t, i;
        function s(t) {
            var i, s, a;
            return i = e.call.apply(e, [this].concat(t)) || this,
            s = function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(i),
            a = s.__proto__,
            Object.defineProperty(s, "__proto__", {
                get: function() {
                    return a
                },
                set: function(e) {
                    a.__proto__ = e
                }
            }),
            i
        }
        return i = e,
        (t = s).prototype = Object.create(i.prototype),
        t.prototype.constructor = t,
        t.__proto__ = i,
        s
    }(u(Array));
    function v(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach((function(e) {
            Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e)
        }
        )),
        t
    }
    function f(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function m(e, t) {
        var i = l()
          , s = r()
          , a = [];
        if (!t && e instanceof c)
            return e;
        if (!e)
            return new c(a);
        if ("string" == typeof e) {
            var n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                var o = "div";
                0 === n.indexOf("<li") && (o = "ul"),
                0 === n.indexOf("<tr") && (o = "tbody"),
                0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"),
                0 === n.indexOf("<tbody") && (o = "table"),
                0 === n.indexOf("<option") && (o = "select");
                var d = s.createElement(o);
                d.innerHTML = n;
                for (var h = 0; h < d.childNodes.length; h += 1)
                    a.push(d.childNodes[h])
            } else
                a = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1)
                        i.push(s[a]);
                    return i
                }(e.trim(), t || s)
        } else if (e.nodeType || e === i || e === s)
            a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof c)
                return e;
            a = e
        }
        return new c(function(e) {
            for (var t = [], i = 0; i < e.length; i += 1)
                -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }(a))
    }
    m.fn = c.prototype;
    var g, w, y, b = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var s = v(t.map((function(e) {
                return e.split(" ")
            }
            )));
            return this.forEach((function(e) {
                var t;
                (t = e.classList).add.apply(t, s)
            }
            )),
            this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var s = v(t.map((function(e) {
                return e.split(" ")
            }
            )));
            return this.forEach((function(e) {
                var t;
                (t = e.classList).remove.apply(t, s)
            }
            )),
            this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var s = v(t.map((function(e) {
                return e.split(" ")
            }
            )));
            return f(this, (function(e) {
                return s.filter((function(t) {
                    return e.classList.contains(t)
                }
                )).length > 0
            }
            )).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var s = v(t.map((function(e) {
                return e.split(" ")
            }
            )));
            this.forEach((function(e) {
                s.forEach((function(t) {
                    e.classList.toggle(t)
                }
                ))
            }
            ))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === arguments.length)
                    this[i].setAttribute(e, t);
                else
                    for (var s in e)
                        this[i][s] = e[s],
                        this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].style.transition = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    m(t).is(a))
                        r.apply(t, i);
                    else
                        for (var s = m(t).parents(), n = 0; n < s.length; n += 1)
                            m(s[n]).is(a) && r.apply(s[n], i)
                }
            }
            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
            }
            "function" == typeof t[1] && (s = t[0],
            r = t[1],
            n = t[2],
            a = void 0),
            n || (n = !1);
            for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
                var u = this[p];
                if (a)
                    for (d = 0; d < h.length; d += 1) {
                        var c = h[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []),
                        u.dom7LiveListeners[c].push({
                            listener: r,
                            proxyListener: l
                        }),
                        u.addEventListener(c, l, n)
                    }
                else
                    for (d = 0; d < h.length; d += 1) {
                        var v = h[d];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                        u.dom7Listeners[v].push({
                            listener: r,
                            proxyListener: o
                        }),
                        u.addEventListener(v, o, n)
                    }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (s = t[0],
            r = t[1],
            n = t[2],
            a = void 0),
            n || (n = !1);
            for (var l = s.split(" "), o = 0; o < l.length; o += 1)
                for (var d = l[o], h = 0; h < this.length; h += 1) {
                    var p = this[h]
                      , u = void 0;
                    if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]),
                    u && u.length)
                        for (var c = u.length - 1; c >= 0; c -= 1) {
                            var v = u[c];
                            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n),
                            u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n),
                            u.splice(c, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++)
                i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (e.CustomEvent) {
                        var p = new e.CustomEvent(o,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        });
                        h.dom7EventData = i.filter((function(e, t) {
                            return t > 0
                        }
                        )),
                        h.dispatchEvent(p),
                        h.dom7EventData = [],
                        delete h.dom7EventData
                    }
                }
            return this
        },
        transitionEnd: function(e) {
            var t = this;
            return e && t.on("transitionend", (function i(s) {
                s.target === this && (e.call(this, s),
                t.off("transitionend", i))
            }
            )),
            this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            var e = l();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                var e = l()
                  , t = r()
                  , i = this[0]
                  , s = i.getBoundingClientRect()
                  , a = t.body
                  , n = i.clientTop || a.clientTop || 0
                  , o = i.clientLeft || a.clientLeft || 0
                  , d = i === e ? e.scrollY : i.scrollTop
                  , h = i === e ? e.scrollX : i.scrollLeft;
                return {
                    top: s.top + d - n,
                    left: s.left + h - o
                }
            }
            return null
        },
        css: function(e, t) {
            var i, s = l();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var a in e)
                            this[i].style[a] = e[a];
                    return this
                }
                if (this[0])
                    return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1)
                    this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach((function(t, i) {
                e.apply(t, [t, i])
            }
            )),
            this) : this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, i, s = l(), a = r(), n = this[0];
            if (!n || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (n.matches)
                    return n.matches(e);
                if (n.webkitMatchesSelector)
                    return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector)
                    return n.msMatchesSelector(e);
                for (t = m(e),
                i = 0; i < t.length; i += 1)
                    if (t[i] === n)
                        return !0;
                return !1
            }
            if (e === a)
                return n === a;
            if (e === s)
                return n === s;
            if (e.nodeType || e instanceof c) {
                for (t = e.nodeType ? [e] : e,
                i = 0; i < t.length; i += 1)
                    if (t[i] === n)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t = this.length;
            if (e > t - 1)
                return m([]);
            if (e < 0) {
                var i = t + e;
                return m(i < 0 ? [] : [this[i]])
            }
            return m([this[e]])
        },
        append: function() {
            for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
                e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild; )
                            this[s].appendChild(a.firstChild)
                    } else if (e instanceof c)
                        for (var n = 0; n < e.length; n += 1)
                            this[s].appendChild(e[n]);
                    else
                        this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, i, s = r();
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = s.createElement("div");
                    for (a.innerHTML = e,
                    i = a.childNodes.length - 1; i >= 0; i -= 1)
                        this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof c)
                    for (i = 0; i < e.length; i += 1)
                        this[t].insertBefore(e[i], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([])
        },
        nextAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return m([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                e ? m(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return m(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([])
            }
            return m([])
        },
        prevAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return m([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                e ? m(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return m(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return m(t)
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].parentNode; s; )
                    e ? m(s).is(e) && t.push(s) : t.push(s),
                    s = s.parentNode;
            return m(t)
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
                    t.push(s[a]);
            return m(t)
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].children, a = 0; a < s.length; a += 1)
                    e && !m(s[a]).is(e) || t.push(s[a]);
            return m(t)
        },
        filter: function(e) {
            return m(f(this, e))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function E(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function x() {
        return Date.now()
    }
    function T(e, t) {
        void 0 === t && (t = "x");
        var i, s, a, r = l(), n = r.getComputedStyle(e, null);
        return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function(e) {
            return e.replace(",", ".")
        }
        )).join(", ")),
        a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
        "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
        "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
        s || 0
    }
    function C(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
    }
    function S() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
            var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            if (null != i)
                for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
                    var n = s[a]
                      , l = Object.getOwnPropertyDescriptor(i, n);
                    void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {},
                    S(e[n], i[n])) : e[n] = i[n])
                }
        }
        return e
    }
    function M(e, t) {
        Object.keys(t).forEach((function(i) {
            C(t[i]) && Object.keys(t[i]).forEach((function(s) {
                "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e))
            }
            )),
            e[i] = t[i]
        }
        ))
    }
    function z() {
        return g || (g = function() {
            var e = l()
              , t = r();
            return {
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints"in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver"in e || "WebkitMutationObserver"in e,
                passiveListener: function() {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart"in e
            }
        }()),
        g
    }
    function P(e) {
        return void 0 === e && (e = {}),
        w || (w = function(e) {
            var t = (void 0 === e ? {} : e).userAgent
              , i = z()
              , s = l()
              , a = s.navigator.platform
              , r = t || s.navigator.userAgent
              , n = {
                ios: !1,
                android: !1
            }
              , o = s.screen.width
              , d = s.screen.height
              , h = r.match(/(Android);?[\s\/]+([\d.]+)?/)
              , p = r.match(/(iPad).*OS\s([\d_]+)/)
              , u = r.match(/(iPod)(.*OS\s([\d_]+))?/)
              , c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , v = "Win32" === a
              , f = "MacIntel" === a;
            return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]),
            f = !1),
            h && !v && (n.os = "android",
            n.android = !0),
            (p || c || u) && (n.os = "ios",
            n.ios = !0),
            n
        }(e)),
        w
    }
    function k() {
        return y || (y = function() {
            var e, t = l();
            return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(),
                e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()),
        y
    }
    Object.keys(b).forEach((function(e) {
        m.fn[e] = b[e]
    }
    ));
    var $ = {
        name: "resize",
        create: function() {
            var e = this;
            S(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function(e) {
                var t = l();
                t.addEventListener("resize", e.resize.resizeHandler),
                t.addEventListener("orientationchange", e.resize.orientationChangeHandler)
            },
            destroy: function(e) {
                var t = l();
                t.removeEventListener("resize", e.resize.resizeHandler),
                t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    }
      , L = {
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = l()
              , s = this
              , a = new (i.MutationObserver || i.WebkitMutationObserver)((function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        s.emit("observerUpdate", e[0])
                    };
                    i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                } else
                    s.emit("observerUpdate", e[0])
            }
            ));
            a.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            s.observer.observers.push(a)
        },
        init: function() {
            if (this.support.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach((function(e) {
                e.disconnect()
            }
            )),
            this.observer.observers = []
        }
    }
      , I = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            M(this, {
                observer: t(t({}, L), {}, {
                    observers: []
                })
            })
        },
        on: {
            init: function(e) {
                e.observer.init()
            },
            destroy: function(e) {
                e.observer.destroy()
            }
        }
    };
    function O(e) {
        var t = r()
          , i = l()
          , s = this.touchEventsData
          , a = this.params
          , n = this.touches;
        if (!this.animating || !a.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var d = m(o.target);
            if (("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === o.type,
            (s.isTouchEvent || !("which"in o) || 3 !== o.which) && !(!s.isTouchEvent && "button"in o && o.button > 0 || s.isTouched && s.isMoved)))
                if (a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0])
                    this.allowClick = !0;
                else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
                    n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    var h = n.currentX
                      , p = n.currentY
                      , u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection
                      , c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                    if (!u || !(h <= c || h >= i.screen.width - c)) {
                        if (S(s, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        n.startX = h,
                        n.startY = p,
                        s.touchStartTime = x(),
                        this.allowClick = !0,
                        this.updateSize(),
                        this.swipeDirection = void 0,
                        a.threshold > 0 && (s.allowThresholdMove = !1),
                        "touchstart" !== o.type) {
                            var v = !0;
                            d.is(s.formElements) && (v = !1),
                            t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
                            var f = v && this.allowTouchMove && a.touchStartPreventDefault;
                            (a.touchStartForcePreventDefault || f) && o.preventDefault()
                        }
                        this.emit("touchStart", o)
                    }
                }
        }
    }
    function A(e) {
        var t = r()
          , i = this.touchEventsData
          , s = this.params
          , a = this.touches
          , n = this.rtlTranslate
          , l = e;
        if (l.originalEvent && (l = l.originalEvent),
        i.isTouched) {
            if (!i.isTouchEvent || "touchmove" === l.type) {
                var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
                  , d = "touchmove" === l.type ? o.pageX : l.pageX
                  , h = "touchmove" === l.type ? o.pageY : l.pageY;
                if (l.preventedByNestedSwiper)
                    return a.startX = d,
                    void (a.startY = h);
                if (!this.allowTouchMove)
                    return this.allowClick = !1,
                    void (i.isTouched && (S(a, {
                        startX: d,
                        startY: h,
                        currentX: d,
                        currentY: h
                    }),
                    i.touchStartTime = x()));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate())
                            return i.isTouched = !1,
                            void (i.isMoved = !1)
                    } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate())
                        return;
                if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements))
                    return i.isMoved = !0,
                    void (this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l),
                !(l.targetTouches && l.targetTouches.length > 1)) {
                    a.currentX = d,
                    a.currentY = h;
                    var p = a.currentX - a.startX
                      , u = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var c;
                        if (void 0 === i.isScrolling)
                            this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI,
                            i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l),
                        void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)),
                        i.isScrolling)
                            i.isTouched = !1;
                        else if (i.startMoving) {
                            this.allowClick = !1,
                            !s.cssMode && l.cancelable && l.preventDefault(),
                            s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
                            i.isMoved || (s.loop && this.loopFix(),
                            i.startTranslate = this.getTranslate(),
                            this.setTransition(0),
                            this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                            i.allowMomentumBounce = !1,
                            !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                            this.emit("sliderFirstMove", l)),
                            this.emit("sliderMove", l),
                            i.isMoved = !0;
                            var v = this.isHorizontal() ? p : u;
                            a.diff = v,
                            v *= s.touchRatio,
                            n && (v = -v),
                            this.swipeDirection = v > 0 ? "prev" : "next",
                            i.currentTranslate = v + i.startTranslate;
                            var f = !0
                              , g = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (g = 0),
                            v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1,
                            s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1,
                            s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))),
                            f && (l.preventedByNestedSwiper = !0),
                            !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                            !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                            s.threshold > 0) {
                                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove))
                                    return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return i.allowThresholdMove = !0,
                                    a.startX = a.currentX,
                                    a.startY = a.currentY,
                                    i.currentTranslate = i.startTranslate,
                                    void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(),
                            this.updateSlidesClasses()),
                            s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: a[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }),
                            i.velocities.push({
                                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                                time: x()
                            })),
                            this.updateProgress(i.currentTranslate),
                            this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else
            i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }
    function D(e) {
        var t = this
          , i = t.touchEventsData
          , s = t.params
          , a = t.touches
          , r = t.rtlTranslate
          , n = t.$wrapperEl
          , l = t.slidesGrid
          , o = t.snapGrid
          , d = e;
        if (d.originalEvent && (d = d.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", d),
        i.allowTouchCallbacks = !1,
        !i.isTouched)
            return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var h, p = x(), u = p - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d),
        t.emit("tap click", d),
        u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
        i.lastClickTime = x(),
        E((function() {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
            return i.isTouched = !1,
            i.isMoved = !1,
            void (i.startMoving = !1);
        if (i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1,
        h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
        !s.cssMode)
            if (s.freeMode) {
                if (h < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (h > -t.maxTranslate())
                    return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var c = i.velocities.pop()
                          , v = i.velocities.pop()
                          , f = c.position - v.position
                          , m = c.time - v.time;
                        t.velocity = f / m,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                        (m > 150 || x() - c.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio,
                    i.velocities.length = 0;
                    var g = 1e3 * s.freeModeMomentumRatio
                      , w = t.velocity * g
                      , y = t.translate + w;
                    r && (y = -y);
                    var b, T, C = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                        b = t.maxTranslate(),
                        C = !0,
                        i.allowMomentumBounce = !0) : y = t.maxTranslate(),
                        s.loop && s.centeredSlides && (T = !0);
                    else if (y > t.minTranslate())
                        s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                        b = t.minTranslate(),
                        C = !0,
                        i.allowMomentumBounce = !0) : y = t.minTranslate(),
                        s.loop && s.centeredSlides && (T = !0);
                    else if (s.freeModeSticky) {
                        for (var M, z = 0; z < o.length; z += 1)
                            if (o[z] > -y) {
                                M = z;
                                break
                            }
                        y = -(y = Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) || "next" === t.swipeDirection ? o[M] : o[M - 1])
                    }
                    if (T && t.once("transitionEnd", (function() {
                        t.loopFix()
                    }
                    )),
                    0 !== t.velocity) {
                        if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity),
                        s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate)
                              , k = t.slidesSizesGrid[t.activeIndex];
                            g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky)
                        return void t.slideToClosest();
                    s.freeModeMomentumBounce && C ? (t.updateProgress(b),
                    t.setTransition(g),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(s.speed),
                        setTimeout((function() {
                            t.setTranslate(b),
                            n.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            ))
                        }
                        ), 0))
                    }
                    ))) : t.velocity ? (t.updateProgress(y),
                    t.setTransition(g),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    }
                    )))) : t.updateProgress(y),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                } else if (s.freeModeSticky)
                    return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
            } else {
                for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I,
                    L = l[I + O] - l[I]) : h >= l[I] && ($ = I,
                    L = l[l.length - 1] - l[l.length - 2])
                }
                var A = (h - l[$]) / L
                  , D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)),
                    "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($))
                } else {
                    if (!s.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D),
                    "prev" === t.swipeDirection && t.slideTo($))
                }
            }
    }
    function G() {
        var e = this.params
          , t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext
              , s = this.allowSlidePrev
              , a = this.snapGrid;
            this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            this.updateSlidesClasses(),
            ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
            this.allowSlidePrev = s,
            this.allowSlideNext = i,
            this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    function N(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    function B() {
        var e = this.wrapperEl
          , t = this.rtlTranslate;
        this.previousTranslate = this.translate,
        this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop,
        -0 === this.translate && (this.translate = 0),
        this.updateActiveIndex(),
        this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
        this.emit("setTranslate", this.translate, !1)
    }
    var H = !1;
    function X() {}
    var Y = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        nested: !1,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    }
      , V = {
        modular: {
            useParams: function(e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var s = t.modules[i];
                    s.params && S(e, s.params)
                }
                ))
            },
            useModules: function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach((function(i) {
                    var s = t.modules[i]
                      , a = e[i] || {};
                    s.on && t.on && Object.keys(s.on).forEach((function(e) {
                        t.on(e, s.on[e])
                    }
                    )),
                    s.create && s.create.bind(t)(a)
                }
                ))
            }
        },
        eventsEmitter: {
            on: function(e, t, i) {
                var s = this;
                if ("function" != typeof t)
                    return s;
                var a = i ? "unshift" : "push";
                return e.split(" ").forEach((function(e) {
                    s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][a](t)
                }
                )),
                s
            },
            once: function(e, t, i) {
                var s = this;
                if ("function" != typeof t)
                    return s;
                function a() {
                    s.off(e, a),
                    a.__emitterProxy && delete a.__emitterProxy;
                    for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    t.apply(s, r)
                }
                return a.__emitterProxy = t,
                s.on(e, a, i)
            },
            onAny: function(e, t) {
                if ("function" != typeof e)
                    return this;
                var i = t ? "unshift" : "push";
                return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e),
                this
            },
            offAny: function(e) {
                if (!this.eventsAnyListeners)
                    return this;
                var t = this.eventsAnyListeners.indexOf(e);
                return t >= 0 && this.eventsAnyListeners.splice(t, 1),
                this
            },
            off: function(e, t) {
                var i = this;
                return i.eventsListeners ? (e.split(" ").forEach((function(e) {
                    void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function(s, a) {
                        (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
                    }
                    ))
                }
                )),
                i) : i
            },
            emit: function() {
                var e, t, i, s = this;
                if (!s.eventsListeners)
                    return s;
                for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
                    r[n] = arguments[n];
                "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0],
                t = r.slice(1, r.length),
                i = s) : (e = r[0].events,
                t = r[0].data,
                i = r[0].context || s),
                t.unshift(i);
                var l = Array.isArray(e) ? e : e.split(" ");
                return l.forEach((function(e) {
                    if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach((function(s) {
                        s.apply(i, [e].concat(t))
                    }
                    )),
                    s.eventsListeners && s.eventsListeners[e]) {
                        var a = [];
                        s.eventsListeners[e].forEach((function(e) {
                            a.push(e)
                        }
                        )),
                        a.forEach((function(e) {
                            e.apply(i, t)
                        }
                        ))
                    }
                }
                )),
                s
            }
        },
        update: {
            updateSize: function() {
                var e, t, i = this.$el;
                e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth,
                t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight,
                0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10),
                t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10),
                Number.isNaN(e) && (e = 0),
                Number.isNaN(t) && (t = 0),
                S(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                }))
            },
            updateSlides: function() {
                var e = l()
                  , t = this.params
                  , i = this.$wrapperEl
                  , s = this.size
                  , a = this.rtlTranslate
                  , r = this.wrongRTL
                  , n = this.virtual && t.virtual.enabled
                  , o = n ? this.virtual.slides.length : this.slides.length
                  , d = i.children("." + this.params.slideClass)
                  , h = n ? this.virtual.slides.length : d.length
                  , p = []
                  , u = []
                  , c = [];
                function v(e, i) {
                    return !t.cssMode || i !== d.length - 1
                }
                var f = t.slidesOffsetBefore;
                "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
                var m = t.slidesOffsetAfter;
                "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
                var g = this.snapGrid.length
                  , w = this.snapGrid.length
                  , y = t.spaceBetween
                  , b = -f
                  , E = 0
                  , x = 0;
                if (void 0 !== s) {
                    var T, C;
                    "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s),
                    this.virtualSize = -y,
                    a ? d.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                    t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn,
                    "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                    for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
                        C = 0;
                        var L = d.eq($);
                        if (t.slidesPerColumn > 1) {
                            var I = void 0
                              , O = void 0
                              , A = void 0;
                            if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn))
                                  , G = $ - t.slidesPerColumn * t.slidesPerGroup * D
                                  , N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                                I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z,
                                L.css({
                                    "-webkit-box-ordinal-group": I,
                                    "-moz-box-ordinal-group": I,
                                    "-ms-flex-order": I,
                                    "-webkit-order": I,
                                    order: I
                                })
                            } else
                                "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z,
                                (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0,
                                O += 1)) : O = $ - (A = Math.floor($ / P)) * P;
                            L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px")
                        }
                        if ("none" !== L.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var B = e.getComputedStyle(L[0], null)
                                  , H = L[0].style.transform
                                  , X = L[0].style.webkitTransform;
                                if (H && (L[0].style.transform = "none"),
                                X && (L[0].style.webkitTransform = "none"),
                                t.roundLengths)
                                    C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
                                else if (this.isHorizontal()) {
                                    var Y = parseFloat(B.getPropertyValue("width") || 0)
                                      , V = parseFloat(B.getPropertyValue("padding-left") || 0)
                                      , F = parseFloat(B.getPropertyValue("padding-right") || 0)
                                      , R = parseFloat(B.getPropertyValue("margin-left") || 0)
                                      , W = parseFloat(B.getPropertyValue("margin-right") || 0)
                                      , q = B.getPropertyValue("box-sizing");
                                    if (q && "border-box" === q)
                                        C = Y + R + W;
                                    else {
                                        var j = L[0]
                                          , _ = j.clientWidth;
                                        C = Y + V + F + R + W + (j.offsetWidth - _)
                                    }
                                } else {
                                    var U = parseFloat(B.getPropertyValue("height") || 0)
                                      , K = parseFloat(B.getPropertyValue("padding-top") || 0)
                                      , Z = parseFloat(B.getPropertyValue("padding-bottom") || 0)
                                      , J = parseFloat(B.getPropertyValue("margin-top") || 0)
                                      , Q = parseFloat(B.getPropertyValue("margin-bottom") || 0)
                                      , ee = B.getPropertyValue("box-sizing");
                                    if (ee && "border-box" === ee)
                                        C = U + J + Q;
                                    else {
                                        var te = L[0]
                                          , ie = te.clientHeight;
                                        C = U + K + Z + J + Q + (te.offsetHeight - ie)
                                    }
                                }
                                H && (L[0].style.transform = H),
                                X && (L[0].style.webkitTransform = X),
                                t.roundLengths && (C = Math.floor(C))
                            } else
                                C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView,
                                t.roundLengths && (C = Math.floor(C)),
                                d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");
                            d[$] && (d[$].swiperSlideSize = C),
                            c.push(C),
                            t.centeredSlides ? (b = b + C / 2 + E / 2 + y,
                            0 === E && 0 !== $ && (b = b - s / 2 - y),
                            0 === $ && (b = b - s / 2 - y),
                            Math.abs(b) < .001 && (b = 0),
                            t.roundLengths && (b = Math.floor(b)),
                            x % t.slidesPerGroup == 0 && p.push(b),
                            u.push(b)) : (t.roundLengths && (b = Math.floor(b)),
                            (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(b),
                            u.push(b),
                            b = b + C + y),
                            this.virtualSize += C + y,
                            E = C,
                            x += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, s) + m,
                    a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                        width: this.virtualSize + t.spaceBetween + "px"
                    }),
                    t.setWrapperSize && (this.isHorizontal() ? i.css({
                        width: this.virtualSize + t.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + t.spaceBetween + "px"
                    })),
                    t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T,
                    this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                    this.isHorizontal() ? i.css({
                        width: this.virtualSize + t.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + t.spaceBetween + "px"
                    }),
                    t.centeredSlides)) {
                        M = [];
                        for (var se = 0; se < p.length; se += 1) {
                            var ae = p[se];
                            t.roundLengths && (ae = Math.floor(ae)),
                            p[se] < this.virtualSize + p[0] && M.push(ae)
                        }
                        p = M
                    }
                    if (!t.centeredSlides) {
                        M = [];
                        for (var re = 0; re < p.length; re += 1) {
                            var ne = p[re];
                            t.roundLengths && (ne = Math.floor(ne)),
                            p[re] <= this.virtualSize - s && M.push(ne)
                        }
                        p = M,
                        Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                    }
                    if (0 === p.length && (p = [0]),
                    0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                        marginLeft: y + "px"
                    }) : d.filter(v).css({
                        marginRight: y + "px"
                    }) : d.filter(v).css({
                        marginBottom: y + "px"
                    })),
                    t.centeredSlides && t.centeredSlidesBounds) {
                        var le = 0;
                        c.forEach((function(e) {
                            le += e + (t.spaceBetween ? t.spaceBetween : 0)
                        }
                        ));
                        var oe = (le -= t.spaceBetween) - s;
                        p = p.map((function(e) {
                            return e < 0 ? -f : e > oe ? oe + m : e
                        }
                        ))
                    }
                    if (t.centerInsufficientSlides) {
                        var de = 0;
                        if (c.forEach((function(e) {
                            de += e + (t.spaceBetween ? t.spaceBetween : 0)
                        }
                        )),
                        (de -= t.spaceBetween) < s) {
                            var he = (s - de) / 2;
                            p.forEach((function(e, t) {
                                p[t] = e - he
                            }
                            )),
                            u.forEach((function(e, t) {
                                u[t] = e + he
                            }
                            ))
                        }
                    }
                    S(this, {
                        slides: d,
                        snapGrid: p,
                        slidesGrid: u,
                        slidesSizesGrid: c
                    }),
                    h !== o && this.emit("slidesLengthChange"),
                    p.length !== g && (this.params.watchOverflow && this.checkOverflow(),
                    this.emit("snapGridLengthChange")),
                    u.length !== w && this.emit("slidesGridLengthChange"),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, i = [], s = 0;
                if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
                "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    if (this.params.centeredSlides)
                        this.visibleSlides.each((function(e) {
                            i.push(e)
                        }
                        ));
                    else
                        for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                            var a = this.activeIndex + t;
                            if (a > this.slides.length)
                                break;
                            i.push(this.slides.eq(a)[0])
                        }
                else
                    i.push(this.slides.eq(this.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1)
                    if (void 0 !== i[t]) {
                        var r = i[t].offsetHeight;
                        s = r > s ? r : s
                    }
                s && this.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1)
                    e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this.params
                  , i = this.slides
                  , s = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var a = -e;
                    s && (a = e),
                    i.removeClass(t.slideVisibleClass),
                    this.visibleSlidesIndexes = [],
                    this.visibleSlides = [];
                    for (var r = 0; r < i.length; r += 1) {
                        var n = i[r]
                          , l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                            var o = -(a - n.swiperSlideOffset)
                              , d = o + this.slidesSizesGrid[r];
                            (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n),
                            this.visibleSlidesIndexes.push(r),
                            i.eq(r).addClass(t.slideVisibleClass))
                        }
                        n.progress = s ? -l : l
                    }
                    this.visibleSlides = m(this.visibleSlides)
                }
            },
            updateProgress: function(e) {
                if (void 0 === e) {
                    var t = this.rtlTranslate ? -1 : 1;
                    e = this && this.translate && this.translate * t || 0
                }
                var i = this.params
                  , s = this.maxTranslate() - this.minTranslate()
                  , a = this.progress
                  , r = this.isBeginning
                  , n = this.isEnd
                  , l = r
                  , o = n;
                0 === s ? (a = 0,
                r = !0,
                n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0,
                n = a >= 1),
                S(this, {
                    progress: a,
                    isBeginning: r,
                    isEnd: n
                }),
                (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
                r && !l && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                (l && !r || o && !n) && this.emit("fromEdge"),
                this.emit("progress", a)
            },
            updateSlidesClasses: function() {
                var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
                t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
                i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
                var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)),
                this.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, l = this.realIndex, o = this.snapIndex, d = e;
                if (void 0 === d) {
                    for (var h = 0; h < s.length; h += 1)
                        void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                    r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (a.indexOf(i) >= 0)
                    t = a.indexOf(i);
                else {
                    var p = Math.min(r.slidesPerGroupSkip, d);
                    t = p + Math.floor((d - p) / r.slidesPerGroup)
                }
                if (t >= a.length && (t = a.length - 1),
                d !== n) {
                    var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    S(this, {
                        snapIndex: t,
                        realIndex: u,
                        previousIndex: n,
                        activeIndex: d
                    }),
                    this.emit("activeIndexChange"),
                    this.emit("snapIndexChange"),
                    l !== u && this.emit("realIndexChange"),
                    (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
                } else
                    t !== o && (this.snapIndex = t,
                    this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var t = this.params
                  , i = m(e.target).closest("." + t.slideClass)[0]
                  , s = !1;
                if (i)
                    for (var a = 0; a < this.slides.length; a += 1)
                        this.slides[a] === i && (s = !0);
                if (!i || !s)
                    return this.clickedSlide = void 0,
                    void (this.clickedIndex = void 0);
                this.clickedSlide = i,
                this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(),
                t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params
                  , i = this.rtlTranslate
                  , s = this.translate
                  , a = this.$wrapperEl;
                if (t.virtualTranslate)
                    return i ? -s : s;
                if (t.cssMode)
                    return s;
                var r = T(a[0], e);
                return i && (r = -r),
                r || 0
            },
            setTranslate: function(e, t) {
                var i = this.rtlTranslate
                  , s = this.params
                  , a = this.$wrapperEl
                  , r = this.wrapperEl
                  , n = this.progress
                  , l = 0
                  , o = 0;
                this.isHorizontal() ? l = i ? -e : e : o = e,
                s.roundLengths && (l = Math.floor(l),
                o = Math.floor(o)),
                s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"),
                this.previousTranslate = this.translate,
                this.translate = this.isHorizontal() ? l : o;
                var d = this.maxTranslate() - this.minTranslate();
                (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e),
                this.emit("setTranslate", this.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, s, a) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
                var r = this
                  , n = r.params
                  , l = r.wrapperEl;
                if (r.animating && n.preventInteractionOnTransition)
                    return !1;
                var o, d = r.minTranslate(), h = r.maxTranslate();
                if (o = s && e > d ? d : s && e < h ? h : e,
                r.updateProgress(o),
                n.cssMode) {
                    var p, u = r.isHorizontal();
                    if (0 === t)
                        l[u ? "scrollLeft" : "scrollTop"] = -o;
                    else if (l.scrollTo)
                        l.scrollTo(((p = {})[u ? "left" : "top"] = -o,
                        p.behavior = "smooth",
                        p));
                    else
                        l[u ? "scrollLeft" : "scrollTop"] = -o;
                    return !0
                }
                return 0 === t ? (r.setTransition(0),
                r.setTranslate(o),
                i && (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionEnd"))) : (r.setTransition(t),
                r.setTranslate(o),
                i && (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionStart")),
                r.animating || (r.animating = !0,
                r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                    r.onTranslateToWrapperTransitionEnd = null,
                    delete r.onTranslateToWrapperTransitionEnd,
                    i && r.emit("transitionEnd"))
                }
                ),
                r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                !0
            }
        },
        transition: {
            setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                var i = this.activeIndex
                  , s = this.params
                  , a = this.previousIndex;
                if (!s.cssMode) {
                    s.autoHeight && this.updateAutoHeight();
                    var r = t;
                    if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                    this.emit("transitionStart"),
                    e && i !== a) {
                        if ("reset" === r)
                            return void this.emit("slideResetTransitionStart");
                        this.emit("slideChangeTransitionStart"),
                        "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                    }
                }
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                var i = this.activeIndex
                  , s = this.previousIndex
                  , a = this.params;
                if (this.animating = !1,
                !a.cssMode) {
                    this.setTransition(0);
                    var r = t;
                    if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
                    this.emit("transitionEnd"),
                    e && i !== s) {
                        if ("reset" === r)
                            return void this.emit("slideResetTransitionEnd");
                        this.emit("slideChangeTransitionEnd"),
                        "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                    }
                }
            }
        },
        slide: {
            slideTo: function(e, t, i, s) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var a = this
                  , r = e;
                r < 0 && (r = 0);
                var n = a.params
                  , l = a.snapGrid
                  , o = a.slidesGrid
                  , d = a.previousIndex
                  , h = a.activeIndex
                  , p = a.rtlTranslate
                  , u = a.wrapperEl;
                if (a.animating && n.preventInteractionOnTransition)
                    return !1;
                var c = Math.min(a.params.slidesPerGroupSkip, r)
                  , v = c + Math.floor((r - c) / a.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1),
                (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                var f, m = -l[v];
                if (a.updateProgress(m),
                n.normalizeSlideIndex)
                    for (var g = 0; g < o.length; g += 1)
                        -Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
                if (a.initialized && r !== h) {
                    if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
                        return !1;
                    if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r)
                        return !1
                }
                if (f = r > h ? "next" : r < h ? "prev" : "reset",
                p && -m === a.translate || !p && m === a.translate)
                    return a.updateActiveIndex(r),
                    n.autoHeight && a.updateAutoHeight(),
                    a.updateSlidesClasses(),
                    "slide" !== n.effect && a.setTranslate(m),
                    "reset" !== f && (a.transitionStart(i, f),
                    a.transitionEnd(i, f)),
                    !1;
                if (n.cssMode) {
                    var w, y = a.isHorizontal(), b = -m;
                    if (p && (b = u.scrollWidth - u.offsetWidth - b),
                    0 === t)
                        u[y ? "scrollLeft" : "scrollTop"] = b;
                    else if (u.scrollTo)
                        u.scrollTo(((w = {})[y ? "left" : "top"] = b,
                        w.behavior = "smooth",
                        w));
                    else
                        u[y ? "scrollLeft" : "scrollTop"] = b;
                    return !0
                }
                return 0 === t ? (a.setTransition(0),
                a.setTranslate(m),
                a.updateActiveIndex(r),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, s),
                a.transitionStart(i, f),
                a.transitionEnd(i, f)) : (a.setTransition(t),
                a.setTranslate(m),
                a.updateActiveIndex(r),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, s),
                a.transitionStart(i, f),
                a.animating || (a.animating = !0,
                a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                    a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                    a.onSlideToWrapperTransitionEnd = null,
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(i, f))
                }
                ),
                a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
                !0
            },
            slideToLoop: function(e, t, i, s) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var a = e;
                return this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, t, i, s)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var s = this.params
                  , a = this.animating
                  , r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                if (s.loop) {
                    if (a && s.loopPreventsSlide)
                        return !1;
                    this.loopFix(),
                    this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                return this.slideTo(this.activeIndex + r, e, t, i)
            },
            slidePrev: function(e, t, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var s = this.params
                  , a = this.animating
                  , r = this.snapGrid
                  , n = this.slidesGrid
                  , l = this.rtlTranslate;
                if (s.loop) {
                    if (a && s.loopPreventsSlide)
                        return !1;
                    this.loopFix(),
                    this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                function o(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var d, h = o(l ? this.translate : -this.translate), p = r.map((function(e) {
                    return o(e)
                }
                )), u = (r[p.indexOf(h)],
                r[p.indexOf(h) - 1]);
                return void 0 === u && s.cssMode && r.forEach((function(e) {
                    !u && h >= e && (u = e)
                }
                )),
                void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1),
                this.slideTo(d, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function(e, t, i, s) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === s && (s = .5);
                var a = this.activeIndex
                  , r = Math.min(this.params.slidesPerGroupSkip, a)
                  , n = r + Math.floor((a - r) / this.params.slidesPerGroup)
                  , l = this.rtlTranslate ? this.translate : -this.translate;
                if (l >= this.snapGrid[n]) {
                    var o = this.snapGrid[n];
                    l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup)
                } else {
                    var d = this.snapGrid[n - 1];
                    l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
                }
                return a = Math.max(a, 0),
                a = Math.min(a, this.slidesGrid.length - 1),
                this.slideTo(a, e, t, i)
            },
            slideToClickedSlide: function() {
                var e, t = this, i = t.params, s = t.$wrapperEl, a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
                if (i.loop) {
                    if (t.animating)
                        return;
                    e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                    i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(),
                    r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    E((function() {
                        t.slideTo(r)
                    }
                    ))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(),
                    r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                    E((function() {
                        t.slideTo(r)
                    }
                    ))) : t.slideTo(r)
                } else
                    t.slideTo(r)
            }
        },
        loop: {
            loopCreate: function() {
                var e = this
                  , t = r()
                  , i = e.params
                  , s = e.$wrapperEl;
                s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var a = s.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var n = i.slidesPerGroup - a.length % i.slidesPerGroup;
                    if (n !== i.slidesPerGroup) {
                        for (var l = 0; l < n; l += 1) {
                            var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            s.append(o)
                        }
                        a = s.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length),
                e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)),
                e.loopedSlides += i.loopAdditionalSlides,
                e.loopedSlides > a.length && (e.loopedSlides = a.length);
                var d = []
                  , h = [];
                a.each((function(t, i) {
                    var s = m(t);
                    i < e.loopedSlides && h.push(t),
                    i < a.length && i >= a.length - e.loopedSlides && d.push(t),
                    s.attr("data-swiper-slide-index", i)
                }
                ));
                for (var p = 0; p < h.length; p += 1)
                    s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var u = d.length - 1; u >= 0; u -= 1)
                    s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                this.emit("beforeLoopFix");
                var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid, l = this.rtlTranslate;
                this.allowSlidePrev = !0,
                this.allowSlideNext = !0;
                var o = -n[t] - this.getTranslate();
                if (t < s)
                    e = i.length - 3 * s + t,
                    e += s,
                    this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
                else if (t >= i.length - s) {
                    e = -i.length + t + s,
                    e += s,
                    this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o)
                }
                this.allowSlidePrev = a,
                this.allowSlideNext = r,
                this.emit("loopFix")
            },
            loopDestroy: function() {
                var e = this.$wrapperEl
                  , t = this.params
                  , i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
                i.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                    var t = this.el;
                    t.style.cursor = "move",
                    t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        },
        manipulation: {
            appendSlide: function(e) {
                var t = this.$wrapperEl
                  , i = this.params;
                if (i.loop && this.loopDestroy(),
                "object" == typeof e && "length"in e)
                    for (var s = 0; s < e.length; s += 1)
                        e[s] && t.append(e[s]);
                else
                    t.append(e);
                i.loop && this.loopCreate(),
                i.observer && this.support.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params
                  , i = this.$wrapperEl
                  , s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length"in e) {
                    for (var r = 0; r < e.length; r += 1)
                        e[r] && i.prepend(e[r]);
                    a = s + e.length
                } else
                    i.prepend(e);
                t.loop && this.loopCreate(),
                t.observer && this.support.observer || this.update(),
                this.slideTo(a, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl
                  , s = this.params
                  , a = this.activeIndex;
                s.loop && (a -= this.loopedSlides,
                this.loopDestroy(),
                this.slides = i.children("." + s.slideClass));
                var r = this.slides.length;
                if (e <= 0)
                    this.prependSlide(t);
                else if (e >= r)
                    this.appendSlide(t);
                else {
                    for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
                        var d = this.slides.eq(o);
                        d.remove(),
                        l.unshift(d)
                    }
                    if ("object" == typeof t && "length"in t) {
                        for (var h = 0; h < t.length; h += 1)
                            t[h] && i.append(t[h]);
                        n = a > e ? a + t.length : a
                    } else
                        i.append(t);
                    for (var p = 0; p < l.length; p += 1)
                        i.append(l[p]);
                    s.loop && this.loopCreate(),
                    s.observer && this.support.observer || this.update(),
                    s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this.params
                  , i = this.$wrapperEl
                  , s = this.activeIndex;
                t.loop && (s -= this.loopedSlides,
                this.loopDestroy(),
                this.slides = i.children("." + t.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length"in e) {
                    for (var n = 0; n < e.length; n += 1)
                        a = e[n],
                        this.slides[a] && this.slides.eq(a).remove(),
                        a < r && (r -= 1);
                    r = Math.max(r, 0)
                } else
                    a = e,
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < r && (r -= 1),
                    r = Math.max(r, 0);
                t.loop && this.loopCreate(),
                t.observer && this.support.observer || this.update(),
                t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1)
                    e.push(t);
                this.removeSlide(e)
            }
        },
        events: {
            attachEvents: function() {
                var e = r()
                  , t = this.params
                  , i = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl
                  , n = this.device
                  , l = this.support;
                this.onTouchStart = O.bind(this),
                this.onTouchMove = A.bind(this),
                this.onTouchEnd = D.bind(this),
                t.cssMode && (this.onScroll = B.bind(this)),
                this.onClick = N.bind(this);
                var o = !!t.nested;
                if (!l.touch && l.pointerEvents)
                    s.addEventListener(i.start, this.onTouchStart, !1),
                    e.addEventListener(i.move, this.onTouchMove, o),
                    e.addEventListener(i.end, this.onTouchEnd, !1);
                else {
                    if (l.touch) {
                        var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(i.start, this.onTouchStart, d),
                        s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
                            passive: !1,
                            capture: o
                        } : o),
                        s.addEventListener(i.end, this.onTouchEnd, d),
                        i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d),
                        H || (e.addEventListener("touchstart", X),
                        H = !0)
                    }
                    (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1),
                    e.addEventListener("mousemove", this.onTouchMove, o),
                    e.addEventListener("mouseup", this.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                t.cssMode && a.addEventListener("scroll", this.onScroll),
                t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
            },
            detachEvents: function() {
                var e = r()
                  , t = this.params
                  , i = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl
                  , n = this.device
                  , l = this.support
                  , o = !!t.nested;
                if (!l.touch && l.pointerEvents)
                    s.removeEventListener(i.start, this.onTouchStart, !1),
                    e.removeEventListener(i.move, this.onTouchMove, o),
                    e.removeEventListener(i.end, this.onTouchEnd, !1);
                else {
                    if (l.touch) {
                        var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(i.start, this.onTouchStart, d),
                        s.removeEventListener(i.move, this.onTouchMove, o),
                        s.removeEventListener(i.end, this.onTouchEnd, d),
                        i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d)
                    }
                    (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1),
                    e.removeEventListener("mousemove", this.onTouchMove, o),
                    e.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                t.cssMode && a.removeEventListener("scroll", this.onScroll),
                this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this.activeIndex
                  , t = this.initialized
                  , i = this.loopedSlides
                  , s = void 0 === i ? 0 : i
                  , a = this.params
                  , r = this.$el
                  , n = a.breakpoints;
                if (n && (!n || 0 !== Object.keys(n).length)) {
                    var l = this.getBreakpoint(n);
                    if (l && this.currentBreakpoint !== l) {
                        var o = l in n ? n[l] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        ));
                        var d = o || this.originalParams
                          , h = a.slidesPerColumn > 1
                          , p = d.slidesPerColumn > 1;
                        h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"),
                        this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"),
                        "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"),
                        this.emitContainerClasses());
                        var u = d.direction && d.direction !== a.direction
                          , c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
                        u && t && this.changeDirection(),
                        S(this.params, d),
                        S(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }),
                        this.currentBreakpoint = l,
                        this.emit("_beforeBreakpoint", d),
                        c && t && (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - s + this.loopedSlides, 0, !1)),
                        this.emit("breakpoint", d)
                    }
                }
            },
            getBreakpoint: function(e) {
                var t = l();
                if (e) {
                    var i = !1
                      , s = Object.keys(e).map((function(e) {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            var i = parseFloat(e.substr(1));
                            return {
                                value: t.innerHeight * i,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    s.sort((function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }
                    ));
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a]
                          , n = r.point;
                        r.value <= t.innerWidth && (i = n)
                    }
                    return i || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this.params
                  , t = this.isLocked
                  , i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length,
                this.allowSlideNext = !this.isLocked,
                this.allowSlidePrev = !this.isLocked,
                t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                t && t !== this.isLocked && (this.isEnd = !1,
                this.navigation && this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames
                  , t = this.params
                  , i = this.rtl
                  , s = this.$el
                  , a = this.device
                  , r = [];
                r.push("initialized"),
                r.push(t.direction),
                t.freeMode && r.push("free-mode"),
                t.autoHeight && r.push("autoheight"),
                i && r.push("rtl"),
                t.slidesPerColumn > 1 && (r.push("multirow"),
                "column" === t.slidesPerColumnFill && r.push("multirow-column")),
                a.android && r.push("android"),
                a.ios && r.push("ios"),
                t.cssMode && r.push("css-mode"),
                r.forEach((function(i) {
                    e.push(t.containerModifierClass + i)
                }
                )),
                s.addClass(e.join(" ")),
                this.emitContainerClasses()
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" ")),
                this.emitContainerClasses()
            }
        },
        images: {
            loadImage: function(e, t, i, s, a, r) {
                var n, o = l();
                function d() {
                    r && r()
                }
                m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image).onload = d,
                n.onerror = d,
                s && (n.sizes = s),
                i && (n.srcset = i),
                t && (n.src = t)) : d()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , F = {}
      , R = function() {
        function t() {
            for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++)
                a[r] = arguments[r];
            1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0],
            i = a[1]),
            i || (i = {}),
            i = S({}, i),
            e && !i.el && (i.el = e);
            var n = this;
            n.support = z(),
            n.device = P({
                userAgent: i.userAgent
            }),
            n.browser = k(),
            n.eventsListeners = {},
            n.eventsAnyListeners = [],
            void 0 === n.modules && (n.modules = {}),
            Object.keys(n.modules).forEach((function(e) {
                var t = n.modules[e];
                if (t.params) {
                    var s = Object.keys(t.params)[0]
                      , a = t.params[s];
                    if ("object" != typeof a || null === a)
                        return;
                    if (!(s in i) || !("enabled"in a))
                        return;
                    !0 === i[s] && (i[s] = {
                        enabled: !0
                    }),
                    "object" != typeof i[s] || "enabled"in i[s] || (i[s].enabled = !0),
                    i[s] || (i[s] = {
                        enabled: !1
                    })
                }
            }
            ));
            var l = S({}, Y);
            n.useParams(l),
            n.params = S({}, l, F, i),
            n.originalParams = S({}, n.params),
            n.passedParams = S({}, i),
            n.params && n.params.on && Object.keys(n.params.on).forEach((function(e) {
                n.on(e, n.params.on[e])
            }
            )),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            n.$ = m;
            var o = m(n.params.el);
            if (e = o[0]) {
                if (o.length > 1) {
                    var d = [];
                    return o.each((function(e) {
                        var s = S({}, i, {
                            el: e
                        });
                        d.push(new t(s))
                    }
                    )),
                    d
                }
                var h, p, u;
                return e.swiper = n,
                e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function(e) {
                    return o.children(e)
                }
                : h = o.children("." + n.params.wrapperClass),
                S(n, {
                    $el: o,
                    el: e,
                    $wrapperEl: h,
                    wrapperEl: h[0],
                    classNames: [],
                    slides: m(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === n.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === n.params.direction
                    },
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
                    rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
                    wrongRTL: "-webkit-box" === h.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: n.params.allowSlideNext,
                    allowSlidePrev: n.params.allowSlidePrev,
                    touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    u = ["mousedown", "mousemove", "mouseup"],
                    n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]),
                    n.touchEventsTouch = {
                        start: p[0],
                        move: p[1],
                        end: p[2],
                        cancel: p[3]
                    },
                    n.touchEventsDesktop = {
                        start: u[0],
                        move: u[1],
                        end: u[2]
                    },
                    n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: x(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: n.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                n.useModules(),
                n.emit("_swiper"),
                n.params.init && n.init(),
                n
            }
        }
        var i, s, a, r = t.prototype;
        return r.emitContainerClasses = function() {
            var e = this;
            if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(" ").filter((function(t) {
                    return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                }
                ));
                e.emit("_containerClasses", t.join(" "))
            }
        }
        ,
        r.getSlideClasses = function(e) {
            var t = this;
            return e.className.split(" ").filter((function(e) {
                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            }
            )).join(" ")
        }
        ,
        r.emitSlidesClasses = function() {
            var e = this;
            e.params._emitClasses && e.el && e.slides.each((function(t) {
                var i = e.getSlideClasses(t);
                e.emit("_slideClass", t, i)
            }
            ))
        }
        ,
        r.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , s = this.size
              , a = this.activeIndex
              , r = 1;
            if (e.centeredSlides) {
                for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1)
                    t[o] && !n && (r += 1,
                    (l += t[o].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1)
                    t[d] && !n && (r += 1,
                    (l += t[d].swiperSlideSize) > s && (n = !0))
            } else
                for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (r += 1);
            return r
        }
        ,
        r.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid
                  , i = e.params;
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (s(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        r.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
            this.emitContainerClasses(),
            this.params.direction = e,
            this.slides.each((function(t) {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            this.emit("changeDirection"),
            t && this.update()),
            this
        }
        ,
        r.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"),
            this.emit("afterInit"))
        }
        ,
        r.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i, s = this, a = s.params, r = s.$el, n = s.$wrapperEl, l = s.slides;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            r.removeAttr("style"),
            n.removeAttr("style"),
            l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((function(e) {
                s.off(e)
            }
            )),
            !1 !== e && (s.$el[0].swiper = null,
            i = s,
            Object.keys(i).forEach((function(e) {
                try {
                    i[e] = null
                } catch (e) {}
                try {
                    delete i[e]
                } catch (e) {}
            }
            ))),
            s.destroyed = !0),
            null
        }
        ,
        t.extendDefaults = function(e) {
            S(F, e)
        }
        ,
        t.installModule = function(e) {
            t.prototype.modules || (t.prototype.modules = {});
            var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
            t.prototype.modules[i] = e
        }
        ,
        t.use = function(e) {
            return Array.isArray(e) ? (e.forEach((function(e) {
                return t.installModule(e)
            }
            )),
            t) : (t.installModule(e),
            t)
        }
        ,
        i = t,
        a = [{
            key: "extendedDefaults",
            get: function() {
                return F
            }
        }, {
            key: "defaults",
            get: function() {
                return Y
            }
        }],
        (s = null) && e(i.prototype, s),
        a && e(i, a),
        t
    }();
    Object.keys(V).forEach((function(e) {
        Object.keys(V[e]).forEach((function(t) {
            R.prototype[t] = V[e][t]
        }
        ))
    }
    )),
    R.use([$, I]);
    var W = {
        update: function(e) {
            var t = this
              , i = t.params
              , s = i.slidesPerView
              , a = i.slidesPerGroup
              , r = i.centeredSlides
              , n = t.params.virtual
              , l = n.addSlidesBefore
              , o = n.addSlidesAfter
              , d = t.virtual
              , h = d.from
              , p = d.to
              , u = d.slides
              , c = d.slidesGrid
              , v = d.renderSlide
              , f = d.offset;
            t.updateActiveIndex();
            var m, g, w, y = t.activeIndex || 0;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (g = Math.floor(s / 2) + a + o,
            w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o,
            w = a + l);
            var b = Math.max((y || 0) - w, 0)
              , E = Math.min((y || 0) + g, u.length - 1)
              , x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
            function T() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (S(t.virtual, {
                from: b,
                to: E,
                offset: x,
                slidesGrid: t.slidesGrid
            }),
            h === b && p === E && !e)
                return t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: x,
                    from: b,
                    to: E,
                    slides: function() {
                        for (var e = [], t = b; t <= E; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void (t.params.virtual.renderExternalUpdate && T());
            var C = []
              , M = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var z = h; z <= p; z += 1)
                    (z < b || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
            for (var P = 0; P < u.length; P += 1)
                P >= b && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P),
                P < h && C.push(P)));
            M.forEach((function(e) {
                t.$wrapperEl.append(v(u[e], e))
            }
            )),
            C.sort((function(e, t) {
                return t - e
            }
            )).forEach((function(e) {
                t.$wrapperEl.prepend(v(u[e], e))
            }
            )),
            t.$wrapperEl.children(".swiper-slide").css(m, x + "px"),
            T()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = s),
            s
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this.activeIndex
              , i = t + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                    e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length,
                s = e.length
            } else
                this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache
                  , n = {};
                Object.keys(r).forEach((function(e) {
                    var t = r[e]
                      , i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                    n[parseInt(e, 10) + s] = t
                }
                )),
                this.virtual.cache = n
            }
            this.virtual.update(!0),
            this.slideTo(i, 0)
        },
        removeSlide: function(e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; i >= 0; i -= 1)
                        this.virtual.slides.splice(e[i], 1),
                        this.params.virtual.cache && delete this.virtual.cache[e[i]],
                        e[i] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                this.virtual.update(!0),
                this.slideTo(t, 0)
            }
        },
        removeAllSlides: function() {
            this.virtual.slides = [],
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0)
        }
    }
      , q = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            M(this, {
                virtual: t(t({}, W), {}, {
                    slides: this.params.virtual.slides,
                    cache: {}
                })
            })
        },
        on: {
            beforeInit: function(e) {
                if (e.params.virtual.enabled) {
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    var t = {
                        watchSlidesProgress: !0
                    };
                    S(e.params, t),
                    S(e.originalParams, t),
                    e.params.initialSlide || e.virtual.update()
                }
            },
            setTranslate: function(e) {
                e.params.virtual.enabled && e.virtual.update()
            }
        }
    }
      , j = {
        handle: function(e) {
            var t = l()
              , i = r()
              , s = this.rtlTranslate
              , a = e;
            a.originalEvent && (a = a.originalEvent);
            var n = a.keyCode || a.charCode
              , o = this.params.keyboard.pageUpDown
              , d = o && 33 === n
              , h = o && 34 === n
              , p = 37 === n
              , u = 39 === n
              , c = 38 === n
              , v = 40 === n;
            if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && v || h))
                return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || v)) {
                    var f = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var m = t.innerWidth
                      , g = t.innerHeight
                      , w = this.$el.offset();
                    s && (w.left -= this.$el[0].scrollLeft);
                    for (var y = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], b = 0; b < y.length; b += 1) {
                        var E = y[b];
                        E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0)
                    }
                    if (!f)
                        return
                }
                this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                ((h || u) && !s || (d || p) && s) && this.slideNext(),
                ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || v) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (h || v) && this.slideNext(),
                (d || c) && this.slidePrev()),
                this.emit("keyPress", n)
            }
        },
        enable: function() {
            var e = r();
            this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            var e = r();
            this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , _ = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        },
        create: function() {
            M(this, {
                keyboard: t({
                    enabled: !1
                }, j)
            })
        },
        on: {
            init: function(e) {
                e.params.keyboard.enabled && e.keyboard.enable()
            },
            destroy: function(e) {
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    };
    var U = {
        lastScrollTime: x(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = r()
                  , t = "onwheel"in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"),
                    t = "function" == typeof i.onwheel
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                t
            }() ? "wheel" : "mousewheel"
        },
        normalize: function(e) {
            var t = 0
              , i = 0
              , s = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            s = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            e.shiftKey && !s && (s = a,
            a = 0),
            (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            a *= 40) : (s *= 800,
            a *= 800)),
            s && !t && (t = s < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , i = this
              , s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var a = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)),
            !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , n = i.rtlTranslate ? -1 : 1
              , l = U.normalize(t);
            if (s.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                        return !0;
                    r = -l.pixelX * n
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                        return !0;
                    r = -l.pixelY
                }
            else
                r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
            if (0 === r)
                return !0;
            if (s.invert && (r = -r),
            i.params.freeMode) {
                var o = {
                    time: x(),
                    delta: Math.abs(r),
                    direction: Math.sign(r)
                }
                  , d = i.mousewheel.lastEventBeforeSnap
                  , h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;
                if (!h) {
                    i.mousewheel.lastEventBeforeSnap = void 0,
                    i.params.loop && i.loopFix();
                    var p = i.getTranslate() + r * s.sensitivity
                      , u = i.isBeginning
                      , c = i.isEnd;
                    if (p >= i.minTranslate() && (p = i.minTranslate()),
                    p <= i.maxTranslate() && (p = i.maxTranslate()),
                    i.setTransition(0),
                    i.setTranslate(p),
                    i.updateProgress(),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses(),
                    (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(),
                    i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout),
                        i.mousewheel.timeout = void 0;
                        var v = i.mousewheel.recentWheelEvents;
                        v.length >= 15 && v.shift();
                        var f = v.length ? v[v.length - 1] : void 0
                          , g = v[0];
                        if (v.push(o),
                        f && (o.delta > f.delta || o.direction !== f.direction))
                            v.splice(0);
                        else if (v.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
                            var w = r > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = o,
                            v.splice(0),
                            i.mousewheel.timeout = E((function() {
                                i.slideToClosest(i.params.speed, !0, void 0, w)
                            }
                            ), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = E((function() {
                            i.mousewheel.lastEventBeforeSnap = o,
                            v.splice(0),
                            i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (h || i.emit("scroll", t),
                    i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                    p === i.minTranslate() || p === i.maxTranslate())
                        return !0
                }
            } else {
                var y = {
                    time: x(),
                    delta: Math.abs(r),
                    direction: Math.sign(r),
                    raw: e
                }
                  , b = i.mousewheel.recentWheelEvents;
                b.length >= 2 && b.shift();
                var T = b.length ? b[b.length - 1] : void 0;
                if (b.push(y),
                T ? (y.direction !== T.direction || y.delta > T.delta || y.time > T.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y),
                i.mousewheel.releaseScroll(y))
                    return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        animateSlider: function(e) {
            var t = l();
            return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && (!(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(),
            this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(),
            this.emit("scroll", e.raw)),
            this.mousewheel.lastScrollTime = (new t.Date).getTime(),
            !1)))
        },
        releaseScroll: function(e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                    return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
                return !0;
            return !1
        },
        enable: function() {
            var e = U.event();
            if (this.params.cssMode)
                return this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)),
            t.on("mouseenter", this.mousewheel.handleMouseEnter),
            t.on("mouseleave", this.mousewheel.handleMouseLeave),
            t.on(e, this.mousewheel.handle),
            this.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            var e = U.event();
            if (this.params.cssMode)
                return this.wrapperEl.addEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)),
            t.off(e, this.mousewheel.handle),
            this.mousewheel.enabled = !1,
            !0
        }
    }
      , K = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl),
            this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
            i.prevEl && (t = m(i.prevEl),
            this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", this.navigation.onNextClick),
            t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
            S(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , Z = {
        update: function() {
            var e = this.rtl
              , t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, a = this.pagination.$el, r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                i > r - 1 && (i -= r),
                i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var n, l, o, d = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    n = i - this.pagination.dynamicBulletIndex,
                    o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2),
                    d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"),
                    a.length > 1)
                        d.each((function(e) {
                            var s = m(e)
                              , a = s.index();
                            a === i && s.addClass(t.bulletActiveClass),
                            t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"),
                            a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                            a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }
                        ));
                    else {
                        var h = d.eq(i)
                          , p = h.index();
                        if (h.addClass(t.bulletActiveClass),
                        t.dynamicBullets) {
                            for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1)
                                d.eq(v).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop)
                                if (p >= d.length - t.dynamicMainBullets) {
                                    for (var f = t.dynamicMainBullets; f >= 0; f -= 1)
                                        d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                                    d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                } else
                                    u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                    c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                            else
                                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(d.length, t.dynamicMainBullets + 4)
                          , w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize
                          , y = e ? "right" : "left";
                        d.css(this.isHorizontal() ? y : "top", w + "px")
                    }
                }
                if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)),
                a.find("." + t.totalClass).text(t.formatFractionTotal(r))),
                "progressbar" === t.type) {
                    var b;
                    b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var E = (i + 1) / r
                      , x = 1
                      , T = 1;
                    "horizontal" === b ? x = E : T = E,
                    a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)),
                this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]),
                a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                  , i = this.pagination.$el
                  , s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                        e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s),
                    this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = m(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                    t.preventDefault();
                    var i = m(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }
                )),
                S(e.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , J = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , s = e.dragSize
                  , a = e.trackSize
                  , r = e.$dragEl
                  , n = e.$el
                  , l = this.params.scrollbar
                  , o = s
                  , d = (a - s) * i;
                t ? (d = -d) > 0 ? (o = s - d,
                d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d,
                d = 0) : d + s > a && (o = a - d),
                this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"),
                r[0].style.height = o + "px"),
                l.hide && (clearTimeout(this.scrollbar.timeout),
                n[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout((function() {
                    n[0].style.opacity = 0,
                    n.transition(400)
                }
                ), 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = e.$dragEl
                  , i = e.$el;
                t[0].style.width = "",
                t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px",
                i[0].style.display = r >= 1 ? "none" : "",
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                S(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }),
                e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, l = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(o),
            this.setTranslate(o),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched = !0,
            this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            a.transition(0),
            t.hide && a.css("opacity", 1),
            this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , s = t.$el
              , a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            a.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = E((function() {
                a.css("opacity", 0),
                a.transition(400)
            }
            ), 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = r()
                  , t = this.scrollbar
                  , i = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , n = this.support
                  , l = t.$el[0]
                  , o = !(!n.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , d = !(!n.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o),
                l.addEventListener(i.move, this.scrollbar.onDragMove, o),
                l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o),
                e.addEventListener(s.move, this.scrollbar.onDragMove, o),
                e.addEventListener(s.end, this.scrollbar.onDragEnd, d))
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = r()
                  , t = this.scrollbar
                  , i = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , n = this.support
                  , l = t.$el[0]
                  , o = !(!n.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , d = !(!n.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o),
                l.removeEventListener(i.move, this.scrollbar.onDragMove, o),
                l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o),
                e.removeEventListener(s.move, this.scrollbar.onDragMove, o),
                e.removeEventListener(s.end, this.scrollbar.onDragEnd, d))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , s = m(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                var a = s.find("." + this.params.scrollbar.dragClass);
                0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                s.append(a)),
                S(e, {
                    $el: s,
                    el: s[0],
                    $dragEl: a,
                    dragEl: a[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , Q = {
        setTransform: function(e, t) {
            var i = this.rtl
              , s = m(e)
              , a = i ? -1 : 1
              , r = s.attr("data-swiper-parallax") || "0"
              , n = s.attr("data-swiper-parallax-x")
              , l = s.attr("data-swiper-parallax-y")
              , o = s.attr("data-swiper-parallax-scale")
              , d = s.attr("data-swiper-parallax-opacity");
            if (n || l ? (n = n || "0",
            l = l || "0") : this.isHorizontal() ? (n = r,
            l = "0") : (l = r,
            n = "0"),
            n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
            null != d) {
                var h = d - (d - 1) * (1 - Math.abs(t));
                s[0].style.opacity = h
            }
            if (null == o)
                s.transform("translate3d(" + n + ", " + l + ", 0px)");
            else {
                var p = o - (o - 1) * (1 - Math.abs(t));
                s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")")
            }
        },
        setTranslate: function() {
            var e = this
              , t = e.$el
              , i = e.slides
              , s = e.progress
              , a = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
                e.parallax.setTransform(t, s)
            }
            )),
            i.each((function(t, i) {
                var r = t.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)),
                r = Math.min(Math.max(r, -1), 1),
                m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
                    e.parallax.setTransform(t, r)
                }
                ))
            }
            ))
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t) {
                var i = m(t)
                  , s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (s = 0),
                i.transition(s)
            }
            ))
        }
    }
      , ee = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.support
              , i = this.params.zoom
              , s = this.zoom
              , a = s.gesture;
            if (s.fakeGestureTouched = !1,
            s.fakeGestureMoved = !1,
            !t.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                s.fakeGestureTouched = !0,
                a.scaleStart = ee.getDistanceBetweenTouches(e)
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass),
            0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)),
            a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass),
            a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
            0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0),
            this.zoom.isScaling = !0) : a.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.support
              , i = this.params.zoom
              , s = this.zoom
              , a = s.gesture;
            if (!t.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                s.fakeGestureMoved = !0,
                a.scaleMove = ee.getDistanceBetweenTouches(e)
            }
            a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale,
            s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)),
            s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)),
            a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e)
        },
        onGestureEnd: function(e) {
            var t = this.device
              , i = this.support
              , s = this.params.zoom
              , a = this.zoom
              , r = a.gesture;
            if (!i.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android)
                    return;
                a.fakeGestureTouched = !1,
                a.fakeGestureMoved = !1
            }
            r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio),
            r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
            a.currentScale = a.scale,
            a.isScaling = !1,
            1 === a.scale && (r.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.device
              , i = this.zoom
              , s = i.gesture
              , a = i.image;
            s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(),
            a.isTouched = !0,
            a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = T(i.$imageWrapEl[0], "x") || 0,
                s.startY = T(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var r = s.width * t.scale
                  , n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - n / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                    a.prevPositionX = s.touchesCurrent.x,
                    a.prevPositionY = s.touchesCurrent.y,
                    a.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var a = 300
                  , r = 300
                  , n = s.x * a
                  , l = i.currentX + n
                  , o = s.y * r
                  , d = i.currentY + o;
                0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)),
                0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = l,
                i.currentY = d;
                var p = i.width * e.scale
                  , u = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, s, a, r, n, l, o, d, h, p, u, c, v, f, m, g = this.zoom, w = this.params.zoom, y = g.gesture, b = g.image;
            (y.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? y.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : y.$slideEl = this.slides.eq(this.activeIndex),
            y.$imageEl = y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)),
            y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass),
            void 0 === b.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = b.touchesStart.x,
            i = b.touchesStart.y),
            g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            g.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            e ? (f = y.$slideEl[0].offsetWidth,
            m = y.$slideEl[0].offsetHeight,
            s = y.$slideEl.offset().left + f / 2 - t,
            a = y.$slideEl.offset().top + m / 2 - i,
            l = y.$imageEl[0].offsetWidth,
            o = y.$imageEl[0].offsetHeight,
            d = l * g.scale,
            h = o * g.scale,
            c = -(p = Math.min(f / 2 - d / 2, 0)),
            v = -(u = Math.min(m / 2 - h / 2, 0)),
            (r = s * g.scale) < p && (r = p),
            r > c && (r = c),
            (n = a * g.scale) < u && (n = u),
            n > v && (n = v)) : (r = 0,
            n = 0),
            y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
            y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        toggleGestures: function(e) {
            var t = this.zoom
              , i = t.slideSelector
              , s = t.passiveListener;
            this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s),
            this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s),
            this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s)
        },
        enableGestures: function() {
            this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0,
            this.zoom.toggleGestures("on"))
        },
        disableGestures: function() {
            this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1,
            this.zoom.toggleGestures("off"))
        },
        enable: function() {
            var e = this.support
              , t = this.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , s = !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , a = "." + this.params.slideClass;
                this.zoom.passiveListener = i,
                this.zoom.slideSelector = a,
                e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i),
                this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i),
                this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s),
                this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i),
                this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s)
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                var t = this.support;
                this.zoom.enabled = !1;
                var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , s = !t.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , a = "." + this.params.slideClass;
                t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i),
                this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i),
                this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s),
                this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i),
                this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)),
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s)
            }
        }
    }
      , te = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , s = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                  , r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]),
                0 !== r.length && r.each((function(e) {
                    var r = m(e);
                    r.addClass(s.loadingClass);
                    var n = r.attr("data-background")
                      , l = r.attr("data-src")
                      , o = r.attr("data-srcset")
                      , d = r.attr("data-sizes")
                      , h = r.parent("picture");
                    i.loadImage(r[0], l || n, o, d, !1, (function() {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (n ? (r.css("background-image", 'url("' + n + '")'),
                            r.removeAttr("data-background")) : (o && (r.attr("srcset", o),
                            r.removeAttr("data-srcset")),
                            d && (r.attr("sizes", d),
                            r.removeAttr("data-sizes")),
                            h.length && h.children("source").each((function(e) {
                                var t = m(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"))
                            }
                            )),
                            l && (r.attr("src", l),
                            r.removeAttr("data-src"))),
                            r.addClass(s.loadedClass).removeClass(s.loadingClass),
                            a.find("." + s.preloaderClass).remove(),
                            i.params.loop && t) {
                                var e = a.attr("data-swiper-slide-index");
                                if (a.hasClass(i.params.slideDuplicateClass)) {
                                    var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(p.index(), !1)
                                } else {
                                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(u.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", a[0], r[0]),
                            i.params.autoHeight && i.updateAutoHeight()
                        }
                    }
                    )),
                    i.emit("lazyImageLoad", a[0], r[0])
                }
                ))
            }
        },
        load: function() {
            var e = this
              , t = e.$wrapperEl
              , i = e.params
              , s = e.slides
              , a = e.activeIndex
              , r = e.virtual && i.virtual.enabled
              , n = i.lazy
              , l = i.slidesPerView;
            function o(e) {
                if (r) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (s[e])
                    return !0;
                return !1
            }
            function d(e) {
                return r ? m(e).attr("data-swiper-slide-index") : m(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each((function(t) {
                    var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
                    e.lazy.loadInSlide(i)
                }
                ));
            else if (l > 1)
                for (var h = a; h < a + l; h += 1)
                    o(h) && e.lazy.loadInSlide(h);
            else
                e.lazy.loadInSlide(a);
            if (n.loadPrevNext)
                if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                    for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + l; f < c; f += 1)
                        o(f) && e.lazy.loadInSlide(f);
                    for (var g = v; g < a; g += 1)
                        o(g) && e.lazy.loadInSlide(g)
                } else {
                    var w = t.children("." + i.slideNextClass);
                    w.length > 0 && e.lazy.loadInSlide(d(w));
                    var y = t.children("." + i.slidePrevClass);
                    y.length > 0 && e.lazy.loadInSlide(d(y))
                }
        }
    }
      , ie = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, l = function(e, t) {
                for (s = -1,
                i = e.length; i - s > 1; )
                    e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = l(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid,e.slidesGrid) : new ie.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control, n = a.constructor;
            function l(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                s = -a.controller.spline.interpolate(-t)),
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                s = (t - a.minTranslate()) * i + e.minTranslate()),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof n && l(r[o]);
            else
                r instanceof n && t !== r && l(r)
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.constructor, r = s.controller.control;
            function n(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && E((function() {
                    t.updateAutoHeight()
                }
                )),
                t.$wrapperEl.transitionEnd((function() {
                    r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }
                )))
            }
            if (Array.isArray(r))
                for (i = 0; i < r.length; i += 1)
                    r[i] !== t && r[i]instanceof a && n(r[i]);
            else
                r instanceof a && t !== r && n(r)
        }
    }
      , se = {
        getRandomNumber: function(e) {
            void 0 === e && (e = 16);
            return "x".repeat(e).replace(/x/g, (function() {
                return Math.round(16 * Math.random()).toString(16)
            }
            ))
        },
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        makeElNotFocusable: function(e) {
            return e.attr("tabIndex", "-1"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElRoleDescription: function(e, t) {
            return e.attr("aria-role-description", t),
            e
        },
        addElControls: function(e, t) {
            return e.attr("aria-controls", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        addElId: function(e, t) {
            return e.attr("id", t),
            e
        },
        addElLive: function(e, t) {
            return e.attr("aria-live", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = m(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i),
                this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i),
                this.a11y.makeElFocusable(i))),
                t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t),
                this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t),
                this.a11y.makeElFocusable(t)))
            }
        },
        updatePagination: function() {
            var e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i) {
                var s = m(i);
                e.a11y.makeElFocusable(s),
                e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"),
                e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)))
            }
            ))
        },
        init: function() {
            var e = this
              , t = e.params.a11y;
            e.$el.append(e.a11y.liveRegion);
            var i = e.$el;
            t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage),
            t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
            var s, a, r, n = e.$wrapperEl, l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
            e.a11y.addElId(n, l),
            s = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite",
            e.a11y.addElLive(n, s),
            t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage),
            e.a11y.addElRole(m(e.slides), "group"),
            e.slides.each((function(t) {
                var i = m(t);
                e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length)
            }
            )),
            e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl),
            a && a.length && (e.a11y.makeElFocusable(a),
            "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"),
            a.on("keydown", e.a11y.onEnterKey)),
            e.a11y.addElLabel(a, t.nextSlideMessage),
            e.a11y.addElControls(a, l)),
            r && r.length && (e.a11y.makeElFocusable(r),
            "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"),
            r.on("keydown", e.a11y.onEnterKey)),
            e.a11y.addElLabel(r, t.prevSlideMessage),
            e.a11y.addElControls(r, l)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , ae = {
        init: function() {
            var e = l();
            if (this.params.history) {
                if (!e.history || !e.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var t = this.history;
                t.initialized = !0,
                t.paths = ae.getPathValues(this.params.url),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            var e = l();
            this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = ae.getPathValues(this.params.url),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function(e) {
            var t = l()
              , i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function(e) {
                return "" !== e
            }
            ))
              , s = i.length;
            return {
                key: i[s - 2],
                value: i[s - 1]
            }
        },
        setHistory: function(e, t) {
            var i = l();
            if (this.history.initialized && this.params.history.enabled) {
                var s;
                s = this.params.url ? new URL(this.params.url) : i.location;
                var a = this.slides.eq(t)
                  , r = ae.slugify(a.attr("data-history"));
                s.pathname.includes(e) || (r = e + "/" + r);
                var n = i.history.state;
                n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
                    value: r
                }, null, r) : i.history.pushState({
                    value: r
                }, null, r))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                    var r = this.slides.eq(s);
                    if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                        var n = r.index();
                        this.slideTo(n, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , re = {
        onHashCange: function() {
            var e = r();
            this.emit("hashChange");
            var t = e.location.hash.replace("#", "");
            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === i)
                    return;
                this.slideTo(i)
            }
        },
        setHash: function() {
            var e = l()
              , t = r();
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState)
                    e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""),
                    this.emit("hashSet");
                else {
                    var i = this.slides.eq(this.activeIndex)
                      , s = i.attr("data-hash") || i.attr("data-history");
                    t.location.hash = s || "",
                    this.emit("hashSet")
                }
        },
        init: function() {
            var e = r()
              , t = l();
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var n = this.slides.eq(s);
                        if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                            var o = n.index();
                            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            var e = l();
            this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , ne = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = E((function() {
                var t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                t = e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                t = e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")),
                (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run()
            }
            ), i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            this.autoplay.paused = !0,
            0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
            this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
            this.autoplay.run())))
        },
        onVisibilityChange: function() {
            var e = r();
            "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(),
            "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(),
            this.autoplay.paused = !1)
        },
        onTransitionEnd: function(e) {
            this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd),
            this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd),
            this.autoplay.paused = !1,
            this.autoplay.running ? this.autoplay.run() : this.autoplay.stop())
        }
    }
      , le = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s,
                s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.$wrapperEl;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function() {
                    if (!a && t && !t.destroyed) {
                        a = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            s.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , oe = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, r = this.height, n = this.rtlTranslate, l = this.size, o = this.browser, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, u = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: a + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'),
            t.append(e)));
            for (var c = 0; c < s.length; c += 1) {
                var v = s.eq(c)
                  , f = c;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var g = 90 * f
                  , w = Math.floor(g / 360);
                n && (g = -g,
                w = Math.floor(-g / 360));
                var y = Math.max(Math.min(v[0].progress, 1), -1)
                  , b = 0
                  , E = 0
                  , x = 0;
                f % 4 == 0 ? (b = 4 * -w * l,
                x = 0) : (f - 1) % 4 == 0 ? (b = 0,
                x = 4 * -w * l) : (f - 2) % 4 == 0 ? (b = l + 4 * w * l,
                x = l) : (f - 3) % 4 == 0 && (b = -l,
                x = 3 * l + 4 * l * w),
                n && (b = -b),
                h || (E = b,
                b = 0);
                var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + b + "px, " + E + "px, " + x + "px)";
                if (y <= 1 && y > -1 && (u = 90 * f + 90 * y,
                n && (u = 90 * -f - 90 * y)),
                v.transform(T),
                d.slideShadows) {
                    var C = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'),
                    v.append(C)),
                    0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    C.length && (C[0].style.opacity = Math.max(-y, 0)),
                    S.length && (S[0].style.opacity = Math.max(y, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (h)
                    e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                      , z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2)
                      , P = d.shadowScale
                      , k = d.shadowScale / z
                      , $ = d.shadowOffset;
                    e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)")
                }
            var L = o.isSafari || o.isWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , de = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var s = e.eq(i)
                  , a = s[0].progress;
                this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                var r = -180 * a
                  , n = 0
                  , l = -s[0].swiperSlideOffset
                  , o = 0;
                if (this.isHorizontal() ? t && (r = -r) : (o = l,
                l = 0,
                n = -r,
                r = 0),
                s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    s.append(d)),
                    0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    s.append(h)),
                    d.length && (d[0].style.opacity = Math.max(-a, 0)),
                    h.length && (h[0].style.opacity = Math.max(a, 0))
                }
                s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.activeIndex
              , a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            a.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , he = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
                var u = i.eq(h)
                  , c = s[h]
                  , v = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier
                  , f = r ? o * v : 0
                  , g = r ? 0 : o * v
                  , w = -d * Math.abs(v)
                  , y = a.stretch;
                "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(a.stretch) / 100 * c);
                var b = r ? 0 : y * v
                  , E = r ? y * v : 0
                  , x = 1 - (1 - a.scale) * Math.abs(v);
                Math.abs(E) < .001 && (E = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(f) < .001 && (f = 0),
                Math.abs(g) < .001 && (g = 0),
                Math.abs(x) < .001 && (x = 0);
                var T = "translate3d(" + E + "px," + b + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + f + "deg) scale(" + x + ")";
                if (u.transform(T),
                u[0].style.zIndex = 1 - Math.abs(Math.round(v)),
                a.slideShadows) {
                    var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top")
                      , S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'),
                    u.append(C)),
                    0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'),
                    u.append(S)),
                    C.length && (C[0].style.opacity = v > 0 ? v : 0),
                    S.length && (S[0].style.opacity = -v > 0 ? -v : 0)
                }
            }
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , pe = {
        init: function() {
            var e = this.params.thumbs;
            if (this.thumbs.initialized)
                return !1;
            this.thumbs.initialized = !0;
            var t = this.constructor;
            return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper,
            S(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            S(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            this.thumbs.swiperCreated = !0),
            this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick),
            !0
        },
        onThumbClick: function() {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex
                  , i = e.clickedSlide;
                if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var s;
                    if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
                    this.params.loop) {
                        var a = this.activeIndex;
                        this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft,
                        a = this.activeIndex);
                        var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index()
                          , n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r
                    }
                    this.slideTo(s)
                }
            }
        },
        update: function(e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView
                  , s = this.params.thumbs.autoScrollOffset
                  , a = s && !t.params.loop;
                if (this.realIndex !== t.realIndex || a) {
                    var r, n, l = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                        t._clientLeft = t.$wrapperEl[0].clientLeft,
                        l = t.activeIndex);
                        var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index()
                          , d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o,
                        n = this.activeIndex > this.previousIndex ? "next" : "prev"
                    } else
                        n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                    a && (r += "next" === n ? s : -1 * s),
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1),
                    t.slideTo(r, e ? 0 : void 0))
                }
                var h = 1
                  , p = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView),
                this.params.thumbs.multipleActiveThumbs || (h = 1),
                h = Math.floor(h),
                t.slides.removeClass(p),
                t.params.loop || t.params.virtual && t.params.virtual.enabled)
                    for (var u = 0; u < h; u += 1)
                        t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
                else
                    for (var c = 0; c < h; c += 1)
                        t.slides.eq(this.realIndex + c).addClass(p)
            }
        }
    }
      , ue = [q, _, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        },
        create: function() {
            M(this, {
                mousewheel: {
                    enabled: !1,
                    lastScrollTime: x(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: [],
                    enable: U.enable,
                    disable: U.disable,
                    handle: U.handle,
                    handleMouseEnter: U.handleMouseEnter,
                    handleMouseLeave: U.handleMouseLeave,
                    animateSlider: U.animateSlider,
                    releaseScroll: U.releaseScroll
                }
            })
        },
        on: {
            init: function(e) {
                !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable()
            },
            destroy: function(e) {
                e.params.cssMode && e.mousewheel.enable(),
                e.mousewheel.enabled && e.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            M(this, {
                navigation: t({}, K)
            })
        },
        on: {
            init: function(e) {
                e.navigation.init(),
                e.navigation.update()
            },
            toEdge: function(e) {
                e.navigation.update()
            },
            fromEdge: function(e) {
                e.navigation.update()
            },
            destroy: function(e) {
                e.navigation.destroy()
            },
            click: function(e, t) {
                var i, s = e.navigation, a = s.$nextEl, r = s.$prevEl;
                !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)),
                !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"),
                a && a.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            M(this, {
                pagination: t({
                    dynamicBulletIndex: 0
                }, Z)
            })
        },
        on: {
            init: function(e) {
                e.pagination.init(),
                e.pagination.render(),
                e.pagination.update()
            },
            activeIndexChange: function(e) {
                (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
            },
            snapIndexChange: function(e) {
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange: function(e) {
                e.params.loop && (e.pagination.render(),
                e.pagination.update())
            },
            snapGridLengthChange: function(e) {
                e.params.loop || (e.pagination.render(),
                e.pagination.update())
            },
            destroy: function(e) {
                e.pagination.destroy()
            },
            click: function(e, t) {
                e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            M(this, {
                scrollbar: t({
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }, J)
            })
        },
        on: {
            init: function(e) {
                e.scrollbar.init(),
                e.scrollbar.updateSize(),
                e.scrollbar.setTranslate()
            },
            update: function(e) {
                e.scrollbar.updateSize()
            },
            resize: function(e) {
                e.scrollbar.updateSize()
            },
            observerUpdate: function(e) {
                e.scrollbar.updateSize()
            },
            setTranslate: function(e) {
                e.scrollbar.setTranslate()
            },
            setTransition: function(e, t) {
                e.scrollbar.setTransition(t)
            },
            destroy: function(e) {
                e.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            M(this, {
                parallax: t({}, Q)
            })
        },
        on: {
            beforeInit: function(e) {
                e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            init: function(e) {
                e.params.parallax.enabled && e.parallax.setTranslate()
            },
            setTranslate: function(e) {
                e.params.parallax.enabled && e.parallax.setTranslate()
            },
            setTransition: function(e, t) {
                e.params.parallax.enabled && e.parallax.setTransition(t)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this;
            M(e, {
                zoom: t({
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                }, ee)
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function() {
                    return i
                },
                set: function(t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function(e) {
                e.params.zoom.enabled && e.zoom.enable()
            },
            destroy: function(e) {
                e.zoom.disable()
            },
            touchStart: function(e, t) {
                e.zoom.enabled && e.zoom.onTouchStart(t)
            },
            touchEnd: function(e, t) {
                e.zoom.enabled && e.zoom.onTouchEnd(t)
            },
            doubleTap: function(e, t) {
                e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
            },
            transitionEnd: function(e) {
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            },
            slideChange: function(e) {
                e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            M(this, {
                lazy: t({
                    initialImageLoaded: !1
                }, te)
            })
        },
        on: {
            beforeInit: function(e) {
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            },
            init: function(e) {
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
            },
            scroll: function(e) {
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize: function(e) {
                e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove: function(e) {
                e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart: function(e) {
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd: function(e) {
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            },
            slideChange: function(e) {
                e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            M(this, {
                controller: t({
                    control: this.params.controller.control
                }, ie)
            })
        },
        on: {
            update: function(e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            resize: function(e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            observerUpdate: function(e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            setTranslate: function(e, t, i) {
                e.controller.control && e.controller.setTranslate(t, i)
            },
            setTransition: function(e, t, i) {
                e.controller.control && e.controller.setTransition(t, i)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null
            }
        },
        create: function() {
            M(this, {
                a11y: t(t({}, se), {}, {
                    liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                })
            })
        },
        on: {
            afterInit: function(e) {
                e.params.a11y.enabled && (e.a11y.init(),
                e.a11y.updateNavigation())
            },
            toEdge: function(e) {
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            fromEdge: function(e) {
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            paginationUpdate: function(e) {
                e.params.a11y.enabled && e.a11y.updatePagination()
            },
            destroy: function(e) {
                e.params.a11y.enabled && e.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            M(this, {
                history: t({}, ae)
            })
        },
        on: {
            init: function(e) {
                e.params.history.enabled && e.history.init()
            },
            destroy: function(e) {
                e.params.history.enabled && e.history.destroy()
            },
            transitionEnd: function(e) {
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            },
            slideChange: function(e) {
                e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            M(this, {
                hashNavigation: t({
                    initialized: !1
                }, re)
            })
        },
        on: {
            init: function(e) {
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy: function(e) {
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd: function(e) {
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            },
            slideChange: function(e) {
                e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            M(this, {
                autoplay: t(t({}, ne), {}, {
                    running: !1,
                    paused: !1
                })
            })
        },
        on: {
            init: function(e) {
                e.params.autoplay.enabled && (e.autoplay.start(),
                r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
            },
            beforeTransitionStart: function(e, t, i) {
                e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
            },
            sliderFirstMove: function(e) {
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            },
            touchEnd: function(e) {
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
            },
            destroy: function(e) {
                e.autoplay.running && e.autoplay.stop(),
                r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            M(this, {
                fadeEffect: t({}, le)
            })
        },
        on: {
            beforeInit: function(e) {
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    S(e.params, t),
                    S(e.originalParams, t)
                }
            },
            setTranslate: function(e) {
                "fade" === e.params.effect && e.fadeEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "fade" === e.params.effect && e.fadeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            M(this, {
                cubeEffect: t({}, oe)
            })
        },
        on: {
            beforeInit: function(e) {
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    S(e.params, t),
                    S(e.originalParams, t)
                }
            },
            setTranslate: function(e) {
                "cube" === e.params.effect && e.cubeEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "cube" === e.params.effect && e.cubeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            M(this, {
                flipEffect: t({}, de)
            })
        },
        on: {
            beforeInit: function(e) {
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    S(e.params, t),
                    S(e.originalParams, t)
                }
            },
            setTranslate: function(e) {
                "flip" === e.params.effect && e.flipEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "flip" === e.params.effect && e.flipEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            M(this, {
                coverflowEffect: t({}, he)
            })
        },
        on: {
            beforeInit: function(e) {
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function(e) {
                "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            M(this, {
                thumbs: t({
                    swiper: null,
                    initialized: !1
                }, pe)
            })
        },
        on: {
            beforeInit: function(e) {
                var t = e.params.thumbs;
                t && t.swiper && (e.thumbs.init(),
                e.thumbs.update(!0))
            },
            slideChange: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            update: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            resize: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            observerUpdate: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            setTransition: function(e, t) {
                var i = e.thumbs.swiper;
                i && i.setTransition(t)
            },
            beforeDestroy: function(e) {
                var t = e.thumbs.swiper;
                t && e.thumbs.swiperCreated && t && t.destroy()
            }
        }
    }];
    return R.use(ue),
    R
}
));

//notify js
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function s(s) {
        var e = !1;
        return t('[data-notify="container"]').each(function(i, n) {
            var a = t(n)
              , o = a.find('[data-notify="title"]').text().trim()
              , r = a.find('[data-notify="message"]').html().trim()
              , l = o === t("<div>" + s.settings.content.title + "</div>").html().trim()
              , d = r === t("<div>" + s.settings.content.message + "</div>").html().trim()
              , g = a.hasClass("alert-" + s.settings.type);
            return l && d && g && (e = !0),
            !e
        }),
        e
    }
    function e(e, n, a) {
        var o = {
            content: {
                message: "object" == typeof n ? n.message : n,
                title: n.title ? n.title : "",
                icon: n.icon ? n.icon : "",
                url: n.url ? n.url : "#",
                target: n.target ? n.target : "-"
            }
        };
        a = t.extend(!0, {}, o, a),
        this.settings = t.extend(!0, {}, i, a),
        this._defaults = i,
        "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target),
        this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        },
        "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }),
        (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init()
    }
    var i = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        allow_duplicates: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };
    String.format = function() {
        for (var t = arguments[0], s = 1; s < arguments.length; s++)
            t = t.replace(RegExp("\\{" + (s - 1) + "\\}", "gm"), arguments[s]);
        return t
    }
    ,
    t.extend(e.prototype, {
        init: function() {
            var t = this;
            this.buildNotify(),
            this.settings.content.icon && this.setIcon(),
            "#" != this.settings.content.url && this.styleURL(),
            this.styleDismiss(),
            this.placement(),
            this.bind(),
            this.notify = {
                $ele: this.$ele,
                update: function(s, e) {
                    var i = {};
                    "string" == typeof s ? i[s] = e : i = s;
                    for (var n in i)
                        switch (n) {
                        case "type":
                            this.$ele.removeClass("alert-" + t.settings.type),
                            this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type),
                            t.settings.type = i[n],
                            this.$ele.addClass("alert-" + i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[n]);
                            break;
                        case "icon":
                            var a = this.$ele.find('[data-notify="icon"]');
                            "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(i[n]) : (a.is("img") || a.find("img"),
                            a.attr("src", i[n]));
                            break;
                        case "progress":
                            var o = t.settings.delay - t.settings.delay * (i[n] / 100);
                            this.$ele.data("notify-delay", o),
                            this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[n]).css("width", i[n] + "%");
                            break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", i[n]);
                            break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", i[n]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + n + '"]').html(i[n])
                        }
                    var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(r)
                },
                close: function() {
                    t.close()
                }
            }
        },
        buildNotify: function() {
            var s = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)),
            this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align),
            this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"),
            (this.settings.delay > 0 || this.settings.showProgressbar) && this.settings.showProgressbar || this.$ele.find('[data-notify="progressbar"]').remove()
        },
        setIcon: function() {
            "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        },
        styleDismiss: function() {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        },
        styleURL: function() {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: this.settings.z_index + 1
            })
        },
        placement: function() {
            var s = this
              , e = this.settings.offset.y
              , i = {
                display: "inline-block",
                margin: "0px auto",
                position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                transition: "all .5s ease-in-out",
                zIndex: this.settings.z_index
            }
              , n = !1
              , a = this.settings;
            switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
                e = Math.max(e, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing))
            }),
            this.settings.newest_on_top === !0 && (e = this.settings.offset.y),
            i[this.settings.placement.from] = e + "px",
            this.settings.placement.align) {
            case "left":
            case "right":
                i[this.settings.placement.align] = this.settings.offset.x + "px";
                break;
            case "center":
                i.left = 0,
                i.right = 0
            }
            this.$ele.css(i).addClass(this.settings.animate.enter),
            t.each(["webkit-", "moz-", "o-", "ms-", ""], function(t, e) {
                s.$ele[0].style[e + "AnimationIterationCount"] = 1
            }),
            t(this.settings.element).append(this.$ele),
            this.settings.newest_on_top === !0 && (e = parseInt(e) + parseInt(this.settings.spacing) + this.$ele.outerHeight(),
            this.reposition(e)),
            t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele),
            this.$ele.one(this.animations.start, function() {
                n = !0
            }).one(this.animations.end, function() {
                t.isFunction(s.settings.onShown) && s.settings.onShown.call(this)
            }),
            setTimeout(function() {
                n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this)
            }, 600)
        },
        bind: function() {
            var s = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function() {
                s.close()
            }),
            this.$ele.mouseover(function() {
                t(this).data("data-hover", "true")
            }).mouseout(function() {
                t(this).data("data-hover", "false")
            }),
            this.$ele.data("data-hover", "false"),
            this.settings.delay > 0) {
                s.$ele.data("notify-delay", s.settings.delay);
                var e = setInterval(function() {
                    var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;
                    if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) {
                        var i = (s.settings.delay - t) / s.settings.delay * 100;
                        s.$ele.data("notify-delay", t),
                        s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%")
                    }
                    t > -s.settings.timer || (clearInterval(e),
                    s.close())
                }, s.settings.timer)
            }
        },
        close: function() {
            var s = this
              , e = parseInt(this.$ele.css(this.settings.placement.from))
              , i = !1;
            this.$ele.data("closing", "true").addClass(this.settings.animate.exit),
            s.reposition(e),
            t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele),
            this.$ele.one(this.animations.start, function() {
                i = !0
            }).one(this.animations.end, function() {
                t(this).remove(),
                t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this)
            }),
            setTimeout(function() {
                i || (s.$ele.remove(),
                s.settings.onClosed && s.settings.onClosed(s.$ele))
            }, 600)
        },
        reposition: function(s) {
            var e = this
              , i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])'
              , n = this.$ele.nextAll(i);
            this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(i)),
            n.each(function() {
                t(this).css(e.settings.placement.from, s),
                s = parseInt(s) + parseInt(e.settings.spacing) + t(this).outerHeight()
            })
        }
    }),
    t.notify = function(t, s) {
        var i = new e(this,t,s);
        return i.notify
    }
    ,
    t.notifyDefaults = function(s) {
        return i = t.extend(!0, {}, i, s)
    }
    ,
    t.notifyClose = function(s) {
        void 0 === s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click")
    }
});

//cookie
!function(e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e),
    n = !0),
    "object" == typeof exports && (module.exports = e(),
    n = !0),
    !n) {
        var t = window.Cookies
          , o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t,
            o
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t)
                n[o] = t[o]
        }
        return n
    }
    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function t(o) {
        function r() {}
        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof (i = e({
                    path: "/"
                }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {}
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i)
                    i[u] && (f += "; " + u,
                    !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }
        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("=")
                      , u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u),
                        t)
                            try {
                                u = JSON.parse(u)
                            } catch (e) {}
                        if (r[a] = u,
                        e === a)
                            break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = i,
        r.get = function(e) {
            return c(e, !1)
        }
        ,
        r.getJSON = function(e) {
            return c(e, !0)
        }
        ,
        r.remove = function(n, t) {
            i(n, "", e(t, {
                expires: -1
            }))
        }
        ,
        r.defaults = {},
        r.withConverter = t,
        r
    }(function() {})
});
