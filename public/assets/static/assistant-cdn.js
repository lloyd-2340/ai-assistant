(function(oe) {
	typeof define == "function" && define.amd ? define(oe) : oe()
})(function() {
	"use strict";
	var Tl = Object.defineProperty;
	var Cl = (oe, ve, Ee) => ve in oe ? Tl(oe, ve, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Ee
	}) : oe[ve] = Ee;
	var V = (oe, ve, Ee) => (Cl(oe, typeof ve != "symbol" ? ve + "" : ve, Ee), Ee);
	var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

	function ve(n) {
		if (n.__esModule) return n;
		var e = n.default;
		if (typeof e == "function") {
			var t = function r() {
				return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
			};
			t.prototype = e.prototype
		} else t = {};
		return Object.defineProperty(t, "__esModule", {
			value: !0
		}), Object.keys(n).forEach(function(r) {
			var i = Object.getOwnPropertyDescriptor(n, r);
			Object.defineProperty(t, r, i.get ? i : {
				enumerable: !0,
				get: function() {
					return n[r]
				}
			})
		}), t
	}
	var Ee = {};

	function ln(n, e) {
		if (n == null) return {};
		var t, r, i = function(c, l) {
			if (c == null) return {};
			var u, h, p = {},
				m = Object.keys(c);
			for (h = 0; h < m.length; h++) u = m[h], l.indexOf(u) >= 0 || (p[u] = c[u]);
			return p
		}(n, e);
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(n);
			for (r = 0; r < s.length; r++) t = s[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
		}
		return i
	}

	function se(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function j(n) {
		return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, j(n)
	}

	function dr(n) {
		var e = function(t, r) {
			if (j(t) !== "object" || t === null) return t;
			var i = t[Symbol.toPrimitive];
			if (i !== void 0) {
				var s = i.call(t, r || "default");
				if (j(s) !== "object") return s;
				throw new TypeError("@@toPrimitive must return a primitive value.")
			}
			return (r === "string" ? String : Number)(t)
		}(n, "string");
		return j(e) === "symbol" ? e : String(e)
	}

	function hr(n, e) {
		for (var t = 0; t < e.length; t++) {
			var r = e[t];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, dr(r.key), r)
		}
	}

	function ae(n, e, t) {
		return e && hr(n.prototype, e), t && hr(n, t), Object.defineProperty(n, "prototype", {
			writable: !1
		}), n
	}

	function _e(n) {
		if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return n
	}

	function ct(n, e) {
		return ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
			return t.__proto__ = r, t
		}, ct(n, e)
	}

	function Tt(n, e) {
		if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
		n.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: n,
				writable: !0,
				configurable: !0
			}
		}), Object.defineProperty(n, "prototype", {
			writable: !1
		}), e && ct(n, e)
	}

	function Ct(n, e) {
		if (e && (j(e) === "object" || typeof e == "function")) return e;
		if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
		return _e(n)
	}

	function ce(n) {
		return ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		}, ce(n)
	}

	function ke(n, e, t) {
		return (e = dr(e)) in n ? Object.defineProperty(n, e, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : n[e] = t, n
	}

	function pr(n, e, t, r, i, s, c) {
		try {
			var l = n[s](c),
				u = l.value
		} catch (h) {
			return void t(h)
		}
		l.done ? e(u) : Promise.resolve(u).then(r, i)
	}

	function C(n) {
		return function() {
			var e = this,
				t = arguments;
			return new Promise(function(r, i) {
				var s = n.apply(e, t);

				function c(u) {
					pr(s, r, i, c, l, "next", u)
				}

				function l(u) {
					pr(s, r, i, c, l, "throw", u)
				}
				c(void 0)
			})
		}
	}

	function fr(n, e) {
		(e == null || e > n.length) && (e = n.length);
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
		return r
	}

	function Ne(n, e) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(n) || function(t, r) {
			var i = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
			if (i != null) {
				var s, c, l, u, h = [],
					p = !0,
					m = !1;
				try {
					if (l = (i = i.call(t)).next, r === 0) {
						if (Object(i) !== i) return;
						p = !1
					} else
						for (; !(p = (s = l.call(i)).done) && (h.push(s.value), h.length !== r); p = !0);
				} catch (y) {
					m = !0, c = y
				} finally {
					try {
						if (!p && i.return != null && (u = i.return(), Object(u) !== u)) return
					} finally {
						if (m) throw c
					}
				}
				return h
			}
		}(n, e) || function(t, r) {
			if (t) {
				if (typeof t == "string") return fr(t, r);
				var i = Object.prototype.toString.call(t).slice(8, -1);
				return i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set" ? Array.from(t) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? fr(t, r) : void 0
			}
		}(n, e) || function() {
			throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}()
	}
	var mr, ye = {},
		Ws = {
			get exports() {
				return ye
			},
			set exports(n) {
				ye = n
			}
		},
		We = typeof Reflect == "object" ? Reflect : null,
		gr = We && typeof We.apply == "function" ? We.apply : function(n, e, t) {
			return Function.prototype.apply.call(n, e, t)
		};
	mr = We && typeof We.ownKeys == "function" ? We.ownKeys : Object.getOwnPropertySymbols ? function(n) {
		return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))
	} : function(n) {
		return Object.getOwnPropertyNames(n)
	};
	var vr = Number.isNaN || function(n) {
		return n != n
	};

	function D() {
		D.init.call(this)
	}
	Ws.exports = D, ye.once = function(n, e) {
		return new Promise(function(t, r) {
			function i(c) {
				n.removeListener(e, s), r(c)
			}

			function s() {
				typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments))
			}
			Tr(n, e, s, {
				once: !0
			}), e !== "error" && function(c, l, u) {
				typeof c.on == "function" && Tr(c, "error", l, u)
			}(n, i, {
				once: !0
			})
		})
	}, D.EventEmitter = D, D.prototype._events = void 0, D.prototype._eventsCount = 0, D.prototype._maxListeners = void 0;
	var _r = 10;

	function Mt(n) {
		if (typeof n != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n)
	}

	function yr(n) {
		return n._maxListeners === void 0 ? D.defaultMaxListeners : n._maxListeners
	}

	function br(n, e, t, r) {
		var i, s, c, l;
		if (Mt(t), (s = n._events) === void 0 ? (s = n._events = Object.create(null), n._eventsCount = 0) : (s.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), s = n._events), c = s[e]), c === void 0) c = s[e] = t, ++n._eventsCount;
		else if (typeof c == "function" ? c = s[e] = r ? [t, c] : [c, t] : r ? c.unshift(t) : c.push(t), (i = yr(n)) > 0 && c.length > i && !c.warned) {
			c.warned = !0;
			var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
			u.name = "MaxListenersExceededWarning", u.emitter = n, u.type = e, u.count = c.length, l = u, console && console.warn && console.warn(l)
		}
		return n
	}

	function zs() {
		if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
	}

	function Sr(n, e, t) {
		var r = {
				fired: !1,
				wrapFn: void 0,
				target: n,
				type: e,
				listener: t
			},
			i = zs.bind(r);
		return i.listener = t, r.wrapFn = i, i
	}

	function wr(n, e, t) {
		var r = n._events;
		if (r === void 0) return [];
		var i = r[e];
		return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? function(s) {
			for (var c = new Array(s.length), l = 0; l < c.length; ++l) c[l] = s[l].listener || s[l];
			return c
		}(i) : kr(i, i.length)
	}

	function Er(n) {
		var e = this._events;
		if (e !== void 0) {
			var t = e[n];
			if (typeof t == "function") return 1;
			if (t !== void 0) return t.length
		}
		return 0
	}

	function kr(n, e) {
		for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r];
		return t
	}

	function Tr(n, e, t, r) {
		if (typeof n.on == "function") r.once ? n.once(e, t) : n.on(e, t);
		else {
			if (typeof n.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
			n.addEventListener(e, function i(s) {
				r.once && n.removeEventListener(e, i), t(s)
			})
		}
	}
	Object.defineProperty(D, "defaultMaxListeners", {
		enumerable: !0,
		get: function() {
			return _r
		},
		set: function(n) {
			if (typeof n != "number" || n < 0 || vr(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
			_r = n
		}
	}), D.init = function() {
		this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
	}, D.prototype.setMaxListeners = function(n) {
		if (typeof n != "number" || n < 0 || vr(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
		return this._maxListeners = n, this
	}, D.prototype.getMaxListeners = function() {
		return yr(this)
	}, D.prototype.emit = function(n) {
		for (var e = [], t = 1; t < arguments.length; t++) e.push(arguments[t]);
		var r = n === "error",
			i = this._events;
		if (i !== void 0) r = r && i.error === void 0;
		else if (!r) return !1;
		if (r) {
			var s;
			if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
			var c = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
			throw c.context = s, c
		}
		var l = i[n];
		if (l === void 0) return !1;
		if (typeof l == "function") gr(l, this, e);
		else {
			var u = l.length,
				h = kr(l, u);
			for (t = 0; t < u; ++t) gr(h[t], this, e)
		}
		return !0
	}, D.prototype.addListener = function(n, e) {
		return br(this, n, e, !1)
	}, D.prototype.on = D.prototype.addListener, D.prototype.prependListener = function(n, e) {
		return br(this, n, e, !0)
	}, D.prototype.once = function(n, e) {
		return Mt(e), this.on(n, Sr(this, n, e)), this
	}, D.prototype.prependOnceListener = function(n, e) {
		return Mt(e), this.prependListener(n, Sr(this, n, e)), this
	}, D.prototype.removeListener = function(n, e) {
		var t, r, i, s, c;
		if (Mt(e), (r = this._events) === void 0) return this;
		if ((t = r[n]) === void 0) return this;
		if (t === e || t.listener === e) --this._eventsCount == 0 ? this._events = Object.create(null) : (delete r[n], r.removeListener && this.emit("removeListener", n, t.listener || e));
		else if (typeof t != "function") {
			for (i = -1, s = t.length - 1; s >= 0; s--)
				if (t[s] === e || t[s].listener === e) {
					c = t[s].listener, i = s;
					break
				} if (i < 0) return this;
			i === 0 ? t.shift() : function(l, u) {
				for (; u + 1 < l.length; u++) l[u] = l[u + 1];
				l.pop()
			}(t, i), t.length === 1 && (r[n] = t[0]), r.removeListener !== void 0 && this.emit("removeListener", n, c || e)
		}
		return this
	}, D.prototype.off = D.prototype.removeListener, D.prototype.removeAllListeners = function(n) {
		var e, t, r;
		if ((t = this._events) === void 0) return this;
		if (t.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : t[n] !== void 0 && (--this._eventsCount == 0 ? this._events = Object.create(null) : delete t[n]), this;
		if (arguments.length === 0) {
			var i, s = Object.keys(t);
			for (r = 0; r < s.length; ++r)(i = s[r]) !== "removeListener" && this.removeAllListeners(i);
			return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
		}
		if (typeof(e = t[n]) == "function") this.removeListener(n, e);
		else if (e !== void 0)
			for (r = e.length - 1; r >= 0; r--) this.removeListener(n, e[r]);
		return this
	}, D.prototype.listeners = function(n) {
		return wr(this, n, !0)
	}, D.prototype.rawListeners = function(n) {
		return wr(this, n, !1)
	}, D.listenerCount = function(n, e) {
		return typeof n.listenerCount == "function" ? n.listenerCount(e) : Er.call(n, e)
	}, D.prototype.listenerCount = Er, D.prototype.eventNames = function() {
		return this._eventsCount > 0 ? mr(this._events) : []
	};
	var Cr = Object.prototype.hasOwnProperty;

	function Mr(n, e, t) {
		for (t of n.keys())
			if (X(t, e)) return t
	}

	function X(n, e) {
		var t, r, i;
		if (n === e) return !0;
		if (n && e && (t = n.constructor) === e.constructor) {
			if (t === Date) return n.getTime() === e.getTime();
			if (t === RegExp) return n.toString() === e.toString();
			if (t === Array) {
				if ((r = n.length) === e.length)
					for (; r-- && X(n[r], e[r]););
				return r === -1
			}
			if (t === Set) {
				if (n.size !== e.size) return !1;
				for (r of n)
					if ((i = r) && typeof i == "object" && !(i = Mr(e, i)) || !e.has(i)) return !1;
				return !0
			}
			if (t === Map) {
				if (n.size !== e.size) return !1;
				for (r of n)
					if ((i = r[0]) && typeof i == "object" && !(i = Mr(e, i)) || !X(r[1], e.get(i))) return !1;
				return !0
			}
			if (t === ArrayBuffer) n = new Uint8Array(n), e = new Uint8Array(e);
			else if (t === DataView) {
				if ((r = n.byteLength) === e.byteLength)
					for (; r-- && n.getInt8(r) === e.getInt8(r););
				return r === -1
			}
			if (ArrayBuffer.isView(n)) {
				if ((r = n.byteLength) === e.byteLength)
					for (; r-- && n[r] === e[r];);
				return r === -1
			}
			if (!t || typeof n == "object") {
				for (t in r = 0, n)
					if (Cr.call(n, t) && ++r && !Cr.call(e, t) || !(t in e) || !X(n[t], e[t])) return !1;
				return Object.keys(e).length === r
			}
		}
		return n != n && e != e
	}
	const Hs = {
			"Amazon Silk": "amazon_silk",
			"Android Browser": "android",
			Bada: "bada",
			BlackBerry: "blackberry",
			Chrome: "chrome",
			Chromium: "chromium",
			Electron: "electron",
			Epiphany: "epiphany",
			Firefox: "firefox",
			Focus: "focus",
			Generic: "generic",
			"Google Search": "google_search",
			Googlebot: "googlebot",
			"Internet Explorer": "ie",
			"K-Meleon": "k_meleon",
			Maxthon: "maxthon",
			"Microsoft Edge": "edge",
			"MZ Browser": "mz",
			"NAVER Whale Browser": "naver",
			Opera: "opera",
			"Opera Coast": "opera_coast",
			PhantomJS: "phantomjs",
			Puffin: "puffin",
			QupZilla: "qupzilla",
			QQ: "qq",
			QQLite: "qqlite",
			Safari: "safari",
			Sailfish: "sailfish",
			"Samsung Internet for Android": "samsung_internet",
			SeaMonkey: "seamonkey",
			Sleipnir: "sleipnir",
			Swing: "swing",
			Tizen: "tizen",
			"UC Browser": "uc",
			Vivaldi: "vivaldi",
			"WebOS Browser": "webos",
			WeChat: "wechat",
			"Yandex Browser": "yandex",
			Roku: "roku"
		},
		Ar = {
			amazon_silk: "Amazon Silk",
			android: "Android Browser",
			bada: "Bada",
			blackberry: "BlackBerry",
			chrome: "Chrome",
			chromium: "Chromium",
			electron: "Electron",
			epiphany: "Epiphany",
			firefox: "Firefox",
			focus: "Focus",
			generic: "Generic",
			googlebot: "Googlebot",
			google_search: "Google Search",
			ie: "Internet Explorer",
			k_meleon: "K-Meleon",
			maxthon: "Maxthon",
			edge: "Microsoft Edge",
			mz: "MZ Browser",
			naver: "NAVER Whale Browser",
			opera: "Opera",
			opera_coast: "Opera Coast",
			phantomjs: "PhantomJS",
			puffin: "Puffin",
			qupzilla: "QupZilla",
			qq: "QQ Browser",
			qqlite: "QQ Browser Lite",
			safari: "Safari",
			sailfish: "Sailfish",
			samsung_internet: "Samsung Internet for Android",
			seamonkey: "SeaMonkey",
			sleipnir: "Sleipnir",
			swing: "Swing",
			tizen: "Tizen",
			uc: "UC Browser",
			vivaldi: "Vivaldi",
			webos: "WebOS Browser",
			wechat: "WeChat",
			yandex: "Yandex Browser"
		},
		$ = {
			tablet: "tablet",
			mobile: "mobile",
			desktop: "desktop",
			tv: "tv"
		},
		z = {
			WindowsPhone: "Windows Phone",
			Windows: "Windows",
			MacOS: "macOS",
			iOS: "iOS",
			Android: "Android",
			WebOS: "WebOS",
			BlackBerry: "BlackBerry",
			Bada: "Bada",
			Tizen: "Tizen",
			Linux: "Linux",
			ChromeOS: "Chrome OS",
			PlayStation4: "PlayStation 4",
			Roku: "Roku"
		},
		Te = {
			EdgeHTML: "EdgeHTML",
			Blink: "Blink",
			Trident: "Trident",
			Presto: "Presto",
			Gecko: "Gecko",
			WebKit: "WebKit"
		};
	class _ {
		static getFirstMatch(e, t) {
			const r = t.match(e);
			return r && r.length > 0 && r[1] || ""
		}
		static getSecondMatch(e, t) {
			const r = t.match(e);
			return r && r.length > 1 && r[2] || ""
		}
		static matchAndReturnConst(e, t, r) {
			if (e.test(t)) return r
		}
		static getWindowsVersionName(e) {
			switch (e) {
				case "NT":
					return "NT";
				case "XP":
				case "NT 5.1":
					return "XP";
				case "NT 5.0":
					return "2000";
				case "NT 5.2":
					return "2003";
				case "NT 6.0":
					return "Vista";
				case "NT 6.1":
					return "7";
				case "NT 6.2":
					return "8";
				case "NT 6.3":
					return "8.1";
				case "NT 10.0":
					return "10";
				default:
					return
			}
		}
		static getMacOSVersionName(e) {
			const t = e.split(".").splice(0, 2).map(r => parseInt(r, 10) || 0);
			if (t.push(0), t[0] === 10) switch (t[1]) {
				case 5:
					return "Leopard";
				case 6:
					return "Snow Leopard";
				case 7:
					return "Lion";
				case 8:
					return "Mountain Lion";
				case 9:
					return "Mavericks";
				case 10:
					return "Yosemite";
				case 11:
					return "El Capitan";
				case 12:
					return "Sierra";
				case 13:
					return "High Sierra";
				case 14:
					return "Mojave";
				case 15:
					return "Catalina";
				default:
					return
			}
		}
		static getAndroidVersionName(e) {
			const t = e.split(".").splice(0, 2).map(r => parseInt(r, 10) || 0);
			if (t.push(0), !(t[0] === 1 && t[1] < 5)) return t[0] === 1 && t[1] < 6 ? "Cupcake" : t[0] === 1 && t[1] >= 6 ? "Donut" : t[0] === 2 && t[1] < 2 ? "Eclair" : t[0] === 2 && t[1] === 2 ? "Froyo" : t[0] === 2 && t[1] > 2 ? "Gingerbread" : t[0] === 3 ? "Honeycomb" : t[0] === 4 && t[1] < 1 ? "Ice Cream Sandwich" : t[0] === 4 && t[1] < 4 ? "Jelly Bean" : t[0] === 4 && t[1] >= 4 ? "KitKat" : t[0] === 5 ? "Lollipop" : t[0] === 6 ? "Marshmallow" : t[0] === 7 ? "Nougat" : t[0] === 8 ? "Oreo" : t[0] === 9 ? "Pie" : void 0
		}
		static getVersionPrecision(e) {
			return e.split(".").length
		}
		static compareVersions(e, t, r = !1) {
			const i = _.getVersionPrecision(e),
				s = _.getVersionPrecision(t);
			let c = Math.max(i, s),
				l = 0;
			const u = _.map([e, t], h => {
				const p = c - _.getVersionPrecision(h),
					m = h + new Array(p + 1).join(".0");
				return _.map(m.split("."), y => new Array(20 - y.length).join("0") + y).reverse()
			});
			for (r && (l = c - Math.min(i, s)), c -= 1; c >= l;) {
				if (u[0][c] > u[1][c]) return 1;
				if (u[0][c] === u[1][c]) {
					if (c === l) return 0;
					c -= 1
				} else if (u[0][c] < u[1][c]) return -1
			}
		}
		static map(e, t) {
			const r = [];
			let i;
			if (Array.prototype.map) return Array.prototype.map.call(e, t);
			for (i = 0; i < e.length; i += 1) r.push(t(e[i]));
			return r
		}
		static find(e, t) {
			let r, i;
			if (Array.prototype.find) return Array.prototype.find.call(e, t);
			for (r = 0, i = e.length; r < i; r += 1) {
				const s = e[r];
				if (t(s, r)) return s
			}
		}
		static assign(e, ...t) {
			const r = e;
			let i, s;
			if (Object.assign) return Object.assign(e, ...t);
			for (i = 0, s = t.length; i < s; i += 1) {
				const c = t[i];
				typeof c == "object" && c !== null && Object.keys(c).forEach(l => {
					r[l] = c[l]
				})
			}
			return e
		}
		static getBrowserAlias(e) {
			return Hs[e]
		}
		static getBrowserTypeByAlias(e) {
			return Ar[e] || ""
		}
	}
	const x = /version\/(\d+(\.?_?\d+)+)/i,
		Ks = [{
			test: [/googlebot/i],
			describe(n) {
				const e = {
						name: "Googlebot"
					},
					t = _.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/opera/i],
			describe(n) {
				const e = {
						name: "Opera"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/opr\/|opios/i],
			describe(n) {
				const e = {
						name: "Opera"
					},
					t = _.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/SamsungBrowser/i],
			describe(n) {
				const e = {
						name: "Samsung Internet for Android"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/Whale/i],
			describe(n) {
				const e = {
						name: "NAVER Whale Browser"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/MZBrowser/i],
			describe(n) {
				const e = {
						name: "MZ Browser"
					},
					t = _.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/focus/i],
			describe(n) {
				const e = {
						name: "Focus"
					},
					t = _.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/swing/i],
			describe(n) {
				const e = {
						name: "Swing"
					},
					t = _.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/coast/i],
			describe(n) {
				const e = {
						name: "Opera Coast"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/opt\/\d+(?:.?_?\d+)+/i],
			describe(n) {
				const e = {
						name: "Opera Touch"
					},
					t = _.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/yabrowser/i],
			describe(n) {
				const e = {
						name: "Yandex Browser"
					},
					t = _.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/ucbrowser/i],
			describe(n) {
				const e = {
						name: "UC Browser"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/Maxthon|mxios/i],
			describe(n) {
				const e = {
						name: "Maxthon"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/epiphany/i],
			describe(n) {
				const e = {
						name: "Epiphany"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/puffin/i],
			describe(n) {
				const e = {
						name: "Puffin"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/sleipnir/i],
			describe(n) {
				const e = {
						name: "Sleipnir"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/k-meleon/i],
			describe(n) {
				const e = {
						name: "K-Meleon"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/micromessenger/i],
			describe(n) {
				const e = {
						name: "WeChat"
					},
					t = _.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/qqbrowser/i],
			describe(n) {
				const e = {
						name: /qqbrowserlite/i.test(n) ? "QQ Browser Lite" : "QQ Browser"
					},
					t = _.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/msie|trident/i],
			describe(n) {
				const e = {
						name: "Internet Explorer"
					},
					t = _.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/\sedg\//i],
			describe(n) {
				const e = {
						name: "Microsoft Edge"
					},
					t = _.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/edg([ea]|ios)/i],
			describe(n) {
				const e = {
						name: "Microsoft Edge"
					},
					t = _.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/vivaldi/i],
			describe(n) {
				const e = {
						name: "Vivaldi"
					},
					t = _.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/seamonkey/i],
			describe(n) {
				const e = {
						name: "SeaMonkey"
					},
					t = _.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/sailfish/i],
			describe(n) {
				const e = {
						name: "Sailfish"
					},
					t = _.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/silk/i],
			describe(n) {
				const e = {
						name: "Amazon Silk"
					},
					t = _.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/phantom/i],
			describe(n) {
				const e = {
						name: "PhantomJS"
					},
					t = _.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/slimerjs/i],
			describe(n) {
				const e = {
						name: "SlimerJS"
					},
					t = _.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
			describe(n) {
				const e = {
						name: "BlackBerry"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/(web|hpw)[o0]s/i],
			describe(n) {
				const e = {
						name: "WebOS Browser"
					},
					t = _.getFirstMatch(x, n) || _.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/bada/i],
			describe(n) {
				const e = {
						name: "Bada"
					},
					t = _.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/tizen/i],
			describe(n) {
				const e = {
						name: "Tizen"
					},
					t = _.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/qupzilla/i],
			describe(n) {
				const e = {
						name: "QupZilla"
					},
					t = _.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/firefox|iceweasel|fxios/i],
			describe(n) {
				const e = {
						name: "Firefox"
					},
					t = _.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/electron/i],
			describe(n) {
				const e = {
						name: "Electron"
					},
					t = _.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/MiuiBrowser/i],
			describe(n) {
				const e = {
						name: "Miui"
					},
					t = _.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/chromium/i],
			describe(n) {
				const e = {
						name: "Chromium"
					},
					t = _.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, n) || _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/chrome|crios|crmo/i],
			describe(n) {
				const e = {
						name: "Chrome"
					},
					t = _.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/GSA/i],
			describe(n) {
				const e = {
						name: "Google Search"
					},
					t = _.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test(n) {
				const e = !n.test(/like android/i),
					t = n.test(/android/i);
				return e && t
			},
			describe(n) {
				const e = {
						name: "Android Browser"
					},
					t = _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/playstation 4/i],
			describe(n) {
				const e = {
						name: "PlayStation 4"
					},
					t = _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/safari|applewebkit/i],
			describe(n) {
				const e = {
						name: "Safari"
					},
					t = _.getFirstMatch(x, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/.*/i],
			describe(n) {
				const e = n.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
				return {
					name: _.getFirstMatch(e, n),
					version: _.getSecondMatch(e, n)
				}
			}
		}];
	var Qs = [{
			test: [/Roku\/DVP/],
			describe(n) {
				const e = _.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, n);
				return {
					name: z.Roku,
					version: e
				}
			}
		}, {
			test: [/windows phone/i],
			describe(n) {
				const e = _.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, n);
				return {
					name: z.WindowsPhone,
					version: e
				}
			}
		}, {
			test: [/windows /i],
			describe(n) {
				const e = _.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, n),
					t = _.getWindowsVersionName(e);
				return {
					name: z.Windows,
					version: e,
					versionName: t
				}
			}
		}, {
			test: [/Macintosh(.*?) FxiOS(.*?)\//],
			describe(n) {
				const e = {
						name: z.iOS
					},
					t = _.getSecondMatch(/(Version\/)(\d[\d.]+)/, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/macintosh/i],
			describe(n) {
				const e = _.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, n).replace(/[_\s]/g, "."),
					t = _.getMacOSVersionName(e),
					r = {
						name: z.MacOS,
						version: e
					};
				return t && (r.versionName = t), r
			}
		}, {
			test: [/(ipod|iphone|ipad)/i],
			describe(n) {
				const e = _.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, n).replace(/[_\s]/g, ".");
				return {
					name: z.iOS,
					version: e
				}
			}
		}, {
			test(n) {
				const e = !n.test(/like android/i),
					t = n.test(/android/i);
				return e && t
			},
			describe(n) {
				const e = _.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, n),
					t = _.getAndroidVersionName(e),
					r = {
						name: z.Android,
						version: e
					};
				return t && (r.versionName = t), r
			}
		}, {
			test: [/(web|hpw)[o0]s/i],
			describe(n) {
				const e = _.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, n),
					t = {
						name: z.WebOS
					};
				return e && e.length && (t.version = e), t
			}
		}, {
			test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
			describe(n) {
				const e = _.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, n) || _.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, n) || _.getFirstMatch(/\bbb(\d+)/i, n);
				return {
					name: z.BlackBerry,
					version: e
				}
			}
		}, {
			test: [/bada/i],
			describe(n) {
				const e = _.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, n);
				return {
					name: z.Bada,
					version: e
				}
			}
		}, {
			test: [/tizen/i],
			describe(n) {
				const e = _.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, n);
				return {
					name: z.Tizen,
					version: e
				}
			}
		}, {
			test: [/linux/i],
			describe: () => ({
				name: z.Linux
			})
		}, {
			test: [/CrOS/],
			describe: () => ({
				name: z.ChromeOS
			})
		}, {
			test: [/PlayStation 4/],
			describe(n) {
				const e = _.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, n);
				return {
					name: z.PlayStation4,
					version: e
				}
			}
		}],
		Xs = [{
			test: [/googlebot/i],
			describe: () => ({
				type: "bot",
				vendor: "Google"
			})
		}, {
			test: [/huawei/i],
			describe(n) {
				const e = _.getFirstMatch(/(can-l01)/i, n) && "Nova",
					t = {
						type: $.mobile,
						vendor: "Huawei"
					};
				return e && (t.model = e), t
			}
		}, {
			test: [/nexus\s*(?:7|8|9|10).*/i],
			describe: () => ({
				type: $.tablet,
				vendor: "Nexus"
			})
		}, {
			test: [/ipad/i],
			describe: () => ({
				type: $.tablet,
				vendor: "Apple",
				model: "iPad"
			})
		}, {
			test: [/Macintosh(.*?) FxiOS(.*?)\//],
			describe: () => ({
				type: $.tablet,
				vendor: "Apple",
				model: "iPad"
			})
		}, {
			test: [/kftt build/i],
			describe: () => ({
				type: $.tablet,
				vendor: "Amazon",
				model: "Kindle Fire HD 7"
			})
		}, {
			test: [/silk/i],
			describe: () => ({
				type: $.tablet,
				vendor: "Amazon"
			})
		}, {
			test: [/tablet(?! pc)/i],
			describe: () => ({
				type: $.tablet
			})
		}, {
			test(n) {
				const e = n.test(/ipod|iphone/i),
					t = n.test(/like (ipod|iphone)/i);
				return e && !t
			},
			describe(n) {
				const e = _.getFirstMatch(/(ipod|iphone)/i, n);
				return {
					type: $.mobile,
					vendor: "Apple",
					model: e
				}
			}
		}, {
			test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
			describe: () => ({
				type: $.mobile,
				vendor: "Nexus"
			})
		}, {
			test: [/[^-]mobi/i],
			describe: () => ({
				type: $.mobile
			})
		}, {
			test: n => n.getBrowserName(!0) === "blackberry",
			describe: () => ({
				type: $.mobile,
				vendor: "BlackBerry"
			})
		}, {
			test: n => n.getBrowserName(!0) === "bada",
			describe: () => ({
				type: $.mobile
			})
		}, {
			test: n => n.getBrowserName() === "windows phone",
			describe: () => ({
				type: $.mobile,
				vendor: "Microsoft"
			})
		}, {
			test(n) {
				const e = Number(String(n.getOSVersion()).split(".")[0]);
				return n.getOSName(!0) === "android" && e >= 3
			},
			describe: () => ({
				type: $.tablet
			})
		}, {
			test: n => n.getOSName(!0) === "android",
			describe: () => ({
				type: $.mobile
			})
		}, {
			test: n => n.getOSName(!0) === "macos",
			describe: () => ({
				type: $.desktop,
				vendor: "Apple"
			})
		}, {
			test: n => n.getOSName(!0) === "windows",
			describe: () => ({
				type: $.desktop
			})
		}, {
			test: n => n.getOSName(!0) === "linux",
			describe: () => ({
				type: $.desktop
			})
		}, {
			test: n => n.getOSName(!0) === "playstation 4",
			describe: () => ({
				type: $.tv
			})
		}, {
			test: n => n.getOSName(!0) === "roku",
			describe: () => ({
				type: $.tv
			})
		}],
		Zs = [{
			test: n => n.getBrowserName(!0) === "microsoft edge",
			describe(n) {
				if (/\sedg\//i.test(n)) return {
					name: Te.Blink
				};
				const e = _.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, n);
				return {
					name: Te.EdgeHTML,
					version: e
				}
			}
		}, {
			test: [/trident/i],
			describe(n) {
				const e = {
						name: Te.Trident
					},
					t = _.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: n => n.test(/presto/i),
			describe(n) {
				const e = {
						name: Te.Presto
					},
					t = _.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test(n) {
				const e = n.test(/gecko/i),
					t = n.test(/like gecko/i);
				return e && !t
			},
			describe(n) {
				const e = {
						name: Te.Gecko
					},
					t = _.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}, {
			test: [/(apple)?webkit\/537\.36/i],
			describe: () => ({
				name: Te.Blink
			})
		}, {
			test: [/(apple)?webkit/i],
			describe(n) {
				const e = {
						name: Te.WebKit
					},
					t = _.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, n);
				return t && (e.version = t), e
			}
		}];
	class Or {
		constructor(e, t = !1) {
			if (e == null || e === "") throw new Error("UserAgent parameter can't be empty");
			this._ua = e, this.parsedResult = {}, t !== !0 && this.parse()
		}
		getUA() {
			return this._ua
		}
		test(e) {
			return e.test(this._ua)
		}
		parseBrowser() {
			this.parsedResult.browser = {};
			const e = _.find(Ks, t => {
				if (typeof t.test == "function") return t.test(this);
				if (t.test instanceof Array) return t.test.some(r => this.test(r));
				throw new Error("Browser's test function is not valid")
			});
			return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser
		}
		getBrowser() {
			return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
		}
		getBrowserName(e) {
			return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
		}
		getBrowserVersion() {
			return this.getBrowser().version
		}
		getOS() {
			return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
		}
		parseOS() {
			this.parsedResult.os = {};
			const e = _.find(Qs, t => {
				if (typeof t.test == "function") return t.test(this);
				if (t.test instanceof Array) return t.test.some(r => this.test(r));
				throw new Error("Browser's test function is not valid")
			});
			return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os
		}
		getOSName(e) {
			const {
				name: t
			} = this.getOS();
			return e ? String(t).toLowerCase() || "" : t || ""
		}
		getOSVersion() {
			return this.getOS().version
		}
		getPlatform() {
			return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
		}
		getPlatformType(e = !1) {
			const {
				type: t
			} = this.getPlatform();
			return e ? String(t).toLowerCase() || "" : t || ""
		}
		parsePlatform() {
			this.parsedResult.platform = {};
			const e = _.find(Xs, t => {
				if (typeof t.test == "function") return t.test(this);
				if (t.test instanceof Array) return t.test.some(r => this.test(r));
				throw new Error("Browser's test function is not valid")
			});
			return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform
		}
		getEngine() {
			return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
		}
		getEngineName(e) {
			return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
		}
		parseEngine() {
			this.parsedResult.engine = {};
			const e = _.find(Zs, t => {
				if (typeof t.test == "function") return t.test(this);
				if (t.test instanceof Array) return t.test.some(r => this.test(r));
				throw new Error("Browser's test function is not valid")
			});
			return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine
		}
		parse() {
			return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
		}
		getResult() {
			return _.assign({}, this.parsedResult)
		}
		satisfies(e) {
			const t = {};
			let r = 0;
			const i = {};
			let s = 0;
			if (Object.keys(e).forEach(c => {
					const l = e[c];
					typeof l == "string" ? (i[c] = l, s += 1) : typeof l == "object" && (t[c] = l, r += 1)
				}), r > 0) {
				const c = Object.keys(t),
					l = _.find(c, h => this.isOS(h));
				if (l) {
					const h = this.satisfies(t[l]);
					if (h !== void 0) return h
				}
				const u = _.find(c, h => this.isPlatform(h));
				if (u) {
					const h = this.satisfies(t[u]);
					if (h !== void 0) return h
				}
			}
			if (s > 0) {
				const c = Object.keys(i),
					l = _.find(c, u => this.isBrowser(u, !0));
				if (l !== void 0) return this.compareVersion(i[l])
			}
		}
		isBrowser(e, t = !1) {
			const r = this.getBrowserName().toLowerCase();
			let i = e.toLowerCase();
			const s = _.getBrowserTypeByAlias(i);
			return t && s && (i = s.toLowerCase()), i === r
		}
		compareVersion(e) {
			let t = [0],
				r = e,
				i = !1;
			const s = this.getBrowserVersion();
			if (typeof s == "string") return e[0] === ">" || e[0] === "<" ? (r = e.substr(1), e[1] === "=" ? (i = !0, r = e.substr(2)) : t = [], e[0] === ">" ? t.push(1) : t.push(-1)) : e[0] === "=" ? r = e.substr(1) : e[0] === "~" && (i = !0, r = e.substr(1)), t.indexOf(_.compareVersions(s, r, i)) > -1
		}
		isOS(e) {
			return this.getOSName(!0) === String(e).toLowerCase()
		}
		isPlatform(e) {
			return this.getPlatformType(!0) === String(e).toLowerCase()
		}
		isEngine(e) {
			return this.getEngineName(!0) === String(e).toLowerCase()
		}
		is(e, t = !1) {
			return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
		}
		some(e = []) {
			return e.some(t => this.is(t))
		}
	}
	/*!
	 * Bowser - a browser detector
	 * https://github.com/lancedikson/bowser
	 * MIT License | (c) Dustin Diaz 2012-2015
	 * MIT License | (c) Denis Demchenko 2015-2019
	 */
	class ea {
		static getParser(e, t = !1) {
			if (typeof e != "string") throw new Error("UserAgent should be a string");
			return new Or(e, t)
		}
		static parse(e) {
			return new Or(e).getResult()
		}
		static get BROWSER_MAP() {
			return Ar
		}
		static get ENGINE_MAP() {
			return Te
		}
		static get OS_MAP() {
			return z
		}
		static get PLATFORMS_MAP() {
			return $
		}
	}

	function At() {
		return Date.now() + Math.random().toString()
	}

	function lt() {
		throw new Error("Method must be implemented in subclass")
	}

	function Lr(n, e) {
		return e != null && e.proxyUrl ? e.proxyUrl + (e.proxyUrl.slice(-1) === "/" ? "" : "/") + n.substring(8) : n
	}

	function Ot(n) {
		return n != null && n.callObjectBundleUrlOverride ? n.callObjectBundleUrlOverride : Lr("https://c.daily.co/call-machine/versioned/".concat("0.66.0", "/static/call-machine-object-bundle.js"), n)
	}

	function ut(n) {
		try {
			new URL(n)
		} catch {
			return !1
		}
		return !0
	}
	const Pr = Object.prototype.toString;

	function Ir(n) {
		switch (Pr.call(n)) {
			case "[object Error]":
			case "[object Exception]":
			case "[object DOMException]":
				return !0;
			default:
				return xe(n, Error)
		}
	}

	function ze(n, e) {
		return Pr.call(n) === `[object ${e}]`
	}

	function un(n) {
		return ze(n, "ErrorEvent")
	}

	function Dr(n) {
		return ze(n, "DOMError")
	}

	function Re(n) {
		return ze(n, "String")
	}

	function Nr(n) {
		return n === null || typeof n != "object" && typeof n != "function"
	}

	function He(n) {
		return ze(n, "Object")
	}

	function Lt(n) {
		return typeof Event < "u" && xe(n, Event)
	}

	function dn(n) {
		return !!(n && n.then && typeof n.then == "function")
	}

	function xe(n, e) {
		try {
			return n instanceof e
		} catch {
			return !1
		}
	}

	function Ke(n, e = 0) {
		return typeof n != "string" || e === 0 || n.length <= e ? n : `${n.slice(0,e)}...`
	}

	function Rr(n, e) {
		if (!Array.isArray(n)) return "";
		const t = [];
		for (let r = 0; r < n.length; r++) {
			const i = n[r];
			try {
				t.push(String(i))
			} catch {
				t.push("[value cannot be serialized]")
			}
		}
		return t.join(e)
	}

	function ta(n, e, t = !1) {
		return !!Re(n) && (ze(e, "RegExp") ? e.test(n) : !!Re(e) && (t ? n === e : n.includes(e)))
	}

	function Pt(n, e = [], t = !1) {
		return e.some(r => ta(n, r, t))
	}

	function na(n, e, t = 250, r, i, s, c) {
		if (!(s.exception && s.exception.values && c && xe(c.originalException, Error))) return;
		const l = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
		var u, h;
		l && (s.exception.values = (u = hn(n, e, i, c.originalException, r, s.exception.values, l, 0), h = t, u.map(p => (p.value && (p.value = Ke(p.value, h)), p))))
	}

	function hn(n, e, t, r, i, s, c, l) {
		if (s.length >= t + 1) return s;
		let u = [...s];
		if (xe(r[i], Error)) {
			xr(c, l);
			const h = n(e, r[i]),
				p = u.length;
			jr(h, i, p, l), u = hn(n, e, t, r[i], i, [h, ...u], h, p)
		}
		return Array.isArray(r.errors) && r.errors.forEach((h, p) => {
			if (xe(h, Error)) {
				xr(c, l);
				const m = n(e, h),
					y = u.length;
				jr(m, `errors[${p}]`, y, l), u = hn(n, e, t, h, i, [m, ...u], m, y)
			}
		}), u
	}

	function xr(n, e) {
		n.mechanism = n.mechanism || {
			type: "generic",
			handled: !0
		}, n.mechanism = {
			...n.mechanism,
			is_exception_group: !0,
			exception_id: e
		}
	}

	function jr(n, e, t, r) {
		n.mechanism = n.mechanism || {
			type: "generic",
			handled: !0
		}, n.mechanism = {
			...n.mechanism,
			type: "chained",
			source: e,
			exception_id: t,
			parent_id: r
		}
	}

	function It(n) {
		return n && n.Math == Math ? n : void 0
	}
	const ne = typeof globalThis == "object" && It(globalThis) || typeof window == "object" && It(window) || typeof self == "object" && It(self) || typeof global == "object" && It(global) || function() {
		return this
	}() || {};

	function dt() {
		return ne
	}

	function pn(n, e, t) {
		const r = t || ne,
			i = r.__SENTRY__ = r.__SENTRY__ || {};
		return i[n] || (i[n] = e())
	}
	const ra = dt(),
		ia = 80;

	function fn(n, e = {}) {
		try {
			let t = n;
			const r = 5,
				i = [];
			let s = 0,
				c = 0;
			const l = " > ",
				u = l.length;
			let h;
			const p = Array.isArray(e) ? e : e.keyAttrs,
				m = !Array.isArray(e) && e.maxStringLength || ia;
			for (; t && s++ < r && (h = oa(t, p), !(h === "html" || s > 1 && c + i.length * u + h.length >= m));) i.push(h), c += h.length, t = t.parentNode;
			return i.reverse().join(l)
		} catch {
			return "<unknown>"
		}
	}

	function oa(n, e) {
		const t = n,
			r = [];
		let i, s, c, l, u;
		if (!t || !t.tagName) return "";
		r.push(t.tagName.toLowerCase());
		const h = e && e.length ? e.filter(m => t.getAttribute(m)).map(m => [m, t.getAttribute(m)]) : null;
		if (h && h.length) h.forEach(m => {
			r.push(`[${m[0]}="${m[1]}"]`)
		});
		else if (t.id && r.push(`#${t.id}`), i = t.className, i && Re(i))
			for (s = i.split(/\s+/), u = 0; u < s.length; u++) r.push(`.${s[u]}`);
		const p = ["aria-label", "type", "name", "title", "alt"];
		for (u = 0; u < p.length; u++) c = p[u], l = t.getAttribute(c), l && r.push(`[${c}="${l}"]`);
		return r.join("")
	}
	const Dt = ["debug", "info", "warn", "error", "log", "assert", "trace"];

	function Fr(n) {
		if (!("console" in ne)) return n();
		const e = ne.console,
			t = {};
		Dt.forEach(r => {
			const i = e[r] && e[r].__sentry_original__;
			r in e && i && (t[r] = e[r], e[r] = i)
		});
		try {
			return n()
		} finally {
			Object.keys(t).forEach(r => {
				e[r] = t[r]
			})
		}
	}

	function Br() {
		let n = !1;
		const e = {
			enable: () => {
				n = !0
			},
			disable: () => {
				n = !1
			}
		};
		return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Dt.forEach(t => {
			e[t] = (...r) => {
				n && Fr(() => {
					ne.console[t](`Sentry Logger [${t}]:`, ...r)
				})
			}
		}) : Dt.forEach(t => {
			e[t] = () => {}
		}), e
	}
	let O;
	O = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? pn("logger", Br) : Br();
	const sa = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

	function Nt(n, e = !1) {
		const {
			host: t,
			path: r,
			pass: i,
			port: s,
			projectId: c,
			protocol: l,
			publicKey: u
		} = n;
		return `${l}://${u}${e&&i?`:${i}`:""}@${t}${s?`:${s}`:""}/${r&&`${r}/`}${c}`
	}

	function Ur(n) {
		return {
			protocol: n.protocol,
			publicKey: n.publicKey || "",
			pass: n.pass || "",
			host: n.host,
			port: n.port || "",
			path: n.path || "",
			projectId: n.projectId
		}
	}

	function aa(n) {
		const e = typeof n == "string" ? function(t) {
			const r = sa.exec(t);
			if (!r) return void console.error(`Invalid Sentry Dsn: ${t}`);
			const [i, s, c = "", l, u = "", h] = r.slice(1);
			let p = "",
				m = h;
			const y = m.split("/");
			if (y.length > 1 && (p = y.slice(0, -1).join("/"), m = y.pop()), m) {
				const w = m.match(/^\d+/);
				w && (m = w[0])
			}
			return Ur({
				host: l,
				pass: c,
				path: p,
				projectId: m,
				port: u,
				protocol: i,
				publicKey: s
			})
		}(n) : Ur(n);
		if (e && function(t) {
				if (typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__) return !0;
				const {
					port: r,
					projectId: i,
					protocol: s
				} = t;
				return !(["protocol", "publicKey", "host", "projectId"].find(c => !t[c] && (O.error(`Invalid Sentry Dsn: ${c} missing`), !0)) || (i.match(/^\d+$/) ? function(c) {
					return c === "http" || c === "https"
				}(s) ? r && isNaN(parseInt(r, 10)) && (O.error(`Invalid Sentry Dsn: Invalid port ${r}`), 1) : (O.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1) : (O.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1)))
			}(e)) return e
	}
	class le extends Error {
		constructor(e, t = "warn") {
			super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t
		}
	}

	function W(n, e, t) {
		if (!(e in n)) return;
		const r = n[e],
			i = t(r);
		if (typeof i == "function") try {
			Vr(i, r)
		} catch {}
		n[e] = i
	}

	function mn(n, e, t) {
		Object.defineProperty(n, e, {
			value: t,
			writable: !0,
			configurable: !0
		})
	}

	function Vr(n, e) {
		const t = e.prototype || {};
		n.prototype = e.prototype = t, mn(n, "__sentry_original__", e)
	}

	function gn(n) {
		return n.__sentry_original__
	}

	function Yr(n) {
		if (Ir(n)) return {
			message: n.message,
			name: n.name,
			stack: n.stack,
			...Gr(n)
		};
		if (Lt(n)) {
			const e = {
				type: n.type,
				target: $r(n.target),
				currentTarget: $r(n.currentTarget),
				...Gr(n)
			};
			return typeof CustomEvent < "u" && xe(n, CustomEvent) && (e.detail = n.detail), e
		}
		return n
	}

	function $r(n) {
		try {
			return e = n, typeof Element < "u" && xe(e, Element) ? fn(n) : Object.prototype.toString.call(n)
		} catch {
			return "<unknown>"
		}
		var e
	}

	function Gr(n) {
		if (typeof n == "object" && n !== null) {
			const e = {};
			for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
			return e
		}
		return {}
	}

	function Rt(n) {
		return vn(n, new Map)
	}

	function vn(n, e) {
		if (He(n)) {
			const t = e.get(n);
			if (t !== void 0) return t;
			const r = {};
			e.set(n, r);
			for (const i of Object.keys(n)) n[i] !== void 0 && (r[i] = vn(n[i], e));
			return r
		}
		if (Array.isArray(n)) {
			const t = e.get(n);
			if (t !== void 0) return t;
			const r = [];
			return e.set(n, r), n.forEach(i => {
				r.push(vn(i, e))
			}), r
		}
		return n
	}
	const qr = "<anonymous>";

	function Ce(n) {
		try {
			return n && typeof n == "function" && n.name || qr
		} catch {
			return qr
		}
	}
	const _n = dt();

	function yn(n) {
		return n && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())
	}

	function ca() {
		if (! function() {
				if (!("fetch" in _n)) return !1;
				try {
					return new Headers, new Request("http://www.example.com"), new Response, !0
				} catch {
					return !1
				}
			}()) return !1;
		if (yn(_n.fetch)) return !0;
		let n = !1;
		const e = _n.document;
		if (e && typeof e.createElement == "function") try {
			const t = e.createElement("iframe");
			t.hidden = !0, e.head.appendChild(t), t.contentWindow && t.contentWindow.fetch && (n = yn(t.contentWindow.fetch)), e.head.removeChild(t)
		} catch (t) {
			(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
		}
		return n
	}
	const xt = dt(),
		B = dt(),
		ht = "__sentry_xhr_v2__",
		pt = {},
		Jr = {};

	function la(n) {
		if (!Jr[n]) switch (Jr[n] = !0, n) {
			case "console":
				(function() {
					"console" in B && Dt.forEach(function(e) {
						e in B.console && W(B.console, e, function(t) {
							return function(...r) {
								ue("console", {
									args: r,
									level: e
								}), t && t.apply(B.console, r)
							}
						})
					})
				})();
				break;
			case "dom":
				(function() {
					if (!("document" in B)) return;
					const e = ue.bind(null, "dom"),
						t = zr(e, !0);
					B.document.addEventListener("click", t, !1), B.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
						const i = B[r] && B[r].prototype;
						i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (W(i, "addEventListener", function(s) {
							return function(c, l, u) {
								if (c === "click" || c == "keypress") try {
									const h = this,
										p = h.__sentry_instrumentation_handlers__ = h.__sentry_instrumentation_handlers__ || {},
										m = p[c] = p[c] || {
											refCount: 0
										};
									if (!m.handler) {
										const y = zr(e);
										m.handler = y, s.call(this, c, y, u)
									}
									m.refCount++
								} catch {}
								return s.call(this, c, l, u)
							}
						}), W(i, "removeEventListener", function(s) {
							return function(c, l, u) {
								if (c === "click" || c == "keypress") try {
									const h = this,
										p = h.__sentry_instrumentation_handlers__ || {},
										m = p[c];
									m && (m.refCount--, m.refCount <= 0 && (s.call(this, c, m.handler, u), m.handler = void 0, delete p[c]), Object.keys(p).length === 0 && delete h.__sentry_instrumentation_handlers__)
								} catch {}
								return s.call(this, c, l, u)
							}
						}))
					})
				})();
				break;
			case "xhr":
				(function() {
					if (!("XMLHttpRequest" in B)) return;
					const e = XMLHttpRequest.prototype;
					W(e, "open", function(t) {
						return function(...r) {
							const i = r[1],
								s = this[ht] = {
									method: Re(r[0]) ? r[0].toUpperCase() : r[0],
									url: r[1],
									request_headers: {}
								};
							Re(i) && s.method === "POST" && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
							const c = () => {
								const l = this[ht];
								if (l && this.readyState === 4) {
									try {
										l.status_code = this.status
									} catch {}
									ue("xhr", {
										args: r,
										endTimestamp: Date.now(),
										startTimestamp: Date.now(),
										xhr: this
									})
								}
							};
							return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? W(this, "onreadystatechange", function(l) {
								return function(...u) {
									return c(), l.apply(this, u)
								}
							}) : this.addEventListener("readystatechange", c), W(this, "setRequestHeader", function(l) {
								return function(...u) {
									const [h, p] = u, m = this[ht];
									return m && (m.request_headers[h.toLowerCase()] = p), l.apply(this, u)
								}
							}), t.apply(this, r)
						}
					}), W(e, "send", function(t) {
						return function(...r) {
							const i = this[ht];
							return i && r[0] !== void 0 && (i.body = r[0]), ue("xhr", {
								args: r,
								startTimestamp: Date.now(),
								xhr: this
							}), t.apply(this, r)
						}
					})
				})();
				break;
			case "fetch":
				(function() {
					ca() && W(B, "fetch", function(e) {
						return function(...t) {
							const {
								method: r,
								url: i
							} = function(c) {
								if (c.length === 0) return {
									method: "GET",
									url: ""
								};
								if (c.length === 2) {
									const [u, h] = c;
									return {
										url: Wr(u),
										method: bn(h, "method") ? String(h.method).toUpperCase() : "GET"
									}
								}
								const l = c[0];
								return {
									url: Wr(l),
									method: bn(l, "method") ? String(l.method).toUpperCase() : "GET"
								}
							}(t), s = {
								args: t,
								fetchData: {
									method: r,
									url: i
								},
								startTimestamp: Date.now()
							};
							return ue("fetch", {
								...s
							}), e.apply(B, t).then(c => (ue("fetch", {
								...s,
								endTimestamp: Date.now(),
								response: c
							}), c), c => {
								throw ue("fetch", {
									...s,
									endTimestamp: Date.now(),
									error: c
								}), c
							})
						}
					})
				})();
				break;
			case "history":
				(function() {
					if (! function() {
							const r = xt.chrome,
								i = r && r.app && r.app.runtime,
								s = "history" in xt && !!xt.history.pushState && !!xt.history.replaceState;
							return !i && s
						}()) return;
					const e = B.onpopstate;

					function t(r) {
						return function(...i) {
							const s = i.length > 2 ? i[2] : void 0;
							if (s) {
								const c = jt,
									l = String(s);
								jt = l, ue("history", {
									from: c,
									to: l
								})
							}
							return r.apply(this, i)
						}
					}
					B.onpopstate = function(...r) {
						const i = B.location.href,
							s = jt;
						if (jt = i, ue("history", {
								from: s,
								to: i
							}), e) try {
							return e.apply(this, r)
						} catch {}
					}, W(B.history, "pushState", t), W(B.history, "replaceState", t)
				})();
				break;
			case "error":
				Bt = B.onerror, B.onerror = function(e, t, r, i, s) {
					return ue("error", {
						column: i,
						error: s,
						line: r,
						msg: e,
						url: t
					}), !(!Bt || Bt.__SENTRY_LOADER__) && Bt.apply(this, arguments)
				}, B.onerror.__SENTRY_INSTRUMENTED__ = !0;
				break;
			case "unhandledrejection":
				Ut = B.onunhandledrejection, B.onunhandledrejection = function(e) {
					return ue("unhandledrejection", e), !(Ut && !Ut.__SENTRY_LOADER__) || Ut.apply(this, arguments)
				}, B.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
				break;
			default:
				return void((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("unknown instrumentation type:", n))
		}
	}

	function je(n, e) {
		pt[n] = pt[n] || [], pt[n].push(e), la(n)
	}

	function ue(n, e) {
		if (n && pt[n])
			for (const t of pt[n] || []) try {
				t(e)
			} catch (r) {
				(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Ce(t)}
Error:`, r)
			}
	}

	function bn(n, e) {
		return !!n && typeof n == "object" && !!n[e]
	}

	function Wr(n) {
		return typeof n == "string" ? n : n ? bn(n, "url") ? n.url : n.toString ? n.toString() : "" : ""
	}
	let jt;
	const ua = 1e3;
	let Ft, Sn;

	function zr(n, e = !1) {
		return t => {
			if (!t || Sn === t || function(i) {
					if (i.type !== "keypress") return !1;
					try {
						const s = i.target;
						if (!s || !s.tagName) return !0;
						if (s.tagName === "INPUT" || s.tagName === "TEXTAREA" || s.isContentEditable) return !1
					} catch {}
					return !0
				}(t)) return;
			const r = t.type === "keypress" ? "input" : t.type;
			(Ft === void 0 || function(i, s) {
				if (!i || i.type !== s.type) return !0;
				try {
					if (i.target !== s.target) return !0
				} catch {}
				return !1
			}(Sn, t)) && (n({
				event: t,
				name: r,
				global: e
			}), Sn = t), clearTimeout(Ft), Ft = B.setTimeout(() => {
				Ft = void 0
			}, ua)
		}
	}
	let Bt = null,
		Ut = null;

	function Me() {
		const n = ne,
			e = n.crypto || n.msCrypto;
		if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
		const t = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
		return ("10000000100040008000" + 1e11).replace(/[018]/g, r => (r ^ (15 & t()) >> r / 4).toString(16))
	}

	function Hr(n) {
		return n.exception && n.exception.values ? n.exception.values[0] : void 0
	}

	function Ae(n) {
		const {
			message: e,
			event_id: t
		} = n;
		if (e) return e;
		const r = Hr(n);
		return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || t || "<unknown>" : t || "<unknown>"
	}

	function wn(n, e, t) {
		const r = n.exception = n.exception || {},
			i = r.values = r.values || [],
			s = i[0] = i[0] || {};
		s.value || (s.value = e || ""), s.type || (s.type = t || "Error")
	}

	function ft(n, e) {
		const t = Hr(n);
		if (!t) return;
		const r = t.mechanism;
		if (t.mechanism = {
				type: "generic",
				handled: !0,
				...r,
				...e
			}, e && "data" in e) {
			const i = {
				...r && r.data,
				...e.data
			};
			t.mechanism.data = i
		}
	}

	function Kr(n) {
		if (n && n.__sentry_captured__) return !0;
		try {
			mn(n, "__sentry_captured__", !0)
		} catch {}
		return !1
	}

	function Oe(n, e = 100, t = 1 / 0) {
		try {
			return En("", n, e, t)
		} catch (r) {
			return {
				ERROR: `**non-serializable** (${r})`
			}
		}
	}

	function Qr(n, e = 3, t = 102400) {
		const r = Oe(n, e);
		return i = r,
			function(s) {
				return ~-encodeURI(s).split(/%..|./).length
			}(JSON.stringify(i)) > t ? Qr(n, e - 1, t) : r;
		var i
	}

	function En(n, e, t = 1 / 0, r = 1 / 0, i = function() {
		const s = typeof WeakSet == "function",
			c = s ? new WeakSet : [];
		return [function(l) {
			if (s) return !!c.has(l) || (c.add(l), !1);
			for (let u = 0; u < c.length; u++)
				if (c[u] === l) return !0;
			return c.push(l), !1
		}, function(l) {
			if (s) c.delete(l);
			else
				for (let u = 0; u < c.length; u++)
					if (c[u] === l) {
						c.splice(u, 1);
						break
					}
		}]
	}()) {
		const [s, c] = i;
		if (e == null || ["number", "boolean", "string"].includes(typeof e) && (typeof(l = e) != "number" || l == l)) return e;
		var l;
		const u = function(b, S) {
			try {
				if (b === "domain" && S && typeof S == "object" && S._events) return "[Domain]";
				if (b === "domainEmitter") return "[DomainEmitter]";
				if (typeof global < "u" && S === global) return "[Global]";
				if (typeof window < "u" && S === window) return "[Window]";
				if (typeof document < "u" && S === document) return "[Document]";
				if (function(L) {
						return He(L) && "nativeEvent" in L && "preventDefault" in L && "stopPropagation" in L
					}(S)) return "[SyntheticEvent]";
				if (typeof S == "number" && S != S) return "[NaN]";
				if (typeof S == "function") return `[Function: ${Ce(S)}]`;
				if (typeof S == "symbol") return `[${String(S)}]`;
				if (typeof S == "bigint") return `[BigInt: ${String(S)}]`;
				const T = function(L) {
					const G = Object.getPrototypeOf(L);
					return G ? G.constructor.name : "null prototype"
				}(S);
				return /^HTML(\w*)Element$/.test(T) ? `[HTMLElement: ${T}]` : `[object ${T}]`
			} catch (T) {
				return `**non-serializable** (${T})`
			}
		}(n, e);
		if (!u.startsWith("[object ")) return u;
		if (e.__sentry_skip_normalization__) return e;
		const h = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : t;
		if (h === 0) return u.replace("object ", "");
		if (s(e)) return "[Circular ~]";
		const p = e;
		if (p && typeof p.toJSON == "function") try {
			return En("", p.toJSON(), h - 1, r, i)
		} catch {}
		const m = Array.isArray(e) ? [] : {};
		let y = 0;
		const w = Yr(e);
		for (const b in w) {
			if (!Object.prototype.hasOwnProperty.call(w, b)) continue;
			if (y >= r) {
				m[b] = "[MaxProperties ~]";
				break
			}
			const S = w[b];
			m[b] = En(b, S, h - 1, r, i), y++
		}
		return c(e), m
	}
	var be;

	function Fe(n) {
		return new Z(e => {
			e(n)
		})
	}

	function Vt(n) {
		return new Z((e, t) => {
			t(n)
		})
	}(function(n) {
		n[n.PENDING = 0] = "PENDING", n[n.RESOLVED = 1] = "RESOLVED", n[n.REJECTED = 2] = "REJECTED"
	})(be || (be = {}));
	class Z {
		__init() {
			this._state = be.PENDING
		}
		__init2() {
			this._handlers = []
		}
		constructor(e) {
			Z.prototype.__init.call(this), Z.prototype.__init2.call(this), Z.prototype.__init3.call(this), Z.prototype.__init4.call(this), Z.prototype.__init5.call(this), Z.prototype.__init6.call(this);
			try {
				e(this._resolve, this._reject)
			} catch (t) {
				this._reject(t)
			}
		}
		then(e, t) {
			return new Z((r, i) => {
				this._handlers.push([!1, s => {
					if (e) try {
						r(e(s))
					} catch (c) {
						i(c)
					} else r(s)
				}, s => {
					if (t) try {
						r(t(s))
					} catch (c) {
						i(c)
					} else i(s)
				}]), this._executeHandlers()
			})
		} catch (e) {
			return this.then(t => t, e)
		} finally(e) {
			return new Z((t, r) => {
				let i, s;
				return this.then(c => {
					s = !1, i = c, e && e()
				}, c => {
					s = !0, i = c, e && e()
				}).then(() => {
					s ? r(i) : t(i)
				})
			})
		}
		__init3() {
			this._resolve = e => {
				this._setResult(be.RESOLVED, e)
			}
		}
		__init4() {
			this._reject = e => {
				this._setResult(be.REJECTED, e)
			}
		}
		__init5() {
			this._setResult = (e, t) => {
				this._state === be.PENDING && (dn(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()))
			}
		}
		__init6() {
			this._executeHandlers = () => {
				if (this._state === be.PENDING) return;
				const e = this._handlers.slice();
				this._handlers = [], e.forEach(t => {
					t[0] || (this._state === be.RESOLVED && t[1](this._value), this._state === be.REJECTED && t[2](this._value), t[0] = !0)
				})
			}
		}
	}

	function da(n) {
		const e = [];

		function t(r) {
			return e.splice(e.indexOf(r), 1)[0]
		}
		return {
			$: e,
			add: function(r) {
				if (!(n === void 0 || e.length < n)) return Vt(new le("Not adding Promise because buffer limit was reached."));
				const i = r();
				return e.indexOf(i) === -1 && e.push(i), i.then(() => t(i)).then(null, () => t(i).then(null, () => {})), i
			},
			drain: function(r) {
				return new Z((i, s) => {
					let c = e.length;
					if (!c) return i(!0);
					const l = setTimeout(() => {
						r && r > 0 && i(!1)
					}, r);
					e.forEach(u => {
						Fe(u).then(() => {
							--c || (clearTimeout(l), i(!0))
						}, s)
					})
				})
			}
		}
	}

	function kn(n) {
		if (!n) return {};
		const e = n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
		if (!e) return {};
		const t = e[6] || "",
			r = e[8] || "";
		return {
			host: e[4],
			path: e[5],
			protocol: e[2],
			search: t,
			hash: r,
			relative: e[5] + t + r
		}
	}
	const ha = ["fatal", "error", "warning", "log", "info", "debug"],
		Xr = dt(),
		Tn = {
			nowSeconds: () => Date.now() / 1e3
		},
		Cn = typeof __SENTRY_BROWSER_BUNDLE__ < "u" && __SENTRY_BROWSER_BUNDLE__ || Object.prototype.toString.call(typeof process < "u" ? process : 0) !== "[object process]" ? function() {
			const {
				performance: n
			} = Xr;
			if (!(!n || !n.now)) return {
				now: () => n.now(),
				timeOrigin: Date.now() - n.now()
			}
		}() : function() {
			try {
				return (n = module, e = "perf_hooks", n.require(e)).performance
			} catch {
				return
			}
			var n, e
		}(),
		Zr = Cn === void 0 ? Tn : {
			nowSeconds: () => (Cn.timeOrigin + Cn.now()) / 1e3
		},
		Yt = Tn.nowSeconds.bind(Tn),
		ei = Zr.nowSeconds.bind(Zr);

	function mt(n, e = []) {
		return [n, e]
	}

	function pa(n, e) {
		const [t, r] = n;
		return [t, [...r, e]]
	}

	function ti(n, e) {
		const t = n[1];
		for (const r of t)
			if (e(r, r[0].type)) return !0;
		return !1
	}

	function Mn(n, e) {
		return (e || new TextEncoder).encode(n)
	}

	function fa(n, e) {
		const [t, r] = n;
		let i = JSON.stringify(t);

		function s(c) {
			typeof i == "string" ? i = typeof c == "string" ? i + c : [Mn(i, e), c] : i.push(typeof c == "string" ? Mn(c, e) : c)
		}
		for (const c of r) {
			const [l, u] = c;
			if (s(`
${JSON.stringify(l)}
`), typeof u == "string" || u instanceof Uint8Array) s(u);
			else {
				let h;
				try {
					h = JSON.stringify(u)
				} catch {
					h = JSON.stringify(Oe(u))
				}
				s(h)
			}
		}
		return typeof i == "string" ? i : function(c) {
			const l = c.reduce((p, m) => p + m.length, 0),
				u = new Uint8Array(l);
			let h = 0;
			for (const p of c) u.set(p, h), h += p.length;
			return u
		}(i)
	}

	function ma(n, e) {
		const t = typeof n.data == "string" ? Mn(n.data, e) : n.data;
		return [Rt({
			type: "attachment",
			length: t.length,
			filename: n.filename,
			content_type: n.contentType,
			attachment_type: n.attachmentType
		}), t]
	}(() => {
		const {
			performance: n
		} = Xr;
		if (!n || !n.now) return;
		const e = 36e5,
			t = n.now(),
			r = Date.now(),
			i = n.timeOrigin ? Math.abs(n.timeOrigin + t - r) : e,
			s = i < e,
			c = n.timing && n.timing.navigationStart,
			l = typeof c == "number" ? Math.abs(c + t - r) : e;
		(s || l < e) && i <= l && n.timeOrigin
	})();
	const ga = {
		session: "session",
		sessions: "session",
		attachment: "attachment",
		transaction: "transaction",
		event: "error",
		client_report: "internal",
		user_report: "default",
		profile: "profile",
		replay_event: "replay",
		replay_recording: "replay",
		check_in: "monitor"
	};

	function ni(n) {
		return ga[n]
	}

	function ri(n) {
		if (!n || !n.sdk) return;
		const {
			name: e,
			version: t
		} = n.sdk;
		return {
			name: e,
			version: t
		}
	}
	const va = 6e4;

	function _a(n, {
		statusCode: e,
		headers: t
	}, r = Date.now()) {
		const i = {
				...n
			},
			s = t && t["x-sentry-rate-limits"],
			c = t && t["retry-after"];
		if (s)
			for (const l of s.trim().split(",")) {
				const [u, h] = l.split(":", 2), p = parseInt(u, 10), m = 1e3 * (isNaN(p) ? 60 : p);
				if (h)
					for (const y of h.split(";")) i[y] = r + m;
				else i.all = r + m
			} else c ? i.all = r + function(l, u = Date.now()) {
				const h = parseInt(`${l}`, 10);
				if (!isNaN(h)) return 1e3 * h;
				const p = Date.parse(`${l}`);
				return isNaN(p) ? va : p - u
			}(c, r) : e === 429 && (i.all = r + 6e4);
		return i
	}
	const An = "production";

	function ya(n) {
		const e = ei(),
			t = {
				sid: Me(),
				init: !0,
				timestamp: e,
				started: e,
				duration: 0,
				status: "ok",
				errors: 0,
				ignoreDuration: !1,
				toJSON: () => function(r) {
					return Rt({
						sid: `${r.sid}`,
						init: r.init,
						started: new Date(1e3 * r.started).toISOString(),
						timestamp: new Date(1e3 * r.timestamp).toISOString(),
						status: r.status,
						errors: r.errors,
						did: typeof r.did == "number" || typeof r.did == "string" ? `${r.did}` : void 0,
						duration: r.duration,
						attrs: {
							release: r.release,
							environment: r.environment,
							ip_address: r.ipAddress,
							user_agent: r.userAgent
						}
					})
				}(t)
			};
		return n && Qe(t, n), t
	}

	function Qe(n, e = {}) {
		if (e.user && (!n.ipAddress && e.user.ip_address && (n.ipAddress = e.user.ip_address), n.did || e.did || (n.did = e.user.id || e.user.email || e.user.username)), n.timestamp = e.timestamp || ei(), e.ignoreDuration && (n.ignoreDuration = e.ignoreDuration), e.sid && (n.sid = e.sid.length === 32 ? e.sid : Me()), e.init !== void 0 && (n.init = e.init), !n.did && e.did && (n.did = `${e.did}`), typeof e.started == "number" && (n.started = e.started), n.ignoreDuration) n.duration = void 0;
		else if (typeof e.duration == "number") n.duration = e.duration;
		else {
			const t = n.timestamp - n.started;
			n.duration = t >= 0 ? t : 0
		}
		e.release && (n.release = e.release), e.environment && (n.environment = e.environment), !n.ipAddress && e.ipAddress && (n.ipAddress = e.ipAddress), !n.userAgent && e.userAgent && (n.userAgent = e.userAgent), typeof e.errors == "number" && (n.errors = e.errors), e.status && (n.status = e.status)
	}
	class Be {
		constructor() {
			this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = si()
		}
		static clone(e) {
			const t = new Be;
			return e && (t._breadcrumbs = [...e._breadcrumbs], t._tags = {
				...e._tags
			}, t._extra = {
				...e._extra
			}, t._contexts = {
				...e._contexts
			}, t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = [...e._eventProcessors], t._requestSession = e._requestSession, t._attachments = [...e._attachments], t._sdkProcessingMetadata = {
				...e._sdkProcessingMetadata
			}, t._propagationContext = {
				...e._propagationContext
			}), t
		}
		addScopeListener(e) {
			this._scopeListeners.push(e)
		}
		addEventProcessor(e) {
			return this._eventProcessors.push(e), this
		}
		setUser(e) {
			return this._user = e || {}, this._session && Qe(this._session, {
				user: e
			}), this._notifyScopeListeners(), this
		}
		getUser() {
			return this._user
		}
		getRequestSession() {
			return this._requestSession
		}
		setRequestSession(e) {
			return this._requestSession = e, this
		}
		setTags(e) {
			return this._tags = {
				...this._tags,
				...e
			}, this._notifyScopeListeners(), this
		}
		setTag(e, t) {
			return this._tags = {
				...this._tags,
				[e]: t
			}, this._notifyScopeListeners(), this
		}
		setExtras(e) {
			return this._extra = {
				...this._extra,
				...e
			}, this._notifyScopeListeners(), this
		}
		setExtra(e, t) {
			return this._extra = {
				...this._extra,
				[e]: t
			}, this._notifyScopeListeners(), this
		}
		setFingerprint(e) {
			return this._fingerprint = e, this._notifyScopeListeners(), this
		}
		setLevel(e) {
			return this._level = e, this._notifyScopeListeners(), this
		}
		setTransactionName(e) {
			return this._transactionName = e, this._notifyScopeListeners(), this
		}
		setContext(e, t) {
			return t === null ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
		}
		setSpan(e) {
			return this._span = e, this._notifyScopeListeners(), this
		}
		getSpan() {
			return this._span
		}
		getTransaction() {
			const e = this.getSpan();
			return e && e.transaction
		}
		setSession(e) {
			return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
		}
		getSession() {
			return this._session
		}
		update(e) {
			if (!e) return this;
			if (typeof e == "function") {
				const t = e(this);
				return t instanceof Be ? t : this
			}
			return e instanceof Be ? (this._tags = {
				...this._tags,
				...e._tags
			}, this._extra = {
				...this._extra,
				...e._extra
			}, this._contexts = {
				...this._contexts,
				...e._contexts
			}, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : He(e) && (this._tags = {
				...this._tags,
				...e.tags
			}, this._extra = {
				...this._extra,
				...e.extra
			}, this._contexts = {
				...this._contexts,
				...e.contexts
			}, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this
		}
		clear() {
			return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = si(), this
		}
		addBreadcrumb(e, t) {
			const r = typeof t == "number" ? t : 100;
			if (r <= 0) return this;
			const i = {
				timestamp: Yt(),
				...e
			};
			return this._breadcrumbs = [...this._breadcrumbs, i].slice(-r), this._notifyScopeListeners(), this
		}
		getLastBreadcrumb() {
			return this._breadcrumbs[this._breadcrumbs.length - 1]
		}
		clearBreadcrumbs() {
			return this._breadcrumbs = [], this._notifyScopeListeners(), this
		}
		addAttachment(e) {
			return this._attachments.push(e), this
		}
		getAttachments() {
			return this._attachments
		}
		clearAttachments() {
			return this._attachments = [], this
		}
		applyToEvent(e, t = {}) {
			if (this._extra && Object.keys(this._extra).length && (e.extra = {
					...this._extra,
					...e.extra
				}), this._tags && Object.keys(this._tags).length && (e.tags = {
					...this._tags,
					...e.tags
				}), this._user && Object.keys(this._user).length && (e.user = {
					...this._user,
					...e.user
				}), this._contexts && Object.keys(this._contexts).length && (e.contexts = {
					...this._contexts,
					...e.contexts
				}), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
				e.contexts = {
					trace: this._span.getTraceContext(),
					...e.contexts
				};
				const r = this._span.transaction;
				if (r) {
					e.sdkProcessingMetadata = {
						dynamicSamplingContext: r.getDynamicSamplingContext(),
						...e.sdkProcessingMetadata
					};
					const i = r.name;
					i && (e.tags = {
						transaction: i,
						...e.tags
					})
				}
			}
			return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = {
				...e.sdkProcessingMetadata,
				...this._sdkProcessingMetadata,
				propagationContext: this._propagationContext
			}, this._notifyEventProcessors([...ii(), ...this._eventProcessors], e, t)
		}
		setSDKProcessingMetadata(e) {
			return this._sdkProcessingMetadata = {
				...this._sdkProcessingMetadata,
				...e
			}, this
		}
		setPropagationContext(e) {
			return this._propagationContext = e, this
		}
		getPropagationContext() {
			return this._propagationContext
		}
		_notifyEventProcessors(e, t, r, i = 0) {
			return new Z((s, c) => {
				const l = e[i];
				if (t === null || typeof l != "function") s(t);
				else {
					const u = l({
						...t
					}, r);
					(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && l.id && u === null && O.log(`Event processor "${l.id}" dropped event`), dn(u) ? u.then(h => this._notifyEventProcessors(e, h, r, i + 1).then(s)).then(null, c) : this._notifyEventProcessors(e, u, r, i + 1).then(s).then(null, c)
				}
			})
		}
		_notifyScopeListeners() {
			this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
				e(this)
			}), this._notifyingListeners = !1)
		}
		_applyFingerprint(e) {
			var t;
			e.fingerprint = e.fingerprint ? (t = e.fingerprint, Array.isArray(t) ? t : [t]) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
		}
	}

	function ii() {
		return pn("globalEventProcessors", () => [])
	}

	function oi(n) {
		ii().push(n)
	}

	function si() {
		return {
			traceId: Me(),
			spanId: Me().substring(16),
			sampled: !1
		}
	}
	const ai = 4,
		ba = 100;
	class On {
		constructor(e, t = new Be, r = ai) {
			this._version = r, this._stack = [{
				scope: t
			}], e && this.bindClient(e)
		}
		isOlderThan(e) {
			return this._version < e
		}
		bindClient(e) {
			this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
		}
		pushScope() {
			const e = Be.clone(this.getScope());
			return this.getStack().push({
				client: this.getClient(),
				scope: e
			}), e
		}
		popScope() {
			return !(this.getStack().length <= 1) && !!this.getStack().pop()
		}
		withScope(e) {
			const t = this.pushScope();
			try {
				e(t)
			} finally {
				this.popScope()
			}
		}
		getClient() {
			return this.getStackTop().client
		}
		getScope() {
			return this.getStackTop().scope
		}
		getStack() {
			return this._stack
		}
		getStackTop() {
			return this._stack[this._stack.length - 1]
		}
		captureException(e, t) {
			const r = this._lastEventId = t && t.event_id ? t.event_id : Me(),
				i = new Error("Sentry syntheticException");
			return this._withClient((s, c) => {
				s.captureException(e, {
					originalException: e,
					syntheticException: i,
					...t,
					event_id: r
				}, c)
			}), r
		}
		captureMessage(e, t, r) {
			const i = this._lastEventId = r && r.event_id ? r.event_id : Me(),
				s = new Error(e);
			return this._withClient((c, l) => {
				c.captureMessage(e, t, {
					originalException: e,
					syntheticException: s,
					...r,
					event_id: i
				}, l)
			}), i
		}
		captureEvent(e, t) {
			const r = t && t.event_id ? t.event_id : Me();
			return e.type || (this._lastEventId = r), this._withClient((i, s) => {
				i.captureEvent(e, {
					...t,
					event_id: r
				}, s)
			}), r
		}
		lastEventId() {
			return this._lastEventId
		}
		addBreadcrumb(e, t) {
			const {
				scope: r,
				client: i
			} = this.getStackTop();
			if (!i) return;
			const {
				beforeBreadcrumb: s = null,
				maxBreadcrumbs: c = ba
			} = i.getOptions && i.getOptions() || {};
			if (c <= 0) return;
			const l = {
					timestamp: Yt(),
					...e
				},
				u = s ? Fr(() => s(l, t)) : l;
			u !== null && (i.emit && i.emit("beforeAddBreadcrumb", u, t), r.addBreadcrumb(u, c))
		}
		setUser(e) {
			this.getScope().setUser(e)
		}
		setTags(e) {
			this.getScope().setTags(e)
		}
		setExtras(e) {
			this.getScope().setExtras(e)
		}
		setTag(e, t) {
			this.getScope().setTag(e, t)
		}
		setExtra(e, t) {
			this.getScope().setExtra(e, t)
		}
		setContext(e, t) {
			this.getScope().setContext(e, t)
		}
		configureScope(e) {
			const {
				scope: t,
				client: r
			} = this.getStackTop();
			r && e(t)
		}
		run(e) {
			const t = ci(this);
			try {
				e(this)
			} finally {
				ci(t)
			}
		}
		getIntegration(e) {
			const t = this.getClient();
			if (!t) return null;
			try {
				return t.getIntegration(e)
			} catch {
				return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
			}
		}
		startTransaction(e, t) {
			const r = this._callExtensionMethod("startTransaction", e, t);
			return typeof __SENTRY_DEBUG__ < "u" && !__SENTRY_DEBUG__ || r || console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), r
		}
		traceHeaders() {
			return this._callExtensionMethod("traceHeaders")
		}
		captureSession(e = !1) {
			if (e) return this.endSession();
			this._sendSessionUpdate()
		}
		endSession() {
			const e = this.getStackTop().scope,
				t = e.getSession();
			t && function(r, i) {
				let s = {};
				i ? s = {
					status: i
				} : r.status === "ok" && (s = {
					status: "exited"
				}), Qe(r, s)
			}(t), this._sendSessionUpdate(), e.setSession()
		}
		startSession(e) {
			const {
				scope: t,
				client: r
			} = this.getStackTop(), {
				release: i,
				environment: s = An
			} = r && r.getOptions() || {}, {
				userAgent: c
			} = ne.navigator || {}, l = ya({
				release: i,
				environment: s,
				user: t.getUser(),
				...c && {
					userAgent: c
				},
				...e
			}), u = t.getSession && t.getSession();
			return u && u.status === "ok" && Qe(u, {
				status: "exited"
			}), this.endSession(), t.setSession(l), l
		}
		shouldSendDefaultPii() {
			const e = this.getClient(),
				t = e && e.getOptions();
			return !!(t && t.sendDefaultPii)
		}
		_sendSessionUpdate() {
			const {
				scope: e,
				client: t
			} = this.getStackTop(), r = e.getSession();
			r && t && t.captureSession && t.captureSession(r)
		}
		_withClient(e) {
			const {
				scope: t,
				client: r
			} = this.getStackTop();
			r && e(r, t)
		}
		_callExtensionMethod(e, ...t) {
			const r = $t().__SENTRY__;
			if (r && r.extensions && typeof r.extensions[e] == "function") return r.extensions[e].apply(this, t);
			(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Extension method ${e} couldn't be found, doing nothing.`)
		}
	}

	function $t() {
		return ne.__SENTRY__ = ne.__SENTRY__ || {
			extensions: {},
			hub: void 0
		}, ne
	}

	function ci(n) {
		const e = $t(),
			t = Ln(e);
		return li(e, n), t
	}

	function ee() {
		const n = $t();
		if (n.__SENTRY__ && n.__SENTRY__.acs) {
			const e = n.__SENTRY__.acs.getCurrentHub();
			if (e) return e
		}
		return function(e = $t()) {
			t = e, t && t.__SENTRY__ && t.__SENTRY__.hub && !Ln(e).isOlderThan(ai) || li(e, new On);
			var t;
			return Ln(e)
		}(n)
	}

	function Ln(n) {
		return pn("hub", () => new On, n)
	}

	function li(n, e) {
		return n ? ((n.__SENTRY__ = n.__SENTRY__ || {}).hub = e, !0) : !1
	}
	const Sa = "7";

	function wa(n, e) {
		return t = {
			sentry_key: n.publicKey,
			sentry_version: Sa,
			...e && {
				sentry_client: `${e.name}/${e.version}`
			}
		}, Object.keys(t).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&");
		var t
	}

	function Ea(n, e, t, r) {
		const i = ri(t),
			s = n.type && n.type !== "replay_event" ? n.type : "event";
		(function(l, u) {
			u && (l.sdk = l.sdk || {}, l.sdk.name = l.sdk.name || u.name, l.sdk.version = l.sdk.version || u.version, l.sdk.integrations = [...l.sdk.integrations || [], ...u.integrations || []], l.sdk.packages = [...l.sdk.packages || [], ...u.packages || []])
		})(n, t && t.sdk);
		const c = function(l, u, h, p) {
			const m = l.sdkProcessingMetadata && l.sdkProcessingMetadata.dynamicSamplingContext;
			return {
				event_id: l.event_id,
				sent_at: new Date().toISOString(),
				...u && {
					sdk: u
				},
				...!!h && {
					dsn: Nt(p)
				},
				...m && {
					trace: Rt({
						...m
					})
				}
			}
		}(n, i, r, e);
		return delete n.sdkProcessingMetadata, mt(c, [
			[{
				type: s
			}, n]
		])
	}
	const ui = [];

	function di(n, e) {
		e[n.name] = n, ui.indexOf(n.name) === -1 && (n.setupOnce(oi, ee), ui.push(n.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(`Integration installed: ${n.name}`))
	}

	function ka(n, e, t, r) {
		const {
			normalizeDepth: i = 3,
			normalizeMaxBreadth: s = 1e3
		} = n, c = {
			...e,
			event_id: e.event_id || t.event_id || Me(),
			timestamp: e.timestamp || Yt()
		}, l = t.integrations || n.integrations.map(p => p.name);
		(function(p, m) {
			const {
				environment: y,
				release: w,
				dist: b,
				maxValueLength: S = 250
			} = m;
			"environment" in p || (p.environment = "environment" in m ? y : An), p.release === void 0 && w !== void 0 && (p.release = w), p.dist === void 0 && b !== void 0 && (p.dist = b), p.message && (p.message = Ke(p.message, S));
			const T = p.exception && p.exception.values && p.exception.values[0];
			T && T.value && (T.value = Ke(T.value, S));
			const L = p.request;
			L && L.url && (L.url = Ke(L.url, S))
		})(c, n),
		function(p, m) {
			m.length > 0 && (p.sdk = p.sdk || {}, p.sdk.integrations = [...p.sdk.integrations || [], ...m])
		}(c, l), e.type === void 0 && function(p, m) {
			const y = ne._sentryDebugIds;
			if (!y) return;
			let w;
			const b = hi.get(m);
			b ? w = b : (w = new Map, hi.set(m, w));
			const S = Object.keys(y).reduce((T, L) => {
				let G;
				const De = w.get(L);
				De ? G = De : (G = m(L), w.set(L, G));
				for (let at = G.length - 1; at >= 0; at--) {
					const kt = G[at];
					if (kt.filename) {
						T[kt.filename] = y[L];
						break
					}
				}
				return T
			}, {});
			try {
				p.exception.values.forEach(T => {
					T.stacktrace.frames.forEach(L => {
						L.filename && (L.debug_id = S[L.filename])
					})
				})
			} catch {}
		}(c, n.stackParser);
		let u = r;
		t.captureContext && (u = Be.clone(u).update(t.captureContext));
		let h = Fe(c);
		if (u) {
			if (u.getAttachments) {
				const p = [...t.attachments || [], ...u.getAttachments()];
				p.length && (t.attachments = p)
			}
			h = u.applyToEvent(c, t)
		}
		return h.then(p => (p && function(m) {
			const y = {};
			try {
				m.exception.values.forEach(b => {
					b.stacktrace.frames.forEach(S => {
						S.debug_id && (S.abs_path ? y[S.abs_path] = S.debug_id : S.filename && (y[S.filename] = S.debug_id), delete S.debug_id)
					})
				})
			} catch {}
			if (Object.keys(y).length === 0) return;
			m.debug_meta = m.debug_meta || {}, m.debug_meta.images = m.debug_meta.images || [];
			const w = m.debug_meta.images;
			Object.keys(y).forEach(b => {
				w.push({
					type: "sourcemap",
					code_file: b,
					debug_id: y[b]
				})
			})
		}(p), typeof i == "number" && i > 0 ? function(m, y, w) {
			if (!m) return null;
			const b = {
				...m,
				...m.breadcrumbs && {
					breadcrumbs: m.breadcrumbs.map(S => ({
						...S,
						...S.data && {
							data: Oe(S.data, y, w)
						}
					}))
				},
				...m.user && {
					user: Oe(m.user, y, w)
				},
				...m.contexts && {
					contexts: Oe(m.contexts, y, w)
				},
				...m.extra && {
					extra: Oe(m.extra, y, w)
				}
			};
			return m.contexts && m.contexts.trace && b.contexts && (b.contexts.trace = m.contexts.trace, m.contexts.trace.data && (b.contexts.trace.data = Oe(m.contexts.trace.data, y, w))), m.spans && (b.spans = m.spans.map(S => (S.data && (S.data = Oe(S.data, y, w)), S))), b
		}(p, i, s) : p))
	}
	const hi = new WeakMap,
		pi = "Not capturing exception because it's already been captured.";
	class Ue {
		__init() {
			this._integrations = {}
		}
		__init2() {
			this._integrationsInitialized = !1
		}
		__init3() {
			this._numProcessing = 0
		}
		__init4() {
			this._outcomes = {}
		}
		__init5() {
			this._hooks = {}
		}
		constructor(e) {
			if (Ue.prototype.__init.call(this), Ue.prototype.__init2.call(this), Ue.prototype.__init3.call(this), Ue.prototype.__init4.call(this), Ue.prototype.__init5.call(this), this._options = e, e.dsn ? this._dsn = aa(e.dsn) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("No DSN provided, client will not do anything."), this._dsn) {
				const t = function(r, i = {}) {
					const s = typeof i == "string" ? i : i.tunnel,
						c = typeof i != "string" && i._metadata ? i._metadata.sdk : void 0;
					return s || `${function(l){return`${function(u){const h=u.protocol?`${u.protocol}:`:"",p=u.port?`:${u.port}`:"";return`${h}//${u.host}${p}${u.path?`/${u.path}`:""}/api/`}(l)}${l.projectId}/envelope/`}(r)}?${wa(r,c)}`
				}(this._dsn, e);
				this._transport = e.transport({
					recordDroppedEvent: this.recordDroppedEvent.bind(this),
					...e.transportOptions,
					url: t
				})
			}
		}
		captureException(e, t, r) {
			if (Kr(e)) return void((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(pi));
			let i = t && t.event_id;
			return this._process(this.eventFromException(e, t).then(s => this._captureEvent(s, t, r)).then(s => {
				i = s
			})), i
		}
		captureMessage(e, t, r, i) {
			let s = r && r.event_id;
			const c = Nr(e) ? this.eventFromMessage(String(e), t, r) : this.eventFromException(e, r);
			return this._process(c.then(l => this._captureEvent(l, r, i)).then(l => {
				s = l
			})), s
		}
		captureEvent(e, t, r) {
			if (t && t.originalException && Kr(t.originalException)) return void((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(pi));
			let i = t && t.event_id;
			return this._process(this._captureEvent(e, t, r).then(s => {
				i = s
			})), i
		}
		captureSession(e) {
			this._isEnabled() ? typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Qe(e, {
				init: !1
			})) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("SDK not enabled, will not capture session.")
		}
		getDsn() {
			return this._dsn
		}
		getOptions() {
			return this._options
		}
		getSdkMetadata() {
			return this._options._metadata
		}
		getTransport() {
			return this._transport
		}
		flush(e) {
			const t = this._transport;
			return t ? this._isClientDoneProcessing(e).then(r => t.flush(e).then(i => r && i)) : Fe(!0)
		}
		close(e) {
			return this.flush(e).then(t => (this.getOptions().enabled = !1, t))
		}
		setupIntegrations() {
			this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(e) {
				const t = {};
				return e.forEach(r => {
					r && di(r, t)
				}), t
			}(this._options.integrations), this._integrationsInitialized = !0)
		}
		getIntegrationById(e) {
			return this._integrations[e]
		}
		getIntegration(e) {
			try {
				return this._integrations[e.id] || null
			} catch {
				return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
			}
		}
		addIntegration(e) {
			di(e, this._integrations)
		}
		sendEvent(e, t = {}) {
			if (this._dsn) {
				let r = Ea(e, this._dsn, this._options._metadata, this._options.tunnel);
				for (const s of t.attachments || []) r = pa(r, ma(s, this._options.transportOptions && this._options.transportOptions.textEncoder));
				const i = this._sendEnvelope(r);
				i && i.then(s => this.emit("afterSendEvent", e, s), null)
			}
		}
		sendSession(e) {
			if (this._dsn) {
				const t = function(r, i, s, c) {
					const l = ri(s);
					return mt({
						sent_at: new Date().toISOString(),
						...l && {
							sdk: l
						},
						...!!c && {
							dsn: Nt(i)
						}
					}, ["aggregates" in r ? [{
						type: "sessions"
					}, r] : [{
						type: "session"
					}, r.toJSON()]])
				}(e, this._dsn, this._options._metadata, this._options.tunnel);
				this._sendEnvelope(t)
			}
		}
		recordDroppedEvent(e, t, r) {
			if (this._options.sendClientReports) {
				const i = `${e}:${t}`;
				(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1
			}
		}
		on(e, t) {
			this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t)
		}
		emit(e, ...t) {
			this._hooks[e] && this._hooks[e].forEach(r => r(...t))
		}
		_updateSessionFromEvent(e, t) {
			let r = !1,
				i = !1;
			const s = t.exception && t.exception.values;
			if (s) {
				i = !0;
				for (const l of s) {
					const u = l.mechanism;
					if (u && u.handled === !1) {
						r = !0;
						break
					}
				}
			}
			const c = e.status === "ok";
			(c && e.errors === 0 || c && r) && (Qe(e, {
				...r && {
					status: "crashed"
				},
				errors: e.errors || Number(i || r)
			}), this.captureSession(e))
		}
		_isClientDoneProcessing(e) {
			return new Z(t => {
				let r = 0;
				const i = setInterval(() => {
					this._numProcessing == 0 ? (clearInterval(i), t(!0)) : (r += 1, e && r >= e && (clearInterval(i), t(!1)))
				}, 1)
			})
		}
		_isEnabled() {
			return this.getOptions().enabled !== !1 && this._dsn !== void 0
		}
		_prepareEvent(e, t, r) {
			const i = this.getOptions(),
				s = Object.keys(this._integrations);
			return !t.integrations && s.length > 0 && (t.integrations = s), ka(i, e, t, r).then(c => {
				if (c === null) return c;
				const {
					propagationContext: l
				} = c.sdkProcessingMetadata || {};
				if (!(c.contexts && c.contexts.trace) && l) {
					const {
						traceId: u,
						spanId: h,
						parentSpanId: p,
						dsc: m
					} = l;
					c.contexts = {
						trace: {
							trace_id: u,
							span_id: h,
							parent_span_id: p
						},
						...c.contexts
					};
					const y = m || function(w, b, S) {
						const T = b.getOptions(),
							{
								publicKey: L
							} = b.getDsn() || {},
							{
								segment: G
							} = S && S.getUser() || {},
							De = Rt({
								environment: T.environment || An,
								release: T.release,
								user_segment: G,
								public_key: L,
								trace_id: w
							});
						return b.emit && b.emit("createDsc", De), De
					}(u, this, r);
					c.sdkProcessingMetadata = {
						dynamicSamplingContext: y,
						...c.sdkProcessingMetadata
					}
				}
				return c
			})
		}
		_captureEvent(e, t = {}, r) {
			return this._processEvent(e, t, r).then(i => i.event_id, i => {
				if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
					const s = i;
					s.logLevel === "log" ? O.log(s.message) : O.warn(s)
				}
			})
		}
		_processEvent(e, t, r) {
			const i = this.getOptions(),
				{
					sampleRate: s
				} = i;
			if (!this._isEnabled()) return Vt(new le("SDK not enabled, will not capture event.", "log"));
			const c = mi(e),
				l = fi(e),
				u = e.type || "error",
				h = `before send for type \`${u}\``;
			if (l && typeof s == "number" && Math.random() > s) return this.recordDroppedEvent("sample_rate", "error", e), Vt(new le(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
			const p = u === "replay_event" ? "replay" : u;
			return this._prepareEvent(e, t, r).then(m => {
				if (m === null) throw this.recordDroppedEvent("event_processor", p, e), new le("An event processor returned `null`, will not send event.", "log");
				if (t.data && t.data.__sentry__ === !0) return m;
				const y = function(w, b, S) {
					const {
						beforeSend: T,
						beforeSendTransaction: L
					} = w;
					return fi(b) && T ? T(b, S) : mi(b) && L ? L(b, S) : b
				}(i, m, t);
				return function(w, b) {
					const S = `${b} must return \`null\` or a valid event.`;
					if (dn(w)) return w.then(T => {
						if (!He(T) && T !== null) throw new le(S);
						return T
					}, T => {
						throw new le(`${b} rejected with ${T}`)
					});
					if (!He(w) && w !== null) throw new le(S);
					return w
				}(y, h)
			}).then(m => {
				if (m === null) throw this.recordDroppedEvent("before_send", p, e), new le(`${h} returned \`null\`, will not send event.`, "log");
				const y = r && r.getSession();
				!c && y && this._updateSessionFromEvent(y, m);
				const w = m.transaction_info;
				if (c && w && m.transaction !== e.transaction) {
					const b = "custom";
					m.transaction_info = {
						...w,
						source: b
					}
				}
				return this.sendEvent(m, t), m
			}).then(null, m => {
				throw m instanceof le ? m : (this.captureException(m, {
					data: {
						__sentry__: !0
					},
					originalException: m
				}), new le(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`))
			})
		}
		_process(e) {
			this._numProcessing++, e.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t))
		}
		_sendEnvelope(e) {
			if (this._transport && this._dsn) return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, t => {
				(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error("Error while sending event:", t)
			});
			(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error("Transport disabled")
		}
		_clearOutcomes() {
			const e = this._outcomes;
			return this._outcomes = {}, Object.keys(e).map(t => {
				const [r, i] = t.split(":");
				return {
					reason: r,
					category: i,
					quantity: e[t]
				}
			})
		}
	}

	function fi(n) {
		return n.type === void 0
	}

	function mi(n) {
		return n.type === "transaction"
	}
	const Ta = 30;

	function Ca(n, e, t = da(n.bufferSize || Ta)) {
		let r = {};

		function i(s) {
			const c = [];
			if (ti(s, (h, p) => {
					const m = ni(p);
					if (function(y, w, b = Date.now()) {
							return function(S, T) {
								return S[T] || S.all || 0
							}(y, w) > b
						}(r, m)) {
						const y = gi(h, p);
						n.recordDroppedEvent("ratelimit_backoff", m, y)
					} else c.push(h)
				}), c.length === 0) return Fe();
			const l = mt(s[0], c),
				u = h => {
					ti(l, (p, m) => {
						const y = gi(p, m);
						n.recordDroppedEvent(h, ni(m), y)
					})
				};
			return t.add(() => e({
				body: fa(l, n.textEncoder)
			}).then(h => (h.statusCode !== void 0 && (h.statusCode < 200 || h.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Sentry responded with status code ${h.statusCode} to sent event.`), r = _a(r, h), h), h => {
				throw u("network_error"), h
			})).then(h => h, h => {
				if (h instanceof le) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error("Skipped sending event because buffer is full."), u("queue_overflow"), Fe();
				throw h
			})
		}
		return i.__sentry__baseTransport__ = !0, {
			send: i,
			flush: s => t.drain(s)
		}
	}

	function gi(n, e) {
		if (e === "event" || e === "transaction") return Array.isArray(n) ? n[1] : void 0
	}
	const vi = "7.60.1";
	let _i;
	class gt {
		constructor() {
			gt.prototype.__init.call(this)
		}
		static __initStatic() {
			this.id = "FunctionToString"
		}
		__init() {
			this.name = gt.id
		}
		setupOnce() {
			_i = Function.prototype.toString;
			try {
				Function.prototype.toString = function(...e) {
					const t = gn(this) || this;
					return _i.apply(t, e)
				}
			} catch {}
		}
	}
	gt.__initStatic();
	const Ma = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
		Aa = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
	class Xe {
		static __initStatic() {
			this.id = "InboundFilters"
		}
		__init() {
			this.name = Xe.id
		}
		constructor(e = {}) {
			this._options = e, Xe.prototype.__init.call(this)
		}
		setupOnce(e, t) {
			const r = i => {
				const s = t();
				if (s) {
					const c = s.getIntegration(Xe);
					if (c) {
						const l = s.getClient(),
							u = l ? l.getOptions() : {},
							h = function(p = {}, m = {}) {
								return {
									allowUrls: [...p.allowUrls || [], ...m.allowUrls || []],
									denyUrls: [...p.denyUrls || [], ...m.denyUrls || []],
									ignoreErrors: [...p.ignoreErrors || [], ...m.ignoreErrors || [], ...p.disableErrorDefaults ? [] : Ma],
									ignoreTransactions: [...p.ignoreTransactions || [], ...m.ignoreTransactions || [], ...p.disableTransactionDefaults ? [] : Aa],
									ignoreInternal: p.ignoreInternal === void 0 || p.ignoreInternal
								}
							}(c._options, u);
						return function(p, m) {
							return m.ignoreInternal && function(y) {
								try {
									return y.exception.values[0].type === "SentryError"
								} catch {}
								return !1
							}(p) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ae(p)}`), !0) : function(y, w) {
								return y.type || !w || !w.length ? !1 : function(b) {
									if (b.message) return [b.message];
									if (b.exception) {
										const {
											values: S
										} = b.exception;
										try {
											const {
												type: T = "",
												value: L = ""
											} = S && S[S.length - 1] || {};
											return [`${L}`, `${T}: ${L}`]
										} catch {
											return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error(`Cannot extract message for event ${Ae(b)}`), []
										}
									}
									return []
								}(y).some(b => Pt(b, w))
							}(p, m.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ae(p)}`), !0) : function(y, w) {
								if (y.type !== "transaction" || !w || !w.length) return !1;
								const b = y.transaction;
								return !!b && Pt(b, w)
							}(p, m.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ae(p)}`), !0) : function(y, w) {
								if (!w || !w.length) return !1;
								const b = Gt(y);
								return !!b && Pt(b, w)
							}(p, m.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ae(p)}.
Url: ${Gt(p)}`), !0) : function(y, w) {
								if (!w || !w.length) return !0;
								const b = Gt(y);
								return !b || Pt(b, w)
							}(p, m.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ae(p)}.
Url: ${Gt(p)}`), !0)
						}(i, h) ? null : i
					}
				}
				return i
			};
			r.id = this.name, e(r)
		}
	}

	function Gt(n) {
		try {
			let e;
			try {
				e = n.exception.values[0].stacktrace.frames
			} catch {}
			return e ? function(t = []) {
				for (let r = t.length - 1; r >= 0; r--) {
					const i = t[r];
					if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null
				}
				return null
			}(e) : null
		} catch {
			return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.error(`Cannot extract url for event ${Ae(n)}`), null
		}
	}
	Xe.__initStatic();
	var Oa = Object.freeze({
		__proto__: null,
		FunctionToString: gt,
		InboundFilters: Xe
	});
	const F = ne;
	let Pn = 0;

	function yi() {
		return Pn > 0
	}

	function Ze(n, e = {}, t) {
		if (typeof n != "function") return n;
		try {
			const i = n.__sentry_wrapped__;
			if (i) return i;
			if (gn(n)) return n
		} catch {
			return n
		}
		const r = function() {
			const i = Array.prototype.slice.call(arguments);
			try {
				t && typeof t == "function" && t.apply(this, arguments);
				const c = i.map(l => Ze(l, e));
				return n.apply(this, c)
			} catch (c) {
				throw Pn++, setTimeout(() => {
					Pn--
				}), s = l => {
					var u, h;
					l.addEventProcessor(p => (e.mechanism && (wn(p, void 0, void 0), ft(p, e.mechanism)), p.extra = {
						...p.extra,
						arguments: i
					}, p)), u = c, ee().captureException(u, {
						captureContext: h
					})
				}, ee().withScope(s), c
			}
			var s
		};
		try {
			for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
		} catch {}
		Vr(r, n), mn(n, "__sentry_wrapped__", r);
		try {
			Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
				get: () => n.name
			})
		} catch {}
		return r
	}

	function bi(n, e) {
		const t = Dn(n, e),
			r = {
				type: e && e.name,
				value: Pa(e)
			};
		return t.length && (r.stacktrace = {
			frames: t
		}), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
	}

	function In(n, e) {
		return {
			exception: {
				values: [bi(n, e)]
			}
		}
	}

	function Dn(n, e) {
		const t = e.stacktrace || e.stack || "",
			r = function(i) {
				if (i) {
					if (typeof i.framesToPop == "number") return i.framesToPop;
					if (La.test(i.message)) return 1
				}
				return 0
			}(e);
		try {
			return n(t, r)
		} catch {}
		return []
	}
	const La = /Minified React error #\d+;/i;

	function Pa(n) {
		const e = n && n.message;
		return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
	}

	function Nn(n, e, t, r, i) {
		let s;
		if (un(e) && e.error) return In(n, e.error);
		if (Dr(e) || ze(e, "DOMException")) {
			const c = e;
			if ("stack" in e) s = In(n, e);
			else {
				const l = c.name || (Dr(c) ? "DOMError" : "DOMException"),
					u = c.message ? `${l}: ${c.message}` : l;
				s = Rn(n, u, t, r), wn(s, u)
			}
			return "code" in c && (s.tags = {
				...s.tags,
				"DOMException.code": `${c.code}`
			}), s
		}
		return Ir(e) ? In(n, e) : He(e) || Lt(e) ? (s = function(c, l, u, h) {
			const p = ee().getClient(),
				m = p && p.getOptions().normalizeDepth,
				y = {
					exception: {
						values: [{
							type: Lt(l) ? l.constructor.name : h ? "UnhandledRejection" : "Error",
							value: Ia(l, {
								isUnhandledRejection: h
							})
						}]
					},
					extra: {
						__serialized__: Qr(l, m)
					}
				};
			if (u) {
				const w = Dn(c, u);
				w.length && (y.exception.values[0].stacktrace = {
					frames: w
				})
			}
			return y
		}(n, e, t, i), ft(s, {
			synthetic: !0
		}), s) : (s = Rn(n, e, t, r), wn(s, `${e}`, void 0), ft(s, {
			synthetic: !0
		}), s)
	}

	function Rn(n, e, t, r) {
		const i = {
			message: e
		};
		if (r && t) {
			const s = Dn(n, t);
			s.length && (i.exception = {
				values: [{
					value: e,
					stacktrace: {
						frames: s
					}
				}]
			})
		}
		return i
	}

	function Ia(n, {
		isUnhandledRejection: e
	}) {
		const t = function(i, s = 40) {
				const c = Object.keys(Yr(i));
				if (c.sort(), !c.length) return "[object has no keys]";
				if (c[0].length >= s) return Ke(c[0], s);
				for (let l = c.length; l > 0; l--) {
					const u = c.slice(0, l).join(", ");
					if (!(u.length > s)) return l === c.length ? u : Ke(u, s)
				}
				return ""
			}(n),
			r = e ? "promise rejection" : "exception";
		return un(n) ? `Event \`ErrorEvent\` captured as ${r} with message \`${n.message}\`` : Lt(n) ? `Event \`${function(i){try{const s=Object.getPrototypeOf(i);return s?s.constructor.name:void 0}catch{}}(n)}\` (type=${n.type}) captured as ${r}` : `Object captured as ${r} with keys: ${t}`
	}
	const Si = 1024,
		wi = "Breadcrumbs";
	class vt {
		static __initStatic() {
			this.id = wi
		}
		__init() {
			this.name = vt.id
		}
		constructor(e) {
			vt.prototype.__init.call(this), this.options = {
				console: !0,
				dom: !0,
				fetch: !0,
				history: !0,
				sentry: !0,
				xhr: !0,
				...e
			}
		}
		setupOnce() {
			this.options.console && je("console", Da), this.options.dom && je("dom", function(e) {
				function t(r) {
					let i, s = typeof e == "object" ? e.serializeAttribute : void 0,
						c = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
					c && c > Si && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${c} was configured. Sentry will use 1024 instead.`), c = Si), typeof s == "string" && (s = [s]);
					try {
						const l = r.event;
						i = function(u) {
							return !!u && !!u.target
						}(l) ? fn(l.target, {
							keyAttrs: s,
							maxStringLength: c
						}) : fn(l, {
							keyAttrs: s,
							maxStringLength: c
						})
					} catch {
						i = "<unknown>"
					}
					i.length !== 0 && ee().addBreadcrumb({
						category: `ui.${r.name}`,
						message: i
					}, {
						event: r.event,
						name: r.name,
						global: r.global
					})
				}
				return t
			}(this.options.dom)), this.options.xhr && je("xhr", Na), this.options.fetch && je("fetch", Ra), this.options.history && je("history", xa)
		}
		addSentryBreadcrumb(e) {
			this.options.sentry && ee().addBreadcrumb({
				category: "sentry." + (e.type === "transaction" ? "transaction" : "event"),
				event_id: e.event_id,
				level: e.level,
				message: Ae(e)
			}, {
				event: e
			})
		}
	}

	function Da(n) {
		for (let r = 0; r < n.args.length; r++)
			if (n.args[r] === "ref=Ref<") {
				n.args[r + 1] = "viewRef";
				break
			} const e = {
			category: "console",
			data: {
				arguments: n.args,
				logger: "console"
			},
			level: (t = n.level, t === "warn" ? "warning" : ha.includes(t) ? t : "log"),
			message: Rr(n.args, " ")
		};
		var t;
		if (n.level === "assert") {
			if (n.args[0] !== !1) return;
			e.message = `Assertion failed: ${Rr(n.args.slice(1)," ")||"console.assert"}`, e.data.arguments = n.args.slice(1)
		}
		ee().addBreadcrumb(e, {
			input: n.args,
			level: n.level
		})
	}

	function Na(n) {
		const {
			startTimestamp: e,
			endTimestamp: t
		} = n, r = n.xhr[ht];
		if (!e || !t || !r) return;
		const {
			method: i,
			url: s,
			status_code: c,
			body: l
		} = r, u = {
			method: i,
			url: s,
			status_code: c
		}, h = {
			xhr: n.xhr,
			input: l,
			startTimestamp: e,
			endTimestamp: t
		};
		ee().addBreadcrumb({
			category: "xhr",
			data: u,
			type: "http"
		}, h)
	}

	function Ra(n) {
		const {
			startTimestamp: e,
			endTimestamp: t
		} = n;
		if (t && (!n.fetchData.url.match(/sentry_key/) || n.fetchData.method !== "POST"))
			if (n.error) {
				const r = n.fetchData,
					i = {
						data: n.error,
						input: n.args,
						startTimestamp: e,
						endTimestamp: t
					};
				ee().addBreadcrumb({
					category: "fetch",
					data: r,
					level: "error",
					type: "http"
				}, i)
			} else {
				const r = {
						...n.fetchData,
						status_code: n.response && n.response.status
					},
					i = {
						input: n.args,
						response: n.response,
						startTimestamp: e,
						endTimestamp: t
					};
				ee().addBreadcrumb({
					category: "fetch",
					data: r,
					type: "http"
				}, i)
			}
	}

	function xa(n) {
		let e = n.from,
			t = n.to;
		const r = kn(F.location.href);
		let i = kn(e);
		const s = kn(t);
		i.path || (i = r), r.protocol === s.protocol && r.host === s.host && (t = s.relative), r.protocol === i.protocol && r.host === i.host && (e = i.relative), ee().addBreadcrumb({
			category: "navigation",
			data: {
				from: e,
				to: t
			}
		})
	}
	vt.__initStatic();
	class ja extends Ue {
		constructor(e) {
			const t = F.SENTRY_SDK_SOURCE || "npm";
			e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
				name: "sentry.javascript.browser",
				packages: [{
					name: `${t}:@sentry/browser`,
					version: vi
				}],
				version: vi
			}, super(e), e.sendClientReports && F.document && F.document.addEventListener("visibilitychange", () => {
				F.document.visibilityState === "hidden" && this._flushOutcomes()
			})
		}
		eventFromException(e, t) {
			return function(r, i, s, c) {
				const l = Nn(r, i, s && s.syntheticException || void 0, c);
				return ft(l), l.level = "error", s && s.event_id && (l.event_id = s.event_id), Fe(l)
			}(this._options.stackParser, e, t, this._options.attachStacktrace)
		}
		eventFromMessage(e, t = "info", r) {
			return function(i, s, c = "info", l, u) {
				const h = Rn(i, s, l && l.syntheticException || void 0, u);
				return h.level = c, l && l.event_id && (h.event_id = l.event_id), Fe(h)
			}(this._options.stackParser, e, t, r, this._options.attachStacktrace)
		}
		sendEvent(e, t) {
			const r = this.getIntegrationById(wi);
			r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(e), super.sendEvent(e, t)
		}
		captureUserFeedback(e) {
			if (!this._isEnabled()) return void((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("SDK not enabled, will not capture user feedback."));
			const t = function(r, {
				metadata: i,
				tunnel: s,
				dsn: c
			}) {
				const l = {
					event_id: r.event_id,
					sent_at: new Date().toISOString(),
					...i && i.sdk && {
						sdk: {
							name: i.sdk.name,
							version: i.sdk.version
						}
					},
					...!!s && !!c && {
						dsn: Nt(c)
					}
				};
				return mt(l, [function(h) {
					return [{
						type: "user_report"
					}, h]
				}(r)])
			}(e, {
				metadata: this.getSdkMetadata(),
				dsn: this.getDsn(),
				tunnel: this.getOptions().tunnel
			});
			this._sendEnvelope(t)
		}
		_prepareEvent(e, t, r) {
			return e.platform = e.platform || "javascript", super._prepareEvent(e, t, r)
		}
		_flushOutcomes() {
			const e = this._clearOutcomes();
			if (e.length === 0) return void((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log("No outcomes to send"));
			if (!this._dsn) return void((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log("No dsn provided, will not send outcomes"));
			(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log("Sending outcomes:", e);
			const t = (r = e, mt((i = this._options.tunnel && Nt(this._dsn)) ? {
				dsn: i
			} : {}, [
				[{
					type: "client_report"
				}, {
					timestamp: s || Yt(),
					discarded_events: r
				}]
			]));
			var r, i, s;
			this._sendEnvelope(t)
		}
	}
	let _t;

	function Fa(n, e = function() {
		if (_t) return _t;
		if (yn(F.fetch)) return _t = F.fetch.bind(F);
		const t = F.document;
		let r = F.fetch;
		if (t && typeof t.createElement == "function") try {
			const i = t.createElement("iframe");
			i.hidden = !0, t.head.appendChild(i);
			const s = i.contentWindow;
			s && s.fetch && (r = s.fetch), t.head.removeChild(i)
		} catch (i) {
			(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
		}
		return _t = r.bind(F)
	}()) {
		let t = 0,
			r = 0;
		return Ca(n, function(i) {
			const s = i.body.length;
			t += s, r++;
			const c = {
				body: i.body,
				method: "POST",
				referrerPolicy: "origin",
				headers: n.headers,
				keepalive: t <= 6e4 && r < 15,
				...n.fetchOptions
			};
			try {
				return e(n.url, c).then(l => (t -= s, r--, {
					statusCode: l.status,
					headers: {
						"x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
						"retry-after": l.headers.get("Retry-After")
					}
				}))
			} catch (l) {
				return _t = void 0, t -= s, r--, Vt(l)
			}
		})
	}
	class Le {
		static __initStatic() {
			this.id = "GlobalHandlers"
		}
		__init() {
			this.name = Le.id
		}
		__init2() {
			this._installFunc = {
				onerror: Ba,
				onunhandledrejection: Ua
			}
		}
		constructor(e) {
			Le.prototype.__init.call(this), Le.prototype.__init2.call(this), this._options = {
				onerror: !0,
				onunhandledrejection: !0,
				...e
			}
		}
		setupOnce() {
			Error.stackTraceLimit = 50;
			const e = this._options;
			for (const r in e) {
				const i = this._installFunc[r];
				i && e[r] && (t = r, (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.log(`Global Handler attached: ${t}`), i(), this._installFunc[r] = void 0)
			}
			var t
		}
	}

	function Ba() {
		je("error", n => {
			const [e, t, r] = Ti();
			if (!e.getIntegration(Le)) return;
			const {
				msg: i,
				url: s,
				line: c,
				column: l,
				error: u
			} = n;
			if (yi() || u && u.__sentry_own_request__) return;
			const h = u === void 0 && Re(i) ? function(p, m, y, w) {
				const b = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
				let S = un(p) ? p.message : p,
					T = "Error";
				const L = S.match(b);
				return L && (T = L[1], S = L[2]), Ei({
					exception: {
						values: [{
							type: T,
							value: S
						}]
					}
				}, m, y, w)
			}(i, s, c, l) : Ei(Nn(t, u || i, void 0, r, !1), s, c, l);
			h.level = "error", ki(e, u, h, "onerror")
		})
	}

	function Ua() {
		je("unhandledrejection", n => {
			const [e, t, r] = Ti();
			if (!e.getIntegration(Le)) return;
			let i = n;
			try {
				"reason" in n ? i = n.reason : "detail" in n && "reason" in n.detail && (i = n.detail.reason)
			} catch {}
			if (yi() || i && i.__sentry_own_request__) return !0;
			const s = Nr(i) ? {
				exception: {
					values: [{
						type: "UnhandledRejection",
						value: `Non-Error promise rejection captured with value: ${String(i)}`
					}]
				}
			} : Nn(t, i, void 0, r, !0);
			s.level = "error", ki(e, i, s, "onunhandledrejection")
		})
	}

	function Ei(n, e, t, r) {
		const i = n.exception = n.exception || {},
			s = i.values = i.values || [],
			c = s[0] = s[0] || {},
			l = c.stacktrace = c.stacktrace || {},
			u = l.frames = l.frames || [],
			h = isNaN(parseInt(r, 10)) ? void 0 : r,
			p = isNaN(parseInt(t, 10)) ? void 0 : t,
			m = Re(e) && e.length > 0 ? e : function() {
				try {
					return ra.document.location.href
				} catch {
					return ""
				}
			}();
		return u.length === 0 && u.push({
			colno: h,
			filename: m,
			function: "?",
			in_app: !0,
			lineno: p
		}), n
	}

	function ki(n, e, t, r) {
		ft(t, {
			handled: !1,
			type: r
		}), n.captureEvent(t, {
			originalException: e
		})
	}

	function Ti() {
		const n = ee(),
			e = n.getClient(),
			t = e && e.getOptions() || {
				stackParser: () => [],
				attachStacktrace: !1
			};
		return [n, t.stackParser, t.attachStacktrace]
	}
	Le.__initStatic();
	const Va = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
	class yt {
		static __initStatic() {
			this.id = "TryCatch"
		}
		__init() {
			this.name = yt.id
		}
		constructor(e) {
			yt.prototype.__init.call(this), this._options = {
				XMLHttpRequest: !0,
				eventTarget: !0,
				requestAnimationFrame: !0,
				setInterval: !0,
				setTimeout: !0,
				...e
			}
		}
		setupOnce() {
			this._options.setTimeout && W(F, "setTimeout", Ci), this._options.setInterval && W(F, "setInterval", Ci), this._options.requestAnimationFrame && W(F, "requestAnimationFrame", Ya), this._options.XMLHttpRequest && "XMLHttpRequest" in F && W(XMLHttpRequest.prototype, "send", $a);
			const e = this._options.eventTarget;
			e && (Array.isArray(e) ? e : Va).forEach(Ga)
		}
	}

	function Ci(n) {
		return function(...e) {
			const t = e[0];
			return e[0] = Ze(t, {
				mechanism: {
					data: {
						function: Ce(n)
					},
					handled: !0,
					type: "instrument"
				}
			}), n.apply(this, e)
		}
	}

	function Ya(n) {
		return function(e) {
			return n.apply(this, [Ze(e, {
				mechanism: {
					data: {
						function: "requestAnimationFrame",
						handler: Ce(n)
					},
					handled: !0,
					type: "instrument"
				}
			})])
		}
	}

	function $a(n) {
		return function(...e) {
			const t = this;
			return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(r => {
				r in t && typeof t[r] == "function" && W(t, r, function(i) {
					const s = {
							mechanism: {
								data: {
									function: r,
									handler: Ce(i)
								},
								handled: !0,
								type: "instrument"
							}
						},
						c = gn(i);
					return c && (s.mechanism.data.handler = Ce(c)), Ze(i, s)
				})
			}), n.apply(this, e)
		}
	}

	function Ga(n) {
		const e = F,
			t = e[n] && e[n].prototype;
		t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (W(t, "addEventListener", function(r) {
			return function(i, s, c) {
				try {
					typeof s.handleEvent == "function" && (s.handleEvent = Ze(s.handleEvent, {
						mechanism: {
							data: {
								function: "handleEvent",
								handler: Ce(s),
								target: n
							},
							handled: !0,
							type: "instrument"
						}
					}))
				} catch {}
				return r.apply(this, [i, Ze(s, {
					mechanism: {
						data: {
							function: "addEventListener",
							handler: Ce(s),
							target: n
						},
						handled: !0,
						type: "instrument"
					}
				}), c])
			}
		}), W(t, "removeEventListener", function(r) {
			return function(i, s, c) {
				const l = s;
				try {
					const u = l && l.__sentry_wrapped__;
					u && r.call(this, i, u, c)
				} catch {}
				return r.call(this, i, l, c)
			}
		}))
	}
	yt.__initStatic();
	class et {
		static __initStatic() {
			this.id = "LinkedErrors"
		}
		__init() {
			this.name = et.id
		}
		constructor(e = {}) {
			et.prototype.__init.call(this), this._key = e.key || "cause", this._limit = e.limit || 5
		}
		setupOnce(e, t) {
			e((r, i) => {
				const s = t(),
					c = s.getClient(),
					l = s.getIntegration(et);
				if (!c || !l) return r;
				const u = c.getOptions();
				return na(bi, u.stackParser, u.maxValueLength, l._key, l._limit, r, i), r
			})
		}
	}
	et.__initStatic();
	class tt {
		constructor() {
			tt.prototype.__init.call(this)
		}
		static __initStatic() {
			this.id = "HttpContext"
		}
		__init() {
			this.name = tt.id
		}
		setupOnce() {
			oi(e => {
				if (ee().getIntegration(tt)) {
					if (!F.navigator && !F.location && !F.document) return e;
					const t = e.request && e.request.url || F.location && F.location.href,
						{
							referrer: r
						} = F.document || {},
						{
							userAgent: i
						} = F.navigator || {},
						s = {
							...e.request && e.request.headers,
							...r && {
								Referer: r
							},
							...i && {
								"User-Agent": i
							}
						},
						c = {
							...e.request,
							...t && {
								url: t
							},
							headers: s
						};
					return {
						...e,
						request: c
					}
				}
				return e
			})
		}
	}
	tt.__initStatic();
	class nt {
		constructor() {
			nt.prototype.__init.call(this)
		}
		static __initStatic() {
			this.id = "Dedupe"
		}
		__init() {
			this.name = nt.id
		}
		setupOnce(e, t) {
			const r = i => {
				if (i.type) return i;
				const s = t().getIntegration(nt);
				if (s) {
					try {
						if (function(c, l) {
								return l ? !!(function(u, h) {
									const p = u.message,
										m = h.message;
									return !(!p && !m || p && !m || !p && m || p !== m || !Ai(u, h) || !Mi(u, h))
								}(c, l) || function(u, h) {
									const p = Oi(h),
										m = Oi(u);
									return !(!p || !m || p.type !== m.type || p.value !== m.value || !Ai(u, h) || !Mi(u, h))
								}(c, l)) : !1
							}(i, s._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && O.warn("Event dropped due to being a duplicate of previously captured event."), null
					} catch {
						return s._previousEvent = i
					}
					return s._previousEvent = i
				}
				return i
			};
			r.id = this.name, e(r)
		}
	}

	function Mi(n, e) {
		let t = Li(n),
			r = Li(e);
		if (!t && !r) return !0;
		if (t && !r || !t && r || r.length !== t.length) return !1;
		for (let i = 0; i < r.length; i++) {
			const s = r[i],
				c = t[i];
			if (s.filename !== c.filename || s.lineno !== c.lineno || s.colno !== c.colno || s.function !== c.function) return !1
		}
		return !0
	}

	function Ai(n, e) {
		let t = n.fingerprint,
			r = e.fingerprint;
		if (!t && !r) return !0;
		if (t && !r || !t && r) return !1;
		try {
			return t.join("") === r.join("")
		} catch {
			return !1
		}
	}

	function Oi(n) {
		return n.exception && n.exception.values && n.exception.values[0]
	}

	function Li(n) {
		const e = n.exception;
		if (e) try {
			return e.values[0].stacktrace.frames
		} catch {
			return
		}
	}
	nt.__initStatic();
	var qa = Object.freeze({
		__proto__: null,
		Breadcrumbs: vt,
		Dedupe: nt,
		GlobalHandlers: Le,
		HttpContext: tt,
		LinkedErrors: et,
		TryCatch: yt
	});
	let Pi = {};
	F.Sentry && F.Sentry.Integrations && (Pi = F.Sentry.Integrations);
	const Ii = {
		...Pi,
		...Oa,
		...qa
	};
	var xn = "new",
		Di = "loading",
		Ni = "loaded",
		qt = "joining-meeting",
		Ve = "joined-meeting",
		Se = "left-meeting",
		we = "error",
		Ja = "blocked",
		Wa = "off",
		za = "sendable",
		Ha = "loading",
		Ka = "interrupted",
		Qa = "playable",
		Jt = "unknown",
		Ri = "full",
		Xa = "lobby",
		Za = "none",
		xi = "base",
		ji = "*",
		ec = "ejected",
		tc = "nbf-room",
		nc = "nbf-token",
		rc = "exp-room",
		ic = "exp-token",
		oc = "no-room",
		sc = "meeting-full",
		ac = "end-of-life",
		cc = "not-allowed",
		lc = "connection-error",
		uc = "cam-in-use",
		dc = "mic-in-use",
		hc = "cam-mic-in-use",
		pc = "permissions",
		fc = "undefined-mediadevices",
		mc = "not-found",
		gc = "constraints",
		vc = "unknown",
		Fi = "iframe-ready-for-launch-config",
		Bi = "iframe-launch-config",
		jn = "theme-updated",
		Fn = "loading",
		Bn = "load-attempt-failed",
		Wt = "loaded",
		Ui = "started-camera",
		Vi = "camera-error",
		Un = "joining-meeting",
		Yi = "joined-meeting",
		$i = "left-meeting",
		Gi = "available-devices-updated",
		qi = "participant-joined",
		Ji = "participant-updated",
		Wi = "participant-left",
		zi = "participant-counts-updated",
		Hi = "access-state-updated",
		Ki = "meeting-session-summary-updated",
		Qi = "meeting-session-state-updated",
		_c = "meeting-session-data-error",
		Xi = "waiting-participant-added",
		Zi = "waiting-participant-updated",
		eo = "waiting-participant-removed",
		Vn = "track-started",
		Yn = "track-stopped",
		to = "transcription-started",
		no = "transcription-stopped",
		ro = "transcription-error",
		zt = "recording-started",
		Ht = "recording-stopped",
		io = "recording-stats",
		oo = "recording-error",
		so = "recording-upload-completed",
		ao = "recording-data",
		co = "app-message",
		lo = "transcription-message",
		uo = "remote-media-player-started",
		ho = "remote-media-player-updated",
		po = "remote-media-player-stopped",
		fo = "local-screen-share-started",
		mo = "local-screen-share-stopped",
		go = "local-screen-share-canceled",
		vo = "active-speaker-change",
		_o = "active-speaker-mode-change",
		yo = "network-quality-change",
		bo = "network-connection",
		So = "cpu-load-change",
		wo = "face-counts-updated",
		Ye = "fullscreen",
		$e = "exited-fullscreen",
		Eo = "live-streaming-started",
		ko = "live-streaming-updated",
		To = "live-streaming-stopped",
		Co = "live-streaming-error",
		Mo = "lang-updated",
		Ao = "receive-settings-updated",
		Oo = "input-settings-updated",
		Kt = "nonfatal-error",
		Qt = "error",
		Lo = 102400,
		$n = "iframe-call-message",
		Po = "local-screen-start",
		Io = "daily-method-update-live-streaming-endpoints",
		bt = "transmit-log",
		St = "daily-custom-track",
		Xt = {
			NONE: "none",
			BGBLUR: "background-blur",
			BGIMAGE: "background-image",
			FACE_DETECTION: "face-detection"
		},
		Do = {
			NONE: "none",
			NOISE_CANCELLATION: "noise-cancellation"
		},
		Gn = {
			PLAY: "play",
			PAUSE: "pause"
		},
		No = 10,
		qn = ["jpg", "png", "jpeg"],
		yc = "add-endpoints",
		bc = "remove-endpoints";

	function de() {
		return !N() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""
	}

	function N() {
		return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative"
	}

	function Ro() {
		return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia
	}

	function Sc() {
		return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(n, e) {
			if (!n || !e) return !0;
			switch (n) {
				case "Chrome":
					return e.major >= 75;
				case "Safari":
					return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(e.major === 13 && e.minor === 0 && e.point === 0);
				case "Firefox":
					return e.major >= 67
			}
			return !0
		}(Pe(), Wn()) || N())
	}

	function xo() {
		if (N() || !document) return !1;
		var n = document.createElement("iframe");
		return !!n.requestFullscreen || !!n.webkitRequestFullscreen
	}
	var wc = function() {
		try {
			var n = document.createElement("canvas"),
				e = n.getContext("webgl2") != null;
			return n.remove(), e
		} catch {
			return !1
		}
	}();

	function jo() {
		var n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
		return !N() && !!wc && (n ? function() {
			return Jn() ? !1 : ["Chrome", "Firefox"].includes(Pe())
		}() : function() {
			if (Jn()) return !1;
			var e = Pe();
			if (e === "Safari") {
				var t = Hn();
				if (t.major < 15 || t.major === 15 && t.minor < 4) return !1
			}
			return e === "Chrome" ? zn().major >= 77 : e === "Firefox" ? Kn().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e)
		}())
	}
	var Ec = ["Chrome", "Firefox"];

	function Fo() {
		return !N() && !Jn() && typeof AudioWorkletNode < "u" && Ec.includes(Pe())
	}

	function Bo() {
		return Ro() && ! function() {
			var n, e = Pe();
			if (!de()) return !0;
			switch (e) {
				case "Chrome":
					return (n = zn()).major && n.major > 0 && n.major < 75;
				case "Firefox":
					return (n = Kn()).major < 91;
				case "Safari":
					return (n = Hn()).major < 13 || n.major === 13 && n.minor < 1;
				default:
					return !0
			}
		}()
	}

	function Jn() {
		var n, e, t = de(),
			r = t.match(/Mac/) && (!N() && typeof window < "u" && (n = window) !== null && n !== void 0 && (e = n.navigator) !== null && e !== void 0 && e.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
		return !!(t.match(/Mobi/) || t.match(/Android/) || r) || !!de().match(/DailyAnd\//) || void 0
	}

	function Pe() {
		if (typeof window < "u") {
			var n = de();
			return Uo() ? "Safari" : n.indexOf("Edge") > -1 ? "Edge" : n.match(/Chrome\//) ? "Chrome" : n.indexOf("Safari") > -1 ? "Safari" : n.indexOf("Firefox") > -1 ? "Firefox" : n.indexOf("MSIE") > -1 || n.indexOf(".NET") > -1 ? "IE" : "Unknown Browser"
		}
	}

	function Wn() {
		switch (Pe()) {
			case "Chrome":
				return zn();
			case "Safari":
				return Hn();
			case "Firefox":
				return Kn();
			case "Edge":
				return function() {
					var n = 0,
						e = 0;
					if (typeof window < "u") {
						var t = de().match(/Edge\/(\d+).(\d+)/);
						if (t) try {
							n = parseInt(t[1]), e = parseInt(t[2])
						} catch {}
					}
					return {
						major: n,
						minor: e
					}
				}()
		}
	}

	function zn() {
		var n = 0,
			e = 0,
			t = 0,
			r = 0,
			i = !1;
		if (typeof window < "u") {
			var s = de(),
				c = s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
			if (c) try {
				n = parseInt(c[1]), e = parseInt(c[2]), t = parseInt(c[3]), r = parseInt(c[4]), i = s.indexOf("OPR/") > -1
			} catch {}
		}
		return {
			major: n,
			minor: e,
			build: t,
			patch: r,
			opera: i
		}
	}

	function Uo() {
		return !!de().match(/iPad|iPhone|iPod/i) && Ro()
	}

	function Hn() {
		var n = 0,
			e = 0,
			t = 0;
		if (typeof window < "u") {
			var r = de().match(/Version\/(\d+).(\d+)(.(\d+))?/);
			if (r) try {
				n = parseInt(r[1]), e = parseInt(r[2]), t = parseInt(r[4])
			} catch {} else Uo() && (n = 14, e = 0, t = 3)
		}
		return {
			major: n,
			minor: e,
			point: t
		}
	}

	function Kn() {
		var n = 0,
			e = 0;
		if (typeof window < "u") {
			var t = de().match(/Firefox\/(\d+).(\d+)/);
			if (t) try {
				n = parseInt(t[1]), e = parseInt(t[2])
			} catch {}
		}
		return {
			major: n,
			minor: e
		}
	}
	var Vo = function() {
		function n() {
			se(this, n)
		}
		return ae(n, [{
			key: "addListenerForMessagesFromCallMachine",
			value: function(e, t, r) {
				lt()
			}
		}, {
			key: "addListenerForMessagesFromDailyJs",
			value: function(e, t, r) {
				lt()
			}
		}, {
			key: "sendMessageToCallMachine",
			value: function(e, t, r, i) {
				lt()
			}
		}, {
			key: "sendMessageToDailyJs",
			value: function(e, t) {
				lt()
			}
		}, {
			key: "removeListener",
			value: function(e) {
				lt()
			}
		}]), n
	}();

	function Yo(n, e) {
		var t = Object.keys(n);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(n);
			e && (r = r.filter(function(i) {
				return Object.getOwnPropertyDescriptor(n, i).enumerable
			})), t.push.apply(t, r)
		}
		return t
	}

	function Qn(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e] != null ? arguments[e] : {};
			e % 2 ? Yo(Object(t), !0).forEach(function(r) {
				ke(n, r, t[r])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Yo(Object(t)).forEach(function(r) {
				Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r))
			})
		}
		return n
	}

	function kc(n) {
		var e = function() {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
			if (typeof Proxy == "function") return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
			} catch {
				return !1
			}
		}();
		return function() {
			var t, r = ce(n);
			if (e) {
				var i = ce(this).constructor;
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments);
			return Ct(this, t)
		}
	}
	var Tc = function(n) {
		Tt(t, Vo);
		var e = kc(t);

		function t() {
			var r;
			return se(this, t), (r = e.call(this))._wrappedListeners = {}, r._messageCallbacks = {}, r
		}
		return ae(t, [{
			key: "addListenerForMessagesFromCallMachine",
			value: function(r, i, s) {
				var c = this,
					l = function(u) {
						if (u.data && u.data.what === "iframe-call-message" && (!u.data.callFrameId || u.data.callFrameId === i) && (!u.data.from || u.data.from !== "module")) {
							var h = Qn({}, u.data);
							if (delete h.from, h.callbackStamp && c._messageCallbacks[h.callbackStamp]) {
								var p = h.callbackStamp;
								c._messageCallbacks[p].call(s, h), delete c._messageCallbacks[p]
							}
							delete h.what, delete h.callbackStamp, r.call(s, h)
						}
					};
				this._wrappedListeners[r] = l, window.addEventListener("message", l)
			}
		}, {
			key: "addListenerForMessagesFromDailyJs",
			value: function(r, i, s) {
				var c = function(l) {
					if (!(!l.data || l.data.what !== $n || !l.data.action || l.data.from && l.data.from !== "module" || l.data.callFrameId && i && l.data.callFrameId !== i)) {
						var u = l.data;
						r.call(s, u)
					}
				};
				this._wrappedListeners[r] = c, window.addEventListener("message", c)
			}
		}, {
			key: "sendMessageToCallMachine",
			value: function(r, i, s, c) {
				if (!c) throw new Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?");
				var l = Qn({}, r);
				if (l.what = $n, l.from = "module", l.callFrameId = c, i) {
					var u = At();
					this._messageCallbacks[u] = i, l.callbackStamp = u
				}
				var h = s ? s.contentWindow : window,
					p = this._callMachineTargetOrigin(s);
				p && h.postMessage(l, p)
			}
		}, {
			key: "sendMessageToDailyJs",
			value: function(r, i) {
				r.what = $n, r.callFrameId = i, r.from = "embedded", window.postMessage(r, this._targetOriginFromWindowLocation())
			}
		}, {
			key: "removeListener",
			value: function(r) {
				var i = this._wrappedListeners[r];
				i && (window.removeEventListener("message", i), delete this._wrappedListeners[r])
			}
		}, {
			key: "forwardPackagedMessageToCallMachine",
			value: function(r, i, s) {
				var c = Qn({}, r);
				c.callFrameId = s;
				var l = i ? i.contentWindow : window,
					u = this._callMachineTargetOrigin(i);
				u && l.postMessage(c, u)
			}
		}, {
			key: "addListenerForPackagedMessagesFromCallMachine",
			value: function(r, i) {
				var s = function(c) {
					if (c.data && c.data.what === "iframe-call-message" && (!c.data.callFrameId || c.data.callFrameId === i) && (!c.data.from || c.data.from !== "module")) {
						var l = c.data;
						r(l)
					}
				};
				return this._wrappedListeners[r] = s, window.addEventListener("message", s), r
			}
		}, {
			key: "removeListenerForPackagedMessagesFromCallMachine",
			value: function(r) {
				var i = this._wrappedListeners[r];
				i && (window.removeEventListener("message", i), delete this._wrappedListeners[r])
			}
		}, {
			key: "_callMachineTargetOrigin",
			value: function(r) {
				return r ? r.src ? new URL(r.src).origin : void 0 : this._targetOriginFromWindowLocation()
			}
		}, {
			key: "_targetOriginFromWindowLocation",
			value: function() {
				return window.location.protocol === "file:" ? "*" : window.location.origin
			}
		}]), t
	}();

	function Cc(n) {
		var e = function() {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
			if (typeof Proxy == "function") return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
			} catch {
				return !1
			}
		}();
		return function() {
			var t, r = ce(n);
			if (e) {
				var i = ce(this).constructor;
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments);
			return Ct(this, t)
		}
	}
	var Mc = function(n) {
			Tt(t, Vo);
			var e = Cc(t);

			function t() {
				var r;
				return se(this, t), r = e.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new ye.EventEmitter, global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new ye.EventEmitter, r._wrappedListeners = {}, r._messageCallbacks = {}, r
			}
			return ae(t, [{
				key: "addListenerForMessagesFromCallMachine",
				value: function(r, i, s) {
					this._addListener(r, global.callMachineToDailyJsEmitter, s, "received call machine message")
				}
			}, {
				key: "addListenerForMessagesFromDailyJs",
				value: function(r, i, s) {
					this._addListener(r, global.dailyJsToCallMachineEmitter, s, "received daily-js message")
				}
			}, {
				key: "sendMessageToCallMachine",
				value: function(r, i) {
					this._sendMessage(r, global.dailyJsToCallMachineEmitter, "sending message to call machine", i)
				}
			}, {
				key: "sendMessageToDailyJs",
				value: function(r) {
					this._sendMessage(r, global.callMachineToDailyJsEmitter, "sending message to daily-js")
				}
			}, {
				key: "removeListener",
				value: function(r) {
					var i = this._wrappedListeners[r];
					i && (global.callMachineToDailyJsEmitter.removeListener("message", i), global.dailyJsToCallMachineEmitter.removeListener("message", i), delete this._wrappedListeners[r])
				}
			}, {
				key: "_addListener",
				value: function(r, i, s, c) {
					var l = this,
						u = function(h) {
							if (h.callbackStamp && l._messageCallbacks[h.callbackStamp]) {
								var p = h.callbackStamp;
								l._messageCallbacks[p].call(s, h), delete l._messageCallbacks[p]
							}
							r.call(s, h)
						};
					this._wrappedListeners[r] = u, i.addListener("message", u)
				}
			}, {
				key: "_sendMessage",
				value: function(r, i, s, c) {
					if (c) {
						var l = At();
						this._messageCallbacks[l] = c, r.callbackStamp = l
					}
					i.emit("message", r)
				}
			}]), t
		}(),
		Xn = "replace",
		Zn = "shallow-merge",
		$o = [Xn, Zn],
		Ac = function() {
			function n() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					t = e.data,
					r = e.mergeStrategy,
					i = r === void 0 ? Xn : r;
				se(this, n), n._validateMergeStrategy(i), n._validateData(t, i), this.mergeStrategy = i, this.data = t
			}
			return ae(n, [{
				key: "isNoOp",
				value: function() {
					return n.isNoOpUpdate(this.data, this.mergeStrategy)
				}
			}], [{
				key: "isNoOpUpdate",
				value: function(e, t) {
					return Object.keys(e).length === 0 && t === Zn
				}
			}, {
				key: "_validateMergeStrategy",
				value: function(e) {
					if (!$o.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat($o, "]"))
				}
			}, {
				key: "_validateData",
				value: function(e, t) {
					if (! function(l) {
							if (l == null || j(l) !== "object") return !1;
							var u = Object.getPrototypeOf(l);
							return u == null || u === Object.prototype
						}(e)) throw Error("Meeting session data must be a plain (map-like) object");
					var r;
					try {
						if (r = JSON.stringify(e), t === Xn) {
							var i = JSON.parse(r);
							X(i, e) || console.warn("The meeting session data provided will be modified when serialized.", i, e)
						} else if (t === Zn) {
							for (var s in e)
								if (Object.hasOwnProperty.call(e, s) && e[s] !== void 0) {
									var c = JSON.parse(JSON.stringify(e[s]));
									X(e[s], c) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", c, e[s])
								}
						}
					} catch (l) {
						throw Error("Meeting session data must be serializable to JSON: ".concat(l))
					}
					if (r.length > Lo) throw Error("Meeting session data is too large (".concat(r.length, " characters). Maximum size suppported is ").concat(Lo, "."))
				}
			}]), n
		}();

	function er(n, e, t) {
		return er = function() {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
			if (typeof Proxy == "function") return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
			} catch {
				return !1
			}
		}() ? Reflect.construct.bind() : function(r, i, s) {
			var c = [null];
			c.push.apply(c, i);
			var l = new(Function.bind.apply(r, c));
			return s && ct(l, s.prototype), l
		}, er.apply(null, arguments)
	}

	function tr(n) {
		var e = typeof Map == "function" ? new Map : void 0;
		return tr = function(t) {
			if (t === null || (r = t, Function.toString.call(r).indexOf("[native code]") === -1)) return t;
			var r;
			if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
			if (e !== void 0) {
				if (e.has(t)) return e.get(t);
				e.set(t, i)
			}

			function i() {
				return er(t, arguments, ce(this).constructor)
			}
			return i.prototype = Object.create(t.prototype, {
				constructor: {
					value: i,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ct(i, t)
		}, tr(n)
	}

	function Oc(n) {
		var e = function() {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
			if (typeof Proxy == "function") return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
			} catch {
				return !1
			}
		}();
		return function() {
			var t, r = ce(n);
			if (e) {
				var i = ce(this).constructor;
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments);
			return Ct(this, t)
		}
	}

	function Go(n) {
		var e, t = (e = window._daily) === null || e === void 0 ? void 0 : e.pendings;
		if (t) {
			var r = t.indexOf(n);
			r !== -1 && t.splice(r, 1)
		}
	}
	var Lc = function() {
			function n(e) {
				se(this, n), this._currentLoad = null, this._callFrameId = e
			}
			return ae(n, [{
				key: "load",
				value: function() {
					var e, t = this,
						r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
						i = arguments.length > 1 ? arguments[1] : void 0,
						s = arguments.length > 2 ? arguments[2] : void 0;
					if (this.loaded) return window._daily.instances[this._callFrameId].callMachine.reset(), void i(!0);
					e = this._callFrameId, window._daily.pendings.push(e), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new Pc(r, function() {
						i(!1)
					}, function(c, l) {
						l || Go(t._callFrameId), s(c, l)
					}), this._currentLoad.start()
				}
			}, {
				key: "cancel",
				value: function() {
					this._currentLoad && this._currentLoad.cancel(), Go(this._callFrameId)
				}
			}, {
				key: "loaded",
				get: function() {
					return this._currentLoad && this._currentLoad.succeeded
				}
			}]), n
		}(),
		Pc = function() {
			function n() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0,
					r = arguments.length > 2 ? arguments[2] : void 0;
				se(this, n), this._attemptsRemaining = 3, this._currentAttempt = null, this._dailyConfig = e, this._successCallback = t, this._failureCallback = r
			}
			return ae(n, [{
				key: "start",
				value: function() {
					var e = this;
					this._currentAttempt || (this._currentAttempt = new qo(this._dailyConfig, this._successCallback, function t(r) {
						e._currentAttempt.cancelled || (e._attemptsRemaining--, e._failureCallback(r, e._attemptsRemaining > 0), e._attemptsRemaining <= 0 || setTimeout(function() {
							e._currentAttempt.cancelled || (e._currentAttempt = new qo(e._dailyConfig, e._successCallback, t), e._currentAttempt.start())
						}, 3e3))
					}), this._currentAttempt.start())
				}
			}, {
				key: "cancel",
				value: function() {
					this._currentAttempt && this._currentAttempt.cancel()
				}
			}, {
				key: "cancelled",
				get: function() {
					return this._currentAttempt && this._currentAttempt.cancelled
				}
			}, {
				key: "succeeded",
				get: function() {
					return this._currentAttempt && this._currentAttempt.succeeded
				}
			}]), n
		}(),
		nr = function(n) {
			Tt(t, tr(Error));
			var e = Oc(t);

			function t() {
				return se(this, t), e.apply(this, arguments)
			}
			return ae(t)
		}(),
		Zt = 2e4,
		qo = function() {
			function n(t, r, i) {
				se(this, n), this._loadAttemptImpl = N() || !t.avoidEval ? new Ic(t, r, i) : new Dc(t, r, i)
			}
			var e;
			return ae(n, [{
				key: "start",
				value: (e = C(function*() {
					return this._loadAttemptImpl.start()
				}), function() {
					return e.apply(this, arguments)
				})
			}, {
				key: "cancel",
				value: function() {
					this._loadAttemptImpl.cancel()
				}
			}, {
				key: "cancelled",
				get: function() {
					return this._loadAttemptImpl.cancelled
				}
			}, {
				key: "succeeded",
				get: function() {
					return this._loadAttemptImpl.succeeded
				}
			}]), n
		}(),
		Ic = function() {
			function n(s, c, l) {
				se(this, n), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = s, this._successCallback = c, this._failureCallback = l
			}
			var e, t, r, i;
			return ae(n, [{
				key: "start",
				value: (i = C(function*() {
					var s = Ot(this._dailyConfig);
					!(yield this._tryLoadFromIOSCache(s)) && this._loadFromNetwork(s)
				}), function() {
					return i.apply(this, arguments)
				})
			}, {
				key: "cancel",
				value: function() {
					clearTimeout(this._networkTimeout), this.cancelled = !0
				}
			}, {
				key: "_tryLoadFromIOSCache",
				value: (r = C(function*(s) {
					if (!this._iosCache) return !1;
					try {
						var c = yield this._iosCache.get(s);
						return !!this.cancelled || !!c && (c.code ? (Function('"use strict";' + c.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = c.refetchHeaders, !1))
					} catch {
						return !1
					}
				}), function(s) {
					return r.apply(this, arguments)
				})
			}, {
				key: "_loadFromNetwork",
				value: (t = C(function*(s) {
					var c = this;
					this._networkTimeout = setTimeout(function() {
						c._networkTimedOut = !0, c._failureCallback({
							msg: "Timed out (>".concat(Zt, " ms) when loading call object bundle ").concat(s),
							type: "timeout"
						})
					}, Zt);
					try {
						var l = this._refetchHeaders ? {
								headers: this._refetchHeaders
							} : {},
							u = yield fetch(s, l);
						if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new nr;
						var h = yield this._getBundleCodeFromResponse(s, u);
						if (this.cancelled) throw new nr;
						Function('"use strict";' + h)(), this._iosCache && this._iosCache.set(s, h, u.headers), this.succeeded = !0, this._successCallback()
					} catch (p) {
						if (clearTimeout(this._networkTimeout), p instanceof nr || this.cancelled || this._networkTimedOut) return;
						this._failureCallback({
							msg: "Failed to load call object bundle ".concat(s, ": ").concat(p),
							type: p.message
						})
					}
				}), function(s) {
					return t.apply(this, arguments)
				})
			}, {
				key: "_getBundleCodeFromResponse",
				value: (e = C(function*(s, c) {
					if (c.ok) return yield c.text();
					if (this._iosCache && c.status === 304) return (yield this._iosCache.renew(s, c.headers)).code;
					throw new Error("Received ".concat(c.status, " response"))
				}), function(s, c) {
					return e.apply(this, arguments)
				})
			}]), n
		}(),
		Dc = function() {
			function n(e, t, r) {
				se(this, n), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = e, this._successCallback = t, this._failureCallback = r, this._attemptId = At(), this._networkTimeout = null, this._scriptElement = null
			}
			return ae(n, [{
				key: "start",
				value: function() {
					window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = new Set);
					var e = Ot(this._dailyConfig);
					(typeof document > "u" ? "undefined" : j(document)) === "object" ? this._startLoading(e): this._failureCallback({
						msg: "Call object bundle must be loaded in a DOM/web context",
						type: "missing context"
					})
				}
			}, {
				key: "cancel",
				value: function() {
					this._stopLoading(), this.cancelled = !0
				}
			}, {
				key: "_startLoading",
				value: function(e) {
					var t = this;
					this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
						t._stopLoading(), t._failureCallback({
							msg: "Timed out (>".concat(Zt, " ms) when loading call object bundle ").concat(e),
							type: "timeout"
						})
					}, Zt);
					var r = document.getElementsByTagName("head")[0],
						i = document.createElement("script");
					this._scriptElement = i, i.onload = function() {
						t._stopLoading(), t.succeeded = !0, t._successCallback()
					}, i.onerror = function(s) {
						t._stopLoading(), t._failureCallback({
							msg: "Failed to load call object bundle ".concat(s.target.src),
							type: s.message
						})
					}, i.src = e, r.appendChild(i)
				}
			}, {
				key: "_stopLoading",
				value: function() {
					this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null)
				}
			}, {
				key: "_signUpForCallMachineLoadWaitlist",
				value: function() {
					window._dailyCallMachineLoadWaitlist.add(this._attemptId)
				}
			}, {
				key: "_withdrawFromCallMachineLoadWaitlist",
				value: function() {
					window._dailyCallMachineLoadWaitlist.delete(this._attemptId)
				}
			}]), n
		}(),
		en = function(n, e, t) {
			return Rc(n.local, e, t) === !0
		},
		Nc = function(n, e, t) {
			return n.local.streams && n.local.streams[e] && n.local.streams[e].stream && n.local.streams[e].stream["get".concat(t === "video" ? "Video" : "Audio", "Tracks")]()[0]
		},
		rt = function(n, e, t, r) {
			var i = xc(n, e, t, r);
			return i && i.pendingTrack
		},
		Rc = function(n, e, t) {
			if (!n) return !1;
			var r = function(s) {
					switch (s) {
						case "avatar":
							return !0;
						case "staged":
							return s;
						default:
							return !!s
					}
				},
				i = n.public.subscribedTracks;
			return i && i[e] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(t) === -1 && i[e].custom ? [!0, "staged"].includes(i[e].custom) ? r(i[e].custom) : r(i[e].custom[t]) : r(i[e][t]) : !i || r(i.ALL)
		},
		xc = function(n, e, t, r) {
			var i = Object.values(n.streams || {}).filter(function(s) {
				return s.participantId === e && s.type === t && s.pendingTrack && s.pendingTrack.kind === r
			}).sort(function(s, c) {
				return new Date(c.starttime) - new Date(s.starttime)
			});
			return i && i[0]
		},
		jc = function(n, e) {
			var t = n.local.public.customTracks;
			if (t && t[e]) return t[e].track
		};

	function Jo(n, e) {
		for (var t = e.getState(), r = 0, i = ["cam", "screen"]; r < i.length; r++)
			for (var s = i[r], c = 0, l = ["video", "audio"]; c < l.length; c++) {
				var u = l[c],
					h = s === "cam" ? u : "screen".concat(u.charAt(0).toUpperCase() + u.slice(1)),
					p = n.tracks[h];
				if (p) {
					var m = n.local ? Nc(t, s, u) : rt(t, n.session_id, s, u);
					p.state === "playable" && (p.track = m), p.persistentTrack = m
				}
			}
	}

	function Wo(n, e) {
		try {
			var t = e.getState();
			for (var r in n.tracks)
				if (!Fc(r)) {
					var i = n.tracks[r].kind;
					if (i) {
						var s = n.tracks[r];
						if (s) {
							var c = n.local ? jc(t, r) : rt(t, n.session_id, r, i);
							s.state === "playable" && (n.tracks[r].track = c), s.persistentTrack = c
						}
					} else console.error("unknown type for custom track")
				}
		} catch (l) {
			console.error(l)
		}
	}

	function Fc(n) {
		return ["video", "audio", "screenVideo", "screenAudio"].includes(n)
	}

	function zo(n, e, t) {
		var r = t.getState();
		if (n.local) {
			if (n.audio) try {
				n.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0], n.audioTrack || (n.audio = !1)
			} catch {}
			if (n.video) try {
				n.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0], n.videoTrack || (n.video = !1)
			} catch {}
			if (n.screen) try {
				n.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0], n.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0], n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1)
			} catch {}
		} else {
			var i = !0;
			try {
				var s = r.participants[n.session_id];
				s && s.public && s.public.rtcType && s.public.rtcType.impl === "peer-to-peer" && s.private && !["connected", "completed"].includes(s.private.peeringState) && (i = !1)
			} catch (p) {
				console.error(p)
			}
			if (!i) return n.audio = !1, n.audioTrack = !1, n.video = !1, n.videoTrack = !1, n.screen = !1, void(n.screenTrack = !1);
			try {
				if (r.streams, n.audio && en(r, n.session_id, "cam-audio")) {
					var c = rt(r, n.session_id, "cam", "audio");
					c && (e && e.audioTrack && e.audioTrack.id === c.id ? n.audioTrack = c : c.muted || (n.audioTrack = c)), n.audioTrack || (n.audio = !1)
				}
				if (n.video && en(r, n.session_id, "cam-video")) {
					var l = rt(r, n.session_id, "cam", "video");
					l && (e && e.videoTrack && e.videoTrack.id === l.id ? n.videoTrack = l : l.muted || (n.videoTrack = l)), n.videoTrack || (n.video = !1)
				}
				if (n.screen && en(r, n.session_id, "screen-audio")) {
					var u = rt(r, n.session_id, "screen", "audio");
					u && (e && e.screenAudioTrack && e.screenAudioTrack.id === u.id ? n.screenAudioTrack = u : u.muted || (n.screenAudioTrack = u))
				}
				if (n.screen && en(r, n.session_id, "screen-video")) {
					var h = rt(r, n.session_id, "screen", "video");
					h && (e && e.screenVideoTrack && e.screenVideoTrack.id === h.id ? n.screenVideoTrack = h : h.muted || (n.screenVideoTrack = h))
				}
				n.screenVideoTrack || n.screenAudioTrack || (n.screen = !1)
			} catch (p) {
				console.error("unexpected error matching up tracks", p)
			}
		}
	}

	function Bc(n, e) {
		var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
		if (!t) {
			if (Array.isArray(n) || (t = function(u, h) {
					if (u) {
						if (typeof u == "string") return Ho(u, h);
						var p = Object.prototype.toString.call(u).slice(8, -1);
						if (p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set") return Array.from(u);
						if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return Ho(u, h)
					}
				}(n)) || e && n && typeof n.length == "number") {
				t && (n = t);
				var r = 0,
					i = function() {};
				return {
					s: i,
					n: function() {
						return r >= n.length ? {
							done: !0
						} : {
							done: !1,
							value: n[r++]
						}
					},
					e: function(u) {
						throw u
					},
					f: i
				}
			}
			throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}
		var s, c = !0,
			l = !1;
		return {
			s: function() {
				t = t.call(n)
			},
			n: function() {
				var u = t.next();
				return c = u.done, u
			},
			e: function(u) {
				l = !0, s = u
			},
			f: function() {
				try {
					c || t.return == null || t.return()
				} finally {
					if (l) throw s
				}
			}
		}
	}

	function Ho(n, e) {
		(e == null || e > n.length) && (e = n.length);
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
		return r
	}
	var he = new Map,
		it = null;

	function Uc(n, e) {
		var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
		if (!t) {
			if (Array.isArray(n) || (t = function(u, h) {
					if (u) {
						if (typeof u == "string") return Ko(u, h);
						var p = Object.prototype.toString.call(u).slice(8, -1);
						if (p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set") return Array.from(u);
						if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return Ko(u, h)
					}
				}(n)) || e && n && typeof n.length == "number") {
				t && (n = t);
				var r = 0,
					i = function() {};
				return {
					s: i,
					n: function() {
						return r >= n.length ? {
							done: !0
						} : {
							done: !1,
							value: n[r++]
						}
					},
					e: function(u) {
						throw u
					},
					f: i
				}
			}
			throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}
		var s, c = !0,
			l = !1;
		return {
			s: function() {
				t = t.call(n)
			},
			n: function() {
				var u = t.next();
				return c = u.done, u
			},
			e: function(u) {
				l = !0, s = u
			},
			f: function() {
				try {
					c || t.return == null || t.return()
				} finally {
					if (l) throw s
				}
			}
		}
	}

	function Ko(n, e) {
		(e == null || e > n.length) && (e = n.length);
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
		return r
	}
	var pe = new Map,
		wt = null,
		Vc = 3e3;

	function Yc(n) {
		Qo() ? function(e) {
			he.has(e) || (he.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
				he.has(e) && (he.get(e).lastDevicesString = JSON.stringify(t), it || (it = function() {
					var r = C(function*() {
						var i, s = yield navigator.mediaDevices.enumerateDevices(), c = Bc(he.keys());
						try {
							for (c.s(); !(i = c.n()).done;) {
								var l = i.value,
									u = JSON.stringify(s);
								u !== he.get(l).lastDevicesString && (he.get(l).lastDevicesString = u, l(s))
							}
						} catch (h) {
							c.e(h)
						} finally {
							c.f()
						}
					});
					return function() {
						return r.apply(this, arguments)
					}
				}(), navigator.mediaDevices.addEventListener("devicechange", it)))
			}).catch(function() {}))
		}(n) : function(e) {
			pe.has(e) || (pe.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(t) {
				pe.has(e) && (pe.get(e).lastDevicesString = JSON.stringify(t), wt || (wt = setInterval(C(function*() {
					var r, i = yield navigator.mediaDevices.enumerateDevices(), s = Uc(pe.keys());
					try {
						for (s.s(); !(r = s.n()).done;) {
							var c = r.value,
								l = JSON.stringify(i);
							l !== pe.get(c).lastDevicesString && (pe.get(c).lastDevicesString = l, c(i))
						}
					} catch (u) {
						s.e(u)
					} finally {
						s.f()
					}
				}), Vc)))
			}))
		}(n)
	}

	function $c(n) {
		Qo() ? function(e) {
			he.has(e) && (he.delete(e), he.size === 0 && it && (navigator.mediaDevices.removeEventListener("devicechange", it), it = null))
		}(n) : function(e) {
			pe.has(e) && (pe.delete(e), pe.size === 0 && wt && (clearInterval(wt), wt = null))
		}(n)
	}

	function Qo() {
		return N() || navigator.mediaDevices.ondevicechange !== void 0
	}
	var Gc = new Set;

	function qc(n, e) {
		var t = e.isLocalScreenVideo;
		return n && n.readyState === "live" && ! function(r, i) {
			return (!i.isLocalScreenVideo || Pe() !== "Chrome") && r.muted && !Gc.has(r.id)
		}(n, {
			isLocalScreenVideo: t
		})
	}
	var fe, Jc = ["videoTrack"],
		Wc = ["result"],
		zc = ["preserveIframe"];

	function Xo(n, e) {
		var t = Object.keys(n);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(n);
			e && (r = r.filter(function(i) {
				return Object.getOwnPropertyDescriptor(n, i).enumerable
			})), t.push.apply(t, r)
		}
		return t
	}

	function A(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e] != null ? arguments[e] : {};
			e % 2 ? Xo(Object(t), !0).forEach(function(r) {
				ke(n, r, t[r])
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Xo(Object(t)).forEach(function(r) {
				Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r))
			})
		}
		return n
	}

	function Hc(n) {
		var e = function() {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
			if (typeof Proxy == "function") return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
			} catch {
				return !1
			}
		}();
		return function() {
			var t, r = ce(n);
			if (e) {
				var i = ce(this).constructor;
				t = Reflect.construct(r, arguments, i)
			} else t = r.apply(this, arguments);
			return Ct(this, t)
		}
	}

	function Zo(n, e) {
		var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
		if (!t) {
			if (Array.isArray(n) || (t = function(u, h) {
					if (u) {
						if (typeof u == "string") return es(u, h);
						var p = Object.prototype.toString.call(u).slice(8, -1);
						if (p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set") return Array.from(u);
						if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return es(u, h)
					}
				}(n)) || e && n && typeof n.length == "number") {
				t && (n = t);
				var r = 0,
					i = function() {};
				return {
					s: i,
					n: function() {
						return r >= n.length ? {
							done: !0
						} : {
							done: !1,
							value: n[r++]
						}
					},
					e: function(u) {
						throw u
					},
					f: i
				}
			}
			throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
		}
		var s, c = !0,
			l = !1;
		return {
			s: function() {
				t = t.call(n)
			},
			n: function() {
				var u = t.next();
				return c = u.done, u
			},
			e: function(u) {
				l = !0, s = u
			},
			f: function() {
				try {
					c || t.return == null || t.return()
				} finally {
					if (l) throw s
				}
			}
		}
	}

	function es(n, e) {
		(e == null || e > n.length) && (e = n.length);
		for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
		return r
	}
	var ts = "video",
		Kc = "voice",
		ns = N() ? {
			data: {}
		} : {
			data: {},
			topology: "none"
		},
		rs = {
			present: 0,
			hidden: 0
		},
		is = {
			maxBitrate: {
				min: 1e5,
				max: 25e5
			},
			maxFramerate: {
				min: 1,
				max: 30
			},
			scaleResolutionDownBy: {
				min: 1,
				max: 8
			}
		},
		rr = Object.keys(is),
		os = ["state", "volume", "simulcastEncodings"],
		ss = {
			androidInCallNotification: {
				title: "string",
				subtitle: "string",
				iconName: "string",
				disableForCustomOverride: "boolean"
			},
			disableAutoDeviceManagement: {
				audio: "boolean",
				video: "boolean"
			}
		},
		tn = {
			id: {
				iconPath: "string",
				iconPathDarkMode: "string",
				label: "string",
				tooltip: "string"
			}
		},
		ir = {
			id: {
				allow: "string",
				controlledBy: "'*' | 'owners' | string[]",
				csp: "string",
				iconURL: "string",
				label: "string",
				loading: "'eager' | 'lazy'",
				location: "'main' | 'sidebar'",
				name: "string",
				referrerPolicy: "string",
				sandbox: "string",
				src: "string",
				srcdoc: "string",
				shared: "string[] | 'owners' | boolean"
			}
		},
		Ge = {
			customIntegrations: {
				validate: ms,
				help: ps()
			},
			customTrayButtons: {
				validate: fs,
				help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(tn))
			},
			url: {
				validate: function(n) {
					return typeof n == "string"
				},
				help: "url should be a string"
			},
			baseUrl: {
				validate: function(n) {
					return typeof n == "string"
				},
				help: "baseUrl should be a string"
			},
			token: {
				validate: function(n) {
					return typeof n == "string"
				},
				help: "token should be a string",
				queryString: "t"
			},
			dailyConfig: {
				validate: function(n, e) {
					try {
						return e.validateDailyConfig(n), !0
					} catch (t) {
						console.error("Failed to validate dailyConfig", t)
					}
					return !1
				},
				help: "Unsupported dailyConfig. Check error logs for detailed info."
			},
			reactNativeConfig: {
				validate: function(n) {
					return gs(n, ss)
				},
				help: "reactNativeConfig should look like ".concat(JSON.stringify(ss), ", all fields optional")
			},
			lang: {
				validate: function(n) {
					return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(n)
				},
				help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user"
			},
			userName: !0,
			userData: {
				validate: function(n) {
					try {
						return cs(n), !0
					} catch (e) {
						return console.error(e), !1
					}
				},
				help: "invalid userData type provided"
			},
			startVideoOff: !0,
			startAudioOff: !0,
			activeSpeakerMode: !0,
			showLeaveButton: !0,
			showLocalVideo: !0,
			showParticipantsBar: !0,
			showFullscreenButton: !0,
			showUserNameChangeUI: !0,
			iframeStyle: !0,
			customLayout: !0,
			cssFile: !0,
			cssText: !0,
			bodyClass: !0,
			videoSource: {
				validate: function(n, e) {
					return n instanceof MediaStreamTrack && (e._sharedTracks.videoDeviceId = n), e._preloadCache.videoDeviceId = n, !0
				}
			},
			audioSource: {
				validate: function(n, e) {
					return n instanceof MediaStreamTrack && (e._sharedTracks.audioDeviceId = n), e._preloadCache.audioDeviceId = n, !0
				}
			},
			subscribeToTracksAutomatically: {
				validate: function(n, e) {
					return e._preloadCache.subscribeToTracksAutomatically = n, !0
				}
			},
			theme: {
				validate: function(n) {
					var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"],
						t = function(r) {
							for (var i = 0, s = Object.keys(r); i < s.length; i++) {
								var c = s[i];
								if (!e.includes(c)) return console.error('unsupported color "'.concat(c, '". Valid colors: ').concat(e.join(", "))), !1;
								if (!r[c].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(c, ' theme color should be provided in valid hex color format. Received: "').concat(r[c], '"')), !1
							}
							return !0
						};
					return j(n) === "object" && ("light" in n && "dark" in n || "colors" in n) ? "light" in n && "dark" in n ? "colors" in n.light ? "colors" in n.dark ? t(n.light.colors) && t(n.dark.colors) : (console.error('Dark theme is missing "colors" property.', n), !1) : (console.error('Light theme is missing "colors" property.', n), !1) : t(n.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', n), !1)
				},
				help: "unsupported theme configuration. Check error logs for detailed info."
			},
			layoutConfig: {
				validate: function(n) {
					if ("grid" in n) {
						var e = n.grid;
						if ("maxTilesPerPage" in e) {
							if (!Number.isInteger(e.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage, ".")), !1;
							if (e.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1
						}
						if ("minTilesPerPage" in e) {
							if (!Number.isInteger(e.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage, ".")), !1;
							if (e.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
							if ("maxTilesPerPage" in e && e.minTilesPerPage > e.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1
						}
					}
					return !0
				},
				help: "unsupported layoutConfig. Check error logs for detailed info."
			},
			receiveSettings: {
				validate: function(n) {
					return ls(n, {
						allowAllParticipantsKey: !1
					})
				},
				help: hs({
					allowAllParticipantsKey: !1
				})
			},
			sendSettings: {
				validate: function(n, e) {
					return !! function(t, r) {
						try {
							return r.validateUpdateSendSettings(t), !0
						} catch (i) {
							return console.error("Failed to validate send settings", i), !1
						}
					}(n, e) && (e._preloadCache.sendSettings = n, !0)
				},
				help: "Invalid sendSettings provided. Check error logs for detailed info."
			},
			inputSettings: {
				validate: function(n, e) {
					var t;
					return !!us(n) && (e._preloadCache.inputSettings || (e._preloadCache.inputSettings = {}), ds(n, (t = e.properties) === null || t === void 0 ? void 0 : t.dailyConfig), n.audio && (e._preloadCache.inputSettings.audio = n.audio), n.video && (e._preloadCache.inputSettings.video = n.video), !0)
				},
				help: sr()
			},
			layout: {
				validate: function(n) {
					return n === "custom-v1" || n === "browser" || n === "none"
				},
				help: 'layout may only be set to "custom-v1"',
				queryString: "layout"
			},
			emb: {
				queryString: "emb"
			},
			embHref: {
				queryString: "embHref"
			},
			dailyJsVersion: {
				queryString: "dailyJsVersion"
			},
			proxy: {
				queryString: "proxy"
			},
			strictMode: !0
		},
		nn = {
			styles: {
				validate: function(n) {
					for (var e in n)
						if (e !== "cam" && e !== "screen") return !1;
					if (n.cam) {
						for (var t in n.cam)
							if (t !== "div" && t !== "video") return !1
					}
					if (n.screen) {
						for (var r in n.screen)
							if (r !== "div" && r !== "video") return !1
					}
					return !0
				},
				help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"
			},
			setSubscribedTracks: {
				validate: function(n, e) {
					if (e._preloadCache.subscribeToTracksAutomatically) return !1;
					var t = [!0, !1, "staged"];
					if (t.includes(n) || !N() && n === "avatar") return !0;
					var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
					return function i(s) {
						var c = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
						for (var l in s)
							if (l === "custom") {
								if (!t.includes(s[l]) && !i(s[l], !0)) return !1
							} else {
								var u = !c && !r.includes(l),
									h = !t.includes(s[l]);
								if (u || h) return !1
							} return !0
					}(n)
				},
				help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(N() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")
			},
			setAudio: !0,
			setVideo: !0,
			setScreenShare: {
				validate: function(n) {
					return n === !1
				},
				help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares"
			},
			eject: !0,
			updatePermissions: {
				validate: function(n) {
					for (var e = 0, t = Object.entries(n); e < t.length; e++) {
						var r = Ne(t[e], 2),
							i = r[0],
							s = r[1];
						switch (i) {
							case "hasPresence":
								if (typeof s != "boolean") return !1;
								break;
							case "canSend":
								if (s instanceof Set || s instanceof Array) {
									var c, l = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"],
										u = Zo(s);
									try {
										for (u.s(); !(c = u.n()).done;) {
											var h = c.value;
											if (!l.includes(h)) return !1
										}
									} catch (b) {
										u.e(b)
									} finally {
										u.f()
									}
								} else if (typeof s != "boolean") return !1;
								s instanceof Array && (n.canSend = new Set(s));
								break;
							case "canAdmin":
								if (s instanceof Set || s instanceof Array) {
									var p, m = ["participants", "streaming", "transcription"],
										y = Zo(s);
									try {
										for (y.s(); !(p = y.n()).done;) {
											var w = p.value;
											if (!m.includes(w)) return !1
										}
									} catch (b) {
										y.e(b)
									} finally {
										y.f()
									}
								} else if (typeof s != "boolean") return !1;
								s instanceof Array && (n.canAdmin = new Set(s));
								break;
							default:
								return !1
						}
					}
					return !0
				},
				help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)."
			}
		};
	Promise.any || (Promise.any = function() {
		var n = C(function*(e) {
			return new Promise(function(t, r) {
				var i = [];
				e.forEach(function(s) {
					return Promise.resolve(s).then(function(c) {
						t(c)
					}).catch(function(c) {
						i.push(c), i.length === e.length && r(i)
					})
				})
			})
		});
		return function(e) {
			return n.apply(this, arguments)
		}
	}());
	var Qc = function(n) {
		Tt(re, ye);
		var e, t, r, i, s, c, l, u, h, p, m, y, w, b, S, T, L, G, De, at, kt, Is, Ds, Ns, Rs, xs, js, Fs, Bs, Us, Vs, Ys, $s, Gs, qs, Js, El = Hc(re);

		function re(o) {
			var a, d, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			if (se(this, re), ke(_e(a = El.call(this)), "startListeningForDeviceChanges", function() {
					Yc(a.handleDeviceChange)
				}), ke(_e(a), "stopListeningForDeviceChanges", function() {
					$c(a.handleDeviceChange)
				}), ke(_e(a), "handleDeviceChange", function(v) {
					v = v.map(function(E) {
						return JSON.parse(JSON.stringify(E))
					}), a.emit(Gi, {
						action: Gi,
						availableDevices: v
					})
				}), ke(_e(a), "handleNativeAppStateChange", function() {
					var v = C(function*(E) {
						if (E === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void(yield a.destroy());
						var k = E === "active";
						a.disableReactNativeAutoDeviceManagement("video") || (k ? a.camUnmutedBeforeLosingNativeActiveState && a.setLocalVideo(!0) : (a.camUnmutedBeforeLosingNativeActiveState = a.localVideo(), a.camUnmutedBeforeLosingNativeActiveState && a.setLocalVideo(!1)))
					});
					return function(E) {
						return v.apply(this, arguments)
					}
				}()), ke(_e(a), "handleNativeAudioFocusChange", function(v) {
					a.disableReactNativeAutoDeviceManagement("audio") || (a._hasNativeAudioFocus = v, a.toggleParticipantAudioBasedOnNativeAudioFocus(), a._hasNativeAudioFocus ? a.micUnmutedBeforeLosingNativeAudioFocus && a.setLocalAudio(!0) : (a.micUnmutedBeforeLosingNativeAudioFocus = a.localAudio(), a.setLocalAudio(!1)))
				}), ke(_e(a), "handleNativeSystemScreenCaptureStop", function() {
					a.stopScreenShare()
				}), a.strictMode = f.strictMode === void 0 || f.strictMode, fe) {
				if (a._logDuplicateInstanceAttempt(), a.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed")
			} else d = _e(a), fe = d;
			if (window._daily || (window._daily = {
					pendings: [],
					instances: {}
				}), a._callFrameId = At(), window._daily.instances[a._callFrameId] = {}, a._sharedTracks = {}, window._daily.instances[a._callFrameId].tracks = a._sharedTracks, f.dailyJsVersion = re.version(), a._iframe = o, a._callObjectMode = f.layout === "none" && !a._iframe, a._preloadCache = {
					subscribeToTracksAutomatically: !0,
					audioDeviceId: null,
					videoDeviceId: null,
					outputDeviceId: null,
					inputSettings: null,
					sendSettings: null,
					videoTrackForNetworkConnectivityTest: null,
					videoTrackForConnectionQualityTest: null
				}, f.showLocalVideo !== void 0 ? a._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : a._showLocalVideo = !!f.showLocalVideo : a._showLocalVideo = !0, f.showParticipantsBar !== void 0 ? a._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : a._showParticipantsBar = !!f.showParticipantsBar : a._showParticipantsBar = !0, f.customIntegrations !== void 0 ? a._callObjectMode ? console.error("customIntegrations is not available in call object mode") : a._customIntegrations = f.customIntegrations : a._customIntegrations = {}, f.customTrayButtons !== void 0 ? a._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : a._customTrayButtons = f.customTrayButtons : a._customTrayButtons = {}, f.activeSpeakerMode !== void 0 ? a._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : a._activeSpeakerMode = !!f.activeSpeakerMode : a._activeSpeakerMode = !1, f.receiveSettings ? a._callObjectMode ? a._receiveSettings = f.receiveSettings : console.error("receiveSettings is only available in call object mode") : a._receiveSettings = {}, a.validateProperties(f), a.properties = A({}, f), a._preloadCache.inputSettings || (a._preloadCache.inputSettings = {}), f.inputSettings && f.inputSettings.audio && (a._preloadCache.inputSettings.audio = f.inputSettings.audio), f.inputSettings && f.inputSettings.video && (a._preloadCache.inputSettings.video = f.inputSettings.video), a._callObjectLoader = a._callObjectMode ? new Lc(a._callFrameId) : null, a._callState = xn, a._isPreparingToJoin = !1, a._accessState = {
					access: Jt
				}, a._meetingSessionSummary = {}, a._finalSummaryOfPrevSession = {}, a._meetingSessionState = ar(ns, a._callObjectMode), a._nativeInCallAudioMode = ts, a._participants = {}, a._isScreenSharing = !1, a._participantCounts = rs, a._rmpPlayerState = {}, a._waitingParticipants = {}, a._network = {
					threshold: "good",
					quality: 100
				}, a._activeSpeaker = {}, a._localAudioLevel = 0, a._remoteParticipantsAudioLevel = {}, a._messageChannel = N() ? new Mc : new Tc, a._iframe && (a._iframe.requestFullscreen ? a._iframe.addEventListener("fullscreenchange", function() {
					document.fullscreenElement === a._iframe ? (a.emit(Ye, {
						action: Ye
					}), a.sendMessageToCallMachine({
						action: Ye
					})) : (a.emit($e, {
						action: $e
					}), a.sendMessageToCallMachine({
						action: $e
					}))
				}) : a._iframe.webkitRequestFullscreen && a._iframe.addEventListener("webkitfullscreenchange", function() {
					document.webkitFullscreenElement === a._iframe ? (a.emit(Ye, {
						action: Ye
					}), a.sendMessageToCallMachine({
						action: Ye
					})) : (a.emit($e, {
						action: $e
					}), a.sendMessageToCallMachine({
						action: $e
					}))
				})), N()) {
				var g = a.nativeUtils();
				g.addAudioFocusChangeListener && g.removeAudioFocusChangeListener && g.addAppStateChangeListener && g.removeAppStateChangeListener && g.addSystemScreenCaptureStopListener && g.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), a._hasNativeAudioFocus = !0, g.addAudioFocusChangeListener(a.handleNativeAudioFocusChange), g.addAppStateChangeListener(a.handleNativeAppStateChange), g.addSystemScreenCaptureStopListener(a.handleNativeSystemScreenCaptureStop)
			}
			return a._callObjectMode && a.startListeningForDeviceChanges(), a._messageChannel.addListenerForMessagesFromCallMachine(a.handleMessageFromCallMachine, a._callFrameId, _e(a)), a
		}
		return ae(re, [{
			key: "destroy",
			value: (Js = C(function*() {
				var o, a;
				try {
					yield this.leave()
				} catch {}
				var d = this._iframe;
				if (d) {
					var f = d.parentElement;
					f && f.removeChild(d)
				}
				if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), N()) {
					var g = this.nativeUtils();
					g.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), g.removeAppStateChangeListener(this.handleNativeAppStateChange), g.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop)
				}
				this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0;
				try {
					this.emit("call-instance-destroyed", {
						action: "call-instance-destroyed"
					})
				} catch {
					console.log("could not emit call-instance-destroyed")
				}
				fe = void 0, !((o = window) === null || o === void 0 || (a = o._daily) === null || a === void 0) && a.instances && delete window._daily.instances[this._callFrameId], this.strictMode && (this._callFrameId = void 0)
			}), function() {
				return Js.apply(this, arguments)
			})
		}, {
			key: "isDestroyed",
			value: function() {
				return !!this._destroyed
			}
		}, {
			key: "loadCss",
			value: function(o) {
				var a = o.bodyClass,
					d = o.cssFile,
					f = o.cssText;
				return I(), this.sendMessageToCallMachine({
					action: "load-css",
					cssFile: this.absoluteUrl(d),
					bodyClass: a,
					cssText: f
				}), this
			}
		}, {
			key: "iframe",
			value: function() {
				return I(), this._iframe
			}
		}, {
			key: "meetingState",
			value: function() {
				return this._callState
			}
		}, {
			key: "accessState",
			value: function() {
				return me(this._callObjectMode, "accessState()"), this._accessState
			}
		}, {
			key: "participants",
			value: function() {
				return this._participants
			}
		}, {
			key: "participantCounts",
			value: function() {
				return this._participantCounts
			}
		}, {
			key: "waitingParticipants",
			value: function() {
				return me(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants
			}
		}, {
			key: "validateParticipantProperties",
			value: function(o, a) {
				for (var d in a) {
					if (!nn[d]) throw new Error("unrecognized updateParticipant property ".concat(d));
					if (nn[d].validate && !nn[d].validate(a[d], this, this._participants[o])) throw new Error(nn[d].help)
				}
			}
		}, {
			key: "updateParticipant",
			value: function(o, a) {
				return this._participants.local && this._participants.local.session_id === o && (o = "local"), o && a && (this.validateParticipantProperties(o, a), this.sendMessageToCallMachine({
					action: "update-participant",
					id: o,
					properties: a
				})), this
			}
		}, {
			key: "updateParticipants",
			value: function(o) {
				var a = this._participants.local && this._participants.local.session_id;
				for (var d in o) d === a && (d = "local"), d && o[d] && this.validateParticipantProperties(d, o[d]);
				return this.sendMessageToCallMachine({
					action: "update-participants",
					participants: o
				}), this
			}
		}, {
			key: "updateWaitingParticipant",
			value: (qs = C(function*() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
					d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				if (me(this._callObjectMode, "updateWaitingParticipant()"), Y(this._callState, "updateWaitingParticipant()"), typeof a != "string" || j(d) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
				return new Promise(function(f, g) {
					o.sendMessageToCallMachine({
						action: "daily-method-update-waiting-participant",
						id: a,
						updates: d
					}, function(v) {
						v.error && g(v.error), v.id || g(new Error("unknown error in updateWaitingParticipant()")), f({
							id: v.id
						})
					})
				})
			}), function() {
				return qs.apply(this, arguments)
			})
		}, {
			key: "updateWaitingParticipants",
			value: (Gs = C(function*() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				if (me(this._callObjectMode, "updateWaitingParticipants()"), Y(this._callState, "updateWaitingParticipants()"), j(a) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
				return new Promise(function(d, f) {
					o.sendMessageToCallMachine({
						action: "daily-method-update-waiting-participants",
						updatesById: a
					}, function(g) {
						g.error && f(g.error), g.ids || f(new Error("unknown error in updateWaitingParticipants()")), d({
							ids: g.ids
						})
					})
				})
			}), function() {
				return Gs.apply(this, arguments)
			})
		}, {
			key: "requestAccess",
			value: ($s = C(function*() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
					d = a.access,
					f = d === void 0 ? {
						level: Ri
					} : d,
					g = a.name,
					v = g === void 0 ? "" : g;
				return me(this._callObjectMode, "requestAccess()"), Y(this._callState, "requestAccess()"), new Promise(function(E, k) {
					o.sendMessageToCallMachine({
						action: "daily-method-request-access",
						access: f,
						name: v
					}, function(P) {
						P.error && k(P.error), P.access || k(new Error("unknown error in requestAccess()")), E({
							access: P.access,
							granted: P.granted
						})
					})
				})
			}), function() {
				return $s.apply(this, arguments)
			})
		}, {
			key: "localAudio",
			value: function() {
				return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null
			}
		}, {
			key: "localVideo",
			value: function() {
				return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null
			}
		}, {
			key: "setLocalAudio",
			value: function(o) {
				var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				return "forceDiscardTrack" in a && (N() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), a = {}) : o && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), a = {})), this.sendMessageToCallMachine({
					action: "local-audio",
					state: o,
					options: a
				}), this
			}
		}, {
			key: "localScreenAudio",
			value: function() {
				return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null
			}
		}, {
			key: "localScreenVideo",
			value: function() {
				return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null
			}
		}, {
			key: "updateScreenShare",
			value: function(o) {
				if (this._isScreenSharing) return this.sendMessageToCallMachine({
					action: "local-screen-update",
					options: o
				}), this;
				console.warn("There is no screen share in progress. Try calling startScreenShare first.")
			}
		}, {
			key: "setLocalVideo",
			value: function(o) {
				return this.sendMessageToCallMachine({
					action: "local-video",
					state: o
				}), this
			}
		}, {
			key: "getReceiveSettings",
			value: (Ys = C(function*(o) {
				var a = this,
					d = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues,
					f = d !== void 0 && d;
				if (me(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
				switch (j(o)) {
					case "string":
						return new Promise(function(g) {
							a.sendMessageToCallMachine({
								action: "get-single-participant-receive-settings",
								id: o,
								showInheritedValues: f
							}, function(v) {
								g(v.receiveSettings)
							})
						});
					case "undefined":
						return this._receiveSettings;
					default:
						throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments')
				}
			}), function(o) {
				return Ys.apply(this, arguments)
			})
		}, {
			key: "updateReceiveSettings",
			value: (Vs = C(function*(o) {
				var a = this;
				if (me(this._callObjectMode, "updateReceiveSettings()"), !ls(o, {
						allowAllParticipantsKey: !0
					})) throw new Error(hs({
					allowAllParticipantsKey: !0
				}));
				return Y(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(d) {
					a.sendMessageToCallMachine({
						action: "update-receive-settings",
						receiveSettings: o
					}, function(f) {
						d({
							receiveSettings: f.receiveSettings
						})
					})
				})
			}), function(o) {
				return Vs.apply(this, arguments)
			})
		}, {
			key: "_prepInputSettingsToPresentToUser",
			value: function(o) {
				var a, d, f, g, v, E, k, P;
				if (o) {
					var J = {},
						H = ((a = o.audio) === null || a === void 0 || (d = a.processor) === null || d === void 0 ? void 0 : d.type) === "none" && ((f = o.audio) === null || f === void 0 || (g = f.processor) === null || g === void 0 ? void 0 : g._isDefaultWhenNone);
					if (o.audio && !H) {
						var K = A({}, o.audio.processor);
						delete K._isDefaultWhenNone, J.audio = A(A({}, o.audio), {}, {
							processor: K
						})
					}
					var ie = ((v = o.video) === null || v === void 0 || (E = v.processor) === null || E === void 0 ? void 0 : E.type) === "none" && ((k = o.video) === null || k === void 0 || (P = k.processor) === null || P === void 0 ? void 0 : P._isDefaultWhenNone);
					if (o.video && !ie) {
						var q = A({}, o.video.processor);
						delete q._isDefaultWhenNone, J.video = A(A({}, o.video), {}, {
							processor: q
						})
					}
					return J
				}
			}
		}, {
			key: "getInputSettings",
			value: function() {
				var o = this;
				return I(), new Promise(function(a) {
					a(o._getInputSettings())
				})
			}
		}, {
			key: "_getInputSettings",
			value: function() {
				var o, a, d, f, g, v, E, k, P = {
					processor: {
						type: "none",
						_isDefaultWhenNone: !0
					}
				};
				this._inputSettings ? (o = ((d = this._inputSettings) === null || d === void 0 ? void 0 : d.video) || P, a = ((f = this._inputSettings) === null || f === void 0 ? void 0 : f.audio) || P) : (o = ((g = this._preloadCache) === null || g === void 0 || (v = g.inputSettings) === null || v === void 0 ? void 0 : v.video) || P, a = ((E = this._preloadCache) === null || E === void 0 || (k = E.inputSettings) === null || k === void 0 ? void 0 : k.audio) || P);
				var J = {
					audio: a,
					video: o
				};
				return this._prepInputSettingsToPresentToUser(J)
			}
		}, {
			key: "updateInputSettings",
			value: (Us = C(function*(o) {
				var a = this;
				return I(), us(o) ? (o && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), ds(o, this.properties.dailyConfig), o.audio && (this._preloadCache.inputSettings.audio = o.audio), o.video && (this._preloadCache.inputSettings.video = o.video)), o.video || o.audio ? this._callObjectMode && !this._callMachineInitialized ? this._getInputSettings() : new Promise(function(d, f) {
					a.sendMessageToCallMachine({
						action: "update-input-settings",
						inputSettings: o
					}, function(g) {
						g.error ? f(g.error) : d({
							inputSettings: a._prepInputSettingsToPresentToUser(g.inputSettings)
						})
					})
				}) : this._getInputSettings()) : (console.error(sr()), Promise.reject(sr()))
			}), function(o) {
				return Us.apply(this, arguments)
			})
		}, {
			key: "setBandwidth",
			value: function(o) {
				var a = o.kbs,
					d = o.trackConstraints;
				if (I(), this._callMachineInitialized) return this.sendMessageToCallMachine({
					action: "set-bandwidth",
					kbs: a,
					trackConstraints: d
				}), this
			}
		}, {
			key: "getDailyLang",
			value: function() {
				var o = this;
				if (I(), this._callMachineInitialized) return new Promise(function(a) {
					o.sendMessageToCallMachine({
						action: "get-daily-lang"
					}, function(d) {
						delete d.action, delete d.callbackStamp, a(d)
					})
				})
			}
		}, {
			key: "setDailyLang",
			value: function(o) {
				return I(), this.sendMessageToCallMachine({
					action: "set-daily-lang",
					lang: o
				}), this
			}
		}, {
			key: "setProxyUrl",
			value: function(o) {
				return this.sendMessageToCallMachine({
					action: "set-proxy-url",
					proxyUrl: o
				}), this
			}
		}, {
			key: "setIceConfig",
			value: function(o) {
				return this.sendMessageToCallMachine({
					action: "set-ice-config",
					iceConfig: o
				}), this
			}
		}, {
			key: "meetingSessionSummary",
			value: function() {
				return [Se, we].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary
			}
		}, {
			key: "getMeetingSession",
			value: (Bs = C(function*() {
				var o = this;
				return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), Y(this._callState, "getMeetingSession()"), new Promise(function(a) {
					o.sendMessageToCallMachine({
						action: "get-meeting-session"
					}, function(d) {
						delete d.action, delete d.callbackStamp, delete d.callFrameId, a(d)
					})
				})
			}), function() {
				return Bs.apply(this, arguments)
			})
		}, {
			key: "meetingSessionState",
			value: function() {
				return Y(this._callState, "meetingSessionState"), this._meetingSessionState
			}
		}, {
			key: "setMeetingSessionData",
			value: function(o) {
				var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
				me(this._callObjectMode, "setMeetingSessionData()"), Y(this._callState, "setMeetingSessionData");
				try {
					(function(d, f) {
						new Ac({
							data: d,
							mergeStrategy: f
						})
					})(o, a)
				} catch (d) {
					throw console.error(d), d
				}
				try {
					this.sendMessageToCallMachine({
						action: "set-session-data",
						data: o,
						mergeStrategy: a
					})
				} catch (d) {
					throw new Error("Error setting meeting session data: ".concat(d))
				}
			}
		}, {
			key: "setUserName",
			value: function(o, a) {
				var d = this;
				return this.properties.userName = o, new Promise(function(f) {
					d.sendMessageToCallMachine({
						action: "set-user-name",
						name: o ?? "",
						thisMeetingOnly: N() || !!a && !!a.thisMeetingOnly
					}, function(g) {
						delete g.action, delete g.callbackStamp, f(g)
					})
				})
			}
		}, {
			key: "setUserData",
			value: (Fs = C(function*(o) {
				var a = this;
				try {
					cs(o)
				} catch (d) {
					throw console.error(d), d
				}
				if (this.properties.userData = o, this._callMachineInitialized) return new Promise(function(d) {
					try {
						a.sendMessageToCallMachine({
							action: "set-user-data",
							userData: o
						}, function(f) {
							delete f.action, delete f.callbackStamp, delete f.callFrameId, d(f)
						})
					} catch (f) {
						throw new Error("Error setting user data: ".concat(f))
					}
				})
			}), function(o) {
				return Fs.apply(this, arguments)
			})
		}, {
			key: "validateAudioLevelInterval",
			value: function(o) {
				if (o && (o < 100 || typeof o != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.")
			}
		}, {
			key: "startLocalAudioLevelObserver",
			value: function(o) {
				var a = this;
				if (typeof AudioWorkletNode > "u" && !N()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
				if (this.validateAudioLevelInterval(o), this._callMachineInitialized) return new Promise(function(d, f) {
					a.sendMessageToCallMachine({
						action: "start-local-audio-level-observer",
						interval: o
					}, function(g) {
						g.error ? f({
							error: g.error
						}) : d()
					})
				});
				this._preloadCache.localAudioLevelObserver = {
					enabled: !0,
					interval: o
				}
			}
		}, {
			key: "stopLocalAudioLevelObserver",
			value: function() {
				this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this.sendMessageToCallMachine({
					action: "stop-local-audio-level-observer"
				})
			}
		}, {
			key: "startRemoteParticipantsAudioLevelObserver",
			value: function(o) {
				var a = this;
				if (this.validateAudioLevelInterval(o), this._callMachineInitialized) return new Promise(function(d, f) {
					a.sendMessageToCallMachine({
						action: "start-remote-participants-audio-level-observer",
						interval: o
					}, function(g) {
						g.error ? f({
							error: g.error
						}) : d()
					})
				});
				this._preloadCache.remoteParticipantsAudioLevelObserver = {
					enabled: !0,
					interval: o
				}
			}
		}, {
			key: "stopRemoteParticipantsAudioLevelObserver",
			value: function() {
				this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this.sendMessageToCallMachine({
					action: "stop-remote-participants-audio-level-observer"
				})
			}
		}, {
			key: "startCamera",
			value: (js = C(function*() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				if (me(this._callObjectMode, "startCamera()"), as(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), qe(this._testCallInProgress, "startCamera()"), this.needsLoad()) try {
					yield this.load(a)
				} catch (d) {
					return Promise.reject(d)
				} else {
					if (this._didPreAuth) {
						if (a.url && a.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
						if (a.token && a.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject()
					}
					this.validateProperties(a), this.properties = A(A({}, this.properties), a)
				}
				return new Promise(function(d) {
					o.sendMessageToCallMachine({
						action: "start-camera",
						properties: ot(o.properties, o._callFrameId),
						preloadCache: ot(o._preloadCache, o._callFrameId)
					}, function(f) {
						delete f.action, delete f.callbackStamp, d(f)
					})
				})
			}), function() {
				return js.apply(this, arguments)
			})
		}, {
			key: "validateCustomTrack",
			value: function(o, a, d) {
				if (d && d.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
				if (a && a !== "music" && a !== "speech" && !(a instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
				if (d && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(d)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
				if (!(o instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack")
			}
		}, {
			key: "startCustomTrack",
			value: function() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
						track,
						mode,
						trackName
					};
				return I(), Y(this._callState, "startCustomTrack()"), this.validateCustomTrack(a.track, a.mode, a.trackName), new Promise(function(d, f) {
					o._sharedTracks.customTrack = a.track, a.track = St, o.sendMessageToCallMachine({
						action: "start-custom-track",
						properties: a
					}, function(g) {
						g.error ? f({
							error: g.error
						}) : d(g.mediaTag)
					})
				})
			}
		}, {
			key: "stopCustomTrack",
			value: function(o) {
				var a = this;
				return I(), Y(this._callState, "stopCustomTrack()"), new Promise(function(d) {
					a.sendMessageToCallMachine({
						action: "stop-custom-track",
						mediaTag: o
					}, function(f) {
						d(f.mediaTag)
					})
				})
			}
		}, {
			key: "setCamera",
			value: function(o) {
				var a = this;
				return Et(), or(this._callMachineInitialized, "setCamera()"), new Promise(function(d) {
					a.sendMessageToCallMachine({
						action: "set-camera",
						cameraDeviceId: o
					}, function(f) {
						d({
							device: f.device
						})
					})
				})
			}
		}, {
			key: "setAudioDevice",
			value: (xs = C(function*(o) {
				return Et(), this.nativeUtils().setAudioDevice(o), {
					deviceId: yield this.nativeUtils().getAudioDevice()
				}
			}), function(o) {
				return xs.apply(this, arguments)
			})
		}, {
			key: "cycleCamera",
			value: function() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				return new Promise(function(d) {
					o.sendMessageToCallMachine({
						action: "cycle-camera",
						properties: a
					}, function(f) {
						d({
							device: f.device
						})
					})
				})
			}
		}, {
			key: "cycleMic",
			value: function() {
				var o = this;
				return I(), new Promise(function(a) {
					o.sendMessageToCallMachine({
						action: "cycle-mic"
					}, function(d) {
						a({
							device: d.device
						})
					})
				})
			}
		}, {
			key: "getCameraFacingMode",
			value: function() {
				var o = this;
				return Et(), new Promise(function(a) {
					o.sendMessageToCallMachine({
						action: "get-camera-facing-mode"
					}, function(d) {
						a(d.facingMode)
					})
				})
			}
		}, {
			key: "setInputDevicesAsync",
			value: (Rs = C(function*(o) {
				var a = this,
					d = o.audioDeviceId,
					f = o.videoDeviceId,
					g = o.audioSource,
					v = o.videoSource;
				return I(), g !== void 0 && (d = g), v !== void 0 && (f = v), d && (this._preloadCache.audioDeviceId = d, this._sharedTracks.audioDeviceId = d), f && (this._preloadCache.videoDeviceId = f, this._sharedTracks.videoDeviceId = f), this._callObjectMode && this.needsLoad() ? {
					camera: {
						deviceId: this._preloadCache.videoDeviceId
					},
					mic: {
						deviceId: this._preloadCache.audioDeviceId
					},
					speaker: {
						deviceId: this._preloadCache.outputDeviceId
					}
				} : (d instanceof MediaStreamTrack && (d = St), f instanceof MediaStreamTrack && (f = St), new Promise(function(E) {
					a.sendMessageToCallMachine({
						action: "set-input-devices",
						audioDeviceId: d,
						videoDeviceId: f
					}, function(k) {
						delete k.action, delete k.callbackStamp, k.returnPreloadCache ? E({
							camera: {
								deviceId: a._preloadCache.videoDeviceId
							},
							mic: {
								deviceId: a._preloadCache.audioDeviceId
							},
							speaker: {
								deviceId: a._preloadCache.outputDeviceId
							}
						}) : E(k)
					})
				}))
			}), function(o) {
				return Rs.apply(this, arguments)
			})
		}, {
			key: "setOutputDeviceAsync",
			value: (Ns = C(function*(o) {
				var a = this,
					d = o.outputDeviceId;
				return I(), d && (this._preloadCache.outputDeviceId = d), this._callObjectMode && this.needsLoad() ? {
					camera: {
						deviceId: this._preloadCache.videoDeviceId
					},
					mic: {
						deviceId: this._preloadCache.audioDeviceId
					},
					speaker: {
						deviceId: this._preloadCache.outputDeviceId
					}
				} : new Promise(function(f) {
					a.sendMessageToCallMachine({
						action: "set-output-device",
						outputDeviceId: d
					}, function(g) {
						delete g.action, delete g.callbackStamp, g.returnPreloadCache ? f({
							camera: {
								deviceId: a._preloadCache.videoDeviceId
							},
							mic: {
								deviceId: a._preloadCache.audioDeviceId
							},
							speaker: {
								deviceId: a._preloadCache.outputDeviceId
							}
						}) : f(g)
					})
				})
			}), function(o) {
				return Ns.apply(this, arguments)
			})
		}, {
			key: "getInputDevices",
			value: (Ds = C(function*() {
				var o = this;
				return this._callObjectMode && this.needsLoad() ? {
					camera: {
						deviceId: this._preloadCache.videoDeviceId
					},
					mic: {
						deviceId: this._preloadCache.audioDeviceId
					},
					speaker: {
						deviceId: this._preloadCache.outputDeviceId
					}
				} : new Promise(function(a) {
					o.sendMessageToCallMachine({
						action: "get-input-devices"
					}, function(d) {
						delete d.action, delete d.callbackStamp, d.returnPreloadCache ? a({
							camera: {
								deviceId: o._preloadCache.videoDeviceId
							},
							mic: {
								deviceId: o._preloadCache.audioDeviceId
							},
							speaker: {
								deviceId: o._preloadCache.outputDeviceId
							}
						}) : a(d)
					})
				})
			}), function() {
				return Ds.apply(this, arguments)
			})
		}, {
			key: "nativeInCallAudioMode",
			value: function() {
				return Et(), this._nativeInCallAudioMode
			}
		}, {
			key: "setNativeInCallAudioMode",
			value: function(o) {
				if (Et(), [ts, Kc].includes(o)) {
					if (o !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = o, !this.disableReactNativeAutoDeviceManagement("audio") && rn(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this
				} else console.error("invalid in-call audio mode specified: ", o)
			}
		}, {
			key: "preAuth",
			value: (Is = C(function*() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				if (me(this._callObjectMode, "preAuth()"), as(this._callState, this._isPreparingToJoin, "preAuth()"), qe(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(a)), !a.url) throw new Error("preAuth() requires at least a url to be provided");
				return this.validateProperties(a), this.properties = A(A({}, this.properties), a), new Promise(function(d, f) {
					o.sendMessageToCallMachine({
						action: "daily-method-preauth",
						properties: ot(o.properties, o._callFrameId),
						preloadCache: ot(o._preloadCache, o._callFrameId)
					}, function(g) {
						return g.error ? f(g.error) : g.access ? (o._didPreAuth = !0, void d({
							access: g.access
						})) : f(new Error("unknown error in preAuth()"))
					})
				})
			}), function() {
				return Is.apply(this, arguments)
			})
		}, {
			key: "load",
			value: (kt = C(function*(o) {
				var a = this;
				if (this.needsLoad()) {
					if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
					if (o && (this.validateProperties(o), this.properties = A(A({}, this.properties), o)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
					this._updateCallState(Di);
					try {
						this.emit(Fn, {
							action: Fn
						})
					} catch (d) {
						console.log("could not emit 'loading'", d)
					}
					return this._callObjectMode ? new Promise(function(d, f) {
						a._callObjectLoader.cancel();
						var g = Date.now();
						a._callObjectLoader.load(a.properties.dailyConfig, function(v) {
							a._bundleLoadTime = v ? "no-op" : Date.now() - g, a._updateCallState(Ni), v && a.emit(Wt, {
								action: Wt
							}), d()
						}, function(v, E) {
							if (a.emit(Bn, {
									action: Bn,
									error: v
								}), !E) {
								a._updateCallState(we), a.resetMeetingDependentVars();
								var k = {
									action: Qt,
									errorMsg: v.msg,
									error: {
										type: "connection-error",
										msg: "Failed to load call object bundle.",
										details: {
											on: "load",
											sourceError: v,
											bundleUrl: Ot(a.properties.dailyConfig)
										}
									}
								};
								a._maybeSendToSentry(k), a.emit(Qt, k), f(v.msg)
							}
						})
					}) : (this._iframe.src = Lr(this.assembleMeetingUrl(), this.properties.dailyConfig), new Promise(function(d, f) {
						a._loadedCallback = function(g) {
							a._callState !== we ? (a._updateCallState(Ni), (a.properties.cssFile || a.properties.cssText) && a.loadCss(a.properties), d()) : f(g)
						}
					}))
				}
			}), function(o) {
				return kt.apply(this, arguments)
			})
		}, {
			key: "join",
			value: (at = C(function*() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				qe(this._testCallInProgress, "join()");
				var d = !1;
				if (this.needsLoad()) {
					this.updateIsPreparingToJoin(!0);
					try {
						yield this.load(a)
					} catch (f) {
						return this.updateIsPreparingToJoin(!1), Promise.reject(f)
					}
				} else {
					if (d = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
						if (a.url && a.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
						if (a.token && a.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject()
					}
					if (a.url && !this._callObjectMode && a.url && a.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(a.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
					this.validateProperties(a), this.properties = A(A({}, this.properties), a)
				}
				if (a.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!a.showLocalVideo), a.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!a.showParticipantsBar), this._callState === Ve || this._callState === qt) return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1);
				this._updateCallState(qt, !1);
				try {
					this.emit(Un, {
						action: Un
					})
				} catch (f) {
					console.log("could not emit 'joining-meeting'", f)
				}
				return this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), a.inputSettings && a.inputSettings.audio && (this._preloadCache.inputSettings.audio = a.inputSettings.audio), a.inputSettings && a.inputSettings.video && (this._preloadCache.inputSettings.video = a.inputSettings.video), this.sendMessageToCallMachine({
					action: "join-meeting",
					properties: ot(this.properties, this._callFrameId),
					preloadCache: ot(this._preloadCache, this._callFrameId)
				}), new Promise(function(f, g) {
					o._joinedCallback = function(v, E) {
						if (o._callState !== we) {
							if (o._updateCallState(Ve), v)
								for (var k in v) {
									if (o._callObjectMode) {
										var P = o._callMachine().store;
										Jo(v[k], P), Wo(v[k], P), zo(v[k], o._participants[k], P)
									}
									o._participants[k] = A({}, v[k]), o.toggleParticipantAudioBasedOnNativeAudioFocus()
								}
							d && o.loadCss(o.properties), f(v)
						} else g(E)
					}
				})
			}), function() {
				return at.apply(this, arguments)
			})
		}, {
			key: "leave",
			value: (De = C(function*() {
				var o = this;
				return qe(this._testCallInProgress, "leave()"), new Promise(function(a) {
					if (o._callState === Se || o._callState === we) a();
					else if (o._callObjectLoader && !o._callObjectLoader.loaded) {
						o._callObjectLoader.cancel(), o._updateCallState(Se), o.resetMeetingDependentVars();
						try {
							o.emit(Se, {
								action: Se
							})
						} catch (d) {
							console.log("could not emit 'left-meeting'", d)
						}
						a()
					} else o._resolveLeave = a, o.sendMessageToCallMachine({
						action: "leave-meeting"
					})
				})
			}), function() {
				return De.apply(this, arguments)
			})
		}, {
			key: "startScreenShare",
			value: (G = C(function*() {
				var o = this,
					a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				if (or(this._callMachineInitialized, "startScreenShare()"), a.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", a.screenVideoSendSettings), a.mediaStream && (this._sharedTracks.screenMediaStream = a.mediaStream, a.mediaStream = St), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
					var d = this.nativeUtils();
					if (yield d.isScreenBeingCaptured()) return void this.emit(Kt, {
						action: Kt,
						type: "screen-share-error",
						errorMsg: "Could not start the screen sharing. The screen is already been captured!"
					});
					d.setSystemScreenCaptureStartCallback(function() {
						d.setSystemScreenCaptureStartCallback(null), o.sendMessageToCallMachine({
							action: Po,
							captureOptions: a
						})
					}), d.presentSystemScreenCapturePrompt()
				} else this.sendMessageToCallMachine({
					action: Po,
					captureOptions: a
				})
			}), function() {
				return G.apply(this, arguments)
			})
		}, {
			key: "stopScreenShare",
			value: function() {
				or(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({
					action: "local-screen-stop"
				})
			}
		}, {
			key: "startRecording",
			value: function() {
				var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				this.sendMessageToCallMachine(A({
					action: "local-recording-start"
				}, o))
			}
		}, {
			key: "updateRecording",
			value: function(o) {
				var a = o.layout,
					d = a === void 0 ? {
						preset: "default"
					} : a,
					f = o.instanceId;
				this.sendMessageToCallMachine({
					action: "daily-method-update-recording",
					layout: d,
					instanceId: f
				})
			}
		}, {
			key: "stopRecording",
			value: function() {
				var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				this.sendMessageToCallMachine(A({
					action: "local-recording-stop"
				}, o))
			}
		}, {
			key: "startLiveStreaming",
			value: function() {
				var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				this.sendMessageToCallMachine(A({
					action: "daily-method-start-live-streaming"
				}, o))
			}
		}, {
			key: "updateLiveStreaming",
			value: function(o) {
				var a = o.layout,
					d = a === void 0 ? {
						preset: "default"
					} : a,
					f = o.instanceId;
				this.sendMessageToCallMachine({
					action: "daily-method-update-live-streaming",
					layout: d,
					instanceId: f
				})
			}
		}, {
			key: "addLiveStreamingEndpoints",
			value: function(o) {
				var a = o.endpoints,
					d = o.instanceId;
				this.sendMessageToCallMachine({
					action: Io,
					endpointsOp: yc,
					endpoints: a,
					instanceId: d
				})
			}
		}, {
			key: "removeLiveStreamingEndpoints",
			value: function(o) {
				var a = o.endpoints,
					d = o.instanceId;
				this.sendMessageToCallMachine({
					action: Io,
					endpointsOp: bc,
					endpoints: a,
					instanceId: d
				})
			}
		}, {
			key: "stopLiveStreaming",
			value: function() {
				var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				this.sendMessageToCallMachine(A({
					action: "daily-method-stop-live-streaming"
				}, o))
			}
		}, {
			key: "validateDailyConfig",
			value: function(o) {
				o.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(o.camSimulcastEncodings)), o.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), de().match(/Linux; Android/) && o.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.")
			}
		}, {
			key: "validateSimulcastEncodings",
			value: function(o) {
				var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
					d = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
				if (o) {
					if (!(o instanceof Array)) throw new Error("encodings must be an Array");
					if (!_s(o.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
					for (var f = 0; f < o.length; f++) {
						var g = o[f];
						for (var v in this._validateEncodingLayerHasValidProperties(g), g)
							if (rr.includes(v)) {
								if (typeof g[v] != "number") throw new Error("".concat(v, " must be a number"));
								if (a) {
									var E = a[v],
										k = E.min,
										P = E.max;
									if (!_s(g[v], k, P)) throw new Error("".concat(v, " value not in range. valid range: ").concat(k, " to ").concat(P))
								}
							} else if (!["active", "scalabilityMode"].includes(v)) throw new Error("Invalid key ".concat(v, ", valid keys are:") + Object.values(rr));
						if (d && !g.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified")
					}
				}
			}
		}, {
			key: "startRemoteMediaPlayer",
			value: (L = C(function*(o) {
				var a = this,
					d = o.url,
					f = o.settings,
					g = f === void 0 ? {
						state: Gn.PLAY
					} : f;
				try {
					(function(v) {
						if (typeof v != "string") throw new Error('url parameter must be "string" type')
					})(d), vs(g),
						function(v) {
							for (var E in v)
								if (!os.includes(E)) throw new Error("Invalid key ".concat(E, ", valid keys are: ").concat(os));
							v.simulcastEncodings && this.validateSimulcastEncodings(v.simulcastEncodings, is, !0)
						}(g)
				} catch (v) {
					throw console.error("invalid argument Error: ".concat(v)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), v
				}
				return new Promise(function(v, E) {
					a.sendMessageToCallMachine({
						action: "daily-method-start-remote-media-player",
						url: d,
						settings: g
					}, function(k) {
						k.error ? E({
							error: k.error,
							errorMsg: k.errorMsg
						}) : v({
							session_id: k.session_id,
							remoteMediaPlayerState: {
								state: k.state,
								settings: k.settings
							}
						})
					})
				})
			}), function(o) {
				return L.apply(this, arguments)
			})
		}, {
			key: "stopRemoteMediaPlayer",
			value: (T = C(function*(o) {
				var a = this;
				if (typeof o != "string") throw new Error(" remotePlayerID must be of type string");
				return new Promise(function(d, f) {
					a.sendMessageToCallMachine({
						action: "daily-method-stop-remote-media-player",
						session_id: o
					}, function(g) {
						g.error ? f({
							error: g.error,
							errorMsg: g.errorMsg
						}) : d()
					})
				})
			}), function(o) {
				return T.apply(this, arguments)
			})
		}, {
			key: "updateRemoteMediaPlayer",
			value: (S = C(function*(o) {
				var a = this,
					d = o.session_id,
					f = o.settings;
				try {
					vs(f)
				} catch (g) {
					throw console.error("invalid argument Error: ".concat(g)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), g
				}
				return new Promise(function(g, v) {
					a.sendMessageToCallMachine({
						action: "daily-method-update-remote-media-player",
						session_id: d,
						settings: f
					}, function(E) {
						E.error ? v({
							error: E.error,
							errorMsg: E.errorMsg
						}) : g({
							session_id: E.session_id,
							remoteMediaPlayerState: {
								state: E.state,
								settings: E.settings
							}
						})
					})
				})
			}), function(o) {
				return S.apply(this, arguments)
			})
		}, {
			key: "startTranscription",
			value: function(o) {
				this.sendMessageToCallMachine(A({
					action: "daily-method-start-transcription"
				}, o))
			}
		}, {
			key: "stopTranscription",
			value: function() {
				this.sendMessageToCallMachine({
					action: "daily-method-stop-transcription"
				})
			}
		}, {
			key: "startDialOut",
			value: (b = C(function*(o) {
				var a = this;
				Y(this._callState, "startDialOut()");
				var d = function(f) {
					if (f) {
						if (!Array.isArray(f)) throw new Error("Error starting dial out: audio codec must be an array");
						if (f.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
						f.forEach(function(g) {
							if (typeof g != "string") throw new Error("Error starting dial out: audio codec must be a string");
							if (g !== "OPUS" && g !== "PCMU" && g !== "PCMA" && g !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722")
						})
					}
				};
				if (!o.sipUri && !o.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
				if (o.sipUri && o.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
				if (o.sipUri) {
					if (typeof o.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string");
					if (!o.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
					if (o.video && typeof o.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value");
					(function(f) {
						if (f && (d(f.audio), f.video)) {
							if (!Array.isArray(f.video)) throw new Error("Error starting dial out: video codec must be an array");
							if (f.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
							f.video.forEach(function(g) {
								if (typeof g != "string") throw new Error("Error starting dial out: video codec must be a string");
								if (g !== "H264" && g !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8")
							})
						}
					})(o.codecs)
				}
				if (o.phoneNumber) {
					if (typeof o.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
					if (!/^\+\d{1,}$/.test(o.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
					o.codecs && d(o.codecs.audio)
				}
				if (o.callerId) {
					if (typeof o.callerId != "string") throw new Error("Error starting dial out: callerId must be a string");
					if (o.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri")
				}
				if (o.displayName) {
					if (typeof o.displayName != "string") throw new Error("Error starting dial out: displayName must be a string");
					if (o.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200")
				}
				return new Promise(function(f, g) {
					a.sendMessageToCallMachine(A({
						action: "dialout-start"
					}, o), function(v) {
						v.error ? g(v.error) : f(v)
					})
				})
			}), function(o) {
				return b.apply(this, arguments)
			})
		}, {
			key: "stopDialOut",
			value: function(o) {
				var a = this;
				return Y(this._callState, "stopDialOut()"), new Promise(function(d, f) {
					a.sendMessageToCallMachine(A({
						action: "dialout-stop"
					}, o), function(g) {
						g.error ? f(g.error) : d(g)
					})
				})
			}
		}, {
			key: "sendDTMF",
			value: (w = C(function*(o) {
				var a = this;
				return Y(this._callState, "sendDTMF()"),
					function(d) {
						var f = d.sessionId,
							g = d.tones;
						if (!f || !g) throw new Error("sessionId and tones are mandatory parameter");
						if (typeof f != "string" || typeof g != "string") throw new Error("sessionId and tones should be of string type");
						if (g.length > 20) throw new Error("tones string must be upto 20 characters");
						var v = /[^0-9A-D*#]/g,
							E = g.match(v);
						if (E && E[0]) throw new Error("".concat(E[0], " is not valid DTMF tone"))
					}(o), new Promise(function(d, f) {
						a.sendMessageToCallMachine(A({
							action: "send-dtmf"
						}, o), function(g) {
							g.error ? f(g.error) : d(g)
						})
					})
			}), function(o) {
				return w.apply(this, arguments)
			})
		}, {
			key: "getNetworkStats",
			value: function() {
				var o = this;
				return this._callState !== Ve ? {
					stats: {
						latest: {}
					}
				} : new Promise(function(a) {
					o.sendMessageToCallMachine({
						action: "get-calc-stats"
					}, function(d) {
						a(A({
							stats: d.stats
						}, o._network))
					})
				})
			}
		}, {
			key: "testWebsocketConnectivity",
			value: (y = C(function*() {
				var o = this;
				if (qe(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
					yield this.load()
				} catch (a) {
					return Promise.reject(a)
				}
				return new Promise(function(a, d) {
					o.sendMessageToCallMachine({
						action: "test-websocket-connectivity"
					}, function(f) {
						f.error ? d(f.error) : a(f.results)
					})
				})
			}), function() {
				return y.apply(this, arguments)
			})
		}, {
			key: "abortTestWebsocketConnectivity",
			value: function() {
				this.sendMessageToCallMachine({
					action: "abort-test-websocket-connectivity"
				})
			}
		}, {
			key: "_validateVideoTrackForNetworkTests",
			value: function(o) {
				return o ? o instanceof MediaStreamTrack ? !!qc(o, {
					isLocalScreenVideo: !1
				}) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1)
			}
		}, {
			key: "testCallQuality",
			value: (m = C(function*(o) {
				var a = this;
				if (function(k) {
						var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method",
							J = arguments.length > 2 ? arguments[2] : void 0;
						if (k) {
							var H = "".concat(P, " can not be called after preAuth(), startCamera(), or join() and call state has been initialized.");
							throw J && (H += " ".concat(J)), console.error(H), new Error(H)
						}
					}(this._callMachineInitialized, "testCallQuality()"), o.videoTrack && !this._validateVideoTrackForNetworkTests(o.videoTrack)) throw new Error("Video track error");
				var d = this._testCallAlreadyInProgress,
					f = function(k) {
						d || (a._testCallInProgress = k)
					};
				f(!0);
				var g = o.videoTrack,
					v = ln(o, Jc);
				if (this._sharedTracks.videoTrackForConnectionQualityTest = g, this.needsLoad()) try {
					var E = this._callState;
					yield this.load(), this._callState = E
				} catch (k) {
					return f(!1), Promise.reject(k)
				}
				return new Promise(function(k) {
					a.sendMessageToCallMachine(A(A({
						action: "test-call-quality"
					}, v), {}, {
						dailyJsVersion: a.properties.dailyJsVersion
					}), function(P) {
						var J = P.results,
							H = J.result,
							K = ln(J, Wc);
						if (H === "failed") {
							var ie, q = A({}, K);
							(ie = K.error) !== null && ie !== void 0 && ie.details ? (K.error.details = JSON.parse(K.error.details), q.error = A(A({}, q.error), {}, {
								details: A({}, q.error.details)
							}), q.error.details.duringTest = "testCallQuality") : (q.error = q.error ? A({}, q.error) : {}, q.error.details = {
								duringTest: "testCallQuality"
							}), a._maybeSendToSentry(q)
						}
						f(!1), k(A({
							result: H
						}, K))
					})
				})
			}), function(o) {
				return m.apply(this, arguments)
			})
		}, {
			key: "stopTestCallQuality",
			value: function() {
				this.sendMessageToCallMachine({
					action: "stop-test-call-quality"
				})
			}
		}, {
			key: "testConnectionQuality",
			value: (p = C(function*(o) {
				console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead");
				var a = yield this.testPeerToPeerCallQuality(o), d = {
					result: a.result,
					secondsElapsed: a.secondsElapsed
				};
				return a.data && (d.data = {
					maxRTT: a.data.maxRoundTripTime,
					packetLoss: a.data.avgRecvPacketLoss
				}), d
			}), function(o) {
				return p.apply(this, arguments)
			})
		}, {
			key: "testPeerToPeerCallQuality",
			value: (h = C(function*(o) {
				var a = this;
				if (qe(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad()) try {
					yield this.load()
				} catch (g) {
					return Promise.reject(g)
				}
				var d = o.videoTrack,
					f = o.duration;
				if (!this._validateVideoTrackForNetworkTests(d)) throw new Error("Video track error");
				return this._sharedTracks.videoTrackForConnectionQualityTest = d, new Promise(function(g, v) {
					a.sendMessageToCallMachine({
						action: "test-p2p-call-quality",
						duration: f
					}, function(E) {
						E.error ? v(E.error) : g(E.results)
					})
				})
			}), function(o) {
				return h.apply(this, arguments)
			})
		}, {
			key: "stopTestConnectionQuality",
			value: function() {
				console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()
			}
		}, {
			key: "stopTestPeerToPeerCallQuality",
			value: function() {
				this.sendMessageToCallMachine({
					action: "stop-test-p2p-call-quality"
				})
			}
		}, {
			key: "testNetworkConnectivity",
			value: (u = C(function*(o) {
				var a = this;
				if (qe(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
					yield this.load()
				} catch (d) {
					return Promise.reject(d)
				}
				if (!this._validateVideoTrackForNetworkTests(o)) throw new Error("Video track error");
				return this._sharedTracks.videoTrackForNetworkConnectivityTest = o, new Promise(function(d, f) {
					a.sendMessageToCallMachine({
						action: "test-network-connectivity"
					}, function(g) {
						g.error ? f(g.error) : d(g.results)
					})
				})
			}), function(o) {
				return u.apply(this, arguments)
			})
		}, {
			key: "abortTestNetworkConnectivity",
			value: function() {
				this.sendMessageToCallMachine({
					action: "abort-test-network-connectivity"
				})
			}
		}, {
			key: "getCpuLoadStats",
			value: function() {
				var o = this;
				return new Promise(function(a, d) {
					o._callState === Ve ? o.sendMessageToCallMachine({
						action: "get-cpu-load-stats"
					}, function(f) {
						a(f.cpuStats)
					}) : a({
						cpuLoadState: void 0,
						cpuLoadStateReason: void 0,
						stats: {}
					})
				})
			}
		}, {
			key: "_validateEncodingLayerHasValidProperties",
			value: function(o) {
				var a;
				if (!(((a = Object.keys(o)) === null || a === void 0 ? void 0 : a.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(rr))
			}
		}, {
			key: "_validateVideoSendSettings",
			value: function(o, a) {
				var d = o === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"],
					f = "Video send settings should be either an object or one of the supported presets: ".concat(d.join());
				if (typeof a == "string") {
					if (!d.includes(a)) throw new Error(f)
				} else {
					if (j(a) !== "object") throw new Error(f);
					if (!a.maxQuality && !a.encodings && a.allowAdaptiveLayers === void 0) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
					if (a.maxQuality && ["low", "medium", "high"].indexOf(a.maxQuality) === -1) throw new Error("maxQuality must be either low, medium or high");
					if (a.encodings) {
						var g = !1;
						switch (Object.keys(a.encodings).length) {
							case 1:
								g = !a.encodings.low;
								break;
							case 2:
								g = !a.encodings.low || !a.encodings.medium;
								break;
							case 3:
								g = !a.encodings.low || !a.encodings.medium || !a.encodings.high;
								break;
							default:
								g = !0
						}
						if (g) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
						a.encodings.low && this._validateEncodingLayerHasValidProperties(a.encodings.low), a.encodings.medium && this._validateEncodingLayerHasValidProperties(a.encodings.medium), a.encodings.high && this._validateEncodingLayerHasValidProperties(a.encodings.high)
					}
				}
			}
		}, {
			key: "validateUpdateSendSettings",
			value: function(o) {
				var a = this;
				if (!o || Object.keys(o).length === 0) throw new Error("Send settings must contain at least information for one track!");
				Object.entries(o).forEach(function(d) {
					var f = Ne(d, 2),
						g = f[0],
						v = f[1];
					a._validateVideoSendSettings(g, v)
				})
			}
		}, {
			key: "updateSendSettings",
			value: function(o) {
				var a = this;
				return this.validateUpdateSendSettings(o), this.needsLoad() ? (this._preloadCache.sendSettings = o, {
					sendSettings: this._preloadCache.sendSettings
				}) : new Promise(function(d, f) {
					a.sendMessageToCallMachine({
						action: "update-send-settings",
						sendSettings: o
					}, function(g) {
						g.error ? f(g.error) : d(g.sendSettings)
					})
				})
			}
		}, {
			key: "getSendSettings",
			value: function() {
				return this._sendSettings || this._preloadCache.sendSettings
			}
		}, {
			key: "getLocalAudioLevel",
			value: function() {
				return this._localAudioLevel
			}
		}, {
			key: "getRemoteParticipantsAudioLevel",
			value: function() {
				return this._remoteParticipantsAudioLevel
			}
		}, {
			key: "getActiveSpeaker",
			value: function() {
				return I(), this._activeSpeaker
			}
		}, {
			key: "setActiveSpeakerMode",
			value: function(o) {
				return I(), this.sendMessageToCallMachine({
					action: "set-active-speaker-mode",
					enabled: o
				}), this
			}
		}, {
			key: "activeSpeakerMode",
			value: function() {
				return I(), this._activeSpeakerMode
			}
		}, {
			key: "subscribeToTracksAutomatically",
			value: function() {
				return this._preloadCache.subscribeToTracksAutomatically
			}
		}, {
			key: "setSubscribeToTracksAutomatically",
			value: function(o) {
				return Y(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = o, this.sendMessageToCallMachine({
					action: "daily-method-subscribe-to-tracks-automatically",
					enabled: o
				}), this
			}
		}, {
			key: "enumerateDevices",
			value: (l = C(function*() {
				var o = this;
				if (this._callObjectMode) {
					var a = yield navigator.mediaDevices.enumerateDevices();
					return Pe() === "Firefox" && Wn().major > 115 && Wn().major < 123 && (a = a.filter(function(d) {
						return d.kind !== "audiooutput"
					})), {
						devices: a.map(function(d) {
							var f = JSON.parse(JSON.stringify(d));
							if (!N() && d.kind === "videoinput" && d.getCapabilities) {
								var g, v = d.getCapabilities();
								f.facing = (v == null || (g = v.facingMode) === null || g === void 0 ? void 0 : g.length) >= 1 ? v.facingMode[0] : void 0
							}
							return f
						})
					}
				}
				return new Promise(function(d) {
					o.sendMessageToCallMachine({
						action: "enumerate-devices"
					}, function(f) {
						d({
							devices: f.devices
						})
					})
				})
			}), function() {
				return l.apply(this, arguments)
			})
		}, {
			key: "sendAppMessage",
			value: function(o) {
				var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
				if (Y(this._callState, "sendAppMessage()"), JSON.stringify(o).length > 4096) throw new Error("Message data too large. Max size is 4096");
				return this.sendMessageToCallMachine({
					action: "app-msg",
					data: o,
					to: a
				}), this
			}
		}, {
			key: "addFakeParticipant",
			value: function(o) {
				return I(), Y(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(A({
					action: "add-fake-participant"
				}, o)), this
			}
		}, {
			key: "setShowNamesMode",
			value: function(o) {
				return te(this._callObjectMode, "setShowNamesMode()"), I(), o && o !== "always" && o !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({
					action: "set-show-names",
					mode: o
				}), this)
			}
		}, {
			key: "setShowLocalVideo",
			value: function() {
				var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
				return te(this._callObjectMode, "setShowLocalVideo()"), I(), Y(this._callState, "setShowLocalVideo()"), typeof o != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
					action: "set-show-local-video",
					show: o
				}), this._showLocalVideo = o, this)
			}
		}, {
			key: "showLocalVideo",
			value: function() {
				return te(this._callObjectMode, "showLocalVideo()"), I(), this._showLocalVideo
			}
		}, {
			key: "setShowParticipantsBar",
			value: function() {
				var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
				return te(this._callObjectMode, "setShowParticipantsBar()"), I(), Y(this._callState, "setShowParticipantsBar()"), typeof o != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
					action: "set-show-participants-bar",
					show: o
				}), this._showParticipantsBar = o, this)
			}
		}, {
			key: "showParticipantsBar",
			value: function() {
				return te(this._callObjectMode, "showParticipantsBar()"), I(), this._showParticipantsBar
			}
		}, {
			key: "customIntegrations",
			value: function() {
				return I(), te(this._callObjectMode, "customIntegrations()"), this._customIntegrations
			}
		}, {
			key: "setCustomIntegrations",
			value: function(o) {
				return I(), te(this._callObjectMode, "setCustomIntegrations()"), Y(this._callState, "setCustomIntegrations()"), ms(o) ? (this.sendMessageToCallMachine({
					action: "set-custom-integrations",
					integrations: o
				}), this._customIntegrations = o, this) : this
			}
		}, {
			key: "startCustomIntegrations",
			value: function(o) {
				var a = this;
				if (I(), te(this._callObjectMode, "startCustomIntegrations()"), Y(this._callState, "startCustomIntegrations()"), Array.isArray(o) && o.some(function(g) {
						return typeof g != "string"
					}) || !Array.isArray(o) && typeof o != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
				var d = typeof o == "string" ? [o] : o,
					f = d.filter(function(g) {
						return !(g in a._customIntegrations)
					});
				return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({
					action: "start-custom-integrations",
					ids: d
				}), this)
			}
		}, {
			key: "stopCustomIntegrations",
			value: function(o) {
				var a = this;
				if (I(), te(this._callObjectMode, "stopCustomIntegrations()"), Y(this._callState, "stopCustomIntegrations()"), Array.isArray(o) && o.some(function(g) {
						return typeof g != "string"
					}) || !Array.isArray(o) && typeof o != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
				var d = typeof o == "string" ? [o] : o,
					f = d.filter(function(g) {
						return !(g in a._customIntegrations)
					});
				return f.length ? (console.error(`Can't find custom integration(s): "`.concat(f.join(", "), '"')), this) : (this.sendMessageToCallMachine({
					action: "stop-custom-integrations",
					ids: d
				}), this)
			}
		}, {
			key: "customTrayButtons",
			value: function() {
				return te(this._callObjectMode, "customTrayButtons()"), I(), this._customTrayButtons
			}
		}, {
			key: "updateCustomTrayButtons",
			value: function(o) {
				return te(this._callObjectMode, "updateCustomTrayButtons()"), I(), Y(this._callState, "updateCustomTrayButtons()"), fs(o) ? (this.sendMessageToCallMachine({
					action: "update-custom-tray-buttons",
					btns: o
				}), this._customTrayButtons = o, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(tn))), this)
			}
		}, {
			key: "theme",
			value: function() {
				return te(this._callObjectMode, "theme()"), this.properties.theme
			}
		}, {
			key: "setTheme",
			value: function(o) {
				var a = this;
				return te(this._callObjectMode, "setTheme()"), new Promise(function(d, f) {
					try {
						a.validateProperties({
							theme: o
						}), a.properties.theme = A({}, o), a.sendMessageToCallMachine({
							action: "set-theme",
							theme: a.properties.theme
						});
						try {
							a.emit(jn, {
								action: jn,
								theme: a.properties.theme
							})
						} catch (g) {
							console.log("could not emit 'theme-updated'", g)
						}
						d(a.properties.theme)
					} catch (g) {
						f(g)
					}
				})
			}
		}, {
			key: "requestFullscreen",
			value: (c = C(function*() {
				if (I(), this._iframe && !document.fullscreenElement && xo()) try {
					(yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen(): this._iframe.webkitRequestFullscreen()
				} catch (o) {
					console.log("could not make video call fullscreen", o)
				}
			}), function() {
				return c.apply(this, arguments)
			})
		}, {
			key: "exitFullscreen",
			value: function() {
				I(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen()
			}
		}, {
			key: "getSidebarView",
			value: (s = C(function*() {
				var o = this;
				return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(a) {
					o.sendMessageToCallMachine({
						action: "get-sidebar-view"
					}, function(d) {
						a(d.view)
					})
				})
			}), function() {
				return s.apply(this, arguments)
			})
		}, {
			key: "setSidebarView",
			value: function(o) {
				return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({
					action: "set-sidebar-view",
					view: o
				}), this)
			}
		}, {
			key: "room",
			value: (i = C(function*() {
				var o = this,
					a = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults,
					d = a === void 0 || a;
				return this._accessState.access === Jt || this.needsLoad() ? this.properties.url ? {
					roomUrlPendingJoin: this.properties.url
				} : null : new Promise(function(f) {
					o.sendMessageToCallMachine({
						action: "lib-room-info",
						includeRoomConfigDefaults: d
					}, function(g) {
						delete g.action, delete g.callbackStamp, f(g)
					})
				})
			}), function() {
				return i.apply(this, arguments)
			})
		}, {
			key: "geo",
			value: (r = C(function*() {
				try {
					var o = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
					return {
						current: (yield o.json()).geo
					}
				} catch (a) {
					return console.error("geo lookup failed", a), {
						current: ""
					}
				}
			}), function() {
				return r.apply(this, arguments)
			})
		}, {
			key: "setNetworkTopology",
			value: (t = C(function*(o) {
				var a = this;
				return I(), Y(this._callState, "setNetworkTopology()"), new Promise(function(d, f) {
					a.sendMessageToCallMachine({
						action: "set-network-topology",
						opts: o
					}, function(g) {
						g.error ? f({
							error: g.error
						}) : d({
							workerId: g.workerId
						})
					})
				})
			}), function(o) {
				return t.apply(this, arguments)
			})
		}, {
			key: "getNetworkTopology",
			value: (e = C(function*() {
				var o = this;
				return new Promise(function(a, d) {
					o.needsLoad() && a({
						topology: "none"
					}), o.sendMessageToCallMachine({
						action: "get-network-topology"
					}, function(f) {
						f.error ? d({
							error: f.error
						}) : a({
							topology: f.topology
						})
					})
				})
			}), function() {
				return e.apply(this, arguments)
			})
		}, {
			key: "setPlayNewParticipantSound",
			value: function(o) {
				if (I(), typeof o != "number" && o !== !0 && o !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(o));
				this.sendMessageToCallMachine({
					action: "daily-method-set-play-ding",
					arg: o
				})
			}
		}, {
			key: "on",
			value: function(o, a) {
				return ye.prototype.on.call(this, o, a)
			}
		}, {
			key: "once",
			value: function(o, a) {
				return ye.prototype.once.call(this, o, a)
			}
		}, {
			key: "off",
			value: function(o, a) {
				return ye.prototype.off.call(this, o, a)
			}
		}, {
			key: "validateProperties",
			value: function(o) {
				for (var a in o) {
					if (!Ge[a]) throw new Error("unrecognized property '".concat(a, "'"));
					if (Ge[a].validate && !Ge[a].validate(o[a], this)) throw new Error("property '".concat(a, "': ").concat(Ge[a].help))
				}
			}
		}, {
			key: "assembleMeetingUrl",
			value: function() {
				var o, a, d = A(A({}, this.properties), {}, {
						emb: this._callFrameId,
						embHref: encodeURIComponent(window.location.href),
						proxy: (o = this.properties.dailyConfig) !== null && o !== void 0 && o.proxyUrl ? encodeURIComponent((a = this.properties.dailyConfig) === null || a === void 0 ? void 0 : a.proxyUrl) : void 0
					}),
					f = d.url.match(/\?/) ? "&" : "?";
				return d.url + f + Object.keys(Ge).filter(function(g) {
					return Ge[g].queryString && d[g] !== void 0
				}).map(function(g) {
					return "".concat(Ge[g].queryString, "=").concat(d[g])
				}).join("&")
			}
		}, {
			key: "needsLoad",
			value: function() {
				return [xn, Di, Se, we].includes(this._callState)
			}
		}, {
			key: "sendMessageToCallMachine",
			value: function(o, a) {
				if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
				this._messageChannel.sendMessageToCallMachine(o, a, this._iframe, this._callFrameId)
			}
		}, {
			key: "forwardPackagedMessageToCallMachine",
			value: function(o) {
				this._messageChannel.forwardPackagedMessageToCallMachine(o, this._iframe, this._callFrameId)
			}
		}, {
			key: "addListenerForPackagedMessagesFromCallMachine",
			value: function(o) {
				return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(o, this._callFrameId)
			}
		}, {
			key: "removeListenerForPackagedMessagesFromCallMachine",
			value: function(o) {
				this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(o)
			}
		}, {
			key: "handleMessageFromCallMachine",
			value: function(o) {
				switch (o.action) {
					case Fi:
						this.sendMessageToCallMachine(A({
							action: Bi
						}, this.properties));
						break;
					case "call-machine-initialized":
						this._callMachineInitialized = !0;
						var a = {
							action: bt,
							level: "log",
							code: 1011,
							stats: {
								event: "bundle load",
								time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime,
								preLoaded: this._bundleLoadTime === "no-op",
								url: Ot(this.properties.dailyConfig)
							}
						};
						this.sendMessageToCallMachine(a), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
						break;
					case Wt:
						this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null);
						try {
							this.emit(o.action, o)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case Yi:
						this._joinedCallback && (this._joinedCallback(o.participants), this._joinedCallback = null);
						try {
							this.emit(o.action, o)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case qi:
					case Ji:
						if (this._callState === Se) return;
						if (o.participant && o.participant.session_id) {
							var d = o.participant.local ? "local" : o.participant.session_id;
							if (this._callObjectMode) {
								var f = this._callMachine().store;
								Jo(o.participant, f), Wo(o.participant, f), zo(o.participant, this._participants[d], f)
							}
							try {
								this.maybeParticipantTracksStopped(this._participants[d], o.participant), this.maybeParticipantTracksStarted(this._participants[d], o.participant), this.maybeEventRecordingStopped(this._participants[d], o.participant), this.maybeEventRecordingStarted(this._participants[d], o.participant)
							} catch (M) {
								console.error("track events error", M)
							}
							if (!this.compareEqualForParticipantUpdateEvent(o.participant, this._participants[d])) {
								this._participants[d] = A({}, o.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus();
								try {
									this.emit(o.action, o)
								} catch (M) {
									console.log("could not emit", o, M)
								}
							}
						}
						break;
					case Wi:
						if (o.participant && o.participant.session_id) {
							var g = this._participants[o.participant.session_id];
							g && this.maybeParticipantTracksStopped(g, null), delete this._participants[o.participant.session_id];
							try {
								this.emit(o.action, o)
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case zi:
						if (!X(this._participantCounts, o.participantCounts)) {
							this._participantCounts = o.participantCounts;
							try {
								this.emit(o.action, o)
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case Hi:
						var v = {
							access: o.access
						};
						if (o.awaitingAccess && (v.awaitingAccess = o.awaitingAccess), !X(this._accessState, v)) {
							this._accessState = v;
							try {
								this.emit(o.action, o)
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case Ki:
						if (o.meetingSession) {
							this._meetingSessionSummary = o.meetingSession;
							try {
								delete o.callFrameId, this.emit(o.action, o);
								var E = A(A({}, o), {}, {
									action: "meeting-session-updated"
								});
								this.emit(E.action, E)
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case Qt:
						var k;
						this._iframe && !o.preserveIframe && (this._iframe.src = ""), this._updateCallState(we), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(o.errorMsg), this._loadedCallback = null), o.preserveIframe;
						var P = ln(o, zc);
						P != null && (k = P.error) !== null && k !== void 0 && k.details && (P.error.details = JSON.parse(P.error.details)), this._maybeSendToSentry(o), this._joinedCallback && (this._joinedCallback(null, P), this._joinedCallback = null);
						try {
							this.emit(o.action, P)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case $i:
						this._callState !== we && this._updateCallState(Se), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null);
						try {
							this.emit(o.action, o)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case "selected-devices-updated":
						if (o.devices) try {
							this.emit(o.action, o)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case yo:
						var J = o.threshold,
							H = o.quality;
						if (J !== this._network.threshold || H !== this._network.quality) {
							this._network.quality = H, this._network.threshold = J;
							try {
								this.emit(o.action, o)
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case So:
						if (o && o.cpuLoadState) try {
							this.emit(o.action, o)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case wo:
						if (o && o.faceCounts !== void 0) try {
							this.emit(o.action, o)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case vo:
						var K = o.activeSpeaker;
						if (this._activeSpeaker.peerId !== K.peerId) {
							this._activeSpeaker.peerId = K.peerId;
							try {
								this.emit(o.action, {
									action: o.action,
									activeSpeaker: this._activeSpeaker
								})
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case "show-local-video-changed":
						if (this._callObjectMode) return;
						var ie = o.show;
						this._showLocalVideo = ie;
						try {
							this.emit(o.action, {
								action: o.action,
								show: ie
							})
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case _o:
						var q = o.enabled;
						if (this._activeSpeakerMode !== q) {
							this._activeSpeakerMode = q;
							try {
								this.emit(o.action, {
									action: o.action,
									enabled: this._activeSpeakerMode
								})
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case Xi:
					case Zi:
					case eo:
						this._waitingParticipants = o.allWaitingParticipants;
						try {
							this.emit(o.action, {
								action: o.action,
								participant: o.participant
							})
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case Ao:
						if (!X(this._receiveSettings, o.receiveSettings)) {
							this._receiveSettings = o.receiveSettings;
							try {
								this.emit(o.action, {
									action: o.action,
									receiveSettings: o.receiveSettings
								})
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case Oo:
						if (!X(this._inputSettings, o.inputSettings)) {
							var ur = this._getInputSettings();
							if (this._inputSettings = o.inputSettings, this._preloadCache.inputSettings = {}, !X(ur, this._getInputSettings())) try {
								this.emit(o.action, {
									action: o.action,
									inputSettings: this._getInputSettings()
								})
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case "send-settings-updated":
						if (!X(this._sendSettings, o.sendSettings)) {
							this._sendSettings = o.sendSettings, this._preloadCache.sendSettings = null;
							try {
								this.emit(o.action, {
									action: o.action,
									sendSettings: o.sendSettings
								})
							} catch (M) {
								console.log("could not emit", o, M)
							}
						}
						break;
					case "local-audio-level":
						this._localAudioLevel = o.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(o);
						break;
					case "remote-participants-audio-level":
						this._remoteParticipantsAudioLevel = o.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(o);
						break;
					case uo:
						var Q = o.session_id;
						this._rmpPlayerState[Q] = o.playerState, this.emitDailyJSEvent(o);
						break;
					case po:
						delete this._rmpPlayerState[o.session_id], this.emitDailyJSEvent(o);
						break;
					case ho:
						var ge = o.session_id,
							Je = this._rmpPlayerState[ge];
						Je && this.compareEqualForRMPUpdateEvent(Je, o.remoteMediaPlayerState) || (this._rmpPlayerState[ge] = o.remoteMediaPlayerState, this.emitDailyJSEvent(o));
						break;
					case "custom-button-click":
					case "sidebar-view-changed":
						this.emitDailyJSEvent(o);
						break;
					case Qi:
						var cn = this._meetingSessionState.topology !== (o.meetingSessionState && o.meetingSessionState.topology);
						this._meetingSessionState = ar(o.meetingSessionState, this._callObjectMode), (this._callObjectMode || cn) && this.emitDailyJSEvent(o);
						break;
					case fo:
						this._isScreenSharing = !0, this.emitDailyJSEvent(o);
						break;
					case mo:
					case go:
						this._isScreenSharing = !1, this.emitDailyJSEvent(o);
						break;
					case zt:
					case Ht:
					case io:
					case oo:
					case so:
					case to:
					case no:
					case ro:
					case Ui:
					case Vi:
					case co:
					case lo:
					case bo:
					case ao:
					case Eo:
					case ko:
					case To:
					case Co:
					case Kt:
					case Mo:
					case "dialin-ready":
					case "dialin-connected":
					case "dialin-error":
					case "dialin-stopped":
					case "dialin-warning":
					case "dialout-connected":
					case "dialout-error":
					case "dialout-stopped":
					case "dialout-warning":
						try {
							this.emit(o.action, o)
						} catch (M) {
							console.log("could not emit", o, M)
						}
						break;
					case "request-fullscreen":
						this.requestFullscreen();
						break;
					case "request-exit-fullscreen":
						this.exitFullscreen()
				}
			}
		}, {
			key: "maybeEventRecordingStopped",
			value: function(o, a) {
				var d = "record";
				if (o && !a.local && a[d] === !1 && o[d] !== a[d]) try {
					this.emit(Ht, {
						action: Ht
					})
				} catch (f) {
					console.log("could not emit", f)
				}
			}
		}, {
			key: "maybeEventRecordingStarted",
			value: function(o, a) {
				var d = "record";
				if (o && !a.local && a[d] === !0 && o[d] !== a[d]) try {
					this.emit(zt, {
						action: zt
					})
				} catch (f) {
					console.log("could not emit", f)
				}
			}
		}, {
			key: "maybeEventTrackStopped",
			value: function(o, a, d, f) {
				if (o && (o.readyState === "ended" || !a || o.id !== a.id)) try {
					this.emit(Yn, {
						action: Yn,
						track: o,
						participant: d,
						type: f
					})
				} catch (g) {
					console.log("maybeEventTrackStopped: could not emit", g)
				}
			}
		}, {
			key: "maybeEventTrackStarted",
			value: function(o, a, d, f) {
				if (a && (!o || o.readyState === "ended" || a.id !== o.id)) try {
					this.emit(Vn, {
						action: Vn,
						track: a,
						participant: d,
						type: f
					})
				} catch (g) {
					console.log("maybeEventTrackStarted: could not emit", g)
				}
			}
		}, {
			key: "maybeParticipantTracksStopped",
			value: function(o, a) {
				if (o)
					for (var d in o.tracks) this.maybeEventTrackStopped(o.tracks[d].track, a && a.tracks[d] ? a.tracks[d].track : null, a, d)
			}
		}, {
			key: "maybeParticipantTracksStarted",
			value: function(o, a) {
				if (a)
					for (var d in a.tracks) this.maybeEventTrackStarted(o && o.tracks[d] ? o.tracks[d].track : null, a.tracks[d].track, a, d)
			}
		}, {
			key: "compareEqualForRMPUpdateEvent",
			value: function(o, a) {
				var d, f;
				return o.state === a.state && ((d = o.settings) === null || d === void 0 ? void 0 : d.volume) === ((f = a.settings) === null || f === void 0 ? void 0 : f.volume)
			}
		}, {
			key: "emitDailyJSEvent",
			value: function(o) {
				try {
					this.emit(o.action, o)
				} catch (a) {
					console.log("could not emit", o, a)
				}
			}
		}, {
			key: "compareEqualForParticipantUpdateEvent",
			value: function(o, a) {
				return !!X(o, a) && (!o.videoTrack || !a.videoTrack || o.videoTrack.id === a.videoTrack.id && o.videoTrack.muted === a.videoTrack.muted && o.videoTrack.enabled === a.videoTrack.enabled) && (!o.audioTrack || !a.audioTrack || o.audioTrack.id === a.audioTrack.id && o.audioTrack.muted === a.audioTrack.muted && o.audioTrack.enabled === a.audioTrack.enabled)
			}
		}, {
			key: "nativeUtils",
			value: function() {
				return N() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null
			}
		}, {
			key: "updateIsPreparingToJoin",
			value: function(o) {
				this._updateCallState(this._callState, o)
			}
		}, {
			key: "_updateCallState",
			value: function(o) {
				var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
				if (o !== this._callState || a !== this._isPreparingToJoin) {
					var d = this._callState,
						f = this._isPreparingToJoin;
					this._callState = o, this._isPreparingToJoin = a;
					var g = rn(d, f),
						v = rn(this._callState, this._isPreparingToJoin);
					g !== v && (this.updateKeepDeviceAwake(v), this.updateDeviceAudioMode(v), this.updateShowAndroidOngoingMeetingNotification(v), this.updateNoOpRecordingEnsuringBackgroundContinuity(v))
				}
			}
		}, {
			key: "resetMeetingDependentVars",
			value: function() {
				this._participants = {}, this._participantCounts = rs, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = {
					access: Jt
				}, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = ar(ns, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._remoteParticipantsAudioLevel = {}, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache
			}
		}, {
			key: "updateKeepDeviceAwake",
			value: function(o) {
				N() && this.nativeUtils().setKeepDeviceAwake(o, this._callFrameId)
			}
		}, {
			key: "updateDeviceAudioMode",
			value: function(o) {
				if (N() && !this.disableReactNativeAutoDeviceManagement("audio")) {
					var a = o ? this._nativeInCallAudioMode : "idle";
					this.nativeUtils().setAudioMode(a)
				}
			}
		}, {
			key: "updateShowAndroidOngoingMeetingNotification",
			value: function(o) {
				if (N() && this.nativeUtils().setShowOngoingMeetingNotification) {
					var a, d, f, g;
					if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
						var v = this.properties.reactNativeConfig.androidInCallNotification;
						a = v.title, d = v.subtitle, f = v.iconName, g = v.disableForCustomOverride
					}
					g && (o = !1), this.nativeUtils().setShowOngoingMeetingNotification(o, a, d, f, this._callFrameId)
				}
			}
		}, {
			key: "updateNoOpRecordingEnsuringBackgroundContinuity",
			value: function(o) {
				N() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(o)
			}
		}, {
			key: "toggleParticipantAudioBasedOnNativeAudioFocus",
			value: function() {
				var o, a;
				if (N()) {
					var d = (o = this._callMachine()) === null || o === void 0 || (a = o.store) === null || a === void 0 ? void 0 : a.getState();
					for (var f in d == null ? void 0 : d.streams) {
						var g = d.streams[f];
						g && g.pendingTrack && g.pendingTrack.kind === "audio" && (g.pendingTrack.enabled = this._hasNativeAudioFocus)
					}
				}
			}
		}, {
			key: "disableReactNativeAutoDeviceManagement",
			value: function(o) {
				return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[o]
			}
		}, {
			key: "absoluteUrl",
			value: function(o) {
				if (o !== void 0) {
					var a = document.createElement("a");
					return a.href = o, a.href
				}
			}
		}, {
			key: "sayHello",
			value: function() {
				var o = "hello, world.";
				return console.log(o), o
			}
		}, {
			key: "_logCallQualityTestResults",
			value: function(o) {
				if (this._callMachineInitialized) {
					var a = {
						action: bt,
						level: "info",
						code: 1012,
						results: o
					};
					this.sendMessageToCallMachine(a)
				} else console.warn("_logCallQualityTestResults() must be called after daily initialization")
			}
		}, {
			key: "_logUseAfterDestroy",
			value: function() {
				if (this.needsLoad())
					if (fe && !fe.needsLoad()) {
						var o = {
							action: bt,
							level: "error",
							code: this.strictMode ? 9995 : 9997
						};
						fe.sendMessageToCallMachine(o)
					} else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
				else {
					var a = {
						action: bt,
						level: "error",
						code: this.strictMode ? 9995 : 9997
					};
					this._messageChannel.sendMessageToCallMachine(a, null, this._iframe, this._callFrameId)
				}
			}
		}, {
			key: "_logDuplicateInstanceAttempt",
			value: function() {
				var o = fe._callMachineInitialized ? fe : this._callMachineInitialized ? this : void 0;
				o ? (o.sendMessageToCallMachine({
					action: bt,
					level: "warn",
					code: this.strictMode ? 9990 : 9992
				}), this._delayDuplicateInstanceLog = !1) : (this._delayDuplicateInstanceLog = !0, fe._delayDuplicateInstanceLog = !0)
			}
		}, {
			key: "_maybeSendToSentry",
			value: function(o) {
				var a, d, f, g, v, E;
				if (!((a = o.error) !== null && a !== void 0 && a.type && !["connection-error", "end-of-life", "no-room"].includes(o.error.type))) {
					var k = (d = this.properties) !== null && d !== void 0 && d.url ? new URL(this.properties.url) : void 0,
						P = "production";
					k && k.host.includes(".staging.daily") && (P = "staging");
					var J, H, K, ie, q, ur = new ja({
							dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844",
							transport: Fa,
							integrations: [new Ii.GlobalHandlers({
								onunhandledrejection: !1
							}), new Ii.HttpContext],
							environment: P
						}),
						Q = new On(ur, void 0, re.version());
					if (this.session_id && Q.setExtra("sessionId", this.session_id), this.properties) {
						var ge = A({}, this.properties);
						ge.userName = ge.userName ? "[Filtered]" : void 0, ge.userData = ge.userData ? "[Filtered]" : void 0, ge.token = ge.token ? "[Filtered]" : void 0, Q.setExtra("properties", ge)
					}
					if (k) {
						var Je = k.searchParams.get("domain");
						if (!Je) {
							var cn = k.host.match(/(.*?)\./);
							Je = cn && cn[1] || ""
						}
						Je && Q.setTag("domain", Je)
					}
					o.error && (Q.setTag("fatalErrorType", o.error.type), Q.setExtra("errorDetails", o.error.details), !((J = o.error.details) === null || J === void 0) && J.uri && Q.setTag("serverAddress", o.error.details.uri), !((H = o.error.details) === null || H === void 0) && H.workerGroup && Q.setTag("workerGroup", o.error.details.workerGroup), !((K = o.error.details) === null || K === void 0) && K.geoGroup && Q.setTag("geoGroup", o.error.details.geoGroup), !((ie = o.error.details) === null || ie === void 0) && ie.on && Q.setTag("connectionAttempt", o.error.details.on), (q = o.error.details) !== null && q !== void 0 && q.bundleUrl && (Q.setTag("bundleUrl", o.error.details.bundleUrl), Q.setTag("bundleError", o.error.details.sourceError.type))), Q.setTags({
						callMode: this._callObjectMode ? N() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (g = f.dailyConfig) !== null && g !== void 0 && (v = g.callMode) !== null && v !== void 0 && v.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame",
						version: re.version()
					});
					var M = ((E = o.error) === null || E === void 0 ? void 0 : E.msg) || o.errorMsg;
					Q.run(function(kl) {
						kl.captureException(new Error(M))
					})
				}
			}
		}, {
			key: "_callMachine",
			value: function() {
				var o, a, d;
				return (o = window._daily) === null || o === void 0 || (a = o.instances) === null || a === void 0 || (d = a[this._callFrameId]) === null || d === void 0 ? void 0 : d.callMachine
			}
		}], [{
			key: "supportedBrowser",
			value: function() {
				if (N()) return {
					supported: !0,
					mobile: !0,
					name: "React Native",
					version: null,
					supportsScreenShare: !0,
					supportsSfu: !0,
					supportsVideoProcessing: !1,
					supportsAudioProcessing: !1
				};
				var o = ea.getParser(de());
				return {
					supported: !!Bo(),
					mobile: o.getPlatformType() === "mobile",
					name: o.getBrowserName(),
					version: o.getBrowserVersion(),
					supportsFullscreen: !!xo(),
					supportsScreenShare: !!Sc(),
					supportsSfu: !!Bo(),
					supportsVideoProcessing: jo(),
					supportsAudioProcessing: Fo()
				}
			}
		}, {
			key: "version",
			value: function() {
				return "0.66.0"
			}
		}, {
			key: "createCallObject",
			value: function() {
				var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				return o.layout = "none", new re(null, o)
			}
		}, {
			key: "wrap",
			value: function(o) {
				var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				if (I(), !o || !o.contentWindow || typeof o.src != "string") throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
				return a.layout || (a.customLayout ? a.layout = "custom-v1" : a.layout = "browser"), new re(o, a)
			}
		}, {
			key: "createFrame",
			value: function(o, a) {
				var d, f;
				I(), o && a ? (d = o, f = a) : o && o.append ? (d = o, f = {}) : (d = document.body, f = o || {});
				var g = f.iframeStyle;
				g || (g = d === document.body ? {
					position: "fixed",
					border: "1px solid black",
					backgroundColor: "white",
					width: "375px",
					height: "450px",
					right: "1em",
					bottom: "1em"
				} : {
					border: 0,
					width: "100%",
					height: "100%"
				});
				var v = document.createElement("iframe");
				window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? v.allow = "microphone, camera" : v.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", v.style.visibility = "hidden", d.appendChild(v), v.style.visibility = null, Object.keys(g).forEach(function(E) {
					return v.style[E] = g[E]
				}), f.layout || (f.customLayout ? f.layout = "custom-v1" : f.layout = "browser");
				try {
					return new re(v, f)
				} catch (E) {
					throw d.removeChild(v), E
				}
			}
		}, {
			key: "createTransparentFrame",
			value: function() {
				var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				I();
				var a = document.createElement("iframe");
				return a.allow = "microphone; camera; autoplay", a.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(a), o.layout || (o.layout = "custom-v1"), re.wrap(a, o)
			}
		}, {
			key: "getCallInstance",
			value: function() {
				return fe
			}
		}]), re
	}();

	function ot(n, e) {
		var t = {};
		for (var r in n)
			if (n[r] instanceof MediaStreamTrack) t[r] = St;
			else if (r === "dailyConfig") {
			if (n[r].modifyLocalSdpHook) {
				var i = window._daily.instances[e].customCallbacks || {};
				i.modifyLocalSdpHook = n[r].modifyLocalSdpHook, window._daily.instances[e].customCallbacks = i, delete n[r].modifyLocalSdpHook
			}
			if (n[r].modifyRemoteSdpHook) {
				var s = window._daily.instances[e].customCallbacks || {};
				s.modifyRemoteSdpHook = n[r].modifyRemoteSdpHook, window._daily.instances[e].customCallbacks = s, delete n[r].modifyRemoteSdpHook
			}
			t[r] = n[r]
		} else t[r] = n[r];
		return t
	}

	function Y(n) {
		var e = arguments.length > 2 ? arguments[2] : void 0;
		if (n !== Ve) {
			var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
			throw e && (t += " ".concat(e)), console.error(t), new Error(t)
		}
	}

	function rn(n, e) {
		return [qt, Ve].includes(n) || e
	}

	function as(n, e) {
		var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method",
			r = arguments.length > 3 ? arguments[3] : void 0;
		if (rn(n, e)) {
			var i = "".concat(t, " not supported after joining a meeting.");
			throw r && (i += " ".concat(r)), console.error(i), new Error(i)
		}
	}

	function or(n) {
		var e = arguments.length > 2 ? arguments[2] : void 0;
		if (!n) {
			var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.");
			throw e && (t += " ".concat(e)), console.error(t), new Error(t)
		}
	}

	function qe(n) {
		if (n) {
			var e = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
			throw console.error(e), new Error(e)
		}
	}

	function me(n) {
		if (!n) {
			var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
			throw console.error(e), new Error(e)
		}
	}

	function te(n) {
		if (n) {
			var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
			throw console.error(e), new Error(e)
		}
	}

	function I() {
		if (N()) throw new Error("This daily-js method is not currently supported in React Native")
	}

	function Et() {
		if (!N()) throw new Error("This daily-js method is only supported in React Native")
	}

	function cs(n) {
		if (n === void 0) return !0;
		var e;
		if (typeof n == "string") e = n;
		else try {
			e = JSON.stringify(n), X(JSON.parse(e), n) || console.warn("The userData provided will be modified when serialized.")
		} catch (t) {
			throw Error("userData must be serializable to JSON: ".concat(t))
		}
		if (e.length > 4096) throw Error("userData is too large (".concat(e.length, " characters). Maximum size suppported is ").concat(4096, "."));
		return !0
	}

	function ls(n, e) {
		for (var t = e.allowAllParticipantsKey, r = function(m) {
				var y = ["local"];
				return t || y.push("*"), m && !y.includes(m)
			}, i = function(m) {
				return !!(m.layer === void 0 || Number.isInteger(m.layer) && m.layer >= 0 || m.layer === "inherit")
			}, s = function(m) {
				return !!m && !(m.video && !i(m.video)) && !(m.screenVideo && !i(m.screenVideo))
			}, c = 0, l = Object.entries(n); c < l.length; c++) {
			var u = Ne(l[c], 2),
				h = u[0],
				p = u[1];
			if (!r(h) || !s(p)) return !1
		}
		return !0
	}

	function us(n) {
		return j(n) === "object" && !(n.video && (j(n.video) !== "object" || ! function(i) {
			var s = ["type", "config"];
			return !i || j(i) !== "object" || ! function(c) {
				return typeof c != "string" ? !1 : Object.values(Xt).includes(c) ? !0 : (console.error("inputSettings video processor type invalid"), !1)
			}(i.type) || i.config && (j(i.config) !== "object" || ! function(c, l) {
				var u = Object.keys(l);
				if (u.length === 0) return !0;
				var h = "invalid object in inputSettings -> video -> processor -> config";
				switch (c) {
					case Xt.BGBLUR:
						return u.length > 1 || u[0] !== "strength" ? (console.error(h), !1) : !(typeof l.strength != "number" || l.strength <= 0 || l.strength > 1 || isNaN(l.strength)) || (console.error("".concat(h, "; expected: {0 < strength <= 1}, got: ").concat(l.strength)), !1);
					case Xt.BGIMAGE:
						return !(l.source !== void 0 && ! function(p) {
							if (p.source === "default") return p.type = "default", !0;
							if (p.source instanceof ArrayBuffer) return !0;
							if (ut(p.source)) return p.type = "url", !! function(w) {
								var b = new URL(w),
									S = b.pathname;
								if (b.protocol === "data:") try {
									var T = S.substring(S.indexOf(":") + 1, S.indexOf(";")).split("/")[1];
									return qn.includes(T)
								} catch (G) {
									return console.error("failed to deduce blob content type", G), !1
								}
								var L = S.split(".").at(-1).toLowerCase().trim();
								return qn.includes(L)
							}(p.source) || (console.error("invalid image type; supported types: [".concat(qn.join(", "), "]")), !1);
							return m = p.source, y = Number(m), isNaN(y) || !Number.isInteger(y) || y <= 0 || y > No ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(No)), !1) : (p.type = "daily-preselect", !0);
							var m, y
						}(l));
					default:
						return !0
				}
			}(i.type, i.config)) ? !1 : (Object.keys(i).filter(function(c) {
				return !s.includes(c)
			}).forEach(function(c) {
				console.warn("invalid key inputSettings -> video -> processor : ".concat(c)), delete i[c]
			}), !0)
		}(n.video.processor))) && !(n.audio && (j(n.audio) !== "object" || (t = n.audio.processor, r = ["type"], !t || j(t) !== "object" || (Object.keys(t).filter(function(i) {
			return !r.includes(i)
		}).forEach(function(i) {
			console.warn("invalid key inputSettings -> audio -> processor : ".concat(i)), delete t[i]
		}), e = t.type, typeof e != "string" || !Object.values(Do).includes(e) && (console.error("inputSettings audio processor type invalid"), 1)))));
		var e, t, r
	}

	function ds(n, e) {
		var t, r = [];
		n.video && !jo((t = e == null ? void 0 : e.useLegacyVideoProcessor) !== null && t !== void 0 && t) && (delete n.video, r.push("video")), n.audio && !Fo() && (delete n.audio, r.push("audio")), r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")))
	}

	function sr() {
		var n = Object.values(Xt).join(" | "),
			e = Object.values(Do).join(" | ");
		return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(n, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }")
	}

	function hs(n) {
		var e = n.allowAllParticipantsKey;
		return "receiveSettings must be of the form { [<remote participant id> | ".concat(xi).concat(e ? ' | "'.concat(ji, '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'
	}

	function ps() {
		return "customIntegrations should be an object of type ".concat(JSON.stringify(ir), ".")
	}

	function fs(n) {
		if (n && j(n) !== "object" || Array.isArray(n)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(tn), ".")), !1;
		if (n)
			for (var e = 0, t = Object.entries(n); e < t.length; e++)
				for (var r = Ne(t[e], 1)[0], i = 0, s = Object.entries(n[r]); i < s.length; i++) {
					var c = Ne(s[i], 2),
						l = c[0],
						u = c[1];
					if (l === "iconPath" && !ut(u) || l === "iconPathDarkMode" && !ut(u)) return console.error("customTrayButton ".concat(l, " should be a url.")), !1;
					var h = tn.id[l];
					if (!h) return console.error("customTrayButton does not support key ".concat(l)), !1;
					if (j(u) !== h) return console.error("customTrayButton ".concat(l, " should be a ").concat(h, ".")), !1
				}
		return !0
	}

	function ms(n) {
		if (!n || n && j(n) !== "object" || Array.isArray(n)) return console.error(ps()), !1;
		for (var e = function(m) {
				return "".concat(m, " should be ").concat(ir.id[m])
			}, t = function(m, y) {
				return console.error("customIntegration ".concat(m, ": ").concat(y))
			}, r = 0, i = Object.entries(n); r < i.length; r++) {
			var s = Ne(i[r], 1)[0];
			if (!("label" in n[s])) return t(s, "label is required"), !1;
			if (!("location" in n[s])) return t(s, "location is required"), !1;
			if (!("src" in n[s]) && !("srcdoc" in n[s])) return t(s, "src or srcdoc is required"), !1;
			for (var c = 0, l = Object.entries(n[s]); c < l.length; c++) {
				var u = Ne(l[c], 2),
					h = u[0],
					p = u[1];
				switch (h) {
					case "allow":
					case "csp":
					case "name":
					case "referrerPolicy":
					case "sandbox":
						if (typeof p != "string") return t(s, e(h)), !1;
						break;
					case "iconURL":
						if (!ut(p)) return t(s, "".concat(h, " should be a url")), !1;
						break;
					case "src":
						if ("srcdoc" in n[s]) return t(s, "cannot have both src and srcdoc"), !1;
						if (!ut(p)) return t(s, 'src "'.concat(p, '" is not a valid URL')), !1;
						break;
					case "srcdoc":
						if ("src" in n[s]) return t(s, "cannot have both src and srcdoc"), !1;
						if (typeof p != "string") return t(s, e(h)), !1;
						break;
					case "location":
						if (!["main", "sidebar"].includes(p)) return t(s, e(h)), !1;
						break;
					case "controlledBy":
						if (p !== "*" && p !== "owners" && (!Array.isArray(p) || p.some(function(m) {
								return typeof m != "string"
							}))) return t(s, e(h)), !1;
						break;
					case "shared":
						if ((!Array.isArray(p) || p.some(function(m) {
								return typeof m != "string"
							})) && p !== "owners" && typeof p != "boolean") return t(s, e(h)), !1;
						break;
					default:
						if (!ir.id[h]) return console.error("customIntegration does not support key ".concat(h)), !1
				}
			}
		}
		return !0
	}

	function gs(n, e) {
		if (e === void 0) return !1;
		switch (j(e)) {
			case "string":
				return j(n) === e;
			case "object":
				if (j(n) !== "object") return !1;
				for (var t in n)
					if (!gs(n[t], e[t])) return !1;
				return !0;
			default:
				return !1
		}
	}

	function vs(n) {
		if (j(n) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
		if (n.state && !Object.values(Gn).includes(n.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Gn));
		if (n.volume) {
			if (typeof n.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
			if (n.volume < 0 || n.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0")
		}
	}

	function _s(n, e, t) {
		return !(typeof n != "number" || n < e || n > t)
	}

	function ar(n, e) {
		return n && !e && delete n.data, n
	}
	const Xc = ve(Object.freeze(Object.defineProperty({
		__proto__: null,
		DAILY_ACCESS_LEVEL_FULL: Ri,
		DAILY_ACCESS_LEVEL_LOBBY: Xa,
		DAILY_ACCESS_LEVEL_NONE: Za,
		DAILY_ACCESS_UNKNOWN: Jt,
		DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: hc,
		DAILY_CAMERA_ERROR_CAM_IN_USE: uc,
		DAILY_CAMERA_ERROR_CONSTRAINTS: gc,
		DAILY_CAMERA_ERROR_MIC_IN_USE: dc,
		DAILY_CAMERA_ERROR_NOT_FOUND: mc,
		DAILY_CAMERA_ERROR_PERMISSIONS: pc,
		DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: fc,
		DAILY_CAMERA_ERROR_UNKNOWN: vc,
		DAILY_EVENT_ACCESS_STATE_UPDATED: Hi,
		DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: vo,
		DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: _o,
		DAILY_EVENT_APP_MSG: co,
		DAILY_EVENT_CAMERA_ERROR: Vi,
		DAILY_EVENT_CPU_LOAD_CHANGE: So,
		DAILY_EVENT_ERROR: Qt,
		DAILY_EVENT_EXIT_FULLSCREEN: $e,
		DAILY_EVENT_FACE_COUNTS_UPDATED: wo,
		DAILY_EVENT_FULLSCREEN: Ye,
		DAILY_EVENT_IFRAME_LAUNCH_CONFIG: Bi,
		DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: Fi,
		DAILY_EVENT_INPUT_SETTINGS_UPDATED: Oo,
		DAILY_EVENT_JOINED_MEETING: Yi,
		DAILY_EVENT_JOINING_MEETING: Un,
		DAILY_EVENT_LANG_UPDATED: Mo,
		DAILY_EVENT_LEFT_MEETING: $i,
		DAILY_EVENT_LIVE_STREAMING_ERROR: Co,
		DAILY_EVENT_LIVE_STREAMING_STARTED: Eo,
		DAILY_EVENT_LIVE_STREAMING_STOPPED: To,
		DAILY_EVENT_LIVE_STREAMING_UPDATED: ko,
		DAILY_EVENT_LOADED: Wt,
		DAILY_EVENT_LOADING: Fn,
		DAILY_EVENT_LOAD_ATTEMPT_FAILED: Bn,
		DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: go,
		DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: fo,
		DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: mo,
		DAILY_EVENT_MEETING_SESSION_DATA_ERROR: _c,
		DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: Qi,
		DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: Ki,
		DAILY_EVENT_NETWORK_CONNECTION: bo,
		DAILY_EVENT_NETWORK_QUALITY_CHANGE: yo,
		DAILY_EVENT_NONFATAL_ERROR: Kt,
		DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: zi,
		DAILY_EVENT_PARTICIPANT_JOINED: qi,
		DAILY_EVENT_PARTICIPANT_LEFT: Wi,
		DAILY_EVENT_PARTICIPANT_UPDATED: Ji,
		DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: Ao,
		DAILY_EVENT_RECORDING_DATA: ao,
		DAILY_EVENT_RECORDING_ERROR: oo,
		DAILY_EVENT_RECORDING_STARTED: zt,
		DAILY_EVENT_RECORDING_STATS: io,
		DAILY_EVENT_RECORDING_STOPPED: Ht,
		DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: so,
		DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: uo,
		DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: po,
		DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: ho,
		DAILY_EVENT_STARTED_CAMERA: Ui,
		DAILY_EVENT_THEME_UPDATED: jn,
		DAILY_EVENT_TRACK_STARTED: Vn,
		DAILY_EVENT_TRACK_STOPPED: Yn,
		DAILY_EVENT_TRANSCRIPTION_ERROR: ro,
		DAILY_EVENT_TRANSCRIPTION_MSG: lo,
		DAILY_EVENT_TRANSCRIPTION_STARTED: to,
		DAILY_EVENT_TRANSCRIPTION_STOPPED: no,
		DAILY_EVENT_WAITING_PARTICIPANT_ADDED: Xi,
		DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: eo,
		DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: Zi,
		DAILY_FATAL_ERROR_CONNECTION: lc,
		DAILY_FATAL_ERROR_EJECTED: ec,
		DAILY_FATAL_ERROR_EOL: ac,
		DAILY_FATAL_ERROR_EXP_ROOM: rc,
		DAILY_FATAL_ERROR_EXP_TOKEN: ic,
		DAILY_FATAL_ERROR_MEETING_FULL: sc,
		DAILY_FATAL_ERROR_NBF_ROOM: tc,
		DAILY_FATAL_ERROR_NBF_TOKEN: nc,
		DAILY_FATAL_ERROR_NOT_ALLOWED: cc,
		DAILY_FATAL_ERROR_NO_ROOM: oc,
		DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: ji,
		DAILY_RECEIVE_SETTINGS_BASE_KEY: xi,
		DAILY_STATE_ERROR: we,
		DAILY_STATE_JOINED: Ve,
		DAILY_STATE_JOINING: qt,
		DAILY_STATE_LEFT: Se,
		DAILY_STATE_NEW: xn,
		DAILY_TRACK_STATE_BLOCKED: Ja,
		DAILY_TRACK_STATE_INTERRUPTED: Ka,
		DAILY_TRACK_STATE_LOADING: Ha,
		DAILY_TRACK_STATE_OFF: Wa,
		DAILY_TRACK_STATE_PLAYABLE: Qa,
		DAILY_TRACK_STATE_SENDABLE: za,
		default: Qc
	}, Symbol.toStringTag, {
		value: "Module"
	})));
	var cr = {
			exports: {}
		},
		st = typeof Reflect == "object" ? Reflect : null,
		ys = st && typeof st.apply == "function" ? st.apply : function(e, t, r) {
			return Function.prototype.apply.call(e, t, r)
		},
		on;
	st && typeof st.ownKeys == "function" ? on = st.ownKeys : Object.getOwnPropertySymbols ? on = function(e) {
		return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
	} : on = function(e) {
		return Object.getOwnPropertyNames(e)
	};

	function Zc(n) {
		console && console.warn && console.warn(n)
	}
	var bs = Number.isNaN || function(e) {
		return e !== e
	};

	function R() {
		R.init.call(this)
	}
	cr.exports = R, cr.exports.once = rl, R.EventEmitter = R, R.prototype._events = void 0, R.prototype._eventsCount = 0, R.prototype._maxListeners = void 0;
	var Ss = 10;

	function sn(n) {
		if (typeof n != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n)
	}
	Object.defineProperty(R, "defaultMaxListeners", {
		enumerable: !0,
		get: function() {
			return Ss
		},
		set: function(n) {
			if (typeof n != "number" || n < 0 || bs(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
			Ss = n
		}
	}), R.init = function() {
		(this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
	}, R.prototype.setMaxListeners = function(e) {
		if (typeof e != "number" || e < 0 || bs(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
		return this._maxListeners = e, this
	};

	function ws(n) {
		return n._maxListeners === void 0 ? R.defaultMaxListeners : n._maxListeners
	}
	R.prototype.getMaxListeners = function() {
		return ws(this)
	}, R.prototype.emit = function(e) {
		for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
		var i = e === "error",
			s = this._events;
		if (s !== void 0) i = i && s.error === void 0;
		else if (!i) return !1;
		if (i) {
			var c;
			if (t.length > 0 && (c = t[0]), c instanceof Error) throw c;
			var l = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
			throw l.context = c, l
		}
		var u = s[e];
		if (u === void 0) return !1;
		if (typeof u == "function") ys(u, this, t);
		else
			for (var h = u.length, p = Ms(u, h), r = 0; r < h; ++r) ys(p[r], this, t);
		return !0
	};

	function Es(n, e, t, r) {
		var i, s, c;
		if (sn(t), s = n._events, s === void 0 ? (s = n._events = Object.create(null), n._eventsCount = 0) : (s.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), s = n._events), c = s[e]), c === void 0) c = s[e] = t, ++n._eventsCount;
		else if (typeof c == "function" ? c = s[e] = r ? [t, c] : [c, t] : r ? c.unshift(t) : c.push(t), i = ws(n), i > 0 && c.length > i && !c.warned) {
			c.warned = !0;
			var l = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
			l.name = "MaxListenersExceededWarning", l.emitter = n, l.type = e, l.count = c.length, Zc(l)
		}
		return n
	}
	R.prototype.addListener = function(e, t) {
		return Es(this, e, t, !1)
	}, R.prototype.on = R.prototype.addListener, R.prototype.prependListener = function(e, t) {
		return Es(this, e, t, !0)
	};

	function el() {
		if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
	}

	function ks(n, e, t) {
		var r = {
				fired: !1,
				wrapFn: void 0,
				target: n,
				type: e,
				listener: t
			},
			i = el.bind(r);
		return i.listener = t, r.wrapFn = i, i
	}
	R.prototype.once = function(e, t) {
		return sn(t), this.on(e, ks(this, e, t)), this
	}, R.prototype.prependOnceListener = function(e, t) {
		return sn(t), this.prependListener(e, ks(this, e, t)), this
	}, R.prototype.removeListener = function(e, t) {
		var r, i, s, c, l;
		if (sn(t), i = this._events, i === void 0) return this;
		if (r = i[e], r === void 0) return this;
		if (r === t || r.listener === t) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
		else if (typeof r != "function") {
			for (s = -1, c = r.length - 1; c >= 0; c--)
				if (r[c] === t || r[c].listener === t) {
					l = r[c].listener, s = c;
					break
				} if (s < 0) return this;
			s === 0 ? r.shift() : tl(r, s), r.length === 1 && (i[e] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", e, l || t)
		}
		return this
	}, R.prototype.off = R.prototype.removeListener, R.prototype.removeAllListeners = function(e) {
		var t, r, i;
		if (r = this._events, r === void 0) return this;
		if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]), this;
		if (arguments.length === 0) {
			var s = Object.keys(r),
				c;
			for (i = 0; i < s.length; ++i) c = s[i], c !== "removeListener" && this.removeAllListeners(c);
			return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
		}
		if (t = r[e], typeof t == "function") this.removeListener(e, t);
		else if (t !== void 0)
			for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
		return this
	};

	function Ts(n, e, t) {
		var r = n._events;
		if (r === void 0) return [];
		var i = r[e];
		return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? nl(i) : Ms(i, i.length)
	}
	R.prototype.listeners = function(e) {
		return Ts(this, e, !0)
	}, R.prototype.rawListeners = function(e) {
		return Ts(this, e, !1)
	}, R.listenerCount = function(n, e) {
		return typeof n.listenerCount == "function" ? n.listenerCount(e) : Cs.call(n, e)
	}, R.prototype.listenerCount = Cs;

	function Cs(n) {
		var e = this._events;
		if (e !== void 0) {
			var t = e[n];
			if (typeof t == "function") return 1;
			if (t !== void 0) return t.length
		}
		return 0
	}
	R.prototype.eventNames = function() {
		return this._eventsCount > 0 ? on(this._events) : []
	};

	function Ms(n, e) {
		for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r];
		return t
	}

	function tl(n, e) {
		for (; e + 1 < n.length; e++) n[e] = n[e + 1];
		n.pop()
	}

	function nl(n) {
		for (var e = new Array(n.length), t = 0; t < e.length; ++t) e[t] = n[t].listener || n[t];
		return e
	}

	function rl(n, e) {
		return new Promise(function(t, r) {
			function i(c) {
				n.removeListener(e, s), r(c)
			}

			function s() {
				typeof n.removeListener == "function" && n.removeListener("error", i), t([].slice.call(arguments))
			}
			As(n, e, s, {
				once: !0
			}), e !== "error" && il(n, i, {
				once: !0
			})
		})
	}

	function il(n, e, t) {
		typeof n.on == "function" && As(n, "error", e, t)
	}

	function As(n, e, t, r) {
		if (typeof n.on == "function") r.once ? n.once(e, t) : n.on(e, t);
		else if (typeof n.addEventListener == "function") n.addEventListener(e, function i(s) {
			r.once && n.removeEventListener(e, i), t(s)
		});
		else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n)
	}
	var ol = cr.exports,
		an = {},
		Ie = {};
	Object.defineProperty(Ie, "__esModule", {
		value: !0
	}), Ie.Api = Ie.HttpClient = Ie.ContentType = void 0;
	var U;
	(function(n) {
		n.Json = "application/json", n.FormData = "multipart/form-data", n.UrlEncoded = "application/x-www-form-urlencoded", n.Text = "text/plain"
	})(U || (Ie.ContentType = U = {}));
	class Os {
		constructor(e = {}) {
			V(this, "baseUrl", "https://api.vapi.ai");
			V(this, "securityData", null);
			V(this, "securityWorker");
			V(this, "abortControllers", new Map);
			V(this, "customFetch", (...e) => fetch(...e));
			V(this, "baseApiParams", {
				credentials: "same-origin",
				headers: {},
				redirect: "follow",
				referrerPolicy: "no-referrer"
			});
			V(this, "setSecurityData", e => {
				this.securityData = e
			});
			V(this, "contentFormatters", {
				[U.Json]: e => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
				[U.Text]: e => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
				[U.FormData]: e => Object.keys(e || {}).reduce((t, r) => {
					const i = e[r];
					return t.append(r, i instanceof Blob ? i : typeof i == "object" && i !== null ? JSON.stringify(i) : `${i}`), t
				}, new FormData),
				[U.UrlEncoded]: e => this.toQueryString(e)
			});
			V(this, "createAbortSignal", e => {
				if (this.abortControllers.has(e)) {
					const r = this.abortControllers.get(e);
					return r ? r.signal : void 0
				}
				const t = new AbortController;
				return this.abortControllers.set(e, t), t.signal
			});
			V(this, "abortRequest", e => {
				const t = this.abortControllers.get(e);
				t && (t.abort(), this.abortControllers.delete(e))
			});
			V(this, "request", async ({
				body: e,
				secure: t,
				path: r,
				type: i,
				query: s,
				format: c,
				baseUrl: l,
				cancelToken: u,
				...h
			}) => {
				const p = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {},
					m = this.mergeRequestParams(h, p),
					y = s && this.toQueryString(s),
					w = this.contentFormatters[i || U.Json],
					b = c || m.format;
				return this.customFetch(`${l||this.baseUrl||""}${r}${y?`?${y}`:""}`, {
					...m,
					headers: {
						...m.headers || {},
						...i && i !== U.FormData ? {
							"Content-Type": i
						} : {}
					},
					signal: (u ? this.createAbortSignal(u) : m.signal) || null,
					body: typeof e > "u" || e === null ? null : w(e)
				}).then(async S => {
					const T = S;
					T.data = null, T.error = null;
					const L = b ? await S[b]().then(G => (T.ok ? T.data = G : T.error = G, T)).catch(G => (T.error = G, T)) : T;
					if (u && this.abortControllers.delete(u), !S.ok) throw L;
					return L
				})
			});
			Object.assign(this, e)
		}
		encodeQueryParam(e, t) {
			return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`
		}
		addQueryParam(e, t) {
			return this.encodeQueryParam(t, e[t])
		}
		addArrayQueryParam(e, t) {
			return e[t].map(i => this.encodeQueryParam(t, i)).join("&")
		}
		toQueryString(e) {
			const t = e || {};
			return Object.keys(t).filter(i => typeof t[i] < "u").map(i => Array.isArray(t[i]) ? this.addArrayQueryParam(t, i) : this.addQueryParam(t, i)).join("&")
		}
		addQueryParams(e) {
			const t = this.toQueryString(e);
			return t ? `?${t}` : ""
		}
		mergeRequestParams(e, t) {
			return {
				...this.baseApiParams,
				...e,
				...t || {},
				headers: {
					...this.baseApiParams.headers || {},
					...e.headers || {},
					...t && t.headers || {}
				}
			}
		}
	}
	Ie.HttpClient = Os;
	class sl extends Os {
		constructor() {
			super(...arguments);
			V(this, "assistant", {
				assistantControllerCreate: (t, r = {}) => this.request({
					path: "/assistant",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				}),
				assistantControllerFindAll: (t, r = {}) => this.request({
					path: "/assistant",
					method: "GET",
					query: t,
					secure: !0,
					format: "json",
					...r
				}),
				assistantControllerFindOne: (t, r = {}) => this.request({
					path: `/assistant/${t}`,
					method: "GET",
					secure: !0,
					format: "json",
					...r
				}),
				assistantControllerUpdate: (t, r, i = {}) => this.request({
					path: `/assistant/${t}`,
					method: "PATCH",
					body: r,
					secure: !0,
					type: U.Json,
					format: "json",
					...i
				}),
				assistantControllerReplace: (t, r, i = {}) => this.request({
					path: `/assistant/${t}`,
					method: "PUT",
					body: r,
					secure: !0,
					type: U.Json,
					format: "json",
					...i
				}),
				assistantControllerRemove: (t, r = {}) => this.request({
					path: `/assistant/${t}`,
					method: "DELETE",
					secure: !0,
					format: "json",
					...r
				})
			});
			V(this, "call", {
				callControllerFindAll: (t, r = {}) => this.request({
					path: "/call",
					method: "GET",
					query: t,
					secure: !0,
					format: "json",
					...r
				}),
				callControllerFindOne: (t, r = {}) => this.request({
					path: `/call/${t}`,
					method: "GET",
					secure: !0,
					format: "json",
					...r
				}),
				callControllerDeleteCallData: (t, r = {}) => this.request({
					path: `/call/${t}`,
					method: "DELETE",
					secure: !0,
					format: "json",
					...r
				}),
				callControllerUpdate: (t, r, i = {}) => this.request({
					path: `/call/${t}`,
					method: "PATCH",
					body: r,
					secure: !0,
					type: U.Json,
					format: "json",
					...i
				}),
				callControllerCreatePhoneCall: (t, r = {}) => this.request({
					path: "/call/phone",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				}),
				callControllerCreateWebCall: (t, r = {}) => this.request({
					path: "/call/web",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				})
			});
			V(this, "credential", {
				credentialControllerCreate: (t, r = {}) => this.request({
					path: "/credential",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				}),
				credentialControllerFindAll: (t, r = {}) => this.request({
					path: "/credential",
					method: "GET",
					query: t,
					secure: !0,
					format: "json",
					...r
				}),
				credentialControllerFindOne: (t, r = {}) => this.request({
					path: `/credential/${t}`,
					method: "GET",
					secure: !0,
					format: "json",
					...r
				}),
				credentialControllerUpdate: (t, r, i = {}) => this.request({
					path: `/credential/${t}`,
					method: "PUT",
					body: r,
					secure: !0,
					type: U.Json,
					format: "json",
					...i
				}),
				credentialControllerRemove: (t, r = {}) => this.request({
					path: `/credential/${t}`,
					method: "DELETE",
					secure: !0,
					format: "json",
					...r
				})
			});
			V(this, "phoneNumber", {
				phoneNumberControllerBuy: (t, r = {}) => this.request({
					path: "/phone-number/buy",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				}),
				phoneNumberControllerImportTwilio: (t, r = {}) => this.request({
					path: "/phone-number/import/twilio",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				}),
				phoneNumberControllerImportVonage: (t, r = {}) => this.request({
					path: "/phone-number/import/vonage",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				}),
				phoneNumberControllerFindAll: (t, r = {}) => this.request({
					path: "/phone-number",
					method: "GET",
					query: t,
					secure: !0,
					format: "json",
					...r
				}),
				phoneNumberControllerFindOne: (t, r = {}) => this.request({
					path: `/phone-number/${t}`,
					method: "GET",
					secure: !0,
					format: "json",
					...r
				}),
				phoneNumberControllerUpdate: (t, r, i = {}) => this.request({
					path: `/phone-number/${t}`,
					method: "PATCH",
					body: r,
					secure: !0,
					type: U.Json,
					format: "json",
					...i
				}),
				phoneNumberControllerRemove: (t, r = {}) => this.request({
					path: `/phone-number/${t}`,
					method: "DELETE",
					secure: !0,
					format: "json",
					...r
				})
			});
			V(this, "metrics", {
				metricsControllerFindAll: (t, r = {}) => this.request({
					path: "/metrics",
					method: "GET",
					query: t,
					secure: !0,
					format: "json",
					...r
				})
			});
			V(this, "log", {
				loggingControllerGetLogs: (t, r = {}) => this.request({
					path: "/log",
					method: "GET",
					query: t,
					secure: !0,
					format: "json",
					...r
				})
			});
			V(this, "tool", {
				toolControllerCreate: (t, r = {}) => this.request({
					path: "/tool",
					method: "POST",
					body: t,
					secure: !0,
					type: U.Json,
					format: "json",
					...r
				}),
				toolControllerFindAll: (t, r = {}) => this.request({
					path: "/tool",
					method: "GET",
					query: t,
					secure: !0,
					format: "json",
					...r
				}),
				toolControllerFindOne: (t, r = {}) => this.request({
					path: `/tool/${t}`,
					method: "GET",
					secure: !0,
					format: "json",
					...r
				}),
				toolControllerUpdate: (t, r, i = {}) => this.request({
					path: `/tool/${t}`,
					method: "PATCH",
					body: r,
					secure: !0,
					type: U.Json,
					format: "json",
					...i
				}),
				toolControllerRemove: (t, r = {}) => this.request({
					path: `/tool/${t}`,
					method: "DELETE",
					secure: !0,
					format: "json",
					...r
				})
			});
			V(this, "file", {
				fileControllerCreate: (t, r = {}) => this.request({
					path: "/file/upload",
					method: "POST",
					body: t,
					secure: !0,
					type: U.FormData,
					format: "json",
					...r
				}),
				fileControllerFindAll: (t = {}) => this.request({
					path: "/file",
					method: "GET",
					secure: !0,
					format: "json",
					...t
				}),
				fileControllerFindOne: (t, r = {}) => this.request({
					path: `/file/${t}`,
					method: "GET",
					secure: !0,
					format: "json",
					...r
				}),
				fileControllerRemove: (t, r = {}) => this.request({
					path: `/file/${t}`,
					method: "DELETE",
					secure: !0,
					format: "json",
					...r
				})
			})
		}
	}
	Ie.Api = sl, Object.defineProperty(an, "__esModule", {
		value: !0
	}), an.client = void 0;
	const al = Ie,
		cl = new al.Api({
			baseUrl: "https://api.vapi.ai",
			baseApiParams: {
				secure: !0
			},
			securityWorker: async n => {
				if (n) return {
					headers: {
						Authorization: `Bearer ${n}`
					}
				}
			}
		});
	an.client = cl;
	var Ls = oe && oe.__importDefault || function(n) {
		return n && n.__esModule ? n : {
			default: n
		}
	};
	Object.defineProperty(Ee, "__esModule", {
		value: !0
	});
	const ll = Ls(Xc),
		ul = Ls(ol),
		lr = an;

	function dl(n) {
		const e = document.querySelector(`audio[data-participant-id="${n}"]`);
		e == null || e.remove()
	}
	async function hl(n, e) {
		n.muted = !1, n.autoplay = !0, e != null && (n.srcObject = new MediaStream([e]), await n.play())
	}
	async function pl(n, e) {
		const t = document.createElement("audio");
		return t.dataset.participantId = e, document.body.appendChild(t), await hl(t, n), t
	}

	function fl(n, e, t) {
		n.participant.local || e.updateParticipant(n.participant.session_id, {
			setSubscribedTracks: {
				audio: !0,
				video: t
			}
		})
	}
	class ml extends ul.default {
		on(e, t) {
			return super.on(e, t), this
		}
		once(e, t) {
			return super.once(e, t), this
		}
		emit(e, ...t) {
			return super.emit(e, ...t)
		}
		removeListener(e, t) {
			return super.removeListener(e, t), this
		}
		removeAllListeners(e) {
			return super.removeAllListeners(e), this
		}
	}
	class gl extends ml {
		constructor(t, r) {
			super();
			V(this, "started", !1);
			V(this, "call", null);
			V(this, "speakingTimeout", null);
			lr.client.baseUrl = r ?? "https://api.vapi.ai", lr.client.setSecurityData(t)
		}
		cleanup() {
			var t;
			this.started = !1, (t = this.call) == null || t.destroy(), this.call = null, this.speakingTimeout = null
		}
		async start(t, r, i) {
			var s, c;
			if (!t && !i) throw new Error("Assistant or Squad must be provided.");
			if (this.started) return null;
			this.started = !0;
			try {
				const l = (await lr.client.call.callControllerCreateWebCall({
					assistant: typeof t == "string" ? void 0 : t,
					assistantId: typeof t == "string" ? t : void 0,
					assistantOverrides: r,
					squad: typeof i == "string" ? void 0 : i,
					squadId: typeof i == "string" ? i : void 0
				})).data;
				this.call && this.cleanup();
				const u = ((s = l == null ? void 0 : l.artifactPlan) == null ? void 0 : s.videoRecordingEnabled) ?? !1;
				if (this.call = ll.default.createCallObject({
						audioSource: !0,
						videoSource: u
					}), (c = this.call.iframe()) == null || c.style.setProperty("display", "none"), this.call.on("left-meeting", () => {
						var h;
						this.emit("call-end"), u && ((h = this.call) == null || h.stopRecording()), this.cleanup()
					}), this.call.on("participant-left", h => {
						h && dl(h.participant.session_id)
					}), this.call.on("error", h => {
						var p;
						this.emit("error", h), u && ((p = this.call) == null || p.stopRecording())
					}), this.call.on("camera-error", h => {
						this.emit("error", h)
					}), this.call.on("track-started", async h => {
						var p, m, y;
						!h || !h.participant || (p = h.participant) != null && p.local || h.track.kind === "audio" && (await pl(h.track, h.participant.session_id), ((m = h == null ? void 0 : h.participant) == null ? void 0 : m.user_name) === "Vapi Speaker" && ((y = this.call) == null || y.sendAppMessage("playable")))
					}), this.call.on("participant-joined", h => {
						!h || !this.call || fl(h, this.call, u)
					}), await this.call.join({
						url: l.webCallUrl,
						subscribeToTracksAutomatically: !1
					}), u) {
					const h = new Date().getTime();
					this.call.startRecording({
						width: 1280,
						height: 720,
						backgroundColor: "#FF1F2D3D",
						layout: {
							preset: "default"
						}
					}), this.call.on("recording-started", () => {
						this.send({
							type: "control",
							control: "say-first-message",
							videoRecordingStartDelaySeconds: (new Date().getTime() - h) / 1e3
						})
					})
				}
				return this.call.startRemoteParticipantsAudioLevelObserver(100), this.call.on("remote-participants-audio-level", h => {
					h && this.handleRemoteParticipantsAudioLevel(h)
				}), this.call.on("app-message", h => this.onAppMessage(h)), this.call.on("nonfatal-error", h => {
					var p;
					(h == null ? void 0 : h.type) === "audio-processor-error" && ((p = this.call) == null || p.updateInputSettings({
						audio: {
							processor: {
								type: "none"
							}
						}
					}).then(() => {
						var m;
						(m = this.call) == null || m.setLocalAudio(!0)
					}))
				}), this.call.updateInputSettings({
					audio: {
						processor: {
							type: "noise-cancellation"
						}
					}
				}), l
			} catch (l) {
				return console.error(l), this.emit("error", l), this.cleanup(), null
			}
		}
		onAppMessage(t) {
			if (t) try {
				if (t.data === "listening") return this.emit("call-start");
				try {
					const r = JSON.parse(t.data);
					this.emit("message", r)
				} catch (r) {
					console.log("Error parsing message data: ", r)
				}
			} catch (r) {
				console.error(r)
			}
		}
		handleRemoteParticipantsAudioLevel(t) {
			const r = Object.values(t.participantsAudioLevel).reduce((s, c) => s + c, 0);
			this.emit("volume-level", Math.min(1, r / .15)), r > .01 && (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), this.speakingTimeout = null) : this.emit("speech-start"), this.speakingTimeout = setTimeout(() => {
				this.emit("speech-end"), this.speakingTimeout = null
			}, 1e3))
		}
		stop() {
			var t;
			this.started = !1, (t = this.call) == null || t.destroy(), this.call = null
		}
		send(t) {
			var r;
			(r = this.call) == null || r.sendAppMessage(JSON.stringify(t))
		}
		setMuted(t) {
			try {
				if (!this.call) throw new Error("Call object is not available.");
				this.call.setLocalAudio(!t)
			} catch (r) {
				throw r
			}
		}
		isMuted() {
			try {
				return this.call ? this.call.localAudio() === !1 : !1
			} catch (t) {
				throw t
			}
		}
		say(t, r) {
			this.send({
				type: "say",
				message: t,
				endCallAfterSpoken: r
			})
		}
		setInputDevicesAsync(t) {
			var r;
			(r = this.call) == null || r.setInputDevicesAsync(t)
		}
		setOutputDeviceAsync(t) {
			var r;
			(r = this.call) == null || r.setOutputDeviceAsync(t)
		}
	}
	var vl = Ee.default = gl;
	const _l = ({
			idle: n,
			loading: e,
			active: t,
			width: r,
			height: i,
			position: s,
			offset: c
		}) => {
			const l = parseInt(r) / 2,
				u = parseInt(i) / 2,
				h = {
					"bottom-right": `bottom: ${c}; right: ${c};`,
					"bottom-left": `bottom: ${c}; left: ${c};`,
					"top-right": `top: ${c}; right: ${c};`,
					"top-left": `top: ${c}; left: ${c};`,
					bottom: `bottom: ${c}; left: 50%; margin-left: -${l}px;`,
					right: `top: 50%; right: ${c}; margin-top: -${u}px;`,
					left: `top: 50%; left: ${c}; margin-top: -${u}px;`,
					top: `top: ${c}; left: 50%; margin-left: -${l}px;`
				},
				p = document.createElement("style");
			p.innerText = `
    @keyframes bounce {
      30% {
        transform: translateY(0%);
      }
      40% {
        transform: translateY(-5%);
      }
      50% {
        transform: translateY(-10%);
      }
      60% {
        transform: translateY(-5%);
      }
      70% {
        transform: translateY(0%);
      }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .vapi-btn {
      border-radius: 50%;
      min-width: ${r};
      height: ${i};
      color: white;
      border: none;
      transition: all 0.3s ease-in-out;
      display: flex;
	  flex-direction: column;
	  justify-content: center;
      text-align: center;
      align-items: center;
      position: absolute;
      padding: 0;
	  cursor: none;
      animation: bounce 2s ease-in-out infinite;
      ${h[s]}
    }

    .vapi-btn-round {
		border-radius: 30px;
		color: black;
		background: white;
		display: flex; 
		flex-direction: row;
		justify-content: flex-start; /* Align items to the start (closer to each other) */
		align-items: center; /* Vertically center the items */
		padding: 5px 10px; /* Reduced padding to make items closer */
		border: 0.1px solid rgba(0, 0, 0, 0.3);
		font-family: sans-serif; /* Default font family */
	}

	.vapi-btn-connect {
		border-radius: 8px;
		color: black;
		background: white;
		display: flex; 
		flex-direction: row;
		justify-content: center; 
		align-items: center; 
		padding: 10px;
		border-radius: 30px;
		border: 0.1px solid rgba(0, 0, 0, 0.3);
		font-family: sans-serif; // Add a default font family
	}

    .vapi-btn-pill {
      border-radius: 8px;
      color: black;
      background: white;
      justify-content: flex-start;
      padding: 0px 5px;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }
    #vapi-icon-container {
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
    }

    #vapi-title-container {
      padding: 5px 10px;
    }
    #vapi-title {
      font-size: 1.1em;
    }
    #vapi-subtitle {
      font-size: 0.9em;
    }

    .vapi-btn-is-loading > #vapi-icon-container > img {
      animation: spin 1s linear infinite;
    }

    .vapi-btn-is-active {
      background: ${t.color};
		// background: #ffffff;
      box-shadow: 1px 1px 80px 20px ${t.color};
	  height: 320px;
    }
    .vapi-btn-pill.vapi-btn-is-active {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-active > #vapi-icon-container {
      background: #ffffff;
    }

	//Call Button
	.vapi-avatar {
		width: 40px; 
		height: 40px;
		border-radius: 50%;
		object-fit: cover;
	}

	.vapi-call-btn {
		border: none;
		background: transparent;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 4px;
		// padding: 12px;
		width: 150px;
		height: 40px;
		color: #fff;
		border-radius: 50px;
		background-color:rgb(0, 0, 0);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: background 0.3s ease;
	}

	.vapi-call-btn:hover {
		background-color:rgb(206, 206, 206);
		color: #000;
	}
	/* Change subtitle to black only when the button is hovered */
	.vapi-call-btn:hover #vapi-subtitle {
		color: black;
		font-weight: bold;
	}

	/* Default black icon */
	.vapi-icon {
		width: 20px;
		height: 20px;
		content: url("https://i.imghippo.com/files/gf3941lE.png"); 
	}

	/* Change to white icon on hover */
	.vapi-call-btn:hover .vapi-icon {
		content: url("https://i.imghippo.com/files/On1255WA.png"); 
	}

	.vapi-call-icon {
		width: 24px;
		height: 24px;
		color: #333;
	}

	#vapi-subtitle {
		font-size: 12px;
		text-align: center;
		color: #fff;
	}

    .vapi-btn-is-idle {
      background: ${n.color};
      box-shadow: 1px 1px 10px ${n.color};
	  height: 60px;
    }
    .vapi-btn-pill.vapi-btn-is-idle {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-idle > #vapi-icon-container {
      background: ${n.color};
    }

    .vapi-btn-is-loading {
      background: ${e.color};
      box-shadow: 1px 1px 80px 20px ${e.color};
	  height:60px;
	//   width: 160px;
    }
    .vapi-btn-pill.vapi-btn-is-loading {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-loading > #vapi-icon-container {
      background: ${e.color};
    }
    .vapi-btn-is-speaking {
      // Add speaking styles if different from active/loading/idle
    }
    @font-face {
      font-family: 'LucideIcons';
      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
    }
  `;
			for (let m = 0; m <= 10; m++) p.innerText += `
      .vapi-btn-volume-${m} {
        box-shadow: 1px 1px ${5+m*2}px ${m*2}px ${t.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
      }
    `;
			document.head.appendChild(p)
		},
		yl = ({
			position: n = "bottom",
			offset: e = "40px",
			width: t = "50px",
			height: r = "50px",
			idle: i,
			loading: s,
			active: c
		}, l = "vapi-support-btn") => {
			_l({
				idle: i,
				loading: s,
				active: c,
				width: t,
				height: r,
				position: n,
				offset: e
			});
			const u = document.createElement("button");
			return u.id = l, u.className = "vapi-btn vapi-btn-round vapi-btn-is-idle", u.onclick = () => {}, u
		},
		Ps = "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
		bl = n => (e, t) => {
			const r = n[t];
			if (r) {
				// Set the className for e based on the button type
				if (r.type === "pill") {
					e.className = `vapi-btn vapi-btn-is-${t} vapi-btn-pill`;
				} else if (r.type === "round") {
					e.className = `vapi-btn vapi-btn-is-${t} vapi-btn-round`;
				} else {
					e.className = `vapi-btn vapi-btn-is-${t} vapi-btn-connect`; // Default case
				}

				e.innerHTML = ""; // Clear existing content
				e.title = r.title ?? ""; // Set the title

				// Pill type: icon and title container
				if (r.type === "pill") {
					const i = document.createElement("div");
					i.id = "vapi-icon-container";
					i.style.margin = "0";
					i.style.padding = "0";

					// Create and configure the image element for the main icon
					const s = document.createElement("img");
					const imgs = "https://i.imghippo.com/files/GaxY2772PRI.png";
					s.src = imgs;
					s.alt = "Icon";
					i.appendChild(s);

					// Create the title container (div)
					const c = document.createElement("div");
					c.id = "vapi-title-container";

					// Create the title element
					const l = document.createElement("div");
					l.id = "vapi-title";
					l.textContent = r.title;  

					// Create the timer container
					const timerContainer = document.createElement("div");
					timerContainer.id = "vapi-timer";
					timerContainer.textContent = "00:00"; 
					timerContainer.style.color = "blue"; 
					timerContainer.style.fontWeight = "bold";
					timerContainer.style.marginBottom = "8px"; 

					// Timer logic
					let seconds = 0;
					setInterval(() => {
						seconds++;
						let minutes = Math.floor(seconds / 60);
						let secs = seconds % 60;
						timerContainer.textContent = 
							`${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
					}, 1000);

					// Create the subtitle element wrapped in a button
					const u = document.createElement("button");
					u.id = "vapi-subtitle";
					u.style.fontSize = "1rem";
					u.style.fontWeight = "bold";  
					u.style.borderRadius = "20px"; 
					u.style.padding = "10px 30px";  
					u.style.backgroundColor = "#f0f0f0";  
					u.style.border = "1px solid #ccc";  
					u.style.cursor = "pointer";  
					u.style.transition = "background-color 0.3s, color 0.3s";  
					u.style.color = "black";  
					u.style.display = "flex";  
					u.style.justifyContent = "flex-start";  
					u.style.alignItems = "center"; 

					// Create the icon for the button (icon appears first)
					const icon = document.createElement("img");
					icon.src = "https://i.imghippo.com/files/On1255WA.png";  
					icon.alt = "Call Icon";
					icon.style.width = "20px";  
					icon.style.height = "20px";  
					icon.style.marginRight = "10px"; 

					// Create the subtitle text
					const subtitle = document.createElement("span");
					subtitle.textContent = r.subtitle;  

					// Append the icon first, followed by the subtitle text
					u.appendChild(icon);
					u.appendChild(subtitle);

					// Hover effect inline (use mouseover and mouseout events)
					u.addEventListener("mouseover", function() {
					u.style.backgroundColor = "#FF4242"; 
					u.style.color = "black";  
					});

					u.addEventListener("mouseout", function() {
					u.style.backgroundColor = "#f0f0f0";  
					u.style.color = "black";  
					});

					// Append the timer container first, then the title and subtitle (button) to the title container
					
					c.appendChild(l);
					c.appendChild(timerContainer);
					c.appendChild(u);

					// Append the icon and title container to the parent container (e)
					e.appendChild(i);
					e.appendChild(c);
				// Round type: Avatar and button with icon
				} else if (r.type === "round") {
					const i = document.createElement("div");
					i.id = "vapi-icon-container";
					i.margin = "0";

					// Create the avatar image
					const avatar = document.createElement("img");
					avatar.src = "https://i.imghippo.com/files/ilex4428IG.png";
					avatar.alt = "Avatar";
					avatar.className = "vapi-avatar"; // Class for styling the avatar

					// Apply styles to the avatar to bring it closer to the button
					avatar.style.marginRight = "5px"; // Reduce margin to bring the avatar closer
					avatar.padding = "0";
					avatar.margin = "0";
					const c = document.createElement("div");
					c.id = "vapi-title-container";

					c.style.padding = "0";

					const btn = document.createElement("button");
					btn.className = "vapi-call-btn"; // Apply round button class

					// Create the icon for the button
					const icon = document.createElement("img");
					icon.className = "vapi-icon"; // Class for styling
					icon.src = "https://i.imghippo.com/files/On1255WA.png";
					icon.alt = "Call Icon";

					// Set the icon size to be small
					icon.style.width = "16px";  // Adjust the width as per your needs
					icon.style.height = "16px"; // Ensure the height matches the width

					// Create the subtitle element for the button
					const u = document.createElement("div");
					u.id = "vapi-subtitle";
					u.textContent = r.subtitle;

					// Set the subtitle text size to match the icon
					u.style.fontSize = "0.8rem";  // Adjust this to make it small

					// Add icon and subtitle inside the button
					btn.appendChild(icon);
					btn.appendChild(u);
					c.appendChild(btn); // Add button inside the title container

					// Apply styles to the button to reduce space
					btn.style.display = "flex"; // Ensure the button is in a row layout
					btn.style.alignItems = "center"; // Align icon and subtitle vertically centered
					btn.style.marginLeft = "0"; // Remove left margin to bring the button closer

					i.appendChild(avatar);
					e.appendChild(i);
					e.appendChild(c);

				// Default type: Connect button with title and subtitle
				} else {
					const i = document.createElement("div");
					i.id = "vapi-icon-container";

					// Create and configure the image element
					const s = document.createElement("img");
					const loading = "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg";
					s.src = loading;
					s.alt = "Icon";

					// Append the image to the icon container
					i.appendChild(s);

					// Create the title container (div)
					const c = document.createElement("div");
					c.id = "vapi-title-container";

					// Ensure no border-radius is applied
					c.style.display = "flex";
					c.style.flexDirection = "column";  // Ensures title and subtitle stack vertically
					c.style.borderRadius = "0";  // Explicitly set borderRadius to 0 to avoid rounded corners
					c.style.textAlign = "left";  // Align text to the left

					// Create the title element
					const l = document.createElement("div");
					l.id = "vapi-title";
					l.textContent = r.title;  // Set the title text
					l.style.color = "black";   // Set title text color to black

					// Create the subtitle element
					const u = document.createElement("div");
					u.id = "vapi-subtitle";
					u.textContent = r.subtitle;  // Set the subtitle text
					u.style.color = "black";   // Set subtitle text color to black

					// Append title and subtitle to the title container
					c.appendChild(l);
					c.appendChild(u);

					// Append the icon and title container to the parent container (e)
					e.appendChild(i);
					e.appendChild(c);

				}
			}
		};

	function Sl(n, e, t, r, i, s) {
		let c = !1;
		const l = () => {
			s(e, "loading"), c ? (n.stop(), c = !1) : (t || r ? n.start(t, r) : (console.log("squad ,", i, t, r), n.start(void 0, void 0, i)), c = !0)
		};
		n.on("call-start", () => {
			s(e, "active")
		}), n.on("call-end", () => {
			s(e, "idle")
		}), n.on("speech-start", () => {
			e.classList.add("vapi-btn-is-speaking")
		}), n.on("speech-end", () => {
			e.classList.remove("vapi-btn-is-speaking")
		}), e.addEventListener("click", l), n.on("volume-level", u => {
			const h = Math.floor(u * 10);
			for (let p = 0; p <= 10; p++) e.classList.remove(`vapi-btn-volume-${p}`);
			e.classList.add(`vapi-btn-volume-${h}`)
		})
	}
	const wl = ({
		apiKey: n = "",
		assistant: e,
		assistantOverrides: t,
		squad: r,
		config: i = {},
		...s
	}) => {
		function c(h, p) {
			const m = {
				...h
			};
			return Object.keys(p).forEach(y => {
				typeof p[y] == "object" && p[y] !== null && !Array.isArray(p[y]) ? m[y] = c(h[y] || {}, p[y]) : m[y] = p[y]
			}), m
		}
		const u = c({
			position: "bottom",
			offset: "40px",
			width: "50px",
			height: "50px",
			idle: {
				color: "#FFFFFF",
				type: "round",
				title: "Have a quick question?",
				subtitle: "Voice Chat",
				icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg"
			},
			loading: {
				color: "FFFFFF",
				type: "connect",
				title: "Connecting...",
				subtitle: "Please wait",
				icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg"
			},
			active: {
				color: "rgb(122, 122, 122)",
				type: "pill",
				title: "Call is in progress...",
				subtitle: "End call.",
				icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg"
			}
		}, i);
		if (n && (e || r)) {
			const h = new vl(n),
				p = yl(u),
				m = bl(u);
			return document.body.appendChild(p), m(p, "idle"), Sl(h, p, e, t, r, m), window.vapiSDK.vapi = h, h
		} else return console.error("API Key and Assistant Configurations are required. are required"), null
	};
	window.vapiSDK = {
		run: wl
	}
});