'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _JSXStyle = require('styled-jsx/style');
var React = require('react');
var gatsby = require('gatsby');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _JSXStyle__default = /*#__PURE__*/_interopDefaultLegacy(_JSXStyle);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Spinner = function Spinner(_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "border-gray-300" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      loadingText = _ref.loadingText,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["color", "size", "loadingText", "className"]);

  var SIZES = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
    custom: ""
  };
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: ref
  }, props, {
    className: "jsx-1989346913" + " " + (props && props.className != null && props.className || "spin-container inline-block ".concat(loadingText ? "relative" : "absolute", " border-2 rounded-full mr-2 ").concat(color, " ").concat(SIZES[size], " ").concat(className))
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "jsx-1989346913" + " " + "spin whitespace-no-wrap absolute border-0 p-0 overflow-hidden"
  })), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "1989346913"
  }, ".spin-container.jsx-1989346913{-webkit-animation:0.45s linear 0s infinite normal none running spinning-jsx-1989346913;animation:0.45s linear 0s infinite normal none running spinning-jsx-1989346913;border-bottom-color:transparent !important;border-left-color:transparent !important;}.spin-container.jsx-1989346913 .spin.jsx-1989346913{-webkit-clip:rect(0px,0px,0px,0px);clip:rect(0px,0px,0px,0px);height:1px;width:1px;border-style:initial;border-color:initial;border-image:initial;margin:-1px;}@-webkit-keyframes spinning-jsx-1989346913{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinning-jsx-1989346913{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUcyRSxBQU1sQyxBQVdMLEFBR0UsOERBYmhCLFdBQ0QsUUFVVixFQVRxQixJQVlyQixpQkFYcUIscUJBQ0EscUJBQ1QsWUFDZCxRQVo2QywyQ0FDRix5Q0FDM0MiLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNwaW5uZXIgPSAoXG4gIHsgY29sb3IgPSBcImJvcmRlci1ncmF5LTMwMFwiLCBzaXplID0gXCJtZFwiLCBsb2FkaW5nVGV4dCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LFxuICByZWZcbikgPT4ge1xuICBjb25zdCBTSVpFUyA9IHtcbiAgICBzbTogXCJ3LTMgaC0zXCIsXG4gICAgbWQ6IFwidy00IGgtNFwiLFxuICAgIGxnOiBcInctNiBoLTZcIixcbiAgICBjdXN0b206IFwiXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BzcGluLWNvbnRhaW5lciBpbmxpbmUtYmxvY2sgJHtcbiAgICAgICAgICBsb2FkaW5nVGV4dCA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIlxuICAgICAgICB9IGJvcmRlci0yIHJvdW5kZWQtZnVsbCBtci0yICR7Y29sb3J9ICR7U0laRVNbc2l6ZV19ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BpbiB3aGl0ZXNwYWNlLW5vLXdyYXAgYWJzb2x1dGUgYm9yZGVyLTAgcC0wIG92ZXJmbG93LWhpZGRlblwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zcGluLWNvbnRhaW5lciB7XG4gICAgICAgICAgYW5pbWF0aW9uOiAwLjQ1cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsIG5vbmUgcnVubmluZyBzcGlubmluZztcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNwaW4tY29udGFpbmVyIC5zcGluIHtcbiAgICAgICAgICBjbGlwOiByZWN0KDBweCwgMHB4LCAwcHgsIDBweCk7XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IGluaXRpYWw7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICAgICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgICAgICBtYXJnaW46IC0xcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uaW5nIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihTcGlubmVyKTtcbiJdfQ== */\n/*@ sourceURL=Spinner.js */"));
};

var Spinner$1 = /*#__PURE__*/React.forwardRef(Spinner);

var buttonStyles = new String(".classic.jsx-1949520169{border-radius:0.3125rem;}.halfmoon-sm.jsx-1949520169{height:1.625rem;padding:0 0.625rem;}.loading.jsx-1949520169>.text.jsx-1949520169{visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLd0IsQUFHNkIsQUFHUixBQUlFLGdCQUhDLEVBSXJCLE1BUEEsV0FJQSIsImZpbGUiOiJCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiZ2F0c2J5XCI7XG5cbmNvbnN0IGJ1dHRvblN0eWxlcyA9IGNzc2BcbiAgLmNsYXNzaWMge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcbiAgfVxuICAuaGFsZm1vb24tc20ge1xuICAgIGhlaWdodDogMS42MjVyZW07XG4gICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgfVxuICAubG9hZGluZyA+IC50ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHR5cGUgPSBcImNsYXNzaWNcIixcbiAgICAgIHNwaW5uZXJDb2xvciA9IFwidGV4dC13aGl0ZVwiLFxuICAgICAgc2l6ZSA9IFwibWRcIixcbiAgICAgIHNwaW5uZXJTaXplID0gc2l6ZSxcbiAgICAgIGlzTG9hZGluZyA9IGZhbHNlLFxuICAgICAgaXNEaXNhYmxlZCA9IGlzTG9hZGluZyxcbiAgICAgIGxvYWRpbmdUZXh0ID0gZmFsc2UsXG4gICAgICBocmVmLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBTVFlMRVMgPSB7XG4gICAgICBwaWxsOiBgcm91bmRlZC1sZ2AsXG4gICAgICBjbGFzc2ljOiBgY2xhc3NpY2AsXG4gICAgICBoYWxmbW9vbjogYHJvdW5kZWQtbWRgLFxuICAgICAgY3VzdG9tOiBgYCxcbiAgICAgIGxpbms6IGBob3Zlcjp1bmRlcmxpbmVgLFxuICAgIH07XG5cbiAgICBjb25zdCBTSVpFUyA9IHtcbiAgICAgIGNsYXNzaWM6IHtcbiAgICAgICAgc206IFwicHgtNCBoLThcIixcbiAgICAgICAgbWQ6IFwicHgtNiBoLTEwXCIsXG4gICAgICAgIGxnOiBcInB4LTggaC0xMlwiLFxuICAgICAgfSxcbiAgICAgIGhhbGZtb29uOiB7XG4gICAgICAgIHNtOiBcImhhbGZtb29uLXNtXCIsXG4gICAgICAgIG1kOiBcInB4LTQgaC04XCIsXG4gICAgICAgIGxnOiBcInB4LTUgaC0xMFwiLFxuICAgICAgfSxcbiAgICAgIHBpbGw6IHtcbiAgICAgICAgc206IFwidy0yMCBoLTZcIixcbiAgICAgICAgbWQ6IFwidy0yNCBoLThcIixcbiAgICAgICAgbGc6IFwidy0zMiBoLTEwXCIsXG4gICAgICB9LFxuICAgICAgY3VzdG9tOiB7XG4gICAgICAgIHNtOiBcIlwiLFxuICAgICAgICBtZDogXCJcIixcbiAgICAgICAgbGc6IFwiXCIsXG4gICAgICB9LFxuICAgICAgbGluazoge1xuICAgICAgICBzbTogXCJcIixcbiAgICAgICAgbWQ6IFwiXCIsXG4gICAgICAgIGxnOiBcIlwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsQnV0dG9uc1N0eWxlID0gYHdoaXRlc3BhY2Utbm8td3JhcCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgJHtcbiAgICAgICFsb2FkaW5nVGV4dCAmJiBpc0xvYWRpbmcgJiYgXCJsb2FkaW5nXCJcbiAgICB9YDtcblxuICAgIGNvbnN0IHNwaW5uZXIgPSAoXG4gICAgICA8U3Bpbm5lclxuICAgICAgICBzaXplPXtzcGlubmVyU2l6ZX1cbiAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICBjb2xvcj17c3Bpbm5lckNvbG9yfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gYCR7U1RZTEVTW3R5cGVdIHx8IFwiXCJ9ICR7U0laRVNbdHlwZV1bc2l6ZV0gfHwgXCJcIn0gJHtcbiAgICAgIGNsYXNzTmFtZSB8fCBcIlwiXG4gICAgfSAke2FsbEJ1dHRvbnNTdHlsZX0gJHtpc0Rpc2FibGVkICYmIFwiY3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktNTBcIn1gO1xuXG4gICAgaWYgKGhyZWYpIHtcbiAgICAgIGNvbnN0IGlzRXh0ZXJuYWwgPSBocmVmICYmIGhyZWYuc3RhcnRzV2l0aChcImh0dHBcIik7XG4gICAgICBjb25zdCBhID0gKFxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NMaXN0fVxuICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIHNwaW5uZXJ9XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2J1dHRvblN0eWxlc308L3N0eWxlPlxuICAgICAgICA8L2E+XG4gICAgICApO1xuXG4gICAgICBjb25zdCBiID0gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NMaXN0fVxuICAgICAgICAgIHRvPXtocmVmfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgc3Bpbm5lcn1cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTGluaz5cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBpc0V4dGVybmFsID8gYSA6IGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxidXR0b24gcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xhc3NMaXN0fSB7Li4ucHJvcHN9PlxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgc3Bpbm5lcn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2J1dHRvblN0eWxlc308L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuKTtcblxuQnV0dG9uLmRpc3BsYXlOYW1lID0gXCJCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */\n/*@ sourceURL=Button.js */");
buttonStyles.__hash = "1949520169";
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "classic" : _ref$type,
      _ref$spinnerColor = _ref.spinnerColor,
      spinnerColor = _ref$spinnerColor === void 0 ? "text-white" : _ref$spinnerColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      _ref$spinnerSize = _ref.spinnerSize,
      spinnerSize = _ref$spinnerSize === void 0 ? size : _ref$spinnerSize,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? isLoading : _ref$isDisabled,
      _ref$loadingText = _ref.loadingText,
      loadingText = _ref$loadingText === void 0 ? false : _ref$loadingText,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ["children", "className", "type", "spinnerColor", "size", "spinnerSize", "isLoading", "isDisabled", "loadingText", "href"]);

  var STYLES = {
    pill: "rounded-lg",
    classic: "classic",
    halfmoon: "rounded-md",
    custom: "",
    link: "hover:underline"
  };
  var SIZES = {
    classic: {
      sm: "px-4 h-8",
      md: "px-6 h-10",
      lg: "px-8 h-12"
    },
    halfmoon: {
      sm: "halfmoon-sm",
      md: "px-4 h-8",
      lg: "px-5 h-10"
    },
    pill: {
      sm: "w-20 h-6",
      md: "w-24 h-8",
      lg: "w-32 h-10"
    },
    custom: {
      sm: "",
      md: "",
      lg: ""
    },
    link: {
      sm: "",
      md: "",
      lg: ""
    }
  };
  var allButtonsStyle = "whitespace-no-wrap transition-colors duration-200 inline-flex items-center justify-center flex-wrap focus:outline-none focus:shadow-outline ".concat(!loadingText && isLoading && "loading");
  var spinner = /*#__PURE__*/React__default['default'].createElement(Spinner$1, {
    size: spinnerSize,
    loadingText: loadingText,
    color: spinnerColor
  });
  var classList = "".concat(STYLES[type] || "", " ").concat(SIZES[type][size] || "", " ").concat(className || "", " ").concat(allButtonsStyle, " ").concat(isDisabled && "cursor-not-allowed opacity-50");

  if (href) {
    var isExternal = href && href.startsWith("http");
    var a = /*#__PURE__*/React__default['default'].createElement("a", _extends({
      href: href
    }, props, {
      target: "_blank",
      rel: "noreferrer",
      className: "jsx-".concat(buttonStyles.__hash) + " " + (props && props.className != null && props.className || classList || "")
    }), isLoading && spinner, children, /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
      id: buttonStyles.__hash
    }, buttonStyles));
    var b = /*#__PURE__*/React__default['default'].createElement(gatsby.Link, _extends({
      className: classList,
      to: href
    }, props, {
      style: {
        borderRadius: "5px"
      }
    }), isLoading && spinner, children);
    return isExternal ? a : b;
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", _extends({
    ref: ref
  }, props, {
    className: "jsx-".concat(buttonStyles.__hash) + " " + (props && props.className != null && props.className || classList || "")
  }), isLoading && spinner, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "jsx-".concat(buttonStyles.__hash) + " " + "text"
  }, children)), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: buttonStyles.__hash
  }, buttonStyles));
});
Button.displayName = "Button";

