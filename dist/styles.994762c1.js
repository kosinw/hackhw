// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/styles/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Inter-Thin-BETA.woff2":[["Inter-Thin-BETA.3a1f9f12.woff2","assets/styles/Inter-Thin-BETA.woff2"],"assets/styles/Inter-Thin-BETA.woff2"],"./Inter-Thin-BETA.woff":[["Inter-Thin-BETA.7dfa0872.woff","assets/styles/Inter-Thin-BETA.woff"],"assets/styles/Inter-Thin-BETA.woff"],"./Inter-ThinItalic-BETA.woff2":[["Inter-ThinItalic-BETA.4609a2a3.woff2","assets/styles/Inter-ThinItalic-BETA.woff2"],"assets/styles/Inter-ThinItalic-BETA.woff2"],"./Inter-ThinItalic-BETA.woff":[["Inter-ThinItalic-BETA.a8b0f8e4.woff","assets/styles/Inter-ThinItalic-BETA.woff"],"assets/styles/Inter-ThinItalic-BETA.woff"],"./Inter-ExtraLight-BETA.woff2":[["Inter-ExtraLight-BETA.fd78f45a.woff2","assets/styles/Inter-ExtraLight-BETA.woff2"],"assets/styles/Inter-ExtraLight-BETA.woff2"],"./Inter-ExtraLight-BETA.woff":[["Inter-ExtraLight-BETA.6333d43f.woff","assets/styles/Inter-ExtraLight-BETA.woff"],"assets/styles/Inter-ExtraLight-BETA.woff"],"./Inter-ExtraLightItalic-BETA.woff2":[["Inter-ExtraLightItalic-BETA.e0625382.woff2","assets/styles/Inter-ExtraLightItalic-BETA.woff2"],"assets/styles/Inter-ExtraLightItalic-BETA.woff2"],"./Inter-ExtraLightItalic-BETA.woff":[["Inter-ExtraLightItalic-BETA.646e221d.woff","assets/styles/Inter-ExtraLightItalic-BETA.woff"],"assets/styles/Inter-ExtraLightItalic-BETA.woff"],"./Inter-Light-BETA.woff2":[["Inter-Light-BETA.f9fcb645.woff2","assets/styles/Inter-Light-BETA.woff2"],"assets/styles/Inter-Light-BETA.woff2"],"./Inter-Light-BETA.woff":[["Inter-Light-BETA.59c61822.woff","assets/styles/Inter-Light-BETA.woff"],"assets/styles/Inter-Light-BETA.woff"],"./Inter-LightItalic-BETA.woff2":[["Inter-LightItalic-BETA.58676cb3.woff2","assets/styles/Inter-LightItalic-BETA.woff2"],"assets/styles/Inter-LightItalic-BETA.woff2"],"./Inter-LightItalic-BETA.woff":[["Inter-LightItalic-BETA.461b5137.woff","assets/styles/Inter-LightItalic-BETA.woff"],"assets/styles/Inter-LightItalic-BETA.woff"],"./Inter-Regular.woff2":[["Inter-Regular.e9f4f820.woff2","assets/styles/Inter-Regular.woff2"],"assets/styles/Inter-Regular.woff2"],"./Inter-Regular.woff":[["Inter-Regular.cac5fc8b.woff","assets/styles/Inter-Regular.woff"],"assets/styles/Inter-Regular.woff"],"./Inter-Italic.woff2":[["Inter-Italic.164ad004.woff2","assets/styles/Inter-Italic.woff2"],"assets/styles/Inter-Italic.woff2"],"./Inter-Italic.woff":[["Inter-Italic.f3bde4f8.woff","assets/styles/Inter-Italic.woff"],"assets/styles/Inter-Italic.woff"],"./Inter-Medium.woff2":[["Inter-Medium.76c67fcd.woff2","assets/styles/Inter-Medium.woff2"],"assets/styles/Inter-Medium.woff2"],"./Inter-Medium.woff":[["Inter-Medium.b0cff093.woff","assets/styles/Inter-Medium.woff"],"assets/styles/Inter-Medium.woff"],"./Inter-MediumItalic.woff2":[["Inter-MediumItalic.0c9ca81e.woff2","assets/styles/Inter-MediumItalic.woff2"],"assets/styles/Inter-MediumItalic.woff2"],"./Inter-MediumItalic.woff":[["Inter-MediumItalic.6e2e41d6.woff","assets/styles/Inter-MediumItalic.woff"],"assets/styles/Inter-MediumItalic.woff"],"./Inter-SemiBold.woff2":[["Inter-SemiBold.73efc0f4.woff2","assets/styles/Inter-SemiBold.woff2"],"assets/styles/Inter-SemiBold.woff2"],"./Inter-SemiBold.woff":[["Inter-SemiBold.878e707a.woff","assets/styles/Inter-SemiBold.woff"],"assets/styles/Inter-SemiBold.woff"],"./Inter-SemiBoldItalic.woff2":[["Inter-SemiBoldItalic.d716935e.woff2","assets/styles/Inter-SemiBoldItalic.woff2"],"assets/styles/Inter-SemiBoldItalic.woff2"],"./Inter-SemiBoldItalic.woff":[["Inter-SemiBoldItalic.029980ff.woff","assets/styles/Inter-SemiBoldItalic.woff"],"assets/styles/Inter-SemiBoldItalic.woff"],"./Inter-Bold.woff2":[["Inter-Bold.c83b61b3.woff2","assets/styles/Inter-Bold.woff2"],"assets/styles/Inter-Bold.woff2"],"./Inter-Bold.woff":[["Inter-Bold.383cd61c.woff","assets/styles/Inter-Bold.woff"],"assets/styles/Inter-Bold.woff"],"./Inter-BoldItalic.woff2":[["Inter-BoldItalic.c7b01a52.woff2","assets/styles/Inter-BoldItalic.woff2"],"assets/styles/Inter-BoldItalic.woff2"],"./Inter-BoldItalic.woff":[["Inter-BoldItalic.fbf3f070.woff","assets/styles/Inter-BoldItalic.woff"],"assets/styles/Inter-BoldItalic.woff"],"./Inter-ExtraBold.woff2":[["Inter-ExtraBold.211a8313.woff2","assets/styles/Inter-ExtraBold.woff2"],"assets/styles/Inter-ExtraBold.woff2"],"./Inter-ExtraBold.woff":[["Inter-ExtraBold.3a9d8901.woff","assets/styles/Inter-ExtraBold.woff"],"assets/styles/Inter-ExtraBold.woff"],"./Inter-ExtraBoldItalic.woff2":[["Inter-ExtraBoldItalic.74a88be6.woff2","assets/styles/Inter-ExtraBoldItalic.woff2"],"assets/styles/Inter-ExtraBoldItalic.woff2"],"./Inter-ExtraBoldItalic.woff":[["Inter-ExtraBoldItalic.59a06825.woff","assets/styles/Inter-ExtraBoldItalic.woff"],"assets/styles/Inter-ExtraBoldItalic.woff"],"./Inter-Black.woff2":[["Inter-Black.0c42b71d.woff2","assets/styles/Inter-Black.woff2"],"assets/styles/Inter-Black.woff2"],"./Inter-Black.woff":[["Inter-Black.a0ff7221.woff","assets/styles/Inter-Black.woff"],"assets/styles/Inter-Black.woff"],"./Inter-BlackItalic.woff2":[["Inter-BlackItalic.44fe62ae.woff2","assets/styles/Inter-BlackItalic.woff2"],"assets/styles/Inter-BlackItalic.woff2"],"./Inter-BlackItalic.woff":[["Inter-BlackItalic.4f3ba457.woff","assets/styles/Inter-BlackItalic.woff"],"assets/styles/Inter-BlackItalic.woff"],"./Inter-upright.var.woff2":[["Inter-upright.var.9e26be32.woff2","assets/styles/Inter-upright.var.woff2"],"assets/styles/Inter-upright.var.woff2"],"./Inter-italic.var.woff2":[["Inter-italic.var.45d6a94c.woff2","assets/styles/Inter-italic.var.woff2"],"assets/styles/Inter-italic.var.woff2"],"./Inter.var.woff2":[["Inter.var.a3854e6a.woff2","assets/styles/Inter.var.woff2"],"assets/styles/Inter.var.woff2"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59552" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.994762c1.js.map