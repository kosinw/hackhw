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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/styles/faq.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Inter-Thin-BETA.woff2":[["Inter-Thin-BETA.3a1f9f12.woff2","assets/styles/Inter-Thin-BETA.woff2"],"assets/styles/Inter-Thin-BETA.woff2"],"./Inter-Thin-BETA.woff":[["Inter-Thin-BETA.7dfa0872.woff","assets/styles/Inter-Thin-BETA.woff"],"assets/styles/Inter-Thin-BETA.woff"],"./Inter-ThinItalic-BETA.woff2":[["Inter-ThinItalic-BETA.4609a2a3.woff2","assets/styles/Inter-ThinItalic-BETA.woff2"],"assets/styles/Inter-ThinItalic-BETA.woff2"],"./Inter-ThinItalic-BETA.woff":[["Inter-ThinItalic-BETA.a8b0f8e4.woff","assets/styles/Inter-ThinItalic-BETA.woff"],"assets/styles/Inter-ThinItalic-BETA.woff"],"./Inter-ExtraLight-BETA.woff2":[["Inter-ExtraLight-BETA.fd78f45a.woff2","assets/styles/Inter-ExtraLight-BETA.woff2"],"assets/styles/Inter-ExtraLight-BETA.woff2"],"./Inter-ExtraLight-BETA.woff":[["Inter-ExtraLight-BETA.6333d43f.woff","assets/styles/Inter-ExtraLight-BETA.woff"],"assets/styles/Inter-ExtraLight-BETA.woff"],"./Inter-ExtraLightItalic-BETA.woff2":[["Inter-ExtraLightItalic-BETA.e0625382.woff2","assets/styles/Inter-ExtraLightItalic-BETA.woff2"],"assets/styles/Inter-ExtraLightItalic-BETA.woff2"],"./Inter-ExtraLightItalic-BETA.woff":[["Inter-ExtraLightItalic-BETA.646e221d.woff","assets/styles/Inter-ExtraLightItalic-BETA.woff"],"assets/styles/Inter-ExtraLightItalic-BETA.woff"],"./Inter-Light-BETA.woff2":[["Inter-Light-BETA.f9fcb645.woff2","assets/styles/Inter-Light-BETA.woff2"],"assets/styles/Inter-Light-BETA.woff2"],"./Inter-Light-BETA.woff":[["Inter-Light-BETA.59c61822.woff","assets/styles/Inter-Light-BETA.woff"],"assets/styles/Inter-Light-BETA.woff"],"./Inter-LightItalic-BETA.woff2":[["Inter-LightItalic-BETA.58676cb3.woff2","assets/styles/Inter-LightItalic-BETA.woff2"],"assets/styles/Inter-LightItalic-BETA.woff2"],"./Inter-LightItalic-BETA.woff":[["Inter-LightItalic-BETA.461b5137.woff","assets/styles/Inter-LightItalic-BETA.woff"],"assets/styles/Inter-LightItalic-BETA.woff"],"./Inter-Regular.woff2":[["Inter-Regular.e9f4f820.woff2","assets/styles/Inter-Regular.woff2"],"assets/styles/Inter-Regular.woff2"],"./Inter-Regular.woff":[["Inter-Regular.cac5fc8b.woff","assets/styles/Inter-Regular.woff"],"assets/styles/Inter-Regular.woff"],"./Inter-Italic.woff2":[["Inter-Italic.164ad004.woff2","assets/styles/Inter-Italic.woff2"],"assets/styles/Inter-Italic.woff2"],"./Inter-Italic.woff":[["Inter-Italic.f3bde4f8.woff","assets/styles/Inter-Italic.woff"],"assets/styles/Inter-Italic.woff"],"./Inter-Medium.woff2":[["Inter-Medium.76c67fcd.woff2","assets/styles/Inter-Medium.woff2"],"assets/styles/Inter-Medium.woff2"],"./Inter-Medium.woff":[["Inter-Medium.b0cff093.woff","assets/styles/Inter-Medium.woff"],"assets/styles/Inter-Medium.woff"],"./Inter-MediumItalic.woff2":[["Inter-MediumItalic.0c9ca81e.woff2","assets/styles/Inter-MediumItalic.woff2"],"assets/styles/Inter-MediumItalic.woff2"],"./Inter-MediumItalic.woff":[["Inter-MediumItalic.6e2e41d6.woff","assets/styles/Inter-MediumItalic.woff"],"assets/styles/Inter-MediumItalic.woff"],"./Inter-SemiBold.woff2":[["Inter-SemiBold.73efc0f4.woff2","assets/styles/Inter-SemiBold.woff2"],"assets/styles/Inter-SemiBold.woff2"],"./Inter-SemiBold.woff":[["Inter-SemiBold.878e707a.woff","assets/styles/Inter-SemiBold.woff"],"assets/styles/Inter-SemiBold.woff"],"./Inter-SemiBoldItalic.woff2":[["Inter-SemiBoldItalic.d716935e.woff2","assets/styles/Inter-SemiBoldItalic.woff2"],"assets/styles/Inter-SemiBoldItalic.woff2"],"./Inter-SemiBoldItalic.woff":[["Inter-SemiBoldItalic.029980ff.woff","assets/styles/Inter-SemiBoldItalic.woff"],"assets/styles/Inter-SemiBoldItalic.woff"],"./Inter-Bold.woff2":[["Inter-Bold.c83b61b3.woff2","assets/styles/Inter-Bold.woff2"],"assets/styles/Inter-Bold.woff2"],"./Inter-Bold.woff":[["Inter-Bold.383cd61c.woff","assets/styles/Inter-Bold.woff"],"assets/styles/Inter-Bold.woff"],"./Inter-BoldItalic.woff2":[["Inter-BoldItalic.c7b01a52.woff2","assets/styles/Inter-BoldItalic.woff2"],"assets/styles/Inter-BoldItalic.woff2"],"./Inter-BoldItalic.woff":[["Inter-BoldItalic.fbf3f070.woff","assets/styles/Inter-BoldItalic.woff"],"assets/styles/Inter-BoldItalic.woff"],"./Inter-ExtraBold.woff2":[["Inter-ExtraBold.211a8313.woff2","assets/styles/Inter-ExtraBold.woff2"],"assets/styles/Inter-ExtraBold.woff2"],"./Inter-ExtraBold.woff":[["Inter-ExtraBold.3a9d8901.woff","assets/styles/Inter-ExtraBold.woff"],"assets/styles/Inter-ExtraBold.woff"],"./Inter-ExtraBoldItalic.woff2":[["Inter-ExtraBoldItalic.74a88be6.woff2","assets/styles/Inter-ExtraBoldItalic.woff2"],"assets/styles/Inter-ExtraBoldItalic.woff2"],"./Inter-ExtraBoldItalic.woff":[["Inter-ExtraBoldItalic.59a06825.woff","assets/styles/Inter-ExtraBoldItalic.woff"],"assets/styles/Inter-ExtraBoldItalic.woff"],"./Inter-Black.woff2":[["Inter-Black.0c42b71d.woff2","assets/styles/Inter-Black.woff2"],"assets/styles/Inter-Black.woff2"],"./Inter-Black.woff":[["Inter-Black.a0ff7221.woff","assets/styles/Inter-Black.woff"],"assets/styles/Inter-Black.woff"],"./Inter-BlackItalic.woff2":[["Inter-BlackItalic.44fe62ae.woff2","assets/styles/Inter-BlackItalic.woff2"],"assets/styles/Inter-BlackItalic.woff2"],"./Inter-BlackItalic.woff":[["Inter-BlackItalic.4f3ba457.woff","assets/styles/Inter-BlackItalic.woff"],"assets/styles/Inter-BlackItalic.woff"],"./Inter-upright.var.woff2":[["Inter-upright.var.9e26be32.woff2","assets/styles/Inter-upright.var.woff2"],"assets/styles/Inter-upright.var.woff2"],"./Inter-italic.var.woff2":[["Inter-italic.var.45d6a94c.woff2","assets/styles/Inter-italic.var.woff2"],"assets/styles/Inter-italic.var.woff2"],"./Inter.var.woff2":[["Inter.var.a3854e6a.woff2","assets/styles/Inter.var.woff2"],"assets/styles/Inter.var.woff2"],"./woff2\\iosevka-thin.woff2":[["iosevka-thin.7f209da3.woff2","assets/styles/woff2/iosevka-thin.woff2"],"assets/styles/woff2/iosevka-thin.woff2"],"./woff\\iosevka-thin.woff":[["iosevka-thin.3a903904.woff","assets/styles/woff/iosevka-thin.woff"],"assets/styles/woff/iosevka-thin.woff"],"./ttf\\iosevka-thin.ttf":[["iosevka-thin.15365f60.ttf","assets/styles/ttf/iosevka-thin.ttf"],"assets/styles/ttf/iosevka-thin.ttf"],"./woff2\\iosevka-thinoblique.woff2":[["iosevka-thinoblique.dc296de3.woff2","assets/styles/woff2/iosevka-thinoblique.woff2"],"assets/styles/woff2/iosevka-thinoblique.woff2"],"./woff\\iosevka-thinoblique.woff":[["iosevka-thinoblique.a7fd5dd4.woff","assets/styles/woff/iosevka-thinoblique.woff"],"assets/styles/woff/iosevka-thinoblique.woff"],"./ttf\\iosevka-thinoblique.ttf":[["iosevka-thinoblique.e81e29b3.ttf","assets/styles/ttf/iosevka-thinoblique.ttf"],"assets/styles/ttf/iosevka-thinoblique.ttf"],"./woff2\\iosevka-thinitalic.woff2":[["iosevka-thinitalic.4c08a4c5.woff2","assets/styles/woff2/iosevka-thinitalic.woff2"],"assets/styles/woff2/iosevka-thinitalic.woff2"],"./woff\\iosevka-thinitalic.woff":[["iosevka-thinitalic.872a35b7.woff","assets/styles/woff/iosevka-thinitalic.woff"],"assets/styles/woff/iosevka-thinitalic.woff"],"./ttf\\iosevka-thinitalic.ttf":[["iosevka-thinitalic.6b4d449a.ttf","assets/styles/ttf/iosevka-thinitalic.ttf"],"assets/styles/ttf/iosevka-thinitalic.ttf"],"./woff2\\iosevka-extralight.woff2":[["iosevka-extralight.a2d2a7df.woff2","assets/styles/woff2/iosevka-extralight.woff2"],"assets/styles/woff2/iosevka-extralight.woff2"],"./woff\\iosevka-extralight.woff":[["iosevka-extralight.7d743f04.woff","assets/styles/woff/iosevka-extralight.woff"],"assets/styles/woff/iosevka-extralight.woff"],"./ttf\\iosevka-extralight.ttf":[["iosevka-extralight.051077c4.ttf","assets/styles/ttf/iosevka-extralight.ttf"],"assets/styles/ttf/iosevka-extralight.ttf"],"./woff2\\iosevka-extralightoblique.woff2":[["iosevka-extralightoblique.09a0dbb8.woff2","assets/styles/woff2/iosevka-extralightoblique.woff2"],"assets/styles/woff2/iosevka-extralightoblique.woff2"],"./woff\\iosevka-extralightoblique.woff":[["iosevka-extralightoblique.048b7883.woff","assets/styles/woff/iosevka-extralightoblique.woff"],"assets/styles/woff/iosevka-extralightoblique.woff"],"./ttf\\iosevka-extralightoblique.ttf":[["iosevka-extralightoblique.18be775e.ttf","assets/styles/ttf/iosevka-extralightoblique.ttf"],"assets/styles/ttf/iosevka-extralightoblique.ttf"],"./woff2\\iosevka-extralightitalic.woff2":[["iosevka-extralightitalic.d23d28a2.woff2","assets/styles/woff2/iosevka-extralightitalic.woff2"],"assets/styles/woff2/iosevka-extralightitalic.woff2"],"./woff\\iosevka-extralightitalic.woff":[["iosevka-extralightitalic.258d3451.woff","assets/styles/woff/iosevka-extralightitalic.woff"],"assets/styles/woff/iosevka-extralightitalic.woff"],"./ttf\\iosevka-extralightitalic.ttf":[["iosevka-extralightitalic.28086e39.ttf","assets/styles/ttf/iosevka-extralightitalic.ttf"],"assets/styles/ttf/iosevka-extralightitalic.ttf"],"./woff2\\iosevka-light.woff2":[["iosevka-light.2feaab12.woff2","assets/styles/woff2/iosevka-light.woff2"],"assets/styles/woff2/iosevka-light.woff2"],"./woff\\iosevka-light.woff":[["iosevka-light.9dc8494b.woff","assets/styles/woff/iosevka-light.woff"],"assets/styles/woff/iosevka-light.woff"],"./ttf\\iosevka-light.ttf":[["iosevka-light.3494a25c.ttf","assets/styles/ttf/iosevka-light.ttf"],"assets/styles/ttf/iosevka-light.ttf"],"./woff2\\iosevka-lightoblique.woff2":[["iosevka-lightoblique.700f5ae0.woff2","assets/styles/woff2/iosevka-lightoblique.woff2"],"assets/styles/woff2/iosevka-lightoblique.woff2"],"./woff\\iosevka-lightoblique.woff":[["iosevka-lightoblique.1d98f219.woff","assets/styles/woff/iosevka-lightoblique.woff"],"assets/styles/woff/iosevka-lightoblique.woff"],"./ttf\\iosevka-lightoblique.ttf":[["iosevka-lightoblique.a574d612.ttf","assets/styles/ttf/iosevka-lightoblique.ttf"],"assets/styles/ttf/iosevka-lightoblique.ttf"],"./woff2\\iosevka-lightitalic.woff2":[["iosevka-lightitalic.689f90d9.woff2","assets/styles/woff2/iosevka-lightitalic.woff2"],"assets/styles/woff2/iosevka-lightitalic.woff2"],"./woff\\iosevka-lightitalic.woff":[["iosevka-lightitalic.6039fde9.woff","assets/styles/woff/iosevka-lightitalic.woff"],"assets/styles/woff/iosevka-lightitalic.woff"],"./ttf\\iosevka-lightitalic.ttf":[["iosevka-lightitalic.f174d468.ttf","assets/styles/ttf/iosevka-lightitalic.ttf"],"assets/styles/ttf/iosevka-lightitalic.ttf"],"./woff2\\iosevka-regular.woff2":[["iosevka-regular.91b05bef.woff2","assets/styles/woff2/iosevka-regular.woff2"],"assets/styles/woff2/iosevka-regular.woff2"],"./woff\\iosevka-regular.woff":[["iosevka-regular.5b8e930a.woff","assets/styles/woff/iosevka-regular.woff"],"assets/styles/woff/iosevka-regular.woff"],"./ttf\\iosevka-regular.ttf":[["iosevka-regular.71d7cf70.ttf","assets/styles/ttf/iosevka-regular.ttf"],"assets/styles/ttf/iosevka-regular.ttf"],"./woff2\\iosevka-oblique.woff2":[["iosevka-oblique.a8c449c0.woff2","assets/styles/woff2/iosevka-oblique.woff2"],"assets/styles/woff2/iosevka-oblique.woff2"],"./woff\\iosevka-oblique.woff":[["iosevka-oblique.42ba380c.woff","assets/styles/woff/iosevka-oblique.woff"],"assets/styles/woff/iosevka-oblique.woff"],"./ttf\\iosevka-oblique.ttf":[["iosevka-oblique.8702d15b.ttf","assets/styles/ttf/iosevka-oblique.ttf"],"assets/styles/ttf/iosevka-oblique.ttf"],"./woff2\\iosevka-italic.woff2":[["iosevka-italic.a671c266.woff2","assets/styles/woff2/iosevka-italic.woff2"],"assets/styles/woff2/iosevka-italic.woff2"],"./woff\\iosevka-italic.woff":[["iosevka-italic.b01b041d.woff","assets/styles/woff/iosevka-italic.woff"],"assets/styles/woff/iosevka-italic.woff"],"./ttf\\iosevka-italic.ttf":[["iosevka-italic.180f3972.ttf","assets/styles/ttf/iosevka-italic.ttf"],"assets/styles/ttf/iosevka-italic.ttf"],"./woff2\\iosevka-medium.woff2":[["iosevka-medium.94da1313.woff2","assets/styles/woff2/iosevka-medium.woff2"],"assets/styles/woff2/iosevka-medium.woff2"],"./woff\\iosevka-medium.woff":[["iosevka-medium.752030f3.woff","assets/styles/woff/iosevka-medium.woff"],"assets/styles/woff/iosevka-medium.woff"],"./ttf\\iosevka-medium.ttf":[["iosevka-medium.ba36df62.ttf","assets/styles/ttf/iosevka-medium.ttf"],"assets/styles/ttf/iosevka-medium.ttf"],"./woff2\\iosevka-mediumoblique.woff2":[["iosevka-mediumoblique.42f5ea09.woff2","assets/styles/woff2/iosevka-mediumoblique.woff2"],"assets/styles/woff2/iosevka-mediumoblique.woff2"],"./woff\\iosevka-mediumoblique.woff":[["iosevka-mediumoblique.6cfe25ca.woff","assets/styles/woff/iosevka-mediumoblique.woff"],"assets/styles/woff/iosevka-mediumoblique.woff"],"./ttf\\iosevka-mediumoblique.ttf":[["iosevka-mediumoblique.786bdade.ttf","assets/styles/ttf/iosevka-mediumoblique.ttf"],"assets/styles/ttf/iosevka-mediumoblique.ttf"],"./woff2\\iosevka-mediumitalic.woff2":[["iosevka-mediumitalic.f8286dd6.woff2","assets/styles/woff2/iosevka-mediumitalic.woff2"],"assets/styles/woff2/iosevka-mediumitalic.woff2"],"./woff\\iosevka-mediumitalic.woff":[["iosevka-mediumitalic.35f3fa6a.woff","assets/styles/woff/iosevka-mediumitalic.woff"],"assets/styles/woff/iosevka-mediumitalic.woff"],"./ttf\\iosevka-mediumitalic.ttf":[["iosevka-mediumitalic.0e5b9229.ttf","assets/styles/ttf/iosevka-mediumitalic.ttf"],"assets/styles/ttf/iosevka-mediumitalic.ttf"],"./woff2\\iosevka-semibold.woff2":[["iosevka-semibold.843c7fb2.woff2","assets/styles/woff2/iosevka-semibold.woff2"],"assets/styles/woff2/iosevka-semibold.woff2"],"./woff\\iosevka-semibold.woff":[["iosevka-semibold.abd7fd87.woff","assets/styles/woff/iosevka-semibold.woff"],"assets/styles/woff/iosevka-semibold.woff"],"./ttf\\iosevka-semibold.ttf":[["iosevka-semibold.3d39f091.ttf","assets/styles/ttf/iosevka-semibold.ttf"],"assets/styles/ttf/iosevka-semibold.ttf"],"./woff2\\iosevka-semiboldoblique.woff2":[["iosevka-semiboldoblique.1b2c3b91.woff2","assets/styles/woff2/iosevka-semiboldoblique.woff2"],"assets/styles/woff2/iosevka-semiboldoblique.woff2"],"./woff\\iosevka-semiboldoblique.woff":[["iosevka-semiboldoblique.3d5159ed.woff","assets/styles/woff/iosevka-semiboldoblique.woff"],"assets/styles/woff/iosevka-semiboldoblique.woff"],"./ttf\\iosevka-semiboldoblique.ttf":[["iosevka-semiboldoblique.572f07d4.ttf","assets/styles/ttf/iosevka-semiboldoblique.ttf"],"assets/styles/ttf/iosevka-semiboldoblique.ttf"],"./woff2\\iosevka-semibolditalic.woff2":[["iosevka-semibolditalic.b3dd9448.woff2","assets/styles/woff2/iosevka-semibolditalic.woff2"],"assets/styles/woff2/iosevka-semibolditalic.woff2"],"./woff\\iosevka-semibolditalic.woff":[["iosevka-semibolditalic.d0721f28.woff","assets/styles/woff/iosevka-semibolditalic.woff"],"assets/styles/woff/iosevka-semibolditalic.woff"],"./ttf\\iosevka-semibolditalic.ttf":[["iosevka-semibolditalic.039929d2.ttf","assets/styles/ttf/iosevka-semibolditalic.ttf"],"assets/styles/ttf/iosevka-semibolditalic.ttf"],"./woff2\\iosevka-bold.woff2":[["iosevka-bold.72d653b6.woff2","assets/styles/woff2/iosevka-bold.woff2"],"assets/styles/woff2/iosevka-bold.woff2"],"./woff\\iosevka-bold.woff":[["iosevka-bold.986bebc1.woff","assets/styles/woff/iosevka-bold.woff"],"assets/styles/woff/iosevka-bold.woff"],"./ttf\\iosevka-bold.ttf":[["iosevka-bold.ee07e89d.ttf","assets/styles/ttf/iosevka-bold.ttf"],"assets/styles/ttf/iosevka-bold.ttf"],"./woff2\\iosevka-boldoblique.woff2":[["iosevka-boldoblique.beeeef97.woff2","assets/styles/woff2/iosevka-boldoblique.woff2"],"assets/styles/woff2/iosevka-boldoblique.woff2"],"./woff\\iosevka-boldoblique.woff":[["iosevka-boldoblique.87d65ec5.woff","assets/styles/woff/iosevka-boldoblique.woff"],"assets/styles/woff/iosevka-boldoblique.woff"],"./ttf\\iosevka-boldoblique.ttf":[["iosevka-boldoblique.123627b1.ttf","assets/styles/ttf/iosevka-boldoblique.ttf"],"assets/styles/ttf/iosevka-boldoblique.ttf"],"./woff2\\iosevka-bolditalic.woff2":[["iosevka-bolditalic.ab0c3f36.woff2","assets/styles/woff2/iosevka-bolditalic.woff2"],"assets/styles/woff2/iosevka-bolditalic.woff2"],"./woff\\iosevka-bolditalic.woff":[["iosevka-bolditalic.99376702.woff","assets/styles/woff/iosevka-bolditalic.woff"],"assets/styles/woff/iosevka-bolditalic.woff"],"./ttf\\iosevka-bolditalic.ttf":[["iosevka-bolditalic.a33701de.ttf","assets/styles/ttf/iosevka-bolditalic.ttf"],"assets/styles/ttf/iosevka-bolditalic.ttf"],"./woff2\\iosevka-extrabold.woff2":[["iosevka-extrabold.2f6dbbdf.woff2","assets/styles/woff2/iosevka-extrabold.woff2"],"assets/styles/woff2/iosevka-extrabold.woff2"],"./woff\\iosevka-extrabold.woff":[["iosevka-extrabold.39de8e25.woff","assets/styles/woff/iosevka-extrabold.woff"],"assets/styles/woff/iosevka-extrabold.woff"],"./ttf\\iosevka-extrabold.ttf":[["iosevka-extrabold.61647964.ttf","assets/styles/ttf/iosevka-extrabold.ttf"],"assets/styles/ttf/iosevka-extrabold.ttf"],"./woff2\\iosevka-extraboldoblique.woff2":[["iosevka-extraboldoblique.5107d9ba.woff2","assets/styles/woff2/iosevka-extraboldoblique.woff2"],"assets/styles/woff2/iosevka-extraboldoblique.woff2"],"./woff\\iosevka-extraboldoblique.woff":[["iosevka-extraboldoblique.8e2f1b64.woff","assets/styles/woff/iosevka-extraboldoblique.woff"],"assets/styles/woff/iosevka-extraboldoblique.woff"],"./ttf\\iosevka-extraboldoblique.ttf":[["iosevka-extraboldoblique.c98eb5f7.ttf","assets/styles/ttf/iosevka-extraboldoblique.ttf"],"assets/styles/ttf/iosevka-extraboldoblique.ttf"],"./woff2\\iosevka-extrabolditalic.woff2":[["iosevka-extrabolditalic.fdd6ca28.woff2","assets/styles/woff2/iosevka-extrabolditalic.woff2"],"assets/styles/woff2/iosevka-extrabolditalic.woff2"],"./woff\\iosevka-extrabolditalic.woff":[["iosevka-extrabolditalic.21b3bff3.woff","assets/styles/woff/iosevka-extrabolditalic.woff"],"assets/styles/woff/iosevka-extrabolditalic.woff"],"./ttf\\iosevka-extrabolditalic.ttf":[["iosevka-extrabolditalic.28340e21.ttf","assets/styles/ttf/iosevka-extrabolditalic.ttf"],"assets/styles/ttf/iosevka-extrabolditalic.ttf"],"./woff2\\iosevka-heavy.woff2":[["iosevka-heavy.ea44c37b.woff2","assets/styles/woff2/iosevka-heavy.woff2"],"assets/styles/woff2/iosevka-heavy.woff2"],"./woff\\iosevka-heavy.woff":[["iosevka-heavy.f0df914c.woff","assets/styles/woff/iosevka-heavy.woff"],"assets/styles/woff/iosevka-heavy.woff"],"./ttf\\iosevka-heavy.ttf":[["iosevka-heavy.080d65e3.ttf","assets/styles/ttf/iosevka-heavy.ttf"],"assets/styles/ttf/iosevka-heavy.ttf"],"./woff2\\iosevka-heavyoblique.woff2":[["iosevka-heavyoblique.d81019e5.woff2","assets/styles/woff2/iosevka-heavyoblique.woff2"],"assets/styles/woff2/iosevka-heavyoblique.woff2"],"./woff\\iosevka-heavyoblique.woff":[["iosevka-heavyoblique.b65098f4.woff","assets/styles/woff/iosevka-heavyoblique.woff"],"assets/styles/woff/iosevka-heavyoblique.woff"],"./ttf\\iosevka-heavyoblique.ttf":[["iosevka-heavyoblique.cb2c2886.ttf","assets/styles/ttf/iosevka-heavyoblique.ttf"],"assets/styles/ttf/iosevka-heavyoblique.ttf"],"./woff2\\iosevka-heavyitalic.woff2":[["iosevka-heavyitalic.506ef96a.woff2","assets/styles/woff2/iosevka-heavyitalic.woff2"],"assets/styles/woff2/iosevka-heavyitalic.woff2"],"./woff\\iosevka-heavyitalic.woff":[["iosevka-heavyitalic.1cf76834.woff","assets/styles/woff/iosevka-heavyitalic.woff"],"assets/styles/woff/iosevka-heavyitalic.woff"],"./ttf\\iosevka-heavyitalic.ttf":[["iosevka-heavyitalic.eb69c066.ttf","assets/styles/ttf/iosevka-heavyitalic.ttf"],"assets/styles/ttf/iosevka-heavyitalic.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/faq.9e64de2b.js.map