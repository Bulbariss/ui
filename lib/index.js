'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var css = _interopDefault(require('styled-jsx/css'));
var gatsby = require('gatsby');
var PropTypes = _interopDefault(require('prop-types'));

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

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var Spinner = function Spinner(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      loadingText = _ref.loadingText,
      props = _objectWithoutProperties(_ref, ["color", "size", "loadingText"]);

  var SIZES = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6"
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({
    className: "spin-container inline-block ".concat(!loadingText ? "relative" : "absolute", " border-2 rounded-full mr-2 ").concat(color, " ").concat(SIZES[size]),
    ref: ref
  }, props), /*#__PURE__*/React__default.createElement("div", {
    className: "spin whitespace-no-wrap absolute border-0 p-0 overflow-hidden"
  })), /*#__PURE__*/React__default.createElement("style", {
    jsx: true
  }, "\n        .spin-container {\n          animation: 0.45s linear 0s infinite normal none running spinning;\n          border-bottom-color: transparent !important;\n          border-left-color: transparent !important;\n        }\n\n        .spin-container .spin {\n          clip: rect(0px, 0px, 0px, 0px);\n          height: 1px;\n          width: 1px;\n          border-style: initial;\n          border-color: initial;\n          border-image: initial;\n          margin: -1px;\n        }\n\n        @keyframes spinning {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n      "));
};

var Spinner$1 = /*#__PURE__*/React.forwardRef(Spinner);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .classic {\n    border-radius: 5px;\n  }\n  .halfmoon {\n    height: 3.2rem;\n  }\n  .loading > .text {\n    visibility: hidden;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var buttonStyles = css(_templateObject());
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "classic" : _ref$type,
      color = _ref.color,
      _ref$hoverColor = _ref.hoverColor,
      hoverColor = _ref$hoverColor === void 0 ? color : _ref$hoverColor,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? "text-white" : _ref$textColor,
      hoverTextColor = _ref.hoverTextColor,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "solid" : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      _ref$spinnerSize = _ref.spinnerSize,
      spinnerSize = _ref$spinnerSize === void 0 ? size : _ref$spinnerSize,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isBold = _ref.isBold,
      isBold = _ref$isBold === void 0 ? true : _ref$isBold,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? isLoading : _ref$isDisabled,
      _ref$loadingText = _ref.loadingText,
      loadingText = _ref$loadingText === void 0 ? true : _ref$loadingText,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ["children", "className", "type", "color", "hoverColor", "textColor", "hoverTextColor", "variant", "size", "spinnerSize", "isLoading", "isBold", "isDisabled", "loadingText", "href"]);

  var STYLES = {
    pill: "w-24 h-8 rounded-lg",
    classic: "classic whitespace-no-wrap",
    halfmoon: "halfmoon whitespace-no-wrap px-6 rounded-md",
    link: "".concat(textColor, " hover:underline")
  };
  var VARIANTS = {
    solid: "".concat(color, " ").concat(textColor, " ").concat(hoverColor),
    outline: "border-2 ".concat(color, " ").concat(textColor, " ").concat(hoverColor, " ").concat(hoverTextColor || hoverColor),
    ghost: "".concat(textColor, " bg-transparent ").concat(hoverColor)
  };
  var SIZES = {
    classic: {
      sm: "px-4 h-8",
      md: "px-6 h-10",
      lg: "px-8 h-12"
    },
    halfmoon: {
      sm: "px-4 h-10",
      md: "",
      lg: "px-8 h-16"
    }
  };
  var allButtonsStyle = "transition-colors duration-200 inline-flex items-center justify-center flex-wrap focus:outline-none focus:shadow-outline ".concat(loadingText && isLoading && "loading");
  var classList = "".concat(VARIANTS[variant], " ").concat(STYLES[type], " ").concat(type === "classic" && SIZES[type][size], " ").concat(className, " ").concat(allButtonsStyle, " ").concat(isBold && "font-bold", " ").concat(isDisabled && "cursor-not-allowed opacity-50");

  if (href) {
    var isExternal = href && href.startsWith("http");
    var a = /*#__PURE__*/React__default.createElement("a", _extends({
      className: classList,
      href: href
    }, props, {
      target: "_blank",
      rel: "noreferrer"
    }), children, /*#__PURE__*/React__default.createElement("style", {
      jsx: true
    }, buttonStyles));
    var b = /*#__PURE__*/React__default.createElement(gatsby.Link, _extends({
      className: classList,
      to: href
    }, props, {
      style: {
        borderRadius: "5px"
      }
    }), children);
    return isExternal ? a : b;
  }

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("button", _extends({
    ref: ref,
    className: "".concat(classList)
  }, props), isLoading && /*#__PURE__*/React__default.createElement(Spinner$1, {
    size: spinnerSize,
    loadingText: loadingText,
    color: textColor
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "text"
  }, children)), /*#__PURE__*/React__default.createElement("style", {
    jsx: true
  }, buttonStyles));
});
Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  variant: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  isBold: PropTypes.bool,
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  loadingText: PropTypes.bool,
  href: PropTypes.string
};
Button.displayName = "Button";

exports.Button = Button;
//# sourceMappingURL=index.js.map