var CloseButton = function CloseButton(_ref, ref) {
  var className = _ref.className,
      _ref$IconClassName = _ref.IconClassName,
      IconClassName = _ref$IconClassName === void 0 ? "text-red-600" : _ref$IconClassName,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 4 : _ref$iconSize,
      _ref$buttonSize = _ref.buttonSize,
      buttonSize = _ref$buttonSize === void 0 ? 8 : _ref$buttonSize,
      _ref$IconStrokeWidth = _ref.IconStrokeWidth,
      IconStrokeWidth = _ref$IconStrokeWidth === void 0 ? "0.25rem" : _ref$IconStrokeWidth,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? "Close" : _ref$ariaLabel,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? "inline-flex justify-center items-center rounded-md duration-100 transition-colors" : _ref$style,
      props = _objectWithoutProperties(_ref, ["className", "IconClassName", "iconSize", "buttonSize", "IconStrokeWidth", "ariaLabel", "style"]);

  return /*#__PURE__*/React__default['default'].createElement("button", _extends({
    ref: ref,
    className: "".concat(style, " ").concat(className, " w-").concat(buttonSize, " h-").concat(buttonSize),
    "aria-label": ariaLabel,
    type: "button"
  }, props), /*#__PURE__*/React__default['default'].createElement("svg", {
    viewBox: "0 0 24 24",
    focusable: "false",
    role: "presentation",
    "aria-hidden": "true",
    className: "w-".concat(iconSize, " h-").concat(iconSize, " ").concat(IconClassName, " stroke-current"),
    strokeWidth: IconStrokeWidth
  }, /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "2",
    x2: "22",
    y2: "22"
  }), /*#__PURE__*/React__default['default'].createElement("line", {
    x1: "2",
    y1: "22",
    x2: "22",
    y2: "2"
  })));
};

var CloseButton$1 = /*#__PURE__*/React.forwardRef(CloseButton);

var Input = function Input(_ref, ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? "outline-none appearance-none shadow-none box-border align-middle w-full" : _ref$style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("input", _extends({
    ref: ref
  }, props, {
    className: "jsx-1429103922" + " " + (props && props.className != null && props.className || "".concat(style, " ").concat(className))
  })), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "1429103922"
  }, "input.jsx-1429103922{line-height:normal;padding:0.375rem 0.625rem;-webkit-transition:border-color 0.2s;transition:border-color 0.2s;}input.jsx-1429103922::-webkit-input-placeholder{line-height:normal !important;}input.jsx-1429103922::-webkit-input-placeholder{line-height:normal !important;}input.jsx-1429103922::-moz-placeholder{line-height:normal !important;}input.jsx-1429103922:-ms-input-placeholder{line-height:normal !important;}input.jsx-1429103922::placeholder{line-height:normal !important;}input.jsx-1429103922::-moz-placeholder{line-height:normal !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUc4QixBQU1XLEFBR0EsQUFHQSxtQkFYSixXQU01QixBQUdBLEFBR0EsZUFYK0Isa0VBQy9CIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZGVmYXVsdFN0eWxlID0gXCJcIjtcblxuY29uc3QgSW5wdXQgPSAoXG4gIHtcbiAgICBjbGFzc05hbWUsXG4gICAgc3R5bGUgPSBcIm91dGxpbmUtbm9uZSBhcHBlYXJhbmNlLW5vbmUgc2hhZG93LW5vbmUgYm94LWJvcmRlciBhbGlnbi1taWRkbGUgdy1mdWxsXCIsXG4gICAgLi4ucHJvcHNcbiAgfSxcbiAgcmVmXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17YCR7c3R5bGV9ICR7Y2xhc3NOYW1lfWB9IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmKElucHV0KTtcbiJdfQ== */\n/*@ sourceURL=Input.js */"));
};

var Input$1 = /*#__PURE__*/React.forwardRef(Input);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var Label = function Label(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" : _ref$style,
      htmlFor = _ref.htmlFor,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["className", "style", "htmlFor", "label"]);

  return /*#__PURE__*/React__default['default'].createElement("label", _extends({
    className: "".concat(style, " ").concat(className),
    htmlFor: htmlFor
  }, props), label);
};

Label.propTypes = {
  className: propTypes.string,
  style: propTypes.string,
  htmlFor: propTypes.string,
  label: propTypes.string.isRequired
};

function MobileMenuToggle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? "Toggle navigation" : _ref$ariaLabel,
      _ref$toggleClass = _ref.toggleClass,
      toggleClass = _ref$toggleClass === void 0 ? "mobile-menu-active" : _ref$toggleClass;

  function toggleNav() {
    document.body.classList.toggle(toggleClass);
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "menuToggle",
    className: "jsx-2851901057" + " " + "w-auto py-0 px-4 flex md:hidden items-center ".concat(className)
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: toggleNav,
    "aria-label": ariaLabel,
    type: "button",
    className: "jsx-2851901057" + " " + "cursor-pointer relative block md:hidden w-10 h-10"
  })), children, /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "2851901057"
  }, "#menuToggle button::before,#menuToggle button::after{content:\"\";position:absolute;left:0;width:100%;height:2px;background-color:#555;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}#menuToggle button::before{top:0.8rem;}#menuToggle button::after{bottom:0.8rem;}body.mobile-menu-active #menuToggle button::before{-webkit-transform:translate3d(0,0.35rem,0) rotate(45deg);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:translate3d(0,0.35rem,0) rotate(45deg);-ms-transform:translate3d(0,0.35rem,0) rotate(45deg);transform:translate3d(0,0.35rem,0) rotate(45deg);}body.mobile-menu-active #menuToggle button::after{-webkit-transform:translate3d(0,-0.4rem,0) rotate(-45deg);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:translate3d(0,-0.4rem,0) rotate(-45deg);-ms-transform:translate3d(0,-0.4rem,0) rotate(-45deg);transform:translate3d(0,-0.4rem,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vYmlsZU1lbnVUb2dnbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJ5QixBQUtzQixBQVVBLEFBSUcsQUFJNkMsQUFNQyxXQXZCMUMsQUFVcEIsR0FJQSxlQWJTLE9BQ0ksV0FDQSxVQWVvQixDQWRULEFBb0JTLHNCQW5CTiwwREFDM0Isd0JBYXFELENBTUMsOEpBTHRELElBTUEiLCJmaWxlIjoiTW9iaWxlTWVudVRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTW9iaWxlTWVudVRvZ2dsZSh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGFyaWFMYWJlbCA9IFwiVG9nZ2xlIG5hdmlnYXRpb25cIixcbiAgdG9nZ2xlQ2xhc3MgPSBcIm1vYmlsZS1tZW51LWFjdGl2ZVwiLFxufSkge1xuICBmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKHRvZ2dsZUNsYXNzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJtZW51VG9nZ2xlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgdy1hdXRvIHB5LTAgcHgtNCBmbGV4IG1kOmhpZGRlbiBpdGVtcy1jZW50ZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU5hdn1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgYmxvY2sgbWQ6aGlkZGVuIHctMTAgaC0xMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC8qIE1lbnUgdG9nZ2xlICovXG4gICAgICAgICNtZW51VG9nZ2xlIGJ1dHRvbjo6YmVmb3JlLFxuICAgICAgICAjbWVudVRvZ2dsZSBidXR0b246OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNtZW51VG9nZ2xlIGJ1dHRvbjo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDAuOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICNtZW51VG9nZ2xlIGJ1dHRvbjo6YWZ0ZXIge1xuICAgICAgICAgIGJvdHRvbTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keS5tb2JpbGUtbWVudS1hY3RpdmUgI21lbnVUb2dnbGUgYnV0dG9uOjpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjM1cmVtLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjM1cmVtLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keS5tb2JpbGUtbWVudS1hY3RpdmUgI21lbnVUb2dnbGUgYnV0dG9uOjphZnRlciB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0wLjRyZW0sIDApIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMC40cmVtLCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51VG9nZ2xlO1xuIl19 */\n/*@ sourceURL=MobileMenuToggle.js */"));
}

var Textarea = function Textarea(_ref, ref) {
  var className = _ref.className,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? "180" : _ref$maxLength,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? "6" : _ref$rows,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? "hard" : _ref$wrap,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? "w-full text-base outline-none focus:outline-none align-middle shadow-none box-border appearance-none transition-colors duration-200" : _ref$style,
      props = _objectWithoutProperties(_ref, ["className", "maxLength", "rows", "wrap", "style"]);

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("textarea", _extends({
    ref: ref,
    maxLength: maxLength,
    rows: rows,
    wrap: wrap
  }, props, {
    className: "jsx-1715653578" + " " + (props && props.className != null && props.className || "".concat(style, " ").concat(className))
  })), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "1715653578"
  }, "textarea.jsx-1715653578{line-height:normal;padding:0.375rem 0.625rem;min-height:6.25rem;}textarea.jsx-1715653578::-webkit-input-placeholder{line-height:normal !important;}textarea.jsx-1715653578::-moz-placeholder{line-height:normal !important;}textarea.jsx-1715653578:-ms-input-placeholder{line-height:normal !important;}textarea.jsx-1715653578::placeholder{line-height:normal !important;}textarea.jsx-1715653578::-moz-placeholder{line-height:normal !important;}textarea.jsx-1715653578::-webkit-input-placeholder{line-height:normal !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHOEIsQUFNVyxBQUlBLEFBSUEsbUJBYkosV0FNNUIsQUFJQSxBQUlBLGVBYnFCLG1CQUNyQiIsImZpbGUiOiJUZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRleHRhcmVhID0gKFxuICB7XG4gICAgY2xhc3NOYW1lLFxuICAgIG1heExlbmd0aCA9IFwiMTgwXCIsXG4gICAgcm93cyA9IFwiNlwiLFxuICAgIHdyYXAgPSBcImhhcmRcIixcbiAgICBzdHlsZSA9IFwidy1mdWxsIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGFsaWduLW1pZGRsZSBzaGFkb3ctbm9uZSBib3gtYm9yZGVyIGFwcGVhcmFuY2Utbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIixcbiAgICAuLi5wcm9wc1xuICB9LFxuICByZWZcbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGV9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICB3cmFwPXt3cmFwfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC42MjVyZW07XG4gICAgICAgICAgbWluLWhlaWdodDogNi4yNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoVGV4dGFyZWEpO1xuIl19 */\n/*@ sourceURL=Textarea.js */"));
};

var Textarea$1 = /*#__PURE__*/React.forwardRef(Textarea);

function ThemeToggle(_ref) {
  var _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 4 : _ref$iconSize,
      _ref$buttonSize = _ref.buttonSize,
      buttonSize = _ref$buttonSize === void 0 ? 8 : _ref$buttonSize,
      className = _ref.className,
      _ref$bgColor = _ref.bgColor,
      bgColor = _ref$bgColor === void 0 ? "hover:bg-gray-400" : _ref$bgColor,
      _ref$sunColor = _ref.sunColor,
      sunColor = _ref$sunColor === void 0 ? "text-gray-100" : _ref$sunColor,
      _ref$moonColor = _ref.moonColor,
      moonColor = _ref$moonColor === void 0 ? "text-gray-800" : _ref$moonColor,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? "Switch color theme" : _ref$ariaLabel,
      _ref$bodyClassList = _ref.bodyClassList,
      bodyClassList = _ref$bodyClassList === void 0 ? "transition-colors duration-200" : _ref$bodyClassList;
  var darkModeMediaQuery = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)");

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isMoon = _useState2[0],
      setIsMoon = _useState2[1];

  if (typeof window !== "undefined") {
    darkModeMediaQuery.addListener(function (e) {
      var darkModeOn = e.matches;
      setIsMoon(darkModeOn);
    });
  }

  React.useEffect(function () {
    var _document$body$classL;

    (_document$body$classL = document.body.classList).add.apply(_document$body$classL, _toConsumableArray(bodyClassList.split(" ")));

    if (document.body.getAttribute("data-theme") === "light") {
      setIsMoon(false);
    } else if (document.body.getAttribute("data-theme") === "dark") {
      setIsMoon(true);
    } else {
      setIsMoon(darkModeMediaQuery.matches);
    }
  }, []);
  React.useEffect(function () {
    if (isMoon) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [isMoon]);
  return /*#__PURE__*/React__default['default'].createElement("button", {
    type: "button",
    "aria-label": ariaLabel,
    className: "w-".concat(buttonSize, " h-").concat(buttonSize, " ").concat(bgColor, " flex justify-center items-center transition-colors duration-200 ").concat(className),
    onClick: function onClick() {
      return setIsMoon(!isMoon);
    }
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    viewBox: "0 0 24 24",
    focusable: "false",
    role: "presentation",
    "aria-hidden": "true",
    className: "h-".concat(iconSize, " w-").concat(iconSize)
  }, isMoon ? /*#__PURE__*/React__default['default'].createElement("path", {
    viewBox: "0 0 30 30",
    className: "".concat(sunColor, " fill-current"),
    d: "M14.984.986A1 1 0 0014 2v3a1 1 0 102 0V2A1 1 0 0014.984.986zM5.797 4.8a1 1 0 00-.695 1.717l2.12 2.12a1 1 0 101.415-1.413L6.516 5.102a1 1 0 00-.72-.303zm18.375 0a1 1 0 00-.688.303l-2.12 2.12a1 1 0 101.413 1.415l2.121-2.121a1 1 0 00-.726-1.717zM15 8a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zM2 14a1 1 0 100 2h3a1 1 0 100-2H2zm23 0a1 1 0 100 2h3a1 1 0 100-2h-3zM7.91 21.06a1 1 0 00-.687.303l-2.121 2.121a1 1 0 101.414 1.414l2.12-2.12a1 1 0 00-.726-1.717zm14.15 0a1 1 0 00-.697 1.717l2.121 2.121a1 1 0 101.414-1.414l-2.12-2.12a1 1 0 00-.717-.303zm-7.076 2.926A1 1 0 0014 25v3a1 1 0 102 0v-3a1 1 0 00-1.016-1.014z",
    transform: "scale(0.8)"
  }) : /*#__PURE__*/React__default['default'].createElement("path", {
    className: "".concat(moonColor, " fill-current"),
    viewBox: "0 0 24 24",
    d: "M5 6c0 6.627 5.373 12 12 12 2.027 0 3.937-.503 5.611-1.39A12 12 0 0112 23C5.373 23 0 17.627 0 11 0 6.399 2.59 2.403 6.39.39A11.94 11.94 0 005 6z"
  })));
}

ThemeToggle.propTypes = {
  iconSize: propTypes.string,
  buttonSize: propTypes.string,
  className: propTypes.string,
  ariaLabel: propTypes.string,
  bodyClassList: propTypes.string,
  moonColor: propTypes.string,
  sunColor: propTypes.string,
  bgColor: propTypes.string
};

function handleAllowCookies() {
  setCookie("consent", true, 365);
}
function handleRejectCookies() {
  setCookie("consent", false, 365);
} // Get cookie value

function getCookie(cname) {
  // eslint-disable-next-line
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]; // eslint-disable-next-line eqeqeq

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    } // eslint-disable-next-line eqeqeq


    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}
function activateCookies() {
  window["ga-disable-UA-171683260-1"] = false;
}
function deactivateCookies() {
  window["ga-disable-UA-171683260-1"] = true;
}
function googleAnalytics() {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    // eslint-disable-next-line
    dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", "UA-171683260-1");
} // Create cookie that lives 365 days

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=".concat(d.toUTCString());
  document.cookie = "".concat(cname, "=").concat(cvalue, ";").concat(expires, ";path=/");
}

function CookieBanner(_ref) {
  var isVisible = _ref.isVisible,
      _ref$CookieBannerText = _ref.CookieBannerText,
      CookieBannerText = _ref$CookieBannerText === void 0 ? {
    declineButtonText: "Decline",
    acceptButtonText: "Allow cookies",
    privacyPolicyText: "This website uses cookies to ensure you get the best experience. ",
    privacyPolicyLinkText: "Read privacy policy"
  } : _ref$CookieBannerText,
      _ref$buttonStyling = _ref.buttonStyling,
      buttonStyling = _ref$buttonStyling === void 0 ? {
    privacyPolicy: {
      href: "/privacy-policy",
      className: "text-gray-600 hover:text-gray-500 underline pl-0 pr-0"
    },
    declineButton: {
      type: "classic",
      className: "border-2 border-gray-600 hover:border-gray-500",
      textColor: "text-gray-600 hover:text-gray-500"
    },
    acceptButton: {
      type: "classic",
      className: "text-white bg-indigo-600 hover:bg-indigo-500 ml-4"
    }
  } : _ref$buttonStyling,
      _ref$bannerStyling = _ref.bannerStyling,
      bannerStyling = _ref$bannerStyling === void 0 ? {
    banner: "fixed bottom-0 right-0 w-full pb-6 px-2 sm:px-4 z-50 text-black",
    bannerContainer: "max-w-80 bg-gray-100 flex rounded-lg py-4 sm:py-2 items-center flex-col sm:flex-row px-4 w-fit",
    privacyPolicyParagraph: "h-fit pb-2 md:pb-0 leading-tight",
    buttonsContainer: "md:ml-16 flex mt-2 sm:mt-0"
  } : _ref$bannerStyling;

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  var declineButtonText = CookieBannerText.declineButtonText,
      acceptButtonText = CookieBannerText.acceptButtonText,
      privacyPolicyText = CookieBannerText.privacyPolicyText,
      privacyPolicyLinkText = CookieBannerText.privacyPolicyLinkText;
  var privacyPolicy = buttonStyling.privacyPolicy,
      declineButton = buttonStyling.declineButton,
      acceptButton = buttonStyling.acceptButton;
  var bannerContainer = bannerStyling.bannerContainer,
      privacyPolicyParagraph = bannerStyling.privacyPolicyParagraph,
      banner = bannerStyling.banner,
      buttonsContainer = bannerStyling.buttonsContainer;
  React.useEffect(function () {
    setVisibility(isVisible["visible"]);
  }, [isVisible]);

  function accept() {
    handleAllowCookies();
    googleAnalytics();
    setVisibility(false);
  }

  function decline() {
    handleRejectCookies();
    setVisibility(false);
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(banner, " ").concat(!visibility && "hidden")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "cookie-banner-container",
    className: bannerContainer
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: privacyPolicyParagraph
  }, privacyPolicyText, /*#__PURE__*/React__default['default'].createElement(Button, privacyPolicy, privacyPolicyLinkText)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: buttonsContainer
  }, /*#__PURE__*/React__default['default'].createElement(Button, _extends({
    onClick: function onClick() {
      return decline();
    }
  }, declineButton), declineButtonText), /*#__PURE__*/React__default['default'].createElement(Button, _extends({
    onClick: function onClick() {
      return accept();
    }
  }, acceptButton), acceptButtonText))));
}

function CookieButtons(_ref) {
  var className = _ref.className,
      firstButtonProps = _ref.firstButtonProps,
      _ref$firstButtonText = _ref.firstButtonText,
      firstButtonText = _ref$firstButtonText === void 0 ? "Privacy Policy" : _ref$firstButtonText,
      _ref$secondButtonText = _ref.secondButtonText,
      secondButtonText = _ref$secondButtonText === void 0 ? "Cookie preferences" : _ref$secondButtonText,
      secondButtonProps = _ref.secondButtonProps,
      bannerProps = _ref.bannerProps,
      props = _objectWithoutProperties(_ref, ["className", "firstButtonProps", "firstButtonText", "secondButtonText", "secondButtonProps", "bannerProps"]);

  var _useState = React.useState({
    visible: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      isBannerVisible = _useState2[0],
      setIsBannerVisible = _useState2[1];

  React.useEffect(function () {
    if (!getCookie("consent")) {
      setIsBannerVisible({
        visible: true
      });
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(Button, _extends({}, props, firstButtonProps, {
    className: "hover-opacity"
  }), firstButtonText), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "px-1"
  }, "|"), /*#__PURE__*/React__default['default'].createElement(Button, _extends({
    onClick: function onClick() {
      return setIsBannerVisible({
        visible: true
      });
    }
  }, props, {
    className: "cursor-pointer hover-opacity btn-change-cookie-preferences inline"
  }), secondButtonText)), /*#__PURE__*/React__default['default'].createElement(CookieBanner, {
    isVisible: isBannerVisible
  }));
}

function MobileMenu(items) {
  var sides = items.items.map(function (value, key) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      className: "py-2 px-0",
      key: key
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      className: "hover:opacity-50",
      href: value[1]
    }, value[0]));
  });
  return /*#__PURE__*/React__default['default'].createElement("ul", {
    id: "menuScreen",
    className: "jsx-3212273067" + " " + "w-full bg-white  flex flex-col items-center md:hidden text-2xl font-thin py-4 absolute"
  }, sides, /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "3212273067"
  }, "#menu-items a{color:#1e1e23;-webkit-transition:200ms;transition:200ms;}#menuScreen{margin-top:3.5rem;-webkit-transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);-webkit-transition:-webkit-transform cubic-bezier(0.4,0.01,0.165,0.99) 0.3s;-webkit-transition:transform cubic-bezier(0.4,0.01,0.165,0.99) 0.3s;transition:transform cubic-bezier(0.4,0.01,0.165,0.99) 0.3s;}body.mobile-menu-active{overflow:hidden;}body.mobile-menu-active #menuScreen{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);overflow:hidden;}#menuScreen li{opacity:0;-webkit-transform:translate3d(0,2rem,0);-webkit-transform:translate3d(0,2rem,0);-ms-transform:translate3d(0,2rem,0);transform:translate3d(0,2rem,0);-webkit-transition:opacity 0.2s ease,-webkit-transform 0.3s ease;-webkit-transition:opacity 0.2s ease,transform 0.3s ease;transition:opacity 0.2s ease,transform 0.3s ease;}body.mobile-menu-active #menuScreen li{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity 0.2s ease, -webkit-transform 0.4s cubic-bezier(0.165,0.84,0.44,1),color 0.2s ease;-webkit-transition:opacity 0.2s ease, transform 0.4s cubic-bezier(0.165,0.84,0.44,1),color 0.2s ease;transition:opacity 0.2s ease, transform 0.4s cubic-bezier(0.165,0.84,0.44,1),color 0.2s ease;}body.mobile-menu-active #menuScreen li:nth-child(1){-webkit-transition-delay:0.5s;-webkit-transition-delay:0.4s;transition-delay:0.4s;}body.mobile-menu-active #menuScreen li:nth-child(2){-webkit-transition-delay:0.6s;-webkit-transition-delay:0.5s;transition-delay:0.5s;}body.mobile-menu-active #menuScreen li:nth-child(3){-webkit-transition-delay:0.7s;-webkit-transition-delay:0.6s;transition-delay:0.6s;}body.mobile-menu-active #menuScreen li:nth-child(4){-webkit-transition-delay:0.8s;-webkit-transition-delay:0.7s;transition-delay:0.7s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vYmlsZU1lbnVNaW5pLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CeUIsQUFHeUIsQUFLSSxBQU9GLEFBSXVCLEFBTTdCLEFBT0EsQUFRb0IsQUFLQSxBQUtBLEFBS0EsVUE3QlksQUFPSCxJQTdCdEIsRUFZbkIsRUFQNkMsWUFnQ3JCLEFBS0EsQUFLQSxBQUtBLE9BcENTLFVBY0EsR0FQRyxNQXRCcEMsR0FLcUMsdUJBZ0NyQyxBQUtBLEFBS0EsQUFLQSxzREFwQ2tCLFVBZW9ELE1BZHRFLE1BTW9ELFlBakJhLCtKQWtCakUsNkNBakJBLDJFQXlCQSIsImZpbGUiOiJNb2JpbGVNZW51TWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNb2JpbGVNZW51KGl0ZW1zKSB7XG4gIGNvbnN0IHNpZGVzID0gaXRlbXMuaXRlbXMubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJweS0yIHB4LTBcIiBrZXk9e2tleX0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOm9wYWNpdHktNTBcIiBocmVmPXt2YWx1ZVsxXX0+XG4gICAgICAgICAge3ZhbHVlWzBdfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPHVsXG4gICAgICBpZD1cIm1lbnVTY3JlZW5cIlxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDpoaWRkZW4gdGV4dC0yeGwgZm9udC10aGluIHB5LTQgYWJzb2x1dGVcIlxuICAgID5cbiAgICAgIHtzaWRlc31cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNtZW51LWl0ZW1zIGEge1xuICAgICAgICAgIGNvbG9yOiAjMWUxZTIzO1xuICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgI21lbnVTY3JlZW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC40LCAwLjAxLCAwLjE2NSwgMC45OSkgMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkubW9iaWxlLW1lbnUtYWN0aXZlIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keS5tb2JpbGUtbWVudS1hY3RpdmUgI21lbnVTY3JlZW4ge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAjbWVudVNjcmVlbiBsaSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMnJlbSwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAycmVtLCAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkubW9iaWxlLW1lbnUtYWN0aXZlICNtZW51U2NyZWVuIGxpIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLFxuICAgICAgICAgICAgdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSwgY29sb3IgMC4ycyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keS5tb2JpbGUtbWVudS1hY3RpdmUgI21lbnVTY3JlZW4gbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkubW9iaWxlLW1lbnUtYWN0aXZlICNtZW51U2NyZWVuIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5Lm1vYmlsZS1tZW51LWFjdGl2ZSAjbWVudVNjcmVlbiBsaTpudGgtY2hpbGQoMykge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC43cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keS5tb2JpbGUtbWVudS1hY3RpdmUgI21lbnVTY3JlZW4gbGk6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC43cztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XG4iXX0= */\n/*@ sourceURL=MobileMenuMini.js */"));
}

function MobileMenu$1(items) {
  var sides = items.items.map(function (value, key) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      className: "py-4 px-0",
      key: key
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      className: "hover:opacity-50",
      href: value[1]
    }, value[0]));
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    id: "menuScreen",
    className: "jsx-3664065903" + " " + "flex md:hidden justify-center text-center w-full h-full absolute bg-white text-3xl font-thin"
  }, /*#__PURE__*/React__default['default'].createElement("ul", {
    id: "menu-items",
    className: "jsx-3664065903"
  }, sides), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "3664065903"
  }, "#menu-items a{color:#1e1e23;-webkit-transition:200ms;transition:200ms;}#menuScreen{-webkit-transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);-webkit-transition:-webkit-transform cubic-bezier(0.4,0.01,0.165,0.99) 0.4s;-webkit-transition:transform cubic-bezier(0.4,0.01,0.165,0.99) 0.4s;transition:transform cubic-bezier(0.4,0.01,0.165,0.99) 0.4s;}body.mobile-menu-active{overflow:hidden;}body.mobile-menu-active #menuScreen{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);overflow:hidden;}#menuScreen li{opacity:0;-webkit-transform:translate3d(0,2rem,0);-webkit-transform:translate3d(0,2rem,0);-ms-transform:translate3d(0,2rem,0);transform:translate3d(0,2rem,0);-webkit-transition:opacity 0.2s ease,-webkit-transform 0.3s ease;-webkit-transition:opacity 0.2s ease,transform 0.3s ease;transition:opacity 0.2s ease,transform 0.3s ease;}body.mobile-menu-active #menuScreen li{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity 0.2s ease, -webkit-transform 0.4s cubic-bezier(0.165,0.84,0.44,1),color 0.2s ease;-webkit-transition:opacity 0.2s ease, transform 0.4s cubic-bezier(0.165,0.84,0.44,1),color 0.2s ease;transition:opacity 0.2s ease, transform 0.4s cubic-bezier(0.165,0.84,0.44,1),color 0.2s ease;}body.mobile-menu-active #menuScreen li:nth-child(1){-webkit-transition-delay:0.5s;-webkit-transition-delay:0.5s;transition-delay:0.5s;}body.mobile-menu-active #menuScreen li:nth-child(2){-webkit-transition-delay:0.6s;-webkit-transition-delay:0.6s;transition-delay:0.6s;}body.mobile-menu-active #menuScreen li:nth-child(3){-webkit-transition-delay:0.7s;-webkit-transition-delay:0.7s;transition-delay:0.7s;}body.mobile-menu-active #menuScreen li:nth-child(4){-webkit-transition-delay:0.8s;-webkit-transition-delay:0.8s;transition-delay:0.8s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vYmlsZU1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J5QixBQUd5QixBQUs2QixBQU0zQixBQUl1QixBQU03QixBQU9BLEFBUW9CLEFBS0EsQUFLQSxBQUtBLFVBN0JZLEFBT0gsSUE1QnRCLEVBV25CLGNBeUJ3QixBQUtBLEFBS0EsQUFLQSxPQXBDUyxJQVZJLE1Bd0JKLEdBUEcsTUFyQnBDLDBCQW9DQSxBQUtBLEFBS0EsQUFLQSxzREFwQ2tCLFVBZW9ELE1BekJMLEFBV2pFLE1BTW9ELDJLQUNwRCwyQkFqQkEsNkZBeUJBIiwiZmlsZSI6Ik1vYmlsZU1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTW9iaWxlTWVudShpdGVtcykge1xuICBjb25zdCBzaWRlcyA9IGl0ZW1zLml0ZW1zLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicHktNCBweC0wXCIga2V5PXtrZXl9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJob3ZlcjpvcGFjaXR5LTUwXCIgaHJlZj17dmFsdWVbMV19PlxuICAgICAgICAgIHt2YWx1ZVswXX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwibWVudVNjcmVlblwiXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IG1kOmhpZGRlbiBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIGJnLXdoaXRlIHRleHQtM3hsIGZvbnQtdGhpblwiXG4gICAgPlxuICAgICAgPHVsIGlkPVwibWVudS1pdGVtc1wiPntzaWRlc308L3VsPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI21lbnUtaXRlbXMgYSB7XG4gICAgICAgICAgY29sb3I6ICMxZTFlMjM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIH1cblxuICAgICAgICAjbWVudVNjcmVlbiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuNCwgMC4wMSwgMC4xNjUsIDAuOTkpIDAuNHM7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5Lm1vYmlsZS1tZW51LWFjdGl2ZSB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkubW9iaWxlLW1lbnUtYWN0aXZlICNtZW51U2NyZWVuIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgI21lbnVTY3JlZW4gbGkge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDJyZW0sIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMnJlbSwgMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5Lm1vYmlsZS1tZW51LWFjdGl2ZSAjbWVudVNjcmVlbiBsaSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSksIGNvbG9yIDAuMnMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkubW9iaWxlLW1lbnUtYWN0aXZlICNtZW51U2NyZWVuIGxpOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5Lm1vYmlsZS1tZW51LWFjdGl2ZSAjbWVudVNjcmVlbiBsaTpudGgtY2hpbGQoMikge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keS5tb2JpbGUtbWVudS1hY3RpdmUgI21lbnVTY3JlZW4gbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuN3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC43cztcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkubW9iaWxlLW1lbnUtYWN0aXZlICNtZW51U2NyZWVuIGxpOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcbiJdfQ== */\n/*@ sourceURL=MobileMenu.js */"));
}

function Header() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "h-14 flex justify-between items-center max-w-80 px-4 relative z-50"
  }, /*#__PURE__*/React__default['default'].createElement(gatsby.Link, {
    className: "text-lg font-bold text-black",
    to: "/"
  }, "CSS Transforms"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React__default['default'].createElement(ThemeToggle, null), /*#__PURE__*/React__default['default'].createElement(gatsby.Link, {
    className: "text-lg font-bold",
    to: "/about"
  }, "About")));
}

function Footer() {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "h-24 md:h-14"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "w-full absolute bottom-0"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "h-24 md:h-14 flex flex-wrap md:flex-no-wrap justify-between items-center max-w-80 px-4 pb-4 md:pb-0 text-white bg-gray-900"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-lg font-bold order-2 md:order-1 md:w-1/4"
  }, "Vladimir V."), /*#__PURE__*/React__default['default'].createElement(CookieButtons, {
    classes: "order-1 md:order-2 w-full md:w-auto text-sm md:text-base pt-2 md:pt-0"
  }), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-lg font-bold order-3 md:w-1/4 text-right"
  }, "\xA92020"))));
}

function ContactForm(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? "classic" : _ref$style,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? {
    themeBgColor: "bg-indigo-600",
    errorBgColor: "bg-red-500",
    errorBorderColor: "border-red-500",
    successBgColor: "bg-green-500",
    loadingColor: "bg-blue-500",
    btnHover: "bg-indigo-700",
    inputColor: "bg-white",
    inputFocusColor: "focus:border-indigo-600",
    inputBorderColor: "border-gray-300"
  } : _ref$colors,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? {
    defaultText: "Send",
    errorText: "Error",
    successText: "Message sent",
    loadingtext: ""
  } : _ref$buttonText,
      _ref$formText = _ref.formText,
      formText = _ref$formText === void 0 ? {
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message"
  } : _ref$formText,
      _ref$inputHeight = _ref.inputHeight,
      inputHeight = _ref$inputHeight === void 0 ? "h-12" : _ref$inputHeight,
      _ref$textareaHeight = _ref.textareaHeight,
      textareaHeight = _ref$textareaHeight === void 0 ? "h-40" : _ref$textareaHeight,
      props = _objectWithoutProperties(_ref, ["className", "style", "colors", "buttonText", "formText", "inputHeight", "textareaHeight"]);

  var emailRegex = /^\S+@\S+\.\S+$/i;
  var wordRegex = /\S+/i;

  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = React.useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      isNameValid = _useState8[0],
      setIsNameValid = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      isEmailValid = _useState10[0],
      setIsEmailValid = _useState10[1];

  var _useState11 = React.useState(null),
      _useState12 = _slicedToArray(_useState11, 2),
      isMessageValid = _useState12[0],
      setIsMessageValid = _useState12[1];

  var _useState13 = React.useState("notSending"),
      _useState14 = _slicedToArray(_useState13, 2),
      sendingStatus = _useState14[0],
      setSendingStatus = _useState14[1];

  var INPUTSTYLES = {
    classic: "border-2 ".concat(colors.inputColor, " ").concat(colors.inputBorderColor, " ").concat(colors.inputFocusColor, " ").concat(colors.themeColor, " rounded-md w-full mb-4")
  };

  function validateName() {
    wordRegex.test(name) ? setIsNameValid(true) : setIsNameValid(false);
  }

  function validateEmail() {
    emailRegex.test(email) ? setIsEmailValid(true) : setIsEmailValid(false);
  }

  function validateMessage() {
    wordRegex.test(message) ? setIsMessageValid(true) : setIsMessageValid(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setMessage("");
    setIsNameValid(null);
    setIsEmailValid(null);
    setIsMessageValid(null);
    setSendingStatus("notSending");
  }

  function showError() {
    setSendingStatus("error");
    setTimeout(function () {
      setSendingStatus("notSending");
    }, 5000);
  }

  function showSuccess() {
    setSendingStatus("sent");
    setTimeout(function () {
      setSendingStatus("notSending");
      clearForm();
    }, 5000);
  }

  function handleSubmit() {
    if (sendingStatus === "notSending") {
      validateName();
      validateEmail();
      validateMessage(); // Send email if everything is valid

      if (name && emailRegex.test(email) && message) {
        // add spinner
        setSendingStatus("sending");
        var data = "name=".concat(name, "&email=").concat(email, "&subject=\"subject\"&msg=").concat(message);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "mail/send.php");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onerror = function () {
          showError();
        };

        xhr.onload = function () {
          if (xhr.status === 200 && xhr.responseText === "1") {
            showSuccess();
          } else {
            showError();
          }
        };

        xhr.send(data);
      }
    }
  }

  var BUTTON_STATES = {
    notSending: {
      state: {
        color: colors.themeColor,
        hoverColor: colors.btnHover
      },
      buttonText: buttonText.defaultText
    },
    sending: {
      state: {
        color: colors.loadingColor,
        isLoading: true
      },
      buttonText: buttonText.loadingText
    },
    error: {
      state: {
        color: colors.errorBgColor
      },
      buttonText: buttonText.errorText
    },
    sent: {
      state: {
        color: colors.successBgColor
      },
      buttonText: buttonText.successText
    }
  };
  return /*#__PURE__*/React__default['default'].createElement("form", _extends({
    className: className
  }, props), /*#__PURE__*/React__default['default'].createElement(Label, {
    label: formText.nameLabel,
    htmlFor: "input-name"
  }), /*#__PURE__*/React__default['default'].createElement(Input$1, {
    id: "input-name",
    name: "Name",
    type: "text",
    placeholder: formText.namePlaceholder,
    className: "".concat(isNameValid === false && "".concat(colors.errorBorderColor), " ").concat(INPUTSTYLES[style], " ").concat(inputHeight),
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    onBlur: function onBlur() {
      return validateName();
    }
  }), /*#__PURE__*/React__default['default'].createElement(Label, {
    label: formText.emailLabel,
    htmlFor: "input-email"
  }), /*#__PURE__*/React__default['default'].createElement(Input$1, {
    id: "input-email",
    name: "Email",
    type: "text",
    placeholder: formText.emailPlaceholder,
    className: "".concat(isEmailValid === false && "".concat(colors.errorBorderColor), " ").concat(INPUTSTYLES[style], " ").concat(inputHeight),
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    onBlur: function onBlur() {
      return validateEmail();
    }
  }), /*#__PURE__*/React__default['default'].createElement(Label, {
    label: formText.messageLabel,
    htmlFor: "input-message"
  }), /*#__PURE__*/React__default['default'].createElement(Textarea$1, {
    id: "input-message",
    className: "".concat(isMessageValid === false && "".concat(colors.errorBorderColor), " ").concat(INPUTSTYLES[style], " ").concat(textareaHeight),
    name: "Message",
    placeholder: formText.messagePlaceholder,
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onBlur: function onBlur() {
      return validateMessage();
    }
  }), /*#__PURE__*/React__default['default'].createElement(Button, _extends({
    textColor: "text-white",
    size: "lg",
    onClick: function onClick(event) {
      event.stopPropagation();
      event.preventDefault();
      handleSubmit();
    },
    className: "w-full text-lg"
  }, BUTTON_STATES[sendingStatus]["state"]), BUTTON_STATES[sendingStatus]["buttonText"]));
}

ContactForm.propTypes = {
  className: propTypes.string,
  style: propTypes.string,
  colors: propTypes.object,
  buttonText: propTypes.object,
  formText: propTypes.object,
  inputHeight: propTypes.string,
  textareaHeight: propTypes.string
};

function MoovingLetters(_ref) {
  var text = _ref.text,
      className = _ref.className,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 1000 : _ref$delay,
      inView = _ref.inView,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? "#333" : _ref$textColor,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "div" : _ref$as,
      props = _objectWithoutProperties(_ref, ["text", "className", "delay", "inView", "textColor", "as"]);

  var charPosition = React.useRef(-1);
  var iteration = React.useRef(0);
  var letters = React.useRef(text.replace(/\s/g, ""));
  var finalMatrix = React.useRef([]);
  var lengthOfFinalMatrix = 55;
  var textWrapper = React.useRef(null);
  var requestRef = React.useRef(null);
  var wasTriggered = React.useRef(false);

  function splitText(str) {
    return str.replace(/\S+/g, splitting);
  }

  function splitting(match) {
    var beginning = '<span class="word">';
    var middle = "";
    var end = "</span>";
    match.split("").map(function (_char) {
      return middle += "<span class=\"char sym-".concat(Math.round((Math.random() * 3 + 3) * 7), "\">").concat(_char, "</span>");
    });
    return beginning + middle + end;
  }

  function getGlitchesMatrix() {
    finalMatrix.current = Array(lengthOfFinalMatrix).fill().map(function () {
      return Array(letters.current.length).fill("sym-0");
    });

    for (var i = 0; i < letters.current.length; i++) {
      // max result of random should be lower than length of final matrix
      for (var j = 0; j < Math.round((Math.random() * 3 + 3) * 9); j++) {
        finalMatrix.current[j][i] = "sym-".concat(Math.round(Math.random() * 41 + 1));
      }
    }
  }

  function getClassName() {
    charPosition.current += 1;
    return finalMatrix.current[iteration.current][charPosition.current];
  }

  function changeClassNames() {
    charPosition.current = -1;

    if (iteration.current < finalMatrix.current.length && textWrapper.current) {
      textWrapper.current.innerHTML = textWrapper.current.innerHTML.replace(/sym-\d?\d/g, getClassName);
      iteration.current += 1;
      requestRef.current = requestAnimationFrame(changeClassNames);
    }
  }

  React.useEffect(function () {
    textWrapper.current.innerHTML = splitText(text);
    getGlitchesMatrix(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(function () {
    if (inView) {
      wasTriggered.current = true;
      setTimeout(function () {
        requestRef.current = requestAnimationFrame(changeClassNames);
      }, delay);
    }

    return function () {
      return cancelAnimationFrame(requestRef.current);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React.createElement(as, _objectSpread2({
    "aria-label": text,
    ref: textWrapper,
    className: className,
    id: "mooving-letters"
  }, props), ""), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "2931457590",
    dynamic: [textColor, textColor]
  }, "#mooving-letters>.word{position:relative;display:inline-block;}#mooving-letters span.char,#mooving-letters-invisible span.char{position:relative;color:transparent;}#mooving-letters span.sym-0,#mooving-letters-invisible span.sym-0{color:".concat(textColor, ";}#mooving-letters span.char::after,#mooving-letters-invisible span.char::after{position:absolute;left:0;top:-15%;color:").concat(textColor, ";visibility:visible;}#mooving-letters span.sym-0::after{content:\"\";}#mooving-letters span.sym-1::after{content:\"\xA1\";}#mooving-letters span.sym-2::after{content:\"\u2122\";}#mooving-letters span.sym-3::after{content:\"\xA3\";}#mooving-letters span.sym-4::after{content:\"\xA2\";}#mooving-letters span.sym-5::after{content:\"\u221E\";}#mooving-letters span.sym-6::after{content:\"\xA7\";}#mooving-letters span.sym-7::after{content:\"\xB6\";}#mooving-letters span.sym-8::after{content:\"\u2022\";}#mooving-letters span.sym-9::after{content:\"\xAA\";}#mooving-letters span.sym-10::after{content:\"\u2260\";}#mooving-letters span.sym-11::after{content:\"\xE5\";}#mooving-letters span span.sym-12::after{content:\"\xDF\";}#mooving-letters span.sym-13::after{content:\"\u2202\";}#mooving-letters span.sym-14::after{content:\"\xA9\";}#mooving-letters span.sym-15::after{content:\"\u2206\";}#mooving-letters span.sym-16::after{content:\"\u02DA\";}#mooving-letters span.sym-17::after{content:\"\u0153\";}#mooving-letters span.sym-18::after{content:\"\xAE\";}#mooving-letters span.sym-19::after{content:\"\u2020\";}#mooving-letters span.sym-20::after{content:\"\xA5\";}#mooving-letters span.sym-21::after{content:\"\u03C0\";}#mooving-letters span.sym-22::after{content:\"\u2248\";}#mooving-letters span.sym-23::after{content:\"\u221A\";}#mooving-letters span.sym-24::after{content:\"\u222B\";}#mooving-letters span.sym-25::after{content:\"\u2026\";}#mooving-letters span.sym-26::after{content:\"\xE7\";}#mooving-letters span.sym-27::after{content:\"\u221A\";}#mooving-letters span.sym-28::after{content:\"\xF8\";}#mooving-letters span.sym-29::after{content:\"\xA8\";}#mooving-letters span.sym-30::after{content:\"\u02DC\";}#mooving-letters span.sym-31::after{content:\"\xB5\";}#mooving-letters span.sym-32::after{content:\"\u2264\";}#mooving-letters span.sym-33::after{content:\"\u2265\";}#mooving-letters span.sym-34::after{content:\"\xF7\";}#mooving-letters span.sym-35::after{content:\"?\";}#mooving-letters span.sym-36::after{content:\"|\";}#mooving-letters span.sym-37::after{content:\"\u2591\";}#mooving-letters span.sym-38::after{content:\"\u2592\";}#mooving-letters span.sym-39::after{content:\"\u2593\";}#mooving-letters span.sym-40::after{content:\"<\";}#mooving-letters span.sym-41::after{content:\">\";}#mooving-letters span.sym-42::after{content:\"/\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vb3ZpbmdMZXR0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHeUIsQUFHNkIsQUFNQSxBQU1pQixBQUtqQixBQVFQLEFBSUMsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLFdBdktkLENBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLE1Bak11QixBQU1ILEFBV1gsT0FDRSxTQUMwQixDQVByQyxDQUxBLEdBTkEsOEJBbUJxQixtQkFDckIiLCJmaWxlIjoiTW9vdmluZ0xldHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuZnVuY3Rpb24gTW9vdmluZ0xldHRlcnMoe1xuICB0ZXh0LFxuICBjbGFzc05hbWUsXG4gIGRlbGF5ID0gMTAwMCxcbiAgaW5WaWV3LFxuICB0ZXh0Q29sb3IgPSBcIiMzMzNcIixcbiAgYXMgPSBcImRpdlwiLFxuICAuLi5wcm9wc1xufSkge1xuICBsZXQgY2hhclBvc2l0aW9uID0gdXNlUmVmKC0xKTtcbiAgbGV0IGl0ZXJhdGlvbiA9IHVzZVJlZigwKTtcbiAgbGV0IGxldHRlcnMgPSB1c2VSZWYodGV4dC5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICBsZXQgZmluYWxNYXRyaXggPSB1c2VSZWYoW10pO1xuICBjb25zdCBsZW5ndGhPZkZpbmFsTWF0cml4ID0gNTU7XG4gIGNvbnN0IHRleHRXcmFwcGVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCByZXF1ZXN0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3YXNUcmlnZ2VyZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHNwbGl0VGV4dChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcUysvZywgc3BsaXR0aW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwbGl0dGluZyhtYXRjaCkge1xuICAgIGxldCBiZWdpbm5pbmcgPSAnPHNwYW4gY2xhc3M9XCJ3b3JkXCI+JztcbiAgICBsZXQgbWlkZGxlID0gXCJcIjtcbiAgICBsZXQgZW5kID0gXCI8L3NwYW4+XCI7XG4gICAgbWF0Y2guc3BsaXQoXCJcIikubWFwKChjaGFyKSA9PiB7XG4gICAgICByZXR1cm4gKG1pZGRsZSArPSBgPHNwYW4gY2xhc3M9XCJjaGFyIHN5bS0ke01hdGgucm91bmQoXG4gICAgICAgIChNYXRoLnJhbmRvbSgpICogMyArIDMpICogN1xuICAgICAgKX1cIj4ke2NoYXJ9PC9zcGFuPmApO1xuICAgIH0pO1xuICAgIHJldHVybiBiZWdpbm5pbmcgKyBtaWRkbGUgKyBlbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRHbGl0Y2hlc01hdHJpeCgpIHtcbiAgICBmaW5hbE1hdHJpeC5jdXJyZW50ID0gQXJyYXkobGVuZ3RoT2ZGaW5hbE1hdHJpeClcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkobGV0dGVycy5jdXJyZW50Lmxlbmd0aCkuZmlsbChcInN5bS0wXCIpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMuY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbWF4IHJlc3VsdCBvZiByYW5kb20gc2hvdWxkIGJlIGxvd2VyIHRoYW4gbGVuZ3RoIG9mIGZpbmFsIG1hdHJpeFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMyArIDMpICogOSk7IGorKykge1xuICAgICAgICBmaW5hbE1hdHJpeC5jdXJyZW50W2pdW2ldID0gYHN5bS0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDQxICsgMSl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUoKSB7XG4gICAgY2hhclBvc2l0aW9uLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gZmluYWxNYXRyaXguY3VycmVudFtpdGVyYXRpb24uY3VycmVudF1bY2hhclBvc2l0aW9uLmN1cnJlbnRdO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlQ2xhc3NOYW1lcygpIHtcbiAgICBjaGFyUG9zaXRpb24uY3VycmVudCA9IC0xO1xuICAgIGlmIChpdGVyYXRpb24uY3VycmVudCA8IGZpbmFsTWF0cml4LmN1cnJlbnQubGVuZ3RoICYmIHRleHRXcmFwcGVyLmN1cnJlbnQpIHtcbiAgICAgIHRleHRXcmFwcGVyLmN1cnJlbnQuaW5uZXJIVE1MID0gdGV4dFdyYXBwZXIuY3VycmVudC5pbm5lckhUTUwucmVwbGFjZShcbiAgICAgICAgL3N5bS1cXGQ/XFxkL2csXG4gICAgICAgIGdldENsYXNzTmFtZVxuICAgICAgKTtcbiAgICAgIGl0ZXJhdGlvbi5jdXJyZW50ICs9IDE7XG4gICAgICByZXF1ZXN0UmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hhbmdlQ2xhc3NOYW1lcyk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0ZXh0V3JhcHBlci5jdXJyZW50LmlubmVySFRNTCA9IHNwbGl0VGV4dCh0ZXh0KTtcbiAgICBnZXRHbGl0Y2hlc01hdHJpeCgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgd2FzVHJpZ2dlcmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGFuZ2VDbGFzc05hbWVzKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdFJlZi5jdXJyZW50KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtpblZpZXddKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y3JlYXRlRWxlbWVudChcbiAgICAgICAgYXMsXG4gICAgICAgIHtcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdGV4dCxcbiAgICAgICAgICByZWY6IHRleHRXcmFwcGVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIGlkOiBcIm1vb3ZpbmctbGV0dGVyc1wiLFxuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICB9LFxuICAgICAgICBcIlwiXG4gICAgICApfVxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzID4gLndvcmQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uY2hhcixcbiAgICAgICAgI21vb3ZpbmctbGV0dGVycy1pbnZpc2libGUgc3Bhbi5jaGFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0wLFxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzLWludmlzaWJsZSBzcGFuLnN5bS0wIHtcbiAgICAgICAgICBjb2xvcjogJHt0ZXh0Q29sb3J9O1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLmNoYXI6OmFmdGVyLFxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzLWludmlzaWJsZSBzcGFuLmNoYXI6OmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IC0xNSU7XG4gICAgICAgICAgY29sb3I6ICR7dGV4dENvbG9yfTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0wOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiwqFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4oSiXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTM6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIsKjXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTQ6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIsKiXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTU6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKInlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS02OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLCp1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS03OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLCtlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS04OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLigKJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tOTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiwqpcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMTA6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKJoFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0xMTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiw6VcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3BhbiBzcGFuLnN5bS0xMjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiw59cIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMTM6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKIglwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0xNDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiwqlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMTU6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKIhlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0xNjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiy5pcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMTc6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIsWTXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTE4OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLCrlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0xOTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4oCgXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTIwOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLCpVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0yMTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiz4BcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMjI6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKJiFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0yMzo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4oiaXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTI0OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLiiKtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMjU6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKAplwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0yNjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiw6dcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMjc6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKImlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0yODo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiw7hcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMjk6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIsKoXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTMwOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLLnFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0zMTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiwrVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMzI6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKJpFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0zMzo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4omlXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTM0OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLDt1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0zNTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiP1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0zNjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwifFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS0zNzo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4paRXCI7XG4gICAgICAgIH1cblxuICAgICAgICAjbW9vdmluZy1sZXR0ZXJzIHNwYW4uc3ltLTM4OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCLilpJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICNtb292aW5nLWxldHRlcnMgc3Bhbi5zeW0tMzk6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIuKWk1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS00MDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiPFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS00MTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiPlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgI21vb3ZpbmctbGV0dGVycyBzcGFuLnN5bS00Mjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbk1vb3ZpbmdMZXR0ZXJzLnByb3BUeXBlcyA9IHtcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGluVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gIGFzOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9vdmluZ0xldHRlcnM7XG4iXX0= */\n/*@ sourceURL=MoovingLetters.js */")));
}

MoovingLetters.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  className: propTypes.string,
  delay: propTypes.number,
  inView: propTypes.bool,
  as: propTypes.string
};

var useEventListener = function useEventListener(target, type, listener) {
  for (var _len = arguments.length, options = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    options[_key - 3] = arguments[_key];
  }

  React.useEffect(function () {
    var targetIsRef = Object.prototype.hasOwnProperty.call(target, "current");
    var currentTarget = targetIsRef ? target.current : target;
    if (currentTarget) currentTarget.addEventListener.apply(currentTarget, [type, listener].concat(options));
    return function () {
      if (currentTarget) currentTarget.removeEventListener.apply(currentTarget, [type, listener].concat(options));
    };
  }, [target, type, listener, options]);
};

function RotatingText(_ref) {
  var numberOfSides = _ref.numberOfSides,
      className = _ref.className,
      children = _ref.children,
      rotationIn = _ref.rotationIn,
      entry = _ref.entry;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      transZ = _useState2[0],
      setTransZ = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      sideHeight = _useState4[0],
      setSideHeight = _useState4[1];

  var _useState5 = React.useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      sideWidth = _useState6[0],
      setSideWidth = _useState6[1];

  var numbers = getArray(numberOfSides);
  var refSide = React.useRef(null);

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      isActive = _useState8[0],
      setIsActive = _useState8[1];

  useEventListener(window, "resize", onSampleResize);

  function getDistance() {
    return sideHeight / 2 / Math.tan(Math.PI / numberOfSides);
  }

  function getDimentions() {
    setSideHeight(sideHeight = refSide.current.offsetHeight + 1);
    setSideWidth(sideWidth = refSide.current.offsetWidth + 1);
  }

  function getArray(num) {
    var numbers = [];

    for (var i = 0; i < num; i++) {
      numbers[i] = i + 1;
    }

    return numbers;
  }

  function onSampleResize() {
    if (sideHeight !== refSide.current.offsetHeight || sideWidth !== refSide.current.offsetWidth) {
      getDimentions();
      setTransZ(getDistance());
    }
  }

  var sides = numbers.map(function (num) {
    // console.log(sideWidth, sideHeight, transZ);
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "cell ".concat(className),
      key: num,
      style: {
        transform: "rotateX(".concat((num - 1) * (360 / numberOfSides), "deg) translateZ(").concat(transZ, "px) ")
      }
    }, children);
  });
  React.useEffect(function () {
    // setTimeout(() => {
    getDimentions();
    setTransZ(getDistance()); // }, 200);
  }, []);
  React.useEffect(function () {
    if (entry.isIntersecting) {
      setIsActive("rotating");
    }

    if (!entry.isIntersecting) {
      setIsActive("static");
    }
  }, [entry.isIntersecting]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: _JSXStyle__default['default'].dynamic([["2701769833", [rotationIn, transZ, transZ]]])
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: _JSXStyle__default['default'].dynamic([["2701769833", [rotationIn, transZ, transZ]]]) + " " + "scene w-screen h-screen flex items-center justify-center"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      height: sideHeight,
      width: sideWidth
    },
    className: _JSXStyle__default['default'].dynamic([["2701769833", [rotationIn, transZ, transZ]]]) + " " + "carousel ".concat(isActive)
  }, sides)), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: refSide,
    style: {
      transform: "rotateX(0deg) translateZ(".concat(transZ, "px) ")
    },
    className: _JSXStyle__default['default'].dynamic([["2701769833", [rotationIn, transZ, transZ]]]) + " " + "cell absolute invisible top-0 ".concat(className)
  }, children), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "2701769833",
    dynamic: [rotationIn, transZ, transZ]
  }, ".scene{position:relative;-webkit-perspective:10000px;-moz-perspective:10000px;-ms-perspective:10000px;perspective:10000px;}.cell{-webkit-backface-visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;}.carousel{width:100%;height:100%;position:absolute;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;}.carousel.rotating{-webkit-animation-duration:".concat(rotationIn, "s;animation-duration:").concat(rotationIn, "s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-timing-function:linear;animation-timing-function:linear;}@-webkit-keyframes rotate{from{-webkit-transform:translateZ(-").concat(transZ, "px) rotateX(360deg);-ms-transform:translateZ(-").concat(transZ, "px) rotateX(360deg);transform:translateZ(-").concat(transZ, "px) rotateX(360deg);}to{-webkit-transform:translateZ(-").concat(transZ, "px) rotateX(0deg);-ms-transform:translateZ(-").concat(transZ, "px) rotateX(0deg);transform:translateZ(-").concat(transZ, "px) rotateX(0deg);}}@keyframes rotate{from{-webkit-transform:translateZ(-").concat(transZ, "px) rotateX(360deg);-ms-transform:translateZ(-").concat(transZ, "px) rotateX(360deg);transform:translateZ(-").concat(transZ, "px) rotateX(360deg);}to{-webkit-transform:translateZ(-").concat(transZ, "px) rotateX(0deg);-ms-transform:translateZ(-").concat(transZ, "px) rotateX(0deg);transform:translateZ(-").concat(transZ, "px) rotateX(0deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdGF0aW5nVGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR1MsQUFHK0IsQUFLaUIsQUFLeEIsQUFPc0MsQUFRdUIsQUFJRixXQWxCMUQsT0FWUSxLQVdGLFlBTlMsTUFPQyx3REFOOUIsU0FXcUMsU0FoQnJDLHNCQVlBLCtDQUt3QixnQ0FXdEIsTUFKQSxjQU5pQywwRUFDbkMiLCJmaWxlIjoiUm90YXRpbmdUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSBcIi4uL3V0aWxzL3VzZUV2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuZnVuY3Rpb24gUm90YXRpbmdUZXh0KHtcbiAgbnVtYmVyT2ZTaWRlcyxcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgcm90YXRpb25JbixcbiAgZW50cnksXG59KSB7XG4gIGxldCBbdHJhbnNaLCBzZXRUcmFuc1pdID0gdXNlU3RhdGUoMCk7XG4gIGxldCBbc2lkZUhlaWdodCwgc2V0U2lkZUhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtzaWRlV2lkdGgsIHNldFNpZGVXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgbnVtYmVycyA9IGdldEFycmF5KG51bWJlck9mU2lkZXMpO1xuICBjb25zdCByZWZTaWRlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJyZXNpemVcIiwgb25TYW1wbGVSZXNpemUpO1xuXG4gIGZ1bmN0aW9uIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiBzaWRlSGVpZ2h0IC8gMiAvIE1hdGgudGFuKE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpbWVudGlvbnMoKSB7XG4gICAgc2V0U2lkZUhlaWdodCgoc2lkZUhlaWdodCA9IHJlZlNpZGUuY3VycmVudC5vZmZzZXRIZWlnaHQgKyAxKSk7XG4gICAgc2V0U2lkZVdpZHRoKChzaWRlV2lkdGggPSByZWZTaWRlLmN1cnJlbnQub2Zmc2V0V2lkdGggKyAxKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheShudW0pIHtcbiAgICBsZXQgbnVtYmVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIG51bWJlcnNbaV0gPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBmdW5jdGlvbiBvblNhbXBsZVJlc2l6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBzaWRlSGVpZ2h0ICE9PSByZWZTaWRlLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IHx8XG4gICAgICBzaWRlV2lkdGggIT09IHJlZlNpZGUuY3VycmVudC5vZmZzZXRXaWR0aFxuICAgICkge1xuICAgICAgZ2V0RGltZW50aW9ucygpO1xuICAgICAgc2V0VHJhbnNaKGdldERpc3RhbmNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNpZGVzID0gbnVtYmVycy5tYXAoKG51bSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHNpZGVXaWR0aCwgc2lkZUhlaWdodCwgdHJhbnNaKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjZWxsICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGtleT17bnVtfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVgoJHtcbiAgICAgICAgICAgIChudW0gLSAxKSAqICgzNjAgLyBudW1iZXJPZlNpZGVzKVxuICAgICAgICAgIH1kZWcpIHRyYW5zbGF0ZVooJHt0cmFuc1p9cHgpIGAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZ2V0RGltZW50aW9ucygpO1xuICAgIHNldFRyYW5zWihnZXREaXN0YW5jZSgpKTtcbiAgICAvLyB9LCAyMDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNldElzQWN0aXZlKFwicm90YXRpbmdcIik7XG4gICAgfVxuICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNldElzQWN0aXZlKFwic3RhdGljXCIpO1xuICAgIH1cbiAgfSwgW2VudHJ5LmlzSW50ZXJzZWN0aW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY2VuZSB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtpc0FjdGl2ZX1gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IHNpZGVIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogc2lkZVdpZHRoLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7c2lkZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNlbGwgYWJzb2x1dGUgaW52aXNpYmxlIHRvcC0wICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHJlZj17cmVmU2lkZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooJHt0cmFuc1p9cHgpIGAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnNjZW5lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jZWxsIHtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJvdXNlbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcm91c2VsLnJvdGF0aW5nIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHtyb3RhdGlvbklufXM7XG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtJHt0cmFuc1p9cHgpIHJvdGF0ZVgoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLSR7dHJhbnNafXB4KSByb3RhdGVYKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJvdGF0aW5nVGV4dC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbnVtYmVyT2ZTaWRlczogUHJvcFR5cGVzLm51bWJlcixcbiAgcm90YXRpb25JbjogUHJvcFR5cGVzLm51bWJlcixcbiAgZW50cnk6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm90YXRpbmdUZXh0O1xuIl19 */\n/*@ sourceURL=RotatingText.js */")));
}

