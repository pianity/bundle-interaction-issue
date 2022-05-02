(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/fp-ts/lib/function.js
  var require_function = __commonJS({
    "node_modules/fp-ts/lib/function.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
      var getBooleanAlgebra = function(B) {
        return function() {
          return {
            meet: function(x, y) {
              return function(a) {
                return B.meet(x(a), y(a));
              };
            },
            join: function(x, y) {
              return function(a) {
                return B.join(x(a), y(a));
              };
            },
            zero: function() {
              return B.zero;
            },
            one: function() {
              return B.one;
            },
            implies: function(x, y) {
              return function(a) {
                return B.implies(x(a), y(a));
              };
            },
            not: function(x) {
              return function(a) {
                return B.not(x(a));
              };
            }
          };
        };
      };
      exports.getBooleanAlgebra = getBooleanAlgebra;
      var getSemigroup = function(S) {
        return function() {
          return {
            concat: function(f, g) {
              return function(a) {
                return S.concat(f(a), g(a));
              };
            }
          };
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid2 = function(M) {
        var getSemigroupM = exports.getSemigroup(M);
        return function() {
          return {
            concat: getSemigroupM().concat,
            empty: function() {
              return M.empty;
            }
          };
        };
      };
      exports.getMonoid = getMonoid2;
      var getSemiring = function(S) {
        return {
          add: function(f, g) {
            return function(x) {
              return S.add(f(x), g(x));
            };
          },
          zero: function() {
            return S.zero;
          },
          mul: function(f, g) {
            return function(x) {
              return S.mul(f(x), g(x));
            };
          },
          one: function() {
            return S.one;
          }
        };
      };
      exports.getSemiring = getSemiring;
      var getRing = function(R) {
        var S = exports.getSemiring(R);
        return {
          add: S.add,
          mul: S.mul,
          one: S.one,
          zero: S.zero,
          sub: function(f, g) {
            return function(x) {
              return R.sub(f(x), g(x));
            };
          }
        };
      };
      exports.getRing = getRing;
      var apply = function(a) {
        return function(f) {
          return f(a);
        };
      };
      exports.apply = apply;
      function identity3(a) {
        return a;
      }
      exports.identity = identity3;
      exports.unsafeCoerce = identity3;
      function constant(a) {
        return function() {
          return a;
        };
      }
      exports.constant = constant;
      exports.constTrue = /* @__PURE__ */ constant(true);
      exports.constFalse = /* @__PURE__ */ constant(false);
      exports.constNull = /* @__PURE__ */ constant(null);
      exports.constUndefined = /* @__PURE__ */ constant(void 0);
      exports.constVoid = exports.constUndefined;
      function flip(f) {
        return function(b, a) {
          return f(a, b);
        };
      }
      exports.flip = flip;
      function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
        switch (arguments.length) {
          case 1:
            return ab;
          case 2:
            return function() {
              return bc(ab.apply(this, arguments));
            };
          case 3:
            return function() {
              return cd(bc(ab.apply(this, arguments)));
            };
          case 4:
            return function() {
              return de(cd(bc(ab.apply(this, arguments))));
            };
          case 5:
            return function() {
              return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
          case 6:
            return function() {
              return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
          case 7:
            return function() {
              return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
          case 8:
            return function() {
              return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
          case 9:
            return function() {
              return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
        }
        return;
      }
      exports.flow = flow;
      function tuple() {
        var t = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          t[_i] = arguments[_i];
        }
        return t;
      }
      exports.tuple = tuple;
      function increment(n) {
        return n + 1;
      }
      exports.increment = increment;
      function decrement(n) {
        return n - 1;
      }
      exports.decrement = decrement;
      function absurd(_) {
        throw new Error("Called `absurd` function which should be uncallable");
      }
      exports.absurd = absurd;
      function tupled(f) {
        return function(a) {
          return f.apply(void 0, a);
        };
      }
      exports.tupled = tupled;
      function untupled(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return f(a);
        };
      }
      exports.untupled = untupled;
      function pipe3(a, ab, bc, cd, de, ef, fg, gh, hi) {
        switch (arguments.length) {
          case 1:
            return a;
          case 2:
            return ab(a);
          case 3:
            return bc(ab(a));
          case 4:
            return cd(bc(ab(a)));
          case 5:
            return de(cd(bc(ab(a))));
          case 6:
            return ef(de(cd(bc(ab(a)))));
          case 7:
            return fg(ef(de(cd(bc(ab(a))))));
          case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
          case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
          default:
            var ret = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
              ret = arguments[i](ret);
            }
            return ret;
        }
      }
      exports.pipe = pipe3;
      exports.hole = absurd;
      var SK = function(_, b) {
        return b;
      };
      exports.SK = SK;
      function not(predicate) {
        return function(a) {
          return !predicate(a);
        };
      }
      exports.not = not;
      var getEndomorphismMonoid = function() {
        return {
          concat: function(first, second) {
            return flow(first, second);
          },
          empty: identity3
        };
      };
      exports.getEndomorphismMonoid = getEndomorphismMonoid;
    }
  });

  // node_modules/fp-ts/lib/Apply.js
  var require_Apply = __commonJS({
    "node_modules/fp-ts/lib/Apply.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
      var function_1 = require_function();
      function ap(F, G) {
        return function(fa) {
          return function(fab) {
            return F.ap(F.map(fab, function(gab) {
              return function(ga) {
                return G.ap(gab, ga);
              };
            }), fa);
          };
        };
      }
      exports.ap = ap;
      function apFirst(A) {
        return function(second) {
          return function(first) {
            return A.ap(A.map(first, function(a) {
              return function() {
                return a;
              };
            }), second);
          };
        };
      }
      exports.apFirst = apFirst;
      function apSecond(A) {
        return function(second) {
          return function(first) {
            return A.ap(A.map(first, function() {
              return function(b) {
                return b;
              };
            }), second);
          };
        };
      }
      exports.apSecond = apSecond;
      function apS(F) {
        return function(name2, fb) {
          return function(fa) {
            return F.ap(F.map(fa, function(a) {
              return function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name2] = b, _a));
              };
            }), fb);
          };
        };
      }
      exports.apS = apS;
      function getApplySemigroup(F) {
        return function(S) {
          return {
            concat: function(first, second) {
              return F.ap(F.map(first, function(x) {
                return function(y) {
                  return S.concat(x, y);
                };
              }), second);
            }
          };
        };
      }
      exports.getApplySemigroup = getApplySemigroup;
      function curried(f, n, acc) {
        return function(x) {
          var combined = Array(acc.length + 1);
          for (var i = 0; i < acc.length; i++) {
            combined[i] = acc[i];
          }
          combined[acc.length] = x;
          return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
        };
      }
      var tupleConstructors = {
        1: function(a) {
          return [a];
        },
        2: function(a) {
          return function(b) {
            return [a, b];
          };
        },
        3: function(a) {
          return function(b) {
            return function(c) {
              return [a, b, c];
            };
          };
        },
        4: function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return [a, b, c, d];
              };
            };
          };
        },
        5: function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return [a, b, c, d, e];
                };
              };
            };
          };
        }
      };
      function getTupleConstructor(len) {
        if (!tupleConstructors.hasOwnProperty(len)) {
          tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
        }
        return tupleConstructors[len];
      }
      function sequenceT(F) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var len = args.length;
          var f = getTupleConstructor(len);
          var fas = F.map(args[0], f);
          for (var i = 1; i < len; i++) {
            fas = F.ap(fas, args[i]);
          }
          return fas;
        };
      }
      exports.sequenceT = sequenceT;
      function getRecordConstructor(keys) {
        var len = keys.length;
        switch (len) {
          case 1:
            return function(a) {
              var _a;
              return _a = {}, _a[keys[0]] = a, _a;
            };
          case 2:
            return function(a) {
              return function(b) {
                var _a;
                return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a;
              };
            };
          case 3:
            return function(a) {
              return function(b) {
                return function(c) {
                  var _a;
                  return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a;
                };
              };
            };
          case 4:
            return function(a) {
              return function(b) {
                return function(c) {
                  return function(d) {
                    var _a;
                    return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a;
                  };
                };
              };
            };
          case 5:
            return function(a) {
              return function(b) {
                return function(c) {
                  return function(d) {
                    return function(e) {
                      var _a;
                      return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a[keys[4]] = e, _a;
                    };
                  };
                };
              };
            };
          default:
            return curried(function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var r = {};
              for (var i = 0; i < len; i++) {
                r[keys[i]] = args[i];
              }
              return r;
            }, len - 1, []);
        }
      }
      function sequenceS(F) {
        return function(r) {
          var keys = Object.keys(r);
          var len = keys.length;
          var f = getRecordConstructor(keys);
          var fr = F.map(r[keys[0]], f);
          for (var i = 1; i < len; i++) {
            fr = F.ap(fr, r[keys[i]]);
          }
          return fr;
        };
      }
      exports.sequenceS = sequenceS;
    }
  });

  // node_modules/fp-ts/lib/Functor.js
  var require_Functor = __commonJS({
    "node_modules/fp-ts/lib/Functor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFunctorComposition = exports.bindTo = exports.flap = exports.map = void 0;
      var function_1 = require_function();
      function map4(F, G) {
        return function(f) {
          return function(fa) {
            return F.map(fa, function(ga) {
              return G.map(ga, f);
            });
          };
        };
      }
      exports.map = map4;
      function flap(F) {
        return function(a) {
          return function(fab) {
            return F.map(fab, function(f) {
              return f(a);
            });
          };
        };
      }
      exports.flap = flap;
      function bindTo(F) {
        return function(name2) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return _a = {}, _a[name2] = a, _a;
            });
          };
        };
      }
      exports.bindTo = bindTo;
      function getFunctorComposition(F, G) {
        var _map2 = map4(F, G);
        return {
          map: function(fga, f) {
            return function_1.pipe(fga, _map2(f));
          }
        };
      }
      exports.getFunctorComposition = getFunctorComposition;
    }
  });

  // node_modules/fp-ts/lib/Applicative.js
  var require_Applicative = __commonJS({
    "node_modules/fp-ts/lib/Applicative.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
      var Apply_1 = require_Apply();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      function getApplicativeMonoid(F) {
        var f = Apply_1.getApplySemigroup(F);
        return function(M) {
          return {
            concat: f(M).concat,
            empty: F.of(M.empty)
          };
        };
      }
      exports.getApplicativeMonoid = getApplicativeMonoid;
      function getApplicativeComposition(F, G) {
        var map4 = Functor_1.getFunctorComposition(F, G).map;
        var _ap = Apply_1.ap(F, G);
        return {
          map: map4,
          of: function(a) {
            return F.of(G.of(a));
          },
          ap: function(fgab, fga) {
            return function_1.pipe(fgab, _ap(fga));
          }
        };
      }
      exports.getApplicativeComposition = getApplicativeComposition;
    }
  });

  // node_modules/fp-ts/lib/Chain.js
  var require_Chain = __commonJS({
    "node_modules/fp-ts/lib/Chain.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bind = exports.chainFirst = void 0;
      function chainFirst(M) {
        return function(f) {
          return function(first) {
            return M.chain(first, function(a) {
              return M.map(f(a), function() {
                return a;
              });
            });
          };
        };
      }
      exports.chainFirst = chainFirst;
      function bind(M) {
        return function(name2, f) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return M.map(f(a), function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name2] = b, _a));
              });
            });
          };
        };
      }
      exports.bind = bind;
    }
  });

  // node_modules/fp-ts/lib/ChainRec.js
  var require_ChainRec = __commonJS({
    "node_modules/fp-ts/lib/ChainRec.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tailRec = void 0;
      var tailRec = function(startWith, f) {
        var ab = f(startWith);
        while (ab._tag === "Left") {
          ab = f(ab.left);
        }
        return ab.right;
      };
      exports.tailRec = tailRec;
    }
  });

  // node_modules/fp-ts/lib/internal.js
  var require_internal = __commonJS({
    "node_modules/fp-ts/lib/internal.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fromReadonlyNonEmptyArray = exports.has = exports.emptyRecord = exports.emptyReadonlyArray = exports.tail = exports.head = exports.isNonEmpty = exports.singleton = exports.right = exports.left = exports.isRight = exports.isLeft = exports.some = exports.none = exports.isSome = exports.isNone = void 0;
      var isNone3 = function(fa) {
        return fa._tag === "None";
      };
      exports.isNone = isNone3;
      var isSome2 = function(fa) {
        return fa._tag === "Some";
      };
      exports.isSome = isSome2;
      exports.none = { _tag: "None" };
      var some4 = function(a) {
        return { _tag: "Some", value: a };
      };
      exports.some = some4;
      var isLeft4 = function(ma) {
        return ma._tag === "Left";
      };
      exports.isLeft = isLeft4;
      var isRight2 = function(ma) {
        return ma._tag === "Right";
      };
      exports.isRight = isRight2;
      var left3 = function(e) {
        return { _tag: "Left", left: e };
      };
      exports.left = left3;
      var right3 = function(a) {
        return { _tag: "Right", right: a };
      };
      exports.right = right3;
      var singleton3 = function(a) {
        return [a];
      };
      exports.singleton = singleton3;
      var isNonEmpty5 = function(as) {
        return as.length > 0;
      };
      exports.isNonEmpty = isNonEmpty5;
      var head6 = function(as) {
        return as[0];
      };
      exports.head = head6;
      var tail4 = function(as) {
        return as.slice(1);
      };
      exports.tail = tail4;
      exports.emptyReadonlyArray = [];
      exports.emptyRecord = {};
      exports.has = Object.prototype.hasOwnProperty;
      var fromReadonlyNonEmptyArray2 = function(as) {
        return __spreadArray([as[0]], as.slice(1));
      };
      exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray2;
    }
  });

  // node_modules/fp-ts/lib/FromEither.js
  var require_FromEither = __commonJS({
    "node_modules/fp-ts/lib/FromEither.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.filterOrElse = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      function fromOption(F) {
        return function(onNone) {
          return function(ma) {
            return F.fromEither(_.isNone(ma) ? _.left(onNone()) : _.right(ma.value));
          };
        };
      }
      exports.fromOption = fromOption;
      function fromPredicate(F) {
        return function(predicate, onFalse) {
          return function(a) {
            return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
          };
        };
      }
      exports.fromPredicate = fromPredicate;
      function fromOptionK(F) {
        var fromOptionF = fromOption(F);
        return function(onNone) {
          var from = fromOptionF(onNone);
          return function(f) {
            return function_1.flow(f, from);
          };
        };
      }
      exports.fromOptionK = fromOptionK;
      function chainOptionK(F, M) {
        var fromOptionKF = fromOptionK(F);
        return function(onNone) {
          var from = fromOptionKF(onNone);
          return function(f) {
            return function(ma) {
              return M.chain(ma, from(f));
            };
          };
        };
      }
      exports.chainOptionK = chainOptionK;
      function fromEitherK(F) {
        return function(f) {
          return function_1.flow(f, F.fromEither);
        };
      }
      exports.fromEitherK = fromEitherK;
      function chainEitherK(F, M) {
        var fromEitherKF = fromEitherK(F);
        return function(f) {
          return function(ma) {
            return M.chain(ma, fromEitherKF(f));
          };
        };
      }
      exports.chainEitherK = chainEitherK;
      function filterOrElse(F, M) {
        return function(predicate, onFalse) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
            });
          };
        };
      }
      exports.filterOrElse = filterOrElse;
    }
  });

  // node_modules/fp-ts/lib/Separated.js
  var require_Separated = __commonJS({
    "node_modules/fp-ts/lib/Separated.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var separated = function(left4, right4) {
        return { left: left4, right: right4 };
      };
      exports.separated = separated;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _mapLeft = function(fa, f) {
        return function_1.pipe(fa, exports.mapLeft(f));
      };
      var _bimap = function(fa, g, f) {
        return function_1.pipe(fa, exports.bimap(g, f));
      };
      var map4 = function(f) {
        return function(fa) {
          return exports.separated(exports.left(fa), f(exports.right(fa)));
        };
      };
      exports.map = map4;
      var mapLeft2 = function(f) {
        return function(fa) {
          return exports.separated(f(exports.left(fa)), exports.right(fa));
        };
      };
      exports.mapLeft = mapLeft2;
      var bimap = function(f, g) {
        return function(fa) {
          return exports.separated(f(exports.left(fa)), g(exports.right(fa)));
        };
      };
      exports.bimap = bimap;
      exports.URI = "Separated";
      exports.Bifunctor = {
        URI: exports.URI,
        mapLeft: _mapLeft,
        bimap: _bimap
      };
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /* @__PURE__ */ Functor_1.flap(exports.Functor);
      var left3 = function(s) {
        return s.left;
      };
      exports.left = left3;
      var right3 = function(s) {
        return s.right;
      };
      exports.right = right3;
    }
  });

  // node_modules/fp-ts/lib/Witherable.js
  var require_Witherable = __commonJS({
    "node_modules/fp-ts/lib/Witherable.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.filterE = exports.witherDefault = exports.wiltDefault = void 0;
      var _ = __importStar(require_internal());
      function wiltDefault(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f) {
            return F.map(traverseF(wa, f), C.separate);
          };
        };
      }
      exports.wiltDefault = wiltDefault;
      function witherDefault(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f) {
            return F.map(traverseF(wa, f), C.compact);
          };
        };
      }
      exports.witherDefault = witherDefault;
      function filterE(W) {
        return function(F) {
          var witherF = W.wither(F);
          return function(predicate) {
            return function(ga) {
              return witherF(ga, function(a) {
                return F.map(predicate(a), function(b) {
                  return b ? _.some(a) : _.none;
                });
              });
            };
          };
        };
      }
      exports.filterE = filterE;
    }
  });

  // node_modules/fp-ts/lib/Either.js
  var require_Either = __commonJS({
    "node_modules/fp-ts/lib/Either.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fold = exports.match = exports.foldW = exports.matchW = exports.isRight = exports.isLeft = exports.fromOption = exports.fromPredicate = exports.FromEither = exports.MonadThrow = exports.throwError = exports.ChainRec = exports.Extend = exports.extend = exports.Alt = exports.alt = exports.altW = exports.Bifunctor = exports.mapLeft = exports.bimap = exports.Traversable = exports.sequence = exports.traverse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.chain = exports.chainW = exports.Applicative = exports.Apply = exports.ap = exports.apW = exports.Pointed = exports.of = exports.Functor = exports.map = exports.getAltValidation = exports.getApplicativeValidation = exports.getWitherable = exports.getFilterable = exports.getCompactable = exports.getSemigroup = exports.getEq = exports.getShow = exports.URI = exports.right = exports.left = void 0;
      exports.getValidation = exports.getValidationMonoid = exports.getValidationSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.either = exports.stringifyJSON = exports.parseJSON = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toError = exports.toUnion = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.orElse = exports.orElseW = exports.swap = exports.filterOrElseW = exports.filterOrElse = exports.chainOptionK = exports.fromOptionK = exports.duplicate = exports.flatten = exports.flattenW = exports.chainFirstW = exports.chainFirst = exports.apSecond = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = void 0;
      var Applicative_1 = require_Applicative();
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var ChainRec_1 = require_ChainRec();
      var FromEither_1 = require_FromEither();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Separated_1 = require_Separated();
      var Witherable_1 = require_Witherable();
      exports.left = _.left;
      exports.right = _.right;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _ap = function(fab, fa) {
        return function_1.pipe(fab, exports.ap(fa));
      };
      var _chain = function(ma, f) {
        return function_1.pipe(ma, exports.chain(f));
      };
      var _reduce2 = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap2 = function(M) {
        return function(fa, f) {
          var foldMapM = exports.foldMap(M);
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight2 = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _traverse2 = function(F) {
        var traverseF = exports.traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _bimap = function(fa, f, g) {
        return function_1.pipe(fa, exports.bimap(f, g));
      };
      var _mapLeft = function(fa, f) {
        return function_1.pipe(fa, exports.mapLeft(f));
      };
      var _alt = function(fa, that) {
        return function_1.pipe(fa, exports.alt(that));
      };
      var _extend = function(wa, f) {
        return function_1.pipe(wa, exports.extend(f));
      };
      var _chainRec = function(a, f) {
        return ChainRec_1.tailRec(f(a), function(e) {
          return exports.isLeft(e) ? exports.right(exports.left(e.left)) : exports.isLeft(e.right) ? exports.left(f(e.right.left)) : exports.right(exports.right(e.right.right));
        });
      };
      exports.URI = "Either";
      var getShow4 = function(SE, SA) {
        return {
          show: function(ma) {
            return exports.isLeft(ma) ? "left(" + SE.show(ma.left) + ")" : "right(" + SA.show(ma.right) + ")";
          }
        };
      };
      exports.getShow = getShow4;
      var getEq4 = function(EL, EA) {
        return {
          equals: function(x, y) {
            return x === y || (exports.isLeft(x) ? exports.isLeft(y) && EL.equals(x.left, y.left) : exports.isRight(y) && EA.equals(x.right, y.right));
          }
        };
      };
      exports.getEq = getEq4;
      var getSemigroup = function(S) {
        return {
          concat: function(x, y) {
            return exports.isLeft(y) ? x : exports.isLeft(x) ? y : exports.right(S.concat(x.right, y.right));
          }
        };
      };
      exports.getSemigroup = getSemigroup;
      var getCompactable = function(M) {
        var empty2 = exports.left(M.empty);
        return {
          URI: exports.URI,
          _E: void 0,
          compact: function(ma) {
            return exports.isLeft(ma) ? ma : ma.right._tag === "None" ? empty2 : exports.right(ma.right.value);
          },
          separate: function(ma) {
            return exports.isLeft(ma) ? Separated_1.separated(ma, ma) : exports.isLeft(ma.right) ? Separated_1.separated(exports.right(ma.right.left), empty2) : Separated_1.separated(empty2, exports.right(ma.right.right));
          }
        };
      };
      exports.getCompactable = getCompactable;
      var getFilterable = function(M) {
        var empty2 = exports.left(M.empty);
        var _a = exports.getCompactable(M), compact4 = _a.compact, separate2 = _a.separate;
        var filter2 = function(ma, predicate) {
          return exports.isLeft(ma) ? ma : predicate(ma.right) ? ma : empty2;
        };
        var partition2 = function(ma, p) {
          return exports.isLeft(ma) ? Separated_1.separated(ma, ma) : p(ma.right) ? Separated_1.separated(empty2, exports.right(ma.right)) : Separated_1.separated(exports.right(ma.right), empty2);
        };
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          compact: compact4,
          separate: separate2,
          filter: filter2,
          filterMap: function(ma, f) {
            if (exports.isLeft(ma)) {
              return ma;
            }
            var ob = f(ma.right);
            return ob._tag === "None" ? empty2 : exports.right(ob.value);
          },
          partition: partition2,
          partitionMap: function(ma, f) {
            if (exports.isLeft(ma)) {
              return Separated_1.separated(ma, ma);
            }
            var e = f(ma.right);
            return exports.isLeft(e) ? Separated_1.separated(exports.right(e.left), empty2) : Separated_1.separated(empty2, exports.right(e.right));
          }
        };
      };
      exports.getFilterable = getFilterable;
      var getWitherable = function(M) {
        var F_ = exports.getFilterable(M);
        var C = exports.getCompactable(M);
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          compact: F_.compact,
          separate: F_.separate,
          filter: F_.filter,
          filterMap: F_.filterMap,
          partition: F_.partition,
          partitionMap: F_.partitionMap,
          traverse: _traverse2,
          sequence: exports.sequence,
          reduce: _reduce2,
          foldMap: _foldMap2,
          reduceRight: _reduceRight2,
          wither: Witherable_1.witherDefault(exports.Traversable, C),
          wilt: Witherable_1.wiltDefault(exports.Traversable, C)
        };
      };
      exports.getWitherable = getWitherable;
      var getApplicativeValidation = function(SE) {
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          ap: function(fab, fa) {
            return exports.isLeft(fab) ? exports.isLeft(fa) ? exports.left(SE.concat(fab.left, fa.left)) : fab : exports.isLeft(fa) ? fa : exports.right(fab.right(fa.right));
          },
          of: exports.of
        };
      };
      exports.getApplicativeValidation = getApplicativeValidation;
      var getAltValidation = function(SE) {
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          alt: function(me, that) {
            if (exports.isRight(me)) {
              return me;
            }
            var ea = that();
            return exports.isLeft(ea) ? exports.left(SE.concat(me.left, ea.left)) : ea;
          }
        };
      };
      exports.getAltValidation = getAltValidation;
      var map4 = function(f) {
        return function(fa) {
          return exports.isLeft(fa) ? fa : exports.right(f(fa.right));
        };
      };
      exports.map = map4;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.of = exports.right;
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      var apW = function(fa) {
        return function(fab) {
          return exports.isLeft(fab) ? fab : exports.isLeft(fa) ? fa : exports.right(fab.right(fa.right));
        };
      };
      exports.apW = apW;
      exports.ap = exports.apW;
      exports.Apply = {
        URI: exports.URI,
        map: _map2,
        ap: _ap
      };
      exports.Applicative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of
      };
      var chainW = function(f) {
        return function(ma) {
          return exports.isLeft(ma) ? ma : f(ma.right);
        };
      };
      exports.chainW = chainW;
      exports.chain = exports.chainW;
      exports.Chain = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain
      };
      var reduce4 = function(b, f) {
        return function(fa) {
          return exports.isLeft(fa) ? b : f(b, fa.right);
        };
      };
      exports.reduce = reduce4;
      var foldMap4 = function(M) {
        return function(f) {
          return function(fa) {
            return exports.isLeft(fa) ? M.empty : f(fa.right);
          };
        };
      };
      exports.foldMap = foldMap4;
      var reduceRight4 = function(b, f) {
        return function(fa) {
          return exports.isLeft(fa) ? b : f(fa.right, b);
        };
      };
      exports.reduceRight = reduceRight4;
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2
      };
      var traverse2 = function(F) {
        return function(f) {
          return function(ta) {
            return exports.isLeft(ta) ? F.of(exports.left(ta.left)) : F.map(f(ta.right), exports.right);
          };
        };
      };
      exports.traverse = traverse2;
      var sequence2 = function(F) {
        return function(ma) {
          return exports.isLeft(ma) ? F.of(exports.left(ma.left)) : F.map(ma.right, exports.right);
        };
      };
      exports.sequence = sequence2;
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2,
        traverse: _traverse2,
        sequence: exports.sequence
      };
      var bimap = function(f, g) {
        return function(fa) {
          return exports.isLeft(fa) ? exports.left(f(fa.left)) : exports.right(g(fa.right));
        };
      };
      exports.bimap = bimap;
      var mapLeft2 = function(f) {
        return function(fa) {
          return exports.isLeft(fa) ? exports.left(f(fa.left)) : fa;
        };
      };
      exports.mapLeft = mapLeft2;
      exports.Bifunctor = {
        URI: exports.URI,
        bimap: _bimap,
        mapLeft: _mapLeft
      };
      var altW = function(that) {
        return function(fa) {
          return exports.isLeft(fa) ? that() : fa;
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      exports.Alt = {
        URI: exports.URI,
        map: _map2,
        alt: _alt
      };
      var extend = function(f) {
        return function(wa) {
          return exports.isLeft(wa) ? wa : exports.right(f(wa));
        };
      };
      exports.extend = extend;
      exports.Extend = {
        URI: exports.URI,
        map: _map2,
        extend: _extend
      };
      exports.ChainRec = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain,
        chainRec: _chainRec
      };
      exports.throwError = exports.left;
      exports.MonadThrow = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain,
        throwError: exports.throwError
      };
      exports.FromEither = {
        URI: exports.URI,
        fromEither: function_1.identity
      };
      exports.fromPredicate = /* @__PURE__ */ FromEither_1.fromPredicate(exports.FromEither);
      exports.fromOption = /* @__PURE__ */ FromEither_1.fromOption(exports.FromEither);
      exports.isLeft = _.isLeft;
      exports.isRight = _.isRight;
      var matchW = function(onLeft, onRight) {
        return function(ma) {
          return exports.isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
        };
      };
      exports.matchW = matchW;
      exports.foldW = exports.matchW;
      exports.match = exports.matchW;
      exports.fold = exports.match;
      var getOrElseW2 = function(onLeft) {
        return function(ma) {
          return exports.isLeft(ma) ? onLeft(ma.left) : ma.right;
        };
      };
      exports.getOrElseW = getOrElseW2;
      exports.getOrElse = exports.getOrElseW;
      exports.flap = /* @__PURE__ */ Functor_1.flap(exports.Functor);
      exports.apFirst = /* @__PURE__ */ Apply_1.apFirst(exports.Apply);
      exports.apSecond = /* @__PURE__ */ Apply_1.apSecond(exports.Apply);
      exports.chainFirst = /* @__PURE__ */ Chain_1.chainFirst(exports.Chain);
      exports.chainFirstW = exports.chainFirst;
      exports.flattenW = /* @__PURE__ */ exports.chainW(function_1.identity);
      exports.flatten = exports.flattenW;
      exports.duplicate = /* @__PURE__ */ exports.extend(function_1.identity);
      exports.fromOptionK = /* @__PURE__ */ FromEither_1.fromOptionK(exports.FromEither);
      exports.chainOptionK = /* @__PURE__ */ FromEither_1.chainOptionK(exports.FromEither, exports.Chain);
      exports.filterOrElse = /* @__PURE__ */ FromEither_1.filterOrElse(exports.FromEither, exports.Chain);
      exports.filterOrElseW = exports.filterOrElse;
      var swap = function(ma) {
        return exports.isLeft(ma) ? exports.right(ma.left) : exports.left(ma.right);
      };
      exports.swap = swap;
      var orElseW = function(onLeft) {
        return function(ma) {
          return exports.isLeft(ma) ? onLeft(ma.left) : ma;
        };
      };
      exports.orElseW = orElseW;
      exports.orElse = exports.orElseW;
      var fromNullable = function(e) {
        return function(a) {
          return a == null ? exports.left(e) : exports.right(a);
        };
      };
      exports.fromNullable = fromNullable;
      var tryCatch = function(f, onThrow) {
        try {
          return exports.right(f());
        } catch (e) {
          return exports.left(onThrow(e));
        }
      };
      exports.tryCatch = tryCatch;
      var tryCatchK = function(f, onThrow) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return exports.tryCatch(function() {
            return f.apply(void 0, a);
          }, onThrow);
        };
      };
      exports.tryCatchK = tryCatchK;
      var fromNullableK = function(e) {
        var from = exports.fromNullable(e);
        return function(f) {
          return function_1.flow(f, from);
        };
      };
      exports.fromNullableK = fromNullableK;
      var chainNullableK = function(e) {
        var from = exports.fromNullableK(e);
        return function(f) {
          return exports.chain(from(f));
        };
      };
      exports.chainNullableK = chainNullableK;
      exports.toUnion = /* @__PURE__ */ exports.foldW(function_1.identity, function_1.identity);
      function toError(e) {
        return e instanceof Error ? e : new Error(String(e));
      }
      exports.toError = toError;
      function elem3(E2) {
        return function(a, ma) {
          if (ma === void 0) {
            var elemE_1 = elem3(E2);
            return function(ma2) {
              return elemE_1(a, ma2);
            };
          }
          return exports.isLeft(ma) ? false : E2.equals(a, ma.right);
        };
      }
      exports.elem = elem3;
      var exists = function(predicate) {
        return function(ma) {
          return exports.isLeft(ma) ? false : predicate(ma.right);
        };
      };
      exports.exists = exists;
      exports.Do = /* @__PURE__ */ exports.of(_.emptyRecord);
      exports.bindTo = /* @__PURE__ */ Functor_1.bindTo(exports.Functor);
      exports.bind = /* @__PURE__ */ Chain_1.bind(exports.Chain);
      exports.bindW = exports.bind;
      exports.apS = /* @__PURE__ */ Apply_1.apS(exports.Apply);
      exports.apSW = exports.apS;
      exports.ApT = /* @__PURE__ */ exports.of(_.emptyReadonlyArray);
      var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
        return function(as) {
          var e = f(0, _.head(as));
          if (exports.isLeft(e)) {
            return e;
          }
          var out = [e.right];
          for (var i = 1; i < as.length; i++) {
            var e_1 = f(i, as[i]);
            if (exports.isLeft(e_1)) {
              return e_1;
            }
            out.push(e_1.right);
          }
          return exports.right(out);
        };
      };
      exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex;
      var traverseReadonlyArrayWithIndex = function(f) {
        var g = exports.traverseReadonlyNonEmptyArrayWithIndex(f);
        return function(as) {
          return _.isNonEmpty(as) ? g(as) : exports.ApT;
        };
      };
      exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;
      exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
      var traverseArray = function(f) {
        return exports.traverseReadonlyArrayWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.traverseArray = traverseArray;
      exports.sequenceArray = /* @__PURE__ */ exports.traverseArray(function_1.identity);
      function parseJSON(s, onError) {
        return exports.tryCatch(function() {
          return JSON.parse(s);
        }, onError);
      }
      exports.parseJSON = parseJSON;
      var stringifyJSON = function(u, onError) {
        return exports.tryCatch(function() {
          var s = JSON.stringify(u);
          if (typeof s !== "string") {
            throw new Error("Converting unsupported structure to JSON");
          }
          return s;
        }, onError);
      };
      exports.stringifyJSON = stringifyJSON;
      exports.either = {
        URI: exports.URI,
        map: _map2,
        of: exports.of,
        ap: _ap,
        chain: _chain,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2,
        traverse: _traverse2,
        sequence: exports.sequence,
        bimap: _bimap,
        mapLeft: _mapLeft,
        alt: _alt,
        extend: _extend,
        chainRec: _chainRec,
        throwError: exports.throwError
      };
      exports.getApplySemigroup = /* @__PURE__ */ Apply_1.getApplySemigroup(exports.Apply);
      exports.getApplyMonoid = /* @__PURE__ */ Applicative_1.getApplicativeMonoid(exports.Applicative);
      var getValidationSemigroup = function(SE, SA) {
        return Apply_1.getApplySemigroup(exports.getApplicativeValidation(SE))(SA);
      };
      exports.getValidationSemigroup = getValidationSemigroup;
      var getValidationMonoid = function(SE, MA) {
        return Applicative_1.getApplicativeMonoid(exports.getApplicativeValidation(SE))(MA);
      };
      exports.getValidationMonoid = getValidationMonoid;
      function getValidation(SE) {
        var ap = exports.getApplicativeValidation(SE).ap;
        var alt = exports.getAltValidation(SE).alt;
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          of: exports.of,
          chain: _chain,
          bimap: _bimap,
          mapLeft: _mapLeft,
          reduce: _reduce2,
          foldMap: _foldMap2,
          reduceRight: _reduceRight2,
          extend: _extend,
          traverse: _traverse2,
          sequence: exports.sequence,
          chainRec: _chainRec,
          throwError: exports.throwError,
          ap,
          alt
        };
      }
      exports.getValidation = getValidation;
    }
  });

  // src/utils.ts
  var import_Either2 = __toESM(require_Either());

  // node_modules/fp-ts/es6/function.js
  function identity(a) {
    return a;
  }

  // node_modules/fp-ts/es6/internal.js
  var isSome = function(fa) {
    return fa._tag === "Some";
  };
  var none = { _tag: "None" };
  var some = function(a) {
    return { _tag: "Some", value: a };
  };
  var isLeft = function(ma) {
    return ma._tag === "Left";
  };
  var left = function(e) {
    return { _tag: "Left", left: e };
  };
  var right = function(a) {
    return { _tag: "Right", right: a };
  };
  var isNonEmpty = function(as) {
    return as.length > 0;
  };
  var head = function(as) {
    return as[0];
  };
  var has = Object.prototype.hasOwnProperty;

  // node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js
  var isNonEmpty2 = isNonEmpty;
  var isOutOfBound = function(i, as) {
    return i < 0 || i >= as.length;
  };
  var extract = head;
  var head2 = extract;
  var last = function(as) {
    return as[as.length - 1];
  };

  // node_modules/fp-ts/es6/NonEmptyArray.js
  var groupBy = function(f) {
    return function(as) {
      var out = {};
      for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        var k = f(a);
        if (out.hasOwnProperty(k)) {
          out[k].push(a);
        } else {
          out[k] = [a];
        }
      }
      return out;
    };
  };
  var head3 = head2;
  var tail2 = function(as) {
    return as.slice(1);
  };

  // node_modules/fp-ts/es6/ReadonlyArray.js
  var isNonEmpty3 = isNonEmpty2;
  var isOutOfBound2 = isOutOfBound;
  function lookup(i, as) {
    return as === void 0 ? function(as2) {
      return lookup(i, as2);
    } : isOutOfBound2(i, as) ? none : some(as[i]);
  }
  var head4 = function(as) {
    return isNonEmpty3(as) ? some(head2(as)) : none;
  };
  var last2 = function(as) {
    return isNonEmpty3(as) ? some(last(as)) : none;
  };
  var findIndex = function(predicate) {
    return function(as) {
      for (var i = 0; i < as.length; i++) {
        if (predicate(as[i])) {
          return some(i);
        }
      }
      return none;
    };
  };

  // node_modules/fp-ts/es6/Array.js
  var lookup2 = lookup;
  var head5 = head4;
  var last3 = last2;
  var findIndex2 = findIndex;
  var map = function(f) {
    return function(fa) {
      return fa.map(function(a) {
        return f(a);
      });
    };
  };
  var filterMapWithIndex = function(f) {
    return function(fa) {
      var out = [];
      for (var i = 0; i < fa.length; i++) {
        var optionB = f(i, fa[i]);
        if (isSome(optionB)) {
          out.push(optionB.value);
        }
      }
      return out;
    };
  };
  var filterMap = function(f) {
    return filterMapWithIndex(function(_, a) {
      return f(a);
    });
  };
  var compact = /* @__PURE__ */ filterMap(identity);

  // src/prettyReporter.ts
  var E = __toESM(require_Either());

  // node_modules/fp-ts/es6/Option.js
  var none2 = none;
  var some2 = some;
  var map2 = function(f) {
    return function(fa) {
      return isNone2(fa) ? none2 : some2(f(fa.value));
    };
  };
  var chain = function(f) {
    return function(ma) {
      return isNone2(ma) ? none2 : f(ma.value);
    };
  };
  var isNone2 = function(fa) {
    return fa._tag === "None";
  };
  var getOrElseW = function(onNone) {
    return function(ma) {
      return isNone2(ma) ? onNone() : ma.value;
    };
  };
  var getOrElse = getOrElseW;

  // node_modules/fp-ts/es6/string.js
  var Eq = {
    equals: function(first, second) {
      return first === second;
    }
  };
  var Semigroup = {
    concat: function(first, second) {
      return first + second;
    }
  };
  var Monoid = {
    concat: Semigroup.concat,
    empty: ""
  };
  var Ord = {
    equals: Eq.equals,
    compare: function(first, second) {
      return first < second ? -1 : first > second ? 1 : 0;
    }
  };

  // node_modules/fp-ts/es6/ReadonlyRecord.js
  function mapWithIndex(f) {
    return function(r) {
      var out = {};
      for (var k in r) {
        if (has.call(r, k)) {
          out[k] = f(k, r[k]);
        }
      }
      return out;
    };
  }
  var compact2 = function(r) {
    var out = {};
    for (var k in r) {
      if (has.call(r, k)) {
        var oa = r[k];
        if (isSome(oa)) {
          out[k] = oa.value;
        }
      }
    }
    return out;
  };

  // node_modules/fp-ts/es6/Record.js
  var keys_ = function(O) {
    return function(r) {
      return Object.keys(r).sort(O.compare);
    };
  };
  function collect(O) {
    if (typeof O === "function") {
      return collect(Ord)(O);
    }
    var keysO = keys_(O);
    return function(f) {
      return function(r) {
        var out = [];
        for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
          var key = _a[_i];
          out.push(f(key, r[key]));
        }
        return out;
      };
    };
  }
  var toArray = /* @__PURE__ */ collect(Ord)(function(k, a) {
    return [k, a];
  });
  var mapWithIndex2 = mapWithIndex;
  var compact3 = compact2;

  // src/prettyReporter.ts
  var import_function2 = __toESM(require_function());

  // node_modules/fp-ts/es6/Either.js
  var left2 = left;
  var right2 = right;
  var isLeft2 = isLeft;

  // node_modules/io-ts/es6/index.js
  var __extends = function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var __assign = function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var __spreadArrays = function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
  var failures = left2;
  var failure = function(value, context, message) {
    return failures([{ value, context, message }]);
  };
  var success = right2;
  var Type = function() {
    function Type2(name2, is, validate, encode) {
      this.name = name2;
      this.is = is;
      this.validate = validate;
      this.encode = encode;
      this.decode = this.decode.bind(this);
    }
    Type2.prototype.pipe = function(ab, name2) {
      var _this = this;
      if (name2 === void 0) {
        name2 = "pipe(" + this.name + ", " + ab.name + ")";
      }
      return new Type2(name2, ab.is, function(i, c) {
        var e = _this.validate(i, c);
        if (isLeft2(e)) {
          return e;
        }
        return ab.validate(e.right, c);
      }, this.encode === identity2 && ab.encode === identity2 ? identity2 : function(b) {
        return _this.encode(ab.encode(b));
      });
    };
    Type2.prototype.asDecoder = function() {
      return this;
    };
    Type2.prototype.asEncoder = function() {
      return this;
    };
    Type2.prototype.decode = function(i) {
      return this.validate(i, [{ key: "", type: this, actual: i }]);
    };
    return Type2;
  }();
  var identity2 = function(a) {
    return a;
  };
  function getFunctionName(f) {
    return f.displayName || f.name || "<function" + f.length + ">";
  }
  function appendContext(c, key, decoder, actual) {
    var len = c.length;
    var r = Array(len + 1);
    for (var i = 0; i < len; i++) {
      r[i] = c[i];
    }
    r[len] = { key, type: decoder, actual };
    return r;
  }
  function pushAll(xs, ys) {
    var l = ys.length;
    for (var i = 0; i < l; i++) {
      xs.push(ys[i]);
    }
  }
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  function getNameFromProps(props) {
    return Object.keys(props).map(function(k) {
      return k + ": " + props[k].name;
    }).join(", ");
  }
  function useIdentity(codecs) {
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].encode !== identity2) {
        return false;
      }
    }
    return true;
  }
  function getInterfaceTypeName(props) {
    return "{ " + getNameFromProps(props) + " }";
  }
  function getPartialTypeName(inner) {
    return "Partial<" + inner + ">";
  }
  function enumerableRecord(keys, domain, codomain, name2) {
    if (name2 === void 0) {
      name2 = "{ [K in " + domain.name + "]: " + codomain.name + " }";
    }
    var len = keys.length;
    return new DictionaryType(name2, function(u) {
      return UnknownRecord.is(u) && keys.every(function(k) {
        return codomain.is(u[k]);
      });
    }, function(u, c) {
      var e = UnknownRecord.validate(u, c);
      if (isLeft2(e)) {
        return e;
      }
      var o = e.right;
      var a = {};
      var errors = [];
      var changed = false;
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var ok = o[k];
        var codomainResult = codomain.validate(ok, appendContext(c, k, codomain, ok));
        if (isLeft2(codomainResult)) {
          pushAll(errors, codomainResult.left);
        } else {
          var vok = codomainResult.right;
          changed = changed || vok !== ok;
          a[k] = vok;
        }
      }
      return errors.length > 0 ? failures(errors) : success(changed || Object.keys(o).length !== len ? a : o);
    }, codomain.encode === identity2 ? identity2 : function(a) {
      var s = {};
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        s[k] = codomain.encode(a[k]);
      }
      return s;
    }, domain, codomain);
  }
  function getDomainKeys(domain) {
    var _a;
    if (isLiteralC(domain)) {
      var literal_1 = domain.value;
      if (string.is(literal_1)) {
        return _a = {}, _a[literal_1] = null, _a;
      }
    } else if (isKeyofC(domain)) {
      return domain.keys;
    } else if (isUnionC(domain)) {
      var keys = domain.types.map(function(type2) {
        return getDomainKeys(type2);
      });
      return keys.some(undefinedType.is) ? void 0 : Object.assign.apply(Object, __spreadArrays([{}], keys));
    }
    return void 0;
  }
  function nonEnumerableRecord(domain, codomain, name2) {
    if (name2 === void 0) {
      name2 = "{ [K in " + domain.name + "]: " + codomain.name + " }";
    }
    return new DictionaryType(name2, function(u) {
      if (UnknownRecord.is(u)) {
        return Object.keys(u).every(function(k) {
          return domain.is(k) && codomain.is(u[k]);
        });
      }
      return isAnyC(codomain) && Array.isArray(u);
    }, function(u, c) {
      if (UnknownRecord.is(u)) {
        var a = {};
        var errors = [];
        var keys = Object.keys(u);
        var len = keys.length;
        var changed = false;
        for (var i = 0; i < len; i++) {
          var k = keys[i];
          var ok = u[k];
          var domainResult = domain.validate(k, appendContext(c, k, domain, k));
          if (isLeft2(domainResult)) {
            pushAll(errors, domainResult.left);
          } else {
            var vk = domainResult.right;
            changed = changed || vk !== k;
            k = vk;
            var codomainResult = codomain.validate(ok, appendContext(c, k, codomain, ok));
            if (isLeft2(codomainResult)) {
              pushAll(errors, codomainResult.left);
            } else {
              var vok = codomainResult.right;
              changed = changed || vok !== ok;
              a[k] = vok;
            }
          }
        }
        return errors.length > 0 ? failures(errors) : success(changed ? a : u);
      }
      if (isAnyC(codomain) && Array.isArray(u)) {
        return success(u);
      }
      return failure(u, c);
    }, domain.encode === identity2 && codomain.encode === identity2 ? identity2 : function(a) {
      var s = {};
      var keys = Object.keys(a);
      var len = keys.length;
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        s[String(domain.encode(k))] = codomain.encode(a[k]);
      }
      return s;
    }, domain, codomain);
  }
  function getUnionName(codecs) {
    return "(" + codecs.map(function(type2) {
      return type2.name;
    }).join(" | ") + ")";
  }
  function mergeAll(base, us) {
    var equal = true;
    var primitive = true;
    var baseIsNotADictionary = !UnknownRecord.is(base);
    for (var _i = 0, us_1 = us; _i < us_1.length; _i++) {
      var u = us_1[_i];
      if (u !== base) {
        equal = false;
      }
      if (UnknownRecord.is(u)) {
        primitive = false;
      }
    }
    if (equal) {
      return base;
    } else if (primitive) {
      return us[us.length - 1];
    }
    var r = {};
    for (var _a = 0, us_2 = us; _a < us_2.length; _a++) {
      var u = us_2[_a];
      for (var k in u) {
        if (!r.hasOwnProperty(k) || baseIsNotADictionary || u[k] !== base[k]) {
          r[k] = u[k];
        }
      }
    }
    return r;
  }
  function isNonEmpty4(as) {
    return as.length > 0;
  }
  var emptyTags = {};
  function intersect(a, b) {
    var r = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
      var v = a_1[_i];
      if (b.indexOf(v) !== -1) {
        r.push(v);
      }
    }
    return r;
  }
  function mergeTags(a, b) {
    if (a === emptyTags) {
      return b;
    }
    if (b === emptyTags) {
      return a;
    }
    var r = Object.assign({}, a);
    for (var k in b) {
      if (a.hasOwnProperty(k)) {
        var intersection_1 = intersect(a[k], b[k]);
        if (isNonEmpty4(intersection_1)) {
          r[k] = intersection_1;
        } else {
          r = emptyTags;
          break;
        }
      } else {
        r[k] = b[k];
      }
    }
    return r;
  }
  function intersectTags(a, b) {
    if (a === emptyTags || b === emptyTags) {
      return emptyTags;
    }
    var r = emptyTags;
    for (var k in a) {
      if (b.hasOwnProperty(k)) {
        var intersection_2 = intersect(a[k], b[k]);
        if (intersection_2.length === 0) {
          if (r === emptyTags) {
            r = {};
          }
          r[k] = a[k].concat(b[k]);
        }
      }
    }
    return r;
  }
  function isAnyC(codec) {
    return codec._tag === "AnyType";
  }
  function isLiteralC(codec) {
    return codec._tag === "LiteralType";
  }
  function isKeyofC(codec) {
    return codec._tag === "KeyofType";
  }
  function isTypeC(codec) {
    return codec._tag === "InterfaceType";
  }
  function isStrictC(codec) {
    return codec._tag === "StrictType";
  }
  function isExactC(codec) {
    return codec._tag === "ExactType";
  }
  function isRefinementC(codec) {
    return codec._tag === "RefinementType";
  }
  function isIntersectionC(codec) {
    return codec._tag === "IntersectionType";
  }
  function isUnionC(codec) {
    return codec._tag === "UnionType";
  }
  function isRecursiveC(codec) {
    return codec._tag === "RecursiveType";
  }
  var lazyCodecs = [];
  function getTags(codec) {
    if (lazyCodecs.indexOf(codec) !== -1) {
      return emptyTags;
    }
    if (isTypeC(codec) || isStrictC(codec)) {
      var index = emptyTags;
      for (var k in codec.props) {
        var prop = codec.props[k];
        if (isLiteralC(prop)) {
          if (index === emptyTags) {
            index = {};
          }
          index[k] = [prop.value];
        }
      }
      return index;
    } else if (isExactC(codec) || isRefinementC(codec)) {
      return getTags(codec.type);
    } else if (isIntersectionC(codec)) {
      return codec.types.reduce(function(tags2, codec2) {
        return mergeTags(tags2, getTags(codec2));
      }, emptyTags);
    } else if (isUnionC(codec)) {
      return codec.types.slice(1).reduce(function(tags2, codec2) {
        return intersectTags(tags2, getTags(codec2));
      }, getTags(codec.types[0]));
    } else if (isRecursiveC(codec)) {
      lazyCodecs.push(codec);
      var tags = getTags(codec.type);
      lazyCodecs.pop();
      return tags;
    }
    return emptyTags;
  }
  function getIndex(codecs) {
    var tags = getTags(codecs[0]);
    var keys = Object.keys(tags);
    var len = codecs.length;
    var _loop_1 = function(k2) {
      var all = tags[k2].slice();
      var index = [tags[k2]];
      for (var i = 1; i < len; i++) {
        var codec = codecs[i];
        var ctags = getTags(codec);
        var values = ctags[k2];
        if (values === void 0) {
          return "continue-keys";
        } else {
          if (values.some(function(v) {
            return all.indexOf(v) !== -1;
          })) {
            return "continue-keys";
          } else {
            all.push.apply(all, values);
            index.push(values);
          }
        }
      }
      return { value: [k2, index] };
    };
    keys:
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        var state_1 = _loop_1(k);
        if (typeof state_1 === "object")
          return state_1.value;
        switch (state_1) {
          case "continue-keys":
            continue keys;
        }
      }
    return void 0;
  }
  var NullType = function(_super) {
    __extends(NullType2, _super);
    function NullType2() {
      var _this = _super.call(this, "null", function(u) {
        return u === null;
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "NullType";
      return _this;
    }
    return NullType2;
  }(Type);
  var nullType = new NullType();
  var UndefinedType = function(_super) {
    __extends(UndefinedType2, _super);
    function UndefinedType2() {
      var _this = _super.call(this, "undefined", function(u) {
        return u === void 0;
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "UndefinedType";
      return _this;
    }
    return UndefinedType2;
  }(Type);
  var undefinedType = new UndefinedType();
  var VoidType = function(_super) {
    __extends(VoidType2, _super);
    function VoidType2() {
      var _this = _super.call(this, "void", undefinedType.is, undefinedType.validate, identity2) || this;
      _this._tag = "VoidType";
      return _this;
    }
    return VoidType2;
  }(Type);
  var voidType = new VoidType();
  var UnknownType = function(_super) {
    __extends(UnknownType2, _super);
    function UnknownType2() {
      var _this = _super.call(this, "unknown", function(_) {
        return true;
      }, success, identity2) || this;
      _this._tag = "UnknownType";
      return _this;
    }
    return UnknownType2;
  }(Type);
  var unknown = new UnknownType();
  var StringType = function(_super) {
    __extends(StringType2, _super);
    function StringType2() {
      var _this = _super.call(this, "string", function(u) {
        return typeof u === "string";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "StringType";
      return _this;
    }
    return StringType2;
  }(Type);
  var string = new StringType();
  var NumberType = function(_super) {
    __extends(NumberType2, _super);
    function NumberType2() {
      var _this = _super.call(this, "number", function(u) {
        return typeof u === "number";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "NumberType";
      return _this;
    }
    return NumberType2;
  }(Type);
  var number = new NumberType();
  var BigIntType = function(_super) {
    __extends(BigIntType2, _super);
    function BigIntType2() {
      var _this = _super.call(this, "bigint", function(u) {
        return typeof u === "bigint";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "BigIntType";
      return _this;
    }
    return BigIntType2;
  }(Type);
  var bigint = new BigIntType();
  var BooleanType = function(_super) {
    __extends(BooleanType2, _super);
    function BooleanType2() {
      var _this = _super.call(this, "boolean", function(u) {
        return typeof u === "boolean";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "BooleanType";
      return _this;
    }
    return BooleanType2;
  }(Type);
  var boolean = new BooleanType();
  var AnyArrayType = function(_super) {
    __extends(AnyArrayType2, _super);
    function AnyArrayType2() {
      var _this = _super.call(this, "UnknownArray", Array.isArray, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "AnyArrayType";
      return _this;
    }
    return AnyArrayType2;
  }(Type);
  var UnknownArray = new AnyArrayType();
  var AnyDictionaryType = function(_super) {
    __extends(AnyDictionaryType2, _super);
    function AnyDictionaryType2() {
      var _this = _super.call(this, "UnknownRecord", function(u) {
        var s = Object.prototype.toString.call(u);
        return s === "[object Object]" || s === "[object Window]";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "AnyDictionaryType";
      return _this;
    }
    return AnyDictionaryType2;
  }(Type);
  var UnknownRecord = new AnyDictionaryType();
  var LiteralType = function(_super) {
    __extends(LiteralType2, _super);
    function LiteralType2(name2, is, validate, encode, value) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.value = value;
      _this._tag = "LiteralType";
      return _this;
    }
    return LiteralType2;
  }(Type);
  function literal(value, name2) {
    if (name2 === void 0) {
      name2 = JSON.stringify(value);
    }
    var is = function(u) {
      return u === value;
    };
    return new LiteralType(name2, is, function(u, c) {
      return is(u) ? success(value) : failure(u, c);
    }, identity2, value);
  }
  var KeyofType = function(_super) {
    __extends(KeyofType2, _super);
    function KeyofType2(name2, is, validate, encode, keys) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.keys = keys;
      _this._tag = "KeyofType";
      return _this;
    }
    return KeyofType2;
  }(Type);
  var RefinementType = function(_super) {
    __extends(RefinementType2, _super);
    function RefinementType2(name2, is, validate, encode, type2, predicate) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.type = type2;
      _this.predicate = predicate;
      _this._tag = "RefinementType";
      return _this;
    }
    return RefinementType2;
  }(Type);
  function brand(codec, predicate, name2) {
    return refinement(codec, predicate, name2);
  }
  var Int = brand(number, function(n) {
    return Number.isInteger(n);
  }, "Int");
  var RecursiveType = function(_super) {
    __extends(RecursiveType2, _super);
    function RecursiveType2(name2, is, validate, encode, runDefinition) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.runDefinition = runDefinition;
      _this._tag = "RecursiveType";
      return _this;
    }
    return RecursiveType2;
  }(Type);
  Object.defineProperty(RecursiveType.prototype, "type", {
    get: function() {
      return this.runDefinition();
    },
    enumerable: true,
    configurable: true
  });
  var ArrayType = function(_super) {
    __extends(ArrayType2, _super);
    function ArrayType2(name2, is, validate, encode, type2) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ArrayType";
      return _this;
    }
    return ArrayType2;
  }(Type);
  function array(item, name2) {
    if (name2 === void 0) {
      name2 = "Array<" + item.name + ">";
    }
    return new ArrayType(name2, function(u) {
      return UnknownArray.is(u) && u.every(item.is);
    }, function(u, c) {
      var e = UnknownArray.validate(u, c);
      if (isLeft2(e)) {
        return e;
      }
      var us = e.right;
      var len = us.length;
      var as = us;
      var errors = [];
      for (var i = 0; i < len; i++) {
        var ui = us[i];
        var result = item.validate(ui, appendContext(c, String(i), item, ui));
        if (isLeft2(result)) {
          pushAll(errors, result.left);
        } else {
          var ai = result.right;
          if (ai !== ui) {
            if (as === us) {
              as = us.slice();
            }
            as[i] = ai;
          }
        }
      }
      return errors.length > 0 ? failures(errors) : success(as);
    }, item.encode === identity2 ? identity2 : function(a) {
      return a.map(item.encode);
    }, item);
  }
  var InterfaceType = function(_super) {
    __extends(InterfaceType2, _super);
    function InterfaceType2(name2, is, validate, encode, props) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.props = props;
      _this._tag = "InterfaceType";
      return _this;
    }
    return InterfaceType2;
  }(Type);
  function type(props, name2) {
    if (name2 === void 0) {
      name2 = getInterfaceTypeName(props);
    }
    var keys = Object.keys(props);
    var types = keys.map(function(key) {
      return props[key];
    });
    var len = keys.length;
    return new InterfaceType(name2, function(u) {
      if (UnknownRecord.is(u)) {
        for (var i = 0; i < len; i++) {
          var k = keys[i];
          var uk = u[k];
          if (uk === void 0 && !hasOwnProperty2.call(u, k) || !types[i].is(uk)) {
            return false;
          }
        }
        return true;
      }
      return false;
    }, function(u, c) {
      var e = UnknownRecord.validate(u, c);
      if (isLeft2(e)) {
        return e;
      }
      var o = e.right;
      var a = o;
      var errors = [];
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var ak = a[k];
        var type_1 = types[i];
        var result = type_1.validate(ak, appendContext(c, k, type_1, ak));
        if (isLeft2(result)) {
          pushAll(errors, result.left);
        } else {
          var vak = result.right;
          if (vak !== ak || vak === void 0 && !hasOwnProperty2.call(a, k)) {
            if (a === o) {
              a = __assign({}, o);
            }
            a[k] = vak;
          }
        }
      }
      return errors.length > 0 ? failures(errors) : success(a);
    }, useIdentity(types) ? identity2 : function(a) {
      var s = __assign({}, a);
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var encode = types[i].encode;
        if (encode !== identity2) {
          s[k] = encode(a[k]);
        }
      }
      return s;
    }, props);
  }
  var PartialType = function(_super) {
    __extends(PartialType2, _super);
    function PartialType2(name2, is, validate, encode, props) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.props = props;
      _this._tag = "PartialType";
      return _this;
    }
    return PartialType2;
  }(Type);
  function partial(props, name2) {
    if (name2 === void 0) {
      name2 = getPartialTypeName(getInterfaceTypeName(props));
    }
    var keys = Object.keys(props);
    var types = keys.map(function(key) {
      return props[key];
    });
    var len = keys.length;
    return new PartialType(name2, function(u) {
      if (UnknownRecord.is(u)) {
        for (var i = 0; i < len; i++) {
          var k = keys[i];
          var uk = u[k];
          if (uk !== void 0 && !props[k].is(uk)) {
            return false;
          }
        }
        return true;
      }
      return false;
    }, function(u, c) {
      var e = UnknownRecord.validate(u, c);
      if (isLeft2(e)) {
        return e;
      }
      var o = e.right;
      var a = o;
      var errors = [];
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var ak = a[k];
        var type_2 = props[k];
        var result = type_2.validate(ak, appendContext(c, k, type_2, ak));
        if (isLeft2(result)) {
          if (ak !== void 0) {
            pushAll(errors, result.left);
          }
        } else {
          var vak = result.right;
          if (vak !== ak) {
            if (a === o) {
              a = __assign({}, o);
            }
            a[k] = vak;
          }
        }
      }
      return errors.length > 0 ? failures(errors) : success(a);
    }, useIdentity(types) ? identity2 : function(a) {
      var s = __assign({}, a);
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var ak = a[k];
        if (ak !== void 0) {
          s[k] = types[i].encode(ak);
        }
      }
      return s;
    }, props);
  }
  var DictionaryType = function(_super) {
    __extends(DictionaryType2, _super);
    function DictionaryType2(name2, is, validate, encode, domain, codomain) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.domain = domain;
      _this.codomain = codomain;
      _this._tag = "DictionaryType";
      return _this;
    }
    return DictionaryType2;
  }(Type);
  function record(domain, codomain, name2) {
    var keys = getDomainKeys(domain);
    return keys ? enumerableRecord(Object.keys(keys), domain, codomain, name2) : nonEnumerableRecord(domain, codomain, name2);
  }
  var UnionType = function(_super) {
    __extends(UnionType2, _super);
    function UnionType2(name2, is, validate, encode, types) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.types = types;
      _this._tag = "UnionType";
      return _this;
    }
    return UnionType2;
  }(Type);
  function union3(codecs, name2) {
    if (name2 === void 0) {
      name2 = getUnionName(codecs);
    }
    var index = getIndex(codecs);
    if (index !== void 0 && codecs.length > 0) {
      var tag_1 = index[0], groups_1 = index[1];
      var len_1 = groups_1.length;
      var find_1 = function(value) {
        for (var i = 0; i < len_1; i++) {
          if (groups_1[i].indexOf(value) !== -1) {
            return i;
          }
        }
        return void 0;
      };
      return new TaggedUnionType(name2, function(u) {
        if (UnknownRecord.is(u)) {
          var i = find_1(u[tag_1]);
          return i !== void 0 ? codecs[i].is(u) : false;
        }
        return false;
      }, function(u, c) {
        var e = UnknownRecord.validate(u, c);
        if (isLeft2(e)) {
          return e;
        }
        var r = e.right;
        var i = find_1(r[tag_1]);
        if (i === void 0) {
          return failure(u, c);
        }
        var codec = codecs[i];
        return codec.validate(r, appendContext(c, String(i), codec, r));
      }, useIdentity(codecs) ? identity2 : function(a) {
        var i = find_1(a[tag_1]);
        if (i === void 0) {
          throw new Error("no codec found to encode value in union codec " + name2);
        } else {
          return codecs[i].encode(a);
        }
      }, codecs, tag_1);
    } else {
      return new UnionType(name2, function(u) {
        return codecs.some(function(type2) {
          return type2.is(u);
        });
      }, function(u, c) {
        var errors = [];
        for (var i = 0; i < codecs.length; i++) {
          var codec = codecs[i];
          var result = codec.validate(u, appendContext(c, String(i), codec, u));
          if (isLeft2(result)) {
            pushAll(errors, result.left);
          } else {
            return success(result.right);
          }
        }
        return failures(errors);
      }, useIdentity(codecs) ? identity2 : function(a) {
        for (var _i = 0, codecs_1 = codecs; _i < codecs_1.length; _i++) {
          var codec = codecs_1[_i];
          if (codec.is(a)) {
            return codec.encode(a);
          }
        }
        throw new Error("no codec found to encode value in union type " + name2);
      }, codecs);
    }
  }
  var IntersectionType = function(_super) {
    __extends(IntersectionType2, _super);
    function IntersectionType2(name2, is, validate, encode, types) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.types = types;
      _this._tag = "IntersectionType";
      return _this;
    }
    return IntersectionType2;
  }(Type);
  function intersection2(codecs, name2) {
    if (name2 === void 0) {
      name2 = "(" + codecs.map(function(type2) {
        return type2.name;
      }).join(" & ") + ")";
    }
    var len = codecs.length;
    return new IntersectionType(name2, function(u) {
      return codecs.every(function(type2) {
        return type2.is(u);
      });
    }, codecs.length === 0 ? success : function(u, c) {
      var us = [];
      var errors = [];
      for (var i = 0; i < len; i++) {
        var codec = codecs[i];
        var result = codec.validate(u, appendContext(c, String(i), codec, u));
        if (isLeft2(result)) {
          pushAll(errors, result.left);
        } else {
          us.push(result.right);
        }
      }
      return errors.length > 0 ? failures(errors) : success(mergeAll(u, us));
    }, codecs.length === 0 ? identity2 : function(a) {
      return mergeAll(a, codecs.map(function(codec) {
        return codec.encode(a);
      }));
    }, codecs);
  }
  var TupleType = function(_super) {
    __extends(TupleType2, _super);
    function TupleType2(name2, is, validate, encode, types) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.types = types;
      _this._tag = "TupleType";
      return _this;
    }
    return TupleType2;
  }(Type);
  var ReadonlyType = function(_super) {
    __extends(ReadonlyType2, _super);
    function ReadonlyType2(name2, is, validate, encode, type2) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ReadonlyType";
      return _this;
    }
    return ReadonlyType2;
  }(Type);
  var ReadonlyArrayType = function(_super) {
    __extends(ReadonlyArrayType2, _super);
    function ReadonlyArrayType2(name2, is, validate, encode, type2) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ReadonlyArrayType";
      return _this;
    }
    return ReadonlyArrayType2;
  }(Type);
  var ExactType = function(_super) {
    __extends(ExactType2, _super);
    function ExactType2(name2, is, validate, encode, type2) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ExactType";
      return _this;
    }
    return ExactType2;
  }(Type);
  var FunctionType = function(_super) {
    __extends(FunctionType2, _super);
    function FunctionType2() {
      var _this = _super.call(this, "Function", function(u) {
        return typeof u === "function";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "FunctionType";
      return _this;
    }
    return FunctionType2;
  }(Type);
  var Function = new FunctionType();
  var TaggedUnionType = function(_super) {
    __extends(TaggedUnionType2, _super);
    function TaggedUnionType2(name2, is, validate, encode, codecs, tag) {
      var _this = _super.call(this, name2, is, validate, encode, codecs) || this;
      _this.tag = tag;
      return _this;
    }
    return TaggedUnionType2;
  }(UnionType);
  var NeverType = function(_super) {
    __extends(NeverType2, _super);
    function NeverType2() {
      var _this = _super.call(this, "never", function(_) {
        return false;
      }, function(u, c) {
        return failure(u, c);
      }, function() {
        throw new Error("cannot encode never");
      }) || this;
      _this._tag = "NeverType";
      return _this;
    }
    return NeverType2;
  }(Type);
  var never = new NeverType();
  var AnyType = function(_super) {
    __extends(AnyType2, _super);
    function AnyType2() {
      var _this = _super.call(this, "any", function(_) {
        return true;
      }, success, identity2) || this;
      _this._tag = "AnyType";
      return _this;
    }
    return AnyType2;
  }(Type);
  var any = new AnyType();
  var ObjectType = function(_super) {
    __extends(ObjectType2, _super);
    function ObjectType2() {
      var _this = _super.call(this, "object", function(u) {
        return u !== null && typeof u === "object";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "ObjectType";
      return _this;
    }
    return ObjectType2;
  }(Type);
  var object = new ObjectType();
  function refinement(codec, predicate, name2) {
    if (name2 === void 0) {
      name2 = "(" + codec.name + " | " + getFunctionName(predicate) + ")";
    }
    return new RefinementType(name2, function(u) {
      return codec.is(u) && predicate(u);
    }, function(i, c) {
      var e = codec.validate(i, c);
      if (isLeft2(e)) {
        return e;
      }
      var a = e.right;
      return predicate(a) ? success(a) : failure(a, c);
    }, codec.encode, codec, predicate);
  }
  var Integer = refinement(number, Number.isInteger, "Integer");
  var StrictType = function(_super) {
    __extends(StrictType2, _super);
    function StrictType2(name2, is, validate, encode, props) {
      var _this = _super.call(this, name2, is, validate, encode) || this;
      _this.props = props;
      _this._tag = "StrictType";
      return _this;
    }
    return StrictType2;
  }(Type);

  // src/prettyReporter.ts
  var takeUntil = (predicate) => (as) => {
    const init2 = [];
    for (let i = 0; i < as.length; i++) {
      init2[i] = as[i];
      if (predicate(as[i])) {
        return init2;
      }
    }
    return init2;
  };
  var isUnionType = ({ type: type2 }) => type2 instanceof UnionType;
  var jsToString = (value) => value === void 0 ? "undefined" : JSON.stringify(value);
  var keyPath = (ctx) => ctx.map((c) => c.key).filter(Boolean).join(".");
  var getErrorFromCtx = (validation) => last3(validation.context);
  var getValidationContext = (validation) => validation.context;
  var TYPE_MAX_LEN = 160;
  var truncateType = (type2, options = {}) => {
    const { truncateLongTypes = true } = options;
    if (truncateLongTypes && type2.length > TYPE_MAX_LEN) {
      return `${type2.slice(0, TYPE_MAX_LEN - 3)}...`;
    }
    return type2;
  };
  var errorMessageSimple = (expectedType, path, error, options) => [
    `Expecting ${truncateType(expectedType, options)}`,
    path === "" ? "" : `at ${path}`,
    `but instead got: ${jsToString(error.value)}`,
    error.message ? `(${error.message})` : ""
  ].filter(Boolean).join(" ");
  var errorMessageUnion = (expectedTypes, path, value, options) => [
    "Expecting one of:\n",
    expectedTypes.map((type2) => `    ${truncateType(type2, options)}`).join("\n"),
    path === "" ? "\n" : `
at ${path} `,
    `but instead got: ${jsToString(value)}`
  ].filter(Boolean).join("");
  var findExpectedType = (ctx) => (0, import_function2.pipe)(ctx, findIndex2(isUnionType), chain((n) => lookup2(n + 1, ctx)));
  var formatValidationErrorOfUnion = (path, errors, options) => {
    const expectedTypes = (0, import_function2.pipe)(errors, map(getValidationContext), map(findExpectedType), compact);
    const value = (0, import_function2.pipe)(expectedTypes, head5, map2((v) => v.actual), getOrElse(() => void 0));
    const expected = expectedTypes.map(({ type: type2 }) => type2.name);
    return expected.length > 0 ? some2(errorMessageUnion(expected, path, value, options)) : none2;
  };
  var formatValidationCommonError = (path, error, options) => (0, import_function2.pipe)(error, getErrorFromCtx, map2((errorContext) => errorMessageSimple(errorContext.type.name, path, error, options)));
  var groupByKey = groupBy((error) => (0, import_function2.pipe)(error.context, takeUntil(isUnionType), keyPath));
  var format = (path, errors, options) => tail2(errors).length > 0 ? formatValidationErrorOfUnion(path, errors, options) : formatValidationCommonError(path, head3(errors), options);
  var formatValidationErrors = (errors, options) => (0, import_function2.pipe)(errors, groupByKey, mapWithIndex2((path, errors2) => format(path, errors2, options)), compact3, toArray, map(([_key, error]) => error));
  var reporter = (validation, options) => (0, import_function2.pipe)(validation, E.mapLeft((errors) => formatValidationErrors(errors, options)), E.fold((errors) => errors, () => []));
  var prettyReporter = { report: reporter };
  var prettyReporter_default = prettyReporter;

  // src/utils.ts
  function checkInput(codec, input) {
    const inputDecoded = codec.decode(input);
    if ((0, import_Either2.isLeft)(inputDecoded)) {
      const report = prettyReporter_default.report(inputDecoded).join("\n");
      throw new ContractError(report);
    }
    return input;
  }
  function exhaustive(_) {
    throw new Error("Check wasn't exhaustive");
  }

  // src/consts.ts
  var PST = "PTY";
  var UNIT = 1e6;
  var ERR_404TOKENID = "No token found: Invalid tokenId";
  var ERR_NOTOKENID = "No tokenId specified";
  var ERR_NOTARGET = "No target specified";
  var ERR_INTEGER = "Invalid value. Must be an integer";

  // src/handlers/readonlys.ts
  var NameInputCodec = type({ function: literal("name") });
  function name(state, caller, input) {
    checkInput(NameInputCodec, input);
    return { result: { name: "Pianity" } };
  }
  var TickerInputCodec = intersection2([
    type({
      function: literal("ticker")
    }),
    partial({
      tokenId: string
    })
  ]);
  function ticker(state, caller, input) {
    const { tokenId } = checkInput(TickerInputCodec, input);
    const ticker2 = tickerOf(state, tokenId || PST);
    return { result: { ticker: ticker2 } };
  }
  var BalanceInputCodec = intersection2([
    type({
      function: literal("balance")
    }),
    partial({
      target: string,
      tokenId: string
    })
  ]);
  function balance(state, caller, input) {
    const { target = caller, tokenId = PST } = checkInput(BalanceInputCodec, input);
    const balance2 = balanceOf(state, tokenId || PST, target);
    return { result: { target, balance: balance2.toString() } };
  }
  var VaultBalanceInputCodec = intersection2([
    type({
      function: literal("vaultBalance")
    }),
    partial({
      target: string,
      tokenId: string
    })
  ]);
  function vaultBalance(state, caller, input) {
    const { target = caller, tokenId = PST } = checkInput(VaultBalanceInputCodec, input);
    const vault = state.vaults[target];
    let balance2 = new BigNumber(0);
    if (vault) {
      const blockHeight = SmartWeave.block.height;
      for (const vaultItem of vault) {
        if (vaultItem.tokenId === tokenId && blockHeight < vaultItem.end) {
          balance2 = balance2.plus(new BigNumber(vaultItem.balance));
        }
      }
    }
    return { result: { target, balance: balance2.toString() } };
  }
  var TotalBalanceInputCodec = intersection2([
    type({
      function: literal("totalBalance")
    }),
    partial({
      target: string,
      tokenId: string
    })
  ]);
  function totalBalance(state, caller, input) {
    const { target = caller, tokenId = PST } = checkInput(TotalBalanceInputCodec, input);
    const token = state.tokens[tokenId];
    ContractAssert(token, "totalBalanceOf: Token not found");
    let balance2 = new BigNumber(token.balances[target] || 0);
    const vaults = state.vaults[target];
    if (vaults) {
      for (const vault of vaults) {
        if (vault.tokenId === tokenId) {
          balance2 = balance2.plus(vault.balance);
        }
      }
    }
    return { result: { target, balance: balance2.toString() } };
  }
  var RoyaltiesInputCodec = type({
    function: literal("royalties"),
    target: string,
    tokenId: string
  });
  function royalties(state, caller, input) {
    const { target, tokenId } = checkInput(RoyaltiesInputCodec, input);
    ContractAssert(tokenId, ERR_NOTOKENID);
    ContractAssert(target, ERR_NOTARGET);
    const royalties2 = royaltiesOf(state, tokenId, target);
    return { result: { royalties: royalties2 } };
  }
  var OwnerInputCodec = type({
    function: union3([literal("owner"), literal("owners")]),
    tokenId: string
  });
  function owner(state, caller, input) {
    const { tokenId } = checkInput(OwnerInputCodec, input);
    ContractAssert(tokenId, ERR_NOTOKENID);
    const owners = ownersOf(state, tokenId);
    return { result: { owners } };
  }
  function balanceOf(state, tokenId, target) {
    const token = state.tokens[tokenId];
    ContractAssert(token, "balanceOf: Token not found");
    return new BigNumber(token.balances[target] || 0);
  }
  function royaltiesOf(state, tokenId, target) {
    const token = state.tokens[tokenId];
    ContractAssert(token, ERR_404TOKENID);
    return token.royalties?.[target] ?? 0;
  }
  function tickerOf(state, tokenId) {
    const token = state.tokens[tokenId];
    ContractAssert(token, ERR_404TOKENID);
    const { ticker: ticker2 } = token;
    return ticker2;
  }
  function ownersOf(state, tokenId) {
    const token = state.tokens[tokenId];
    ContractAssert(token, ERR_404TOKENID);
    return Object.keys(token.balances);
  }

  // src/handlers/approval.ts
  var IsApprovedForAllInputCodec = type({
    function: literal("isApprovedForAll"),
    target: string,
    owner: string
  });
  function isApprovedForAll(state, caller, input) {
    const { target, owner: owner2 } = checkInput(IsApprovedForAllInputCodec, input);
    const approved = isApprovedForAllHelper(state, owner2, target);
    return { result: { approved } };
  }
  var SetApprovalForAllInputCodec = type({
    function: literal("setApprovalForAll"),
    target: string,
    approved: boolean
  });
  function setApprovalForAll(state, caller, input) {
    const { approved, target } = checkInput(SetApprovalForAllInputCodec, input);
    ContractAssert(target !== caller, "Target must be different from the caller");
    if (!(caller in state.operatorApprovals)) {
      state.operatorApprovals[caller] = {};
    }
    state.operatorApprovals[caller][target] = approved;
    return { state };
  }
  function isApprovedForAllHelper(state, caller, target) {
    if (target.length === 0 && state.settings.contractOwners.includes(caller)) {
      return true;
    }
    if (!(target in state.operatorApprovals))
      return false;
    if (!(caller in state.operatorApprovals[target]))
      return false;
    return state.operatorApprovals[target][caller];
  }
  function isApprovedOrOwner(state, caller, target) {
    if (caller === target) {
      return true;
    }
    return isApprovedForAllHelper(state, caller, target);
  }

  // src/handlers/transfer.ts
  var SingleTransferCodec = intersection2([
    type({
      target: string
    }),
    partial({
      from: string,
      tokenId: string,
      qty: string,
      no: number,
      price: string
    })
  ]);
  var TransferInputCodec = intersection2([
    type({ function: literal("transfer") }),
    SingleTransferCodec
  ]);
  function transfer(state, caller, input) {
    const {
      target,
      qty,
      no,
      price,
      from = caller,
      tokenId = PST
    } = checkInput(TransferInputCodec, input);
    const token = state.tokens[tokenId];
    ContractAssert(from !== target, "transfer: `from` cannot be equal to `target`");
    ContractAssert(token, "transfer: `tokenId` doesn't exist");
    ContractAssert(!token.owners || no && !qty, "transfer: `no` must be set and `qty` unset for NFTs");
    ContractAssert(token.owners || !no && qty, "transfer: `qty` must be set and `no` unset for tokens");
    ContractAssert(isApprovedOrOwner(state, caller, from), "transfer: Sender is not approved nor the owner of the token");
    if (token.royalties) {
      const { contractOwners } = state.settings;
      ContractAssert(state.settings.allowFreeTransfer || contractOwners.includes(caller), "transfer: Free transfers are not allowed");
      ContractAssert(!price || isApprovedForAllHelper(state, caller, target), "transfer: Receiver is not approved");
      removeTokenFrom(state, target, PST, new BigNumber(price || 0));
      pay(state, token, from, new BigNumber(price || 0));
    }
    removeTokenFrom(state, from, tokenId, new BigNumber(qty || 1), no);
    addTokenTo(state, target, tokenId, new BigNumber(qty || 1), no);
    return { state };
  }
  var TransferBatchInputCodec = type({
    function: literal("transferBatch"),
    transfers: array(SingleTransferCodec)
  });
  function transferBatch(state, caller, input) {
    const { transfers } = checkInput(TransferBatchInputCodec, input);
    for (const transferInput of transfers) {
      transfer(state, caller, { function: "transfer", ...transferInput });
    }
    return { state };
  }
  var TransferRoyaltiesInputCodec = type({
    function: literal("transferRoyalties"),
    target: string,
    tokenId: string,
    qty: number
  });
  function transferRoyalties(state, caller, input) {
    const { target, tokenId, qty } = checkInput(TransferRoyaltiesInputCodec, input);
    const token = state.tokens[tokenId];
    ContractAssert(target !== caller, "transferRoyalties: `target` must be different from the caller");
    ContractAssert(qty > 0, "transferRoyalties: `qty` must be positive");
    ContractAssert(token, "transferRoyalties: `tokenId` doesn't exist");
    ContractAssert(token.royalties, "transferRoyalties: Royalties are not set for this token");
    removeRoyaltiesFrom(token, caller, qty);
    addRoyaltiesTo(token, target, qty);
    checkRoyalties(token.royalties);
    return { state };
  }
  function addTokenTo(state, target, tokenId, qty, no) {
    ContractAssert(qty.isInteger(), "addTokenTo: `qty` must be an integer");
    ContractAssert(qty.gte(0), "addTokenTo: `qty` must be positive");
    if (qty.eq(0))
      return;
    const token = state.tokens[tokenId];
    ContractAssert(token, "addTokenTo: `tokenId` does not exist");
    if (!(target in token.balances)) {
      token.balances[target] = "0";
    }
    token.balances[target] = new BigNumber(token.balances[target]).plus(qty).toString();
    if (token.owners && no) {
      ContractAssert(Number.isInteger(no), "addTokenTo: `no` must be an integer");
      ContractAssert(no > 0, "Invalid value for no. Must be strictly positive");
      ContractAssert(qty.eq(1), "Amount must be 1 for NFTs");
      ContractAssert(token.owners[no - 1] === "", "Token no. is already attributed");
      token.owners[no - 1] = target;
    }
  }
  function removeTokenFrom(state, from, tokenId, qty, no) {
    const fromBalance = balanceOf(state, tokenId, from);
    ContractAssert(fromBalance.gt(0), "removeTokenFrom: Sender does not own the token");
    ContractAssert(qty.gte(0), "removeTokenFrom: Invalid value for qty. Must be positive");
    ContractAssert(fromBalance.gte(qty), "removeTokenFrom: Insufficient balance");
    if (qty.eq(0)) {
      return;
    }
    ContractAssert(state.tokens[tokenId], "removeTokenFrom: `tokenId` does not exist");
    const token = state.tokens[tokenId];
    const newBalance = new BigNumber(token.balances[from]).minus(qty).toString();
    if (token.owners) {
      ContractAssert(no, "removeTokenFrom: No no. specified");
      ContractAssert(Number.isInteger(no), ERR_INTEGER);
      ContractAssert(no > 0, "removeTokenFrom: Invalid value for no. Must be strictly positive");
      ContractAssert(qty.eq(1), "removeTokenFrom: Amount must be 1 for NFTs");
      ContractAssert(token.owners[no - 1] === from, "removeTokenFrom: Token no. is not owned by caller");
      token.owners[no - 1] = "";
    }
    if (newBalance === "0") {
      delete token.balances[from];
    } else {
      token.balances[from] = newBalance;
    }
  }
  function pay(state, token, from, price) {
    ContractAssert(token.royalties && token.royaltyRate, "pay: Token doesn't have any fees");
    ContractAssert(price.isInteger(), `pay: ${ERR_INTEGER}`);
    ContractAssert(price.gte(0), "pay: `price` must be positive");
    ContractAssert(price.mod(1e6).eq(0), "pay: `price` must be a multiple of 1_000_000");
    if (price.eq(0)) {
      return;
    }
    if (from.length === 0) {
      for (const [target, split] of Object.entries(token.royalties)) {
        addTokenTo(state, target, PST, price.multipliedBy(split).dividedBy(UNIT));
      }
    } else {
      const netValue = price.multipliedBy(1 - token.royaltyRate);
      addTokenTo(state, from, PST, netValue);
      for (const [target, split] of Object.entries(token.royalties)) {
        addTokenTo(state, target, PST, price.multipliedBy(token.royaltyRate * split).dividedBy(UNIT));
      }
    }
  }
  function checkRoyalties(royalties2) {
    const sum = Object.values(royalties2).reduce((acc, val) => {
      ContractAssert(Number.isInteger(val), `checkRoyalties: Royalties must be integers`);
      ContractAssert(val > 0, "checkRoyalties: Royalties must be strictly positive");
      return acc + val;
    }, 0);
    ContractAssert(sum === UNIT, `checkRoyalties: Sum of royalties shares must be ${UNIT}; was ${sum}`);
  }
  function addRoyaltiesTo(token, target, qty) {
    ContractAssert(token.royalties, "addRoyaltiesTo: Token doesn't have any royalties");
    if (!(target in token.royalties)) {
      token.royalties[target] = 0;
    }
    token.royalties[target] += qty;
  }
  function removeRoyaltiesFrom(token, from, qty) {
    ContractAssert(token.royalties, "removeRoyaltiesFrom: Token doesn't have any royalties");
    ContractAssert(Number.isInteger(qty), "removeRoyaltiesFrom: Royalties must be integers");
    const fromRoyalties = token.royalties[from] || 0;
    ContractAssert(fromRoyalties > 0, "Sender does not own royalties on the token");
    ContractAssert(fromRoyalties >= qty, "Insufficient royalties' balance");
    const newBalance = token.royalties[from] - qty;
    if (newBalance === 0) {
      delete token.royalties[from];
    } else {
      token.royalties[from] = newBalance;
    }
  }

  // src/handlers/mint.ts
  var SingleMintCodec = partial({
    royaltyRate: number,
    royalties: record(string, number),
    no: number,
    qty: string,
    suffix: string
  });
  var MintInputCodec = intersection2([
    type({ function: literal("mint") }),
    SingleMintCodec
  ]);
  function mint(state, caller, input) {
    const { royalties: royalties2, royaltyRate, no, qty, suffix } = checkInput(MintInputCodec, input);
    const { contractOwners } = state.settings;
    ContractAssert(contractOwners.includes(caller), "mint: `caller` is not authorized to mint");
    ContractAssert(qty && !no && !royalties2 && !royaltyRate || !qty && no && royaltyRate && royalties2, "mint: Either `qty` or `no` must be set (not simultaneously). When `no` is set, `royalties` and `royaltyRate` must be set as well.");
    const tokenId = getTokenId(suffix);
    ContractAssert(!(tokenId in state.tokens), `mint: \`tokenId\` already exists: "${tokenId}".`);
    if (royalties2) {
      checkRoyalties(royalties2);
    }
    const token = {
      ticker: `${PST}${state.nonce}`,
      royalties: royalties2,
      balances: {},
      royaltyRate
    };
    state.nonce++;
    state.tokens[tokenId] = token;
    if (no) {
      ContractAssert(Number.isInteger(no), ERR_INTEGER);
      token.owners = Array(no).fill("");
      addTokenTo(state, "", tokenId, new BigNumber(no));
    } else if (qty) {
      addTokenTo(state, "", tokenId, new BigNumber(qty));
    }
    return { state };
  }
  var MintBatchInputCodec = type({
    function: literal("mintBatch"),
    mints: array(intersection2([SingleMintCodec, type({ suffix: SingleMintCodec.props.suffix })]))
  });
  function mintBatch(state, caller, input) {
    const { mints } = checkInput(MintBatchInputCodec, input);
    for (const mintInput of mints) {
      mint(state, caller, { function: "mint", ...mintInput });
    }
    return { state };
  }
  var BurnInputCodec = type({
    function: literal("burn"),
    tokenId: string
  });
  function burn(state, caller, input) {
    const { tokenId } = checkInput(BurnInputCodec, input);
    const { contractSuperOwners } = state.settings;
    ContractAssert(state.tokens[tokenId], "burn: `tokenId` doesn't exist");
    ContractAssert(contractSuperOwners.includes(caller), "burn: `caller` isn't a super owner");
    delete state.tokens[tokenId];
    return { state };
  }
  function getTokenId(suffix) {
    let tokenId = SmartWeave.transaction.id;
    ContractAssert(tokenId, "mint: Couldn't get the transaction id via SmartWeave global");
    const effectiveSuffix = suffix?.trim();
    if (effectiveSuffix && effectiveSuffix.length > 0) {
      tokenId = `${suffix}${tokenId}`;
    }
    return tokenId;
  }

  // src/contractTypes.ts
  var SettingsKnownProps = {
    allowFreeTransfer: boolean,
    paused: boolean,
    communityChest: string,
    contractOwners: array(string),
    contractSuperOwners: array(string),
    settingsOwnersPermissions: array(string),
    foreignContracts: array(string),
    lockMinLength: number,
    lockMaxLength: number
  };
  var SettingsCodec = intersection2([
    type(SettingsKnownProps),
    record(string, unknown)
  ]);

  // src/handlers/settings.ts
  var SettingsInputCodec = type({
    function: literal("settings"),
    settings: intersection2([partial(SettingsKnownProps), record(string, unknown)])
  });
  function findUnallowedChange(permissions, inputSettings) {
    for (const key of Object.keys(inputSettings)) {
      if (!permissions.includes(key)) {
        return key;
      }
    }
    return null;
  }
  function settings(state, caller, input) {
    const { settings: inputSettings } = checkInput(SettingsInputCodec, input);
    const { contractSuperOwners, contractOwners } = state.settings;
    const callerIsSuper = contractSuperOwners.includes(caller);
    const callerIsOwner = contractOwners.includes(caller);
    ContractAssert(inputSettings, "settings: No settings specified");
    ContractAssert(callerIsSuper || callerIsOwner, "settings: Only Super Owners and Owners are allowed to edit contract settings");
    ContractAssert(callerIsSuper || !(inputSettings.contractSuperOwners || inputSettings.contractOwners || inputSettings.settingsOwnersPermissions), "settings: Only Super Owners are allowed to edit `contractSuperOwners`, `contractOwners` and `contractOwnersPermissions`");
    ContractAssert(!inputSettings.contractSuperOwners || inputSettings.contractSuperOwners.length > 0, "settings: Can't delete all the Super Owners");
    if (!callerIsSuper) {
      const unallowedChange = findUnallowedChange(state.settings.settingsOwnersPermissions, inputSettings);
      ContractAssert(unallowedChange === null, `settings: Owners are not allowed to change \`${unallowedChange}\``);
    }
    const newSettings = checkInput(SettingsCodec, { ...state.settings, ...inputSettings });
    state.settings = newSettings;
    return { state };
  }

  // src/handlers/foreignInvoke.ts
  var ForeignInvokeInputCodec = type({
    function: literal("foreignInvoke"),
    target: string,
    invocationId: string
  });
  async function foreignInvoke(state, caller, input) {
    const { target, invocationId } = checkInput(ForeignInvokeInputCodec, input);
    const { contractOwners } = state.settings;
    ContractAssert(contractOwners.includes(caller), "Caller is not authorized to foreignInvoke");
    ContractAssert(target, ERR_NOTARGET);
    ContractAssert(typeof invocationId !== "undefined", "No invocationId specified");
    ContractAssert(state.settings.foreignContracts, "No foreignContracts specified");
    ContractAssert(state.settings.foreignContracts.includes(target), "Invalid auction contract");
    const foreignState = await SmartWeave.contracts.readContractState(target);
    ContractAssert(foreignState.foreignCalls, "Contract is missing support for foreign calls");
    const invocation = foreignState.foreignCalls[invocationId];
    ContractAssert(invocation, `Incorrect invocationId: invocation not found (${invocationId})`);
    ContractAssert(!state.invocations.includes(target + invocationId), `Invocation already exists (${invocation})`);
    state.invocations.push(target + invocationId);
    const foreignAction = {
      input: invocation,
      caller
    };
    return await handle(state, foreignAction);
  }

  // src/handlers/vault.ts
  var LockInputCodec = type({
    function: literal("lock"),
    tokenId: string,
    qty: string,
    lockLength: number
  });
  function lock(state, caller, input) {
    const { qty: rawQty, lockLength, tokenId } = checkInput(LockInputCodec, input);
    lockToken(state, tokenId, caller, caller, rawQty, lockLength);
    return { state };
  }
  var UnlockInputCodec = type({
    function: literal("unlock")
  });
  function unlock(state, caller, input) {
    checkInput(UnlockInputCodec, input);
    const vault = state.vaults[caller];
    for (let i = vault.length - 1; i >= 0; i--) {
      const vaultItem = vault[i];
      if (SmartWeave.block.height < vaultItem.end) {
        continue;
      }
      addTokenTo(state, caller, vaultItem.tokenId, new BigNumber(vaultItem.balance));
      vault.pop();
    }
    return { state };
  }
  var IncreaseVaultInputCodec = type({
    function: literal("increaseVault"),
    id: number,
    lockLength: number
  });
  function increaseVault(state, caller, input) {
    const { id, lockLength } = checkInput(IncreaseVaultInputCodec, input);
    const { lockMinLength, lockMaxLength } = state.settings;
    const vault = state.vaults[caller];
    ContractAssert(Number.isInteger(lockLength) && lockLength > lockMinLength && lockLength < lockMaxLength, `transferLocked: lockLength is out of range. lockLength must be between ${lockMinLength} - ${lockMaxLength}.`);
    ContractAssert(vault && vault[id], "increaseVault: `caller` doesn't have a vault with `id`");
    const vaultItem = vault[id];
    ContractAssert(SmartWeave.block.height < vaultItem.end, "increaseVault: vault has already ended");
    vaultItem.end = SmartWeave.block.height + lockLength;
    return { state };
  }
  var TransferLockedInputCodec = type({
    function: literal("transferLocked"),
    target: string,
    tokenId: string,
    qty: string,
    lockLength: number
  });
  function transferLocked(state, caller, input) {
    const {
      target,
      tokenId,
      lockLength = 0,
      qty: rawQty
    } = checkInput(TransferLockedInputCodec, input);
    lockToken(state, tokenId, caller, target, rawQty, lockLength);
    return { state };
  }
  function lockToken(state, tokenId, from, target, rawQty, lockLength) {
    const { lockMinLength, lockMaxLength } = state.settings;
    const token = state.tokens[tokenId];
    const qty = new BigNumber(rawQty);
    ContractAssert(!token.owners, "lockToken: `tokenId` must not be an NFT");
    ContractAssert(qty.isInteger() && qty.gte(0), "lockToken: `qty` must be a positive integer.");
    ContractAssert(Number.isInteger(lockLength) && lockLength > lockMinLength && lockLength < lockMaxLength, `lockToken: lockLength is out of range. lockLength must be between ${lockMinLength} - ${lockMaxLength}.`);
    ContractAssert(token, "transferLocked: tokenId doesn't exist");
    removeTokenFrom(state, from, tokenId, qty);
    const start = SmartWeave.block.height;
    const end = start + lockLength;
    if (!state.vaults[target]) {
      state.vaults[target] = [];
    }
    state.vaults[target].push({
      tokenId,
      balance: qty.toString(),
      end,
      start
    });
  }

  // src/handlers/transactionBatch.ts
  async function transactionBatch(state, caller, input) {
    const { inputs } = checkInput(TransactionBatchInputCodec, input);
    const results = [];
    let newState = JSON.parse(JSON.stringify(state));
    for (const input2 of inputs) {
      const res = await handle(newState, { caller, input: input2 });
      if ("state" in res) {
        newState = res.state;
      }
      results.push(res.result);
    }
    state = { ...state, ...newState };
    return { state, result: { results } };
  }

  // src/handlers/index.ts
  var InputWOTxBatchCodec = union3([
    NameInputCodec,
    TickerInputCodec,
    BalanceInputCodec,
    VaultBalanceInputCodec,
    TotalBalanceInputCodec,
    RoyaltiesInputCodec,
    OwnerInputCodec,
    IsApprovedForAllInputCodec,
    SetApprovalForAllInputCodec,
    TransferInputCodec,
    TransferBatchInputCodec,
    TransferRoyaltiesInputCodec,
    MintInputCodec,
    MintBatchInputCodec,
    BurnInputCodec,
    SettingsInputCodec,
    LockInputCodec,
    UnlockInputCodec,
    IncreaseVaultInputCodec,
    TransferLockedInputCodec,
    ForeignInvokeInputCodec
  ]);
  var TransactionBatchInputCodec = type({
    function: literal("transactionBatch"),
    inputs: array(InputWOTxBatchCodec)
  });
  var InputCodec = union3([InputWOTxBatchCodec, TransactionBatchInputCodec]);

  // src/erc1155.ts
  async function handle(state, action) {
    const { paused, contractSuperOwners } = state.settings;
    const { input, caller } = action;
    switch (input.function) {
      case "name":
        return name(state, caller, input);
      case "ticker":
        return ticker(state, caller, input);
      case "balance":
        return balance(state, caller, input);
      case "vaultBalance":
        return vaultBalance(state, caller, input);
      case "totalBalance":
        return totalBalance(state, caller, input);
      case "royalties":
        return royalties(state, caller, input);
      case "owner":
      case "owners":
        return owner(state, caller, input);
      case "isApprovedForAll":
        return isApprovedForAll(state, caller, input);
      default:
        break;
    }
    ContractAssert(!paused || contractSuperOwners.includes(caller), "The contract must not be paused");
    switch (input.function) {
      case "setApprovalForAll":
        return setApprovalForAll(state, caller, input);
      case "transfer":
        return transfer(state, caller, input);
      case "transferBatch":
        return transferBatch(state, caller, input);
      case "transferRoyalties":
        return transferRoyalties(state, caller, input);
      case "foreignInvoke":
        return foreignInvoke(state, caller, input);
      case "mint":
        return mint(state, caller, input);
      case "mintBatch":
        return mintBatch(state, caller, input);
      case "settings":
        return settings(state, caller, input);
      case "burn":
        return burn(state, caller, input);
      case "transferLocked":
        return transferLocked(state, caller, input);
      case "lock":
        return lock(state, caller, input);
      case "unlock":
        return unlock(state, caller, input);
      case "increaseVault":
        return increaseVault(state, caller, input);
      case "transactionBatch":
        return transactionBatch(state, caller, input);
      default:
        exhaustive(input);
        throw new ContractError(`No function supplied or function not recognised: "${input.function}".`);
    }
  }
})();