RotatingText.propTypes = {
  className: propTypes.string,
  numberOfSides: propTypes.number,
  rotationIn: propTypes.number,
  entry: propTypes.bool
};

function Rotating(_ref) {
  var _ref$numberOfSides = _ref.numberOfSides,
      numberOfSides = _ref$numberOfSides === void 0 ? 12 : _ref$numberOfSides,
      _ref$rotationIn = _ref.rotationIn,
      rotationIn = _ref$rotationIn === void 0 ? 20 : _ref$rotationIn,
      _ref$perspective = _ref.perspective,
      perspective = _ref$perspective === void 0 ? "140px" : _ref$perspective,
      className = _ref.className,
      children = _ref.children,
      _ref$entry = _ref.entry,
      entry = _ref$entry === void 0 ? false : _ref$entry;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      transZ = _useState2[0],
      setTransZ = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      sideHeight = _useState4[0],
      setSideHeight = _useState4[1];

  var _useState5 = React.useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      sideWidth = _useState6[0],
      setSideWidth = _useState6[1];

  var numbers = getArray(numberOfSides);
  var refSide = React.useRef(null);

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      isActive = _useState8[0],
      setIsActive = _useState8[1];

  useEventListener(window, "resize", onSampleResize);

  function getDistance() {
    return sideHeight / 2 / Math.tan(Math.PI / numberOfSides);
  }

  function getDimentions() {
    setSideHeight(sideHeight = refSide.current.offsetHeight);
    setSideWidth(sideWidth = refSide.current.offsetWidth);
  }

  function getArray(num) {
    var numbers = [];

    for (var i = 0; i < num; i++) {
      numbers[i] = i + 1;
    }

    return numbers;
  }

  function onSampleResize() {
    if (sideHeight !== refSide.current.offsetHeight || sideWidth !== refSide.current.offsetWidth) {
      getDimentions();
      setTransZ(getDistance());
    }
  }

  var sides = numbers.map(function (num) {
    // console.log(sideWidth, sideHeight, transZ, num);
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "cell ".concat(className),
      key: num,
      style: {
        transform: "rotate3d(0, -1, 0, -90deg) rotateX(".concat((num - 1) * (360 / numberOfSides), "deg)  translateZ(-").concat(transZ, "px)")
      }
    }, children);
  });
  React.useEffect(function () {
    // setTimeout(() => {
    getDimentions();
    setTransZ(getDistance()); // }, 200);
  }, []);
  React.useEffect(function () {
    if (entry.isIntersecting) {
      setIsActive("rotating");
    }

    if (!entry.isIntersecting) {
      setIsActive("static");
    }
  }, [entry.isIntersecting]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: _JSXStyle__default['default'].dynamic([["2989184816", [perspective, rotationIn, transZ, transZ]]])
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: _JSXStyle__default['default'].dynamic([["2989184816", [perspective, rotationIn, transZ, transZ]]]) + " " + "scene w-screen h-screen flex items-center justify-center"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      transform: "scale(1.7)",
      height: sideHeight,
      width: sideWidth
    },
    className: _JSXStyle__default['default'].dynamic([["2989184816", [perspective, rotationIn, transZ, transZ]]]) + " " + "carousel ".concat(isActive)
  }, sides)), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: refSide,
    style: {
      transform: "rotateX(0deg) translateZ(".concat(transZ, "px)")
    },
    className: _JSXStyle__default['default'].dynamic([["2989184816", [perspective, rotationIn, transZ, transZ]]]) + " " + "cell absolute invisible top-0 ".concat(className)
  }, children), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "2989184816",
    dynamic: [perspective, rotationIn, transZ, transZ]
  }, ".scene{position:relative;-webkit-perspective:".concat(perspective, ";-moz-perspective:").concat(perspective, ";-ms-perspective:").concat(perspective, ";perspective:").concat(perspective, ";text-rendering:geometricPrecision;}.carousel{-webkit-perspective:900px;-moz-perspective:900px;-ms-perspective:900px;perspective:900px;width:100%;height:100%;position:absolute;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;text-rendering:geometricPrecision;}.carousel.rotating{-webkit-animation-duration:").concat(rotationIn, "s;animation-duration:").concat(rotationIn, "s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-timing-function:linear;animation-timing-function:linear;}@-webkit-keyframes rotate{from{-webkit-transform:translateZ(-").concat(transZ, "px) rotate(360deg);-ms-transform:translateZ(-").concat(transZ, "px) rotate(360deg);transform:translateZ(-").concat(transZ, "px) rotate(360deg);}to{-webkit-transform:translateZ(-").concat(transZ, "px) rotate(0deg);-ms-transform:translateZ(-").concat(transZ, "px) rotate(0deg);transform:translateZ(-").concat(transZ, "px) rotate(0deg);}}@keyframes rotate{from{-webkit-transform:translateZ(-").concat(transZ, "px) rotate(360deg);-ms-transform:translateZ(-").concat(transZ, "px) rotate(360deg);transform:translateZ(-").concat(transZ, "px) rotate(360deg);}to{-webkit-transform:translateZ(-").concat(transZ, "px) rotate(0deg);-ms-transform:translateZ(-").concat(transZ, "px) rotate(0deg);transform:translateZ(-").concat(transZ, "px) rotate(0deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdGF0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHUyxBQUcrQixBQWVBLEFBVStCLEFBUXNCLEFBSUYsa0JBcEM1Qix1RUFnQjlCLFdBQ0MsTUFRdUIsTUFQakIsa0JBQ1Usc0RBT04sZUF6QlksY0FvQ2xDLE1BSkEsT0Fia0MsT0FsQnBDLEdBeUJtQyx3QkFObkMsa0RBT0EiLCJmaWxlIjoiUm90YXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi4vdXRpbHMvdXNlRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5mdW5jdGlvbiBSb3RhdGluZyh7XG4gIG51bWJlck9mU2lkZXMgPSAxMixcbiAgcm90YXRpb25JbiA9IDIwLFxuICBwZXJzcGVjdGl2ZSA9IFwiMTQwcHhcIixcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgZW50cnkgPSBmYWxzZSxcbn0pIHtcbiAgbGV0IFt0cmFuc1osIHNldFRyYW5zWl0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtzaWRlSGVpZ2h0LCBzZXRTaWRlSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW3NpZGVXaWR0aCwgc2V0U2lkZVdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBudW1iZXJzID0gZ2V0QXJyYXkobnVtYmVyT2ZTaWRlcyk7XG4gIGNvbnN0IHJlZlNpZGUgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcInJlc2l6ZVwiLCBvblNhbXBsZVJlc2l6ZSk7XG5cbiAgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHNpZGVIZWlnaHQgLyAyIC8gTWF0aC50YW4oTWF0aC5QSSAvIG51bWJlck9mU2lkZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW50aW9ucygpIHtcbiAgICBzZXRTaWRlSGVpZ2h0KChzaWRlSGVpZ2h0ID0gcmVmU2lkZS5jdXJyZW50Lm9mZnNldEhlaWdodCkpO1xuICAgIHNldFNpZGVXaWR0aCgoc2lkZVdpZHRoID0gcmVmU2lkZS5jdXJyZW50Lm9mZnNldFdpZHRoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheShudW0pIHtcbiAgICBsZXQgbnVtYmVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIG51bWJlcnNbaV0gPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBmdW5jdGlvbiBvblNhbXBsZVJlc2l6ZSgpIHtcbiAgICBpZiAoXG4gICAgICBzaWRlSGVpZ2h0ICE9PSByZWZTaWRlLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IHx8XG4gICAgICBzaWRlV2lkdGggIT09IHJlZlNpZGUuY3VycmVudC5vZmZzZXRXaWR0aFxuICAgICkge1xuICAgICAgZ2V0RGltZW50aW9ucygpO1xuICAgICAgc2V0VHJhbnNaKGdldERpc3RhbmNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNpZGVzID0gbnVtYmVycy5tYXAoKG51bSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHNpZGVXaWR0aCwgc2lkZUhlaWdodCwgdHJhbnNaLCBudW0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjbGFzc05hbWV9YH1cbiAgICAgICAga2V5PXtudW19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlM2QoMCwgLTEsIDAsIC05MGRlZykgcm90YXRlWCgke1xuICAgICAgICAgICAgKG51bSAtIDEpICogKDM2MCAvIG51bWJlck9mU2lkZXMpXG4gICAgICAgICAgfWRlZykgIHRyYW5zbGF0ZVooLSR7dHJhbnNafXB4KWAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZ2V0RGltZW50aW9ucygpO1xuICAgIHNldFRyYW5zWihnZXREaXN0YW5jZSgpKTtcbiAgICAvLyB9LCAyMDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNldElzQWN0aXZlKFwicm90YXRpbmdcIik7XG4gICAgfVxuICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNldElzQWN0aXZlKFwic3RhdGljXCIpO1xuICAgIH1cbiAgfSwgW2VudHJ5LmlzSW50ZXJzZWN0aW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY2VuZSB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtpc0FjdGl2ZX1gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS43KVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaWRlSGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IHNpZGVXaWR0aCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3NpZGVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjZWxsIGFic29sdXRlIGludmlzaWJsZSB0b3AtMCAke2NsYXNzTmFtZX1gfVxuICAgICAgICByZWY9e3JlZlNpZGV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGVaKCR7dHJhbnNafXB4KWAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnNjZW5lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAke3BlcnNwZWN0aXZlfTtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBnZW9tZXRyaWNQcmVjaXNpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNlbGwge1xuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLyogLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA5MDBweDtcblxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGdlb21ldHJpY1ByZWNpc2lvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2Fyb3VzZWwucm90YXRpbmcge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAke3JvdGF0aW9uSW59cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ke3RyYW5zWn1weCkgcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ke3RyYW5zWn1weCkgcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJvdGF0aW5nLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwZXJzcGVjdGl2ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbnVtYmVyT2ZTaWRlczogUHJvcFR5cGVzLm51bWJlcixcbiAgcm90YXRpb25JbjogUHJvcFR5cGVzLm51bWJlcixcbiAgZW50cnk6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm90YXRpbmc7XG4iXX0= */\n/*@ sourceURL=Rotating.js */")));
}

Rotating.propTypes = {
  className: propTypes.string,
  perspective: propTypes.string,
  numberOfSides: propTypes.number,
  rotationIn: propTypes.number,
  entry: propTypes.bool
};

function FadingText(_ref) {
  var children = _ref.children,
      className = _ref.className,
      duration = _ref.duration,
      distance = _ref.distance,
      containerClassName = _ref.containerClassName,
      entry = _ref.entry;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  React.useEffect(function () {
    if (entry.isIntersecting) {
      setIsActive("moving");
    }

    if (!entry.isIntersecting) {
      setIsActive("static");
    }
  }, [entry.isIntersecting]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: _JSXStyle__default['default'].dynamic([["903164864", [duration, duration / 2, distance]]]) + " " + "relative ".concat(containerClassName)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: _JSXStyle__default['default'].dynamic([["903164864", [duration, duration / 2, distance]]]) + " " + "".concat(className, " text-outline move ").concat(isActive)
  }, children), /*#__PURE__*/React__default['default'].createElement("div", {
    className: _JSXStyle__default['default'].dynamic([["903164864", [duration, duration / 2, distance]]]) + " " + "".concat(className, " text-outline move delay ").concat(isActive)
  }, children), /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      transform: "rotateY(50deg) rotateZ(10deg) rotateX(-75deg)"
    },
    className: _JSXStyle__default['default'].dynamic([["903164864", [duration, duration / 2, distance]]]) + " " + "".concat(className)
  }, children), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "903164864",
    dynamic: [duration, duration / 2, distance]
  }, ".text-outline.__jsx-style-dynamic-selector{-webkit-text-stroke:2px black;-webkit-text-fill-color:transparent;}.move.moving.__jsx-style-dynamic-selector{-webkit-animation-duration:".concat(duration, "s;animation-duration:").concat(duration, "s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:move-__jsx-style-dynamic-selector;animation-name:move-__jsx-style-dynamic-selector;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.delay.__jsx-style-dynamic-selector{-webkit-transform:rotateY(50deg) rotateZ(10deg) rotateX(-75deg);-ms-transform:rotateY(50deg) rotateZ(10deg) rotateX(-75deg);transform:rotateY(50deg) rotateZ(10deg) rotateX(-75deg);-webkit-animation-delay:").concat(duration / 2, "s;animation-delay:").concat(duration / 2, "s;}@-webkit-keyframes move-__jsx-style-dynamic-selector{from{opacity:1;-webkit-transform:translateY(0px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);-ms-transform:translateY(0px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);transform:translateY(0px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);}to{opacity:0;-webkit-transform:translateY(").concat(distance, "px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);-ms-transform:translateY(").concat(distance, "px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);transform:translateY(").concat(distance, "px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);}}@keyframes move-__jsx-style-dynamic-selector{from{opacity:1;-webkit-transform:translateY(0px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);-ms-transform:translateY(0px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);transform:translateY(0px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);}to{opacity:0;-webkit-transform:translateY(").concat(distance, "px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);-ms-transform:translateY(").concat(distance, "px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);transform:translateY(").concat(distance, "px) rotateY(50deg) rotateZ(10deg) rotateX(-75deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZhZGluZ1RleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NXLEFBRzZDLEFBS21CLEFBT08sQUFNNUMsQUFNQSxVQUpPLEFBTWUsb0JBekJFLG9DQUN0Qyx3Q0FJcUMsMEVBT1csSUFOMUIsc0RBY3BCLDBDQVBGLFVBTm1DLDZCQW1CakMsNkNBbEJGIiwiZmlsZSI6IkZhZGluZ1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBGYWRpbmdUZXh0KHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZHVyYXRpb24sXG4gIGRpc3RhbmNlLFxuICBjb250YWluZXJDbGFzc05hbWUsXG4gIGVudHJ5LFxufSkge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgc2V0SXNBY3RpdmUoXCJtb3ZpbmdcIik7XG4gICAgfVxuICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNldElzQWN0aXZlKFwic3RhdGljXCIpO1xuICAgIH1cbiAgfSwgW2VudHJ5LmlzSW50ZXJzZWN0aW5nXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtjb250YWluZXJDbGFzc05hbWV9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHRleHQtb3V0bGluZSBtb3ZlICR7aXNBY3RpdmV9YH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdGV4dC1vdXRsaW5lIG1vdmUgZGVsYXkgJHtpc0FjdGl2ZX1gfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVkoNTBkZWcpIHJvdGF0ZVooMTBkZWcpIHJvdGF0ZVgoLTc1ZGVnKVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC50ZXh0LW91dGxpbmUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2s7XG4gICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vdmUubW92aW5nIHtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAke2R1cmF0aW9ufXM7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogbW92ZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVsYXkge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNTBkZWcpIHJvdGF0ZVooMTBkZWcpIHJvdGF0ZVgoLTc1ZGVnKTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAke2R1cmF0aW9uIC8gMn1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZVkoNTBkZWcpIHJvdGF0ZVooMTBkZWcpXG4gICAgICAgICAgICAgICAgICByb3RhdGVYKC03NWRlZyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHtkaXN0YW5jZX1weCkgcm90YXRlWSg1MGRlZylcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZVooMTBkZWcpIHJvdGF0ZVgoLTc1ZGVnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFkaW5nVGV4dDtcbiJdfQ== */\n/*@ sourceURL=FadingText.js */"))));
}

function SmartOutline() {
  React.useEffect(function () {
    function handleFirstTab(e) {
      if (e.keyCode === 9) {
        // the "I am a keyboard user" key
        document.body.classList.add("user-is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
      }
    }

    window.addEventListener("keydown", handleFirstTab);
    return function () {
      window.removeEventListener("keydown", handleFirstTab);
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
    id: "3711511028"
  }, "body:not(.user-is-tabbing) button:focus,body:not(.user-is-tabbing) input:focus,body:not(.user-is-tabbing) select:focus,body:not(.user-is-tabbing) textarea:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNtYXJ0T3V0bGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnlCLEFBTXdCLGFBQ2YiLCJmaWxlIjoiU21hcnRPdXRsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTbWFydE91dGxpbmUoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlRmlyc3RUYWIoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgICAvLyB0aGUgXCJJIGFtIGEga2V5Ym9hcmQgdXNlclwiIGtleVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ1c2VyLWlzLXRhYmJpbmdcIik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVGaXJzdFRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUZpcnN0VGFiKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUZpcnN0VGFiKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHk6bm90KC51c2VyLWlzLXRhYmJpbmcpIGJ1dHRvbjpmb2N1cyxcbiAgICAgICAgYm9keTpub3QoLnVzZXItaXMtdGFiYmluZykgaW5wdXQ6Zm9jdXMsXG4gICAgICAgIGJvZHk6bm90KC51c2VyLWlzLXRhYmJpbmcpIHNlbGVjdDpmb2N1cyxcbiAgICAgICAgYm9keTpub3QoLnVzZXItaXMtdGFiYmluZykgdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU21hcnRPdXRsaW5lO1xuIl19 */\n/*@ sourceURL=SmartOutline.js */"));
}

var useIntersect = function useIntersect(_ref) {
  var _ref$root = _ref.root,
      root = _ref$root === void 0 ? null : _ref$root,
      rootMargin = _ref.rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      entry = _useState2[0],
      updateEntry = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      node = _useState4[0],
      setNode = _useState4[1];

  var observer = React.useRef(null);
  React.useEffect(function () {
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          entry = _ref3[0];

      return updateEntry(entry);
    }, {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold
    });
    var currentObserver = observer.current;
    if (node) currentObserver.observe(node);
    return function () {
      return currentObserver.disconnect();
    };
  }, [node, root, rootMargin, threshold]);
  return [setNode, entry];
};

exports.Button = Button;
exports.CloseButton = CloseButton$1;
exports.ContactForm = ContactForm;
exports.CookieBanner = CookieBanner;
exports.CookieButtons = CookieButtons;
exports.FadingText = FadingText;
exports.Footer = Footer;
exports.Header = Header;
exports.Input = Input$1;
exports.Label = Label;
exports.MobileMenu = MobileMenu$1;
exports.MobileMenuMini = MobileMenu;
exports.MobileMenuToggle = MobileMenuToggle;
exports.MoovingLetters = MoovingLetters;
exports.Rotating = Rotating;
exports.RotatingText = RotatingText;
exports.SmartOutline = SmartOutline;
exports.Spinner = Spinner$1;
exports.Textarea = Textarea$1;
exports.ThemeToggle = ThemeToggle;
exports.activateCookies = activateCookies;
exports.deactivateCookies = deactivateCookies;
exports.getCookie = getCookie;
exports.googleAnalytics = googleAnalytics;
exports.handleAllowCookies = handleAllowCookies;
exports.handleRejectCookies = handleRejectCookies;
exports.setCookie = setCookie;
exports.useEventListener = useEventListener;
exports.useIntersect = useIntersect;
//# sourceMappingURL=index.js.map
