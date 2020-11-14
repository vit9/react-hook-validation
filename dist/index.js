"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useValidation;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useValidation(params) {
  // const [isRender, setIsRender] = useState(isReactivityValdiation);
  var _useState = (0, _react.useState)(params),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    var _getFields2 = _getFields(params, true),
        errorFields = _getFields2.errorFields,
        error = _getFields2.error;

    return {
      error: error,
      validation: errorFields
    };
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      validationResponse = _useState4[0],
      setValidationResponse = _useState4[1];

  function onChangeHandler(event) {
    event.preventDefault();
    setValue(function (prev) {
      var _event$target, _event$target2, _event$target3;

      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.name, _objectSpread(_objectSpread({}, prev[event === null || event === void 0 ? void 0 : (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.name]), {}, {
        value: event === null || event === void 0 ? void 0 : (_event$target3 = event.target) === null || _event$target3 === void 0 ? void 0 : _event$target3.value
      })));
    });
  }

  function startValidation(customFunc) {
    var _getFields3 = _getFields(value),
        errorFields = _getFields3.errorFields,
        error = _getFields3.error;

    setValidationResponse(function (pr) {
      return _objectSpread(_objectSpread({}, pr), {}, {
        error: error,
        validation: errorFields
      });
    });
    if (!error) return customFunc(errorFields);
  }

  function maxLengthValidation(field) {
    var _field, _field$value;

    if (((_field = field) === null || _field === void 0 ? void 0 : _field.maxLength) < ((_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.length)) {
      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: "".concat(field.errors.max_e, " ").concat(field.maxLength)
      });
      return field;
    }

    field = _objectSpread(_objectSpread({}, field), {}, {
      errors: ''
    });
    return field;
  }

  function minLengthValidation(field) {
    var _field2, _field$value2;

    if (((_field2 = field) === null || _field2 === void 0 ? void 0 : _field2.minLength) > ((_field$value2 = field.value) === null || _field$value2 === void 0 ? void 0 : _field$value2.length)) {
      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: "".concat(field.errors.min_e, " ").concat(field.minLength)
      });
      return field;
    }

    field = _objectSpread(_objectSpread({}, field), {}, {
      errors: ''
    });
    return field;
  }

  function _checkFields(field, isFirstRender) {
    var _field3, _field4, _field5, _field6;

    if (((_field3 = field) === null || _field3 === void 0 ? void 0 : _field3.type) === 'number') {
      var isNotNumber = isNaN(Number(field.value));

      if (isNotNumber) {
        field = _objectSpread(_objectSpread({}, field), {}, {
          errors: field.errors.isNumber_e
        });
        return field;
      }

      if (maxLengthValidation(field).errors) {
        return maxLengthValidation(field);
      }

      if (minLengthValidation(field).errors) {
        return minLengthValidation(field);
      }
    }

    if (!((_field4 = field) === null || _field4 === void 0 ? void 0 : _field4.value) && !isFirstRender && field.required) {
      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: field.errors.value_e
      });
      return field;
    }

    if (((_field5 = field) === null || _field5 === void 0 ? void 0 : _field5.regexp) && ((_field6 = field) === null || _field6 === void 0 ? void 0 : _field6.value) !== null) {
      var _field7, _field7$errors;

      field = _objectSpread(_objectSpread({}, field), {}, {
        errors: field.regexp.test(field.value) ? '' : (_field7 = field) === null || _field7 === void 0 ? void 0 : (_field7$errors = _field7.errors) === null || _field7$errors === void 0 ? void 0 : _field7$errors.regexp_e
      });
      return field;
    }

    if (maxLengthValidation(field).errors) {
      return maxLengthValidation(field);
    }

    if (minLengthValidation(field).errors) {
      return minLengthValidation(field);
    }

    field = _objectSpread(_objectSpread({}, field), {}, {
      errors: ''
    });
    return field;
  }

  function _getFields(params, isFirstRender) {
    var error = false;
    var fields = Object.values(params);
    var errorFields = fields.map(function (field) {
      if (_checkFields(field, isFirstRender).errors) {
        error = true;
        return _checkFields(field, isFirstRender);
      }

      return _checkFields(field, isFirstRender);
    });
    return {
      errorFields: errorFields,
      error: error
    };
  }

  return [].concat(_toConsumableArray(validationResponse.validation), [value, onChangeHandler, startValidation, validationResponse.error]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VWYWxpZGF0aW9uIiwicGFyYW1zIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl9nZXRGaWVsZHMiLCJlcnJvckZpZWxkcyIsImVycm9yIiwidmFsaWRhdGlvbiIsInZhbGlkYXRpb25SZXNwb25zZSIsInNldFZhbGlkYXRpb25SZXNwb25zZSIsIm9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcmV2IiwidGFyZ2V0IiwibmFtZSIsInN0YXJ0VmFsaWRhdGlvbiIsImN1c3RvbUZ1bmMiLCJwciIsIm1heExlbmd0aFZhbGlkYXRpb24iLCJmaWVsZCIsIm1heExlbmd0aCIsImxlbmd0aCIsImVycm9ycyIsIm1heF9lIiwibWluTGVuZ3RoVmFsaWRhdGlvbiIsIm1pbkxlbmd0aCIsIm1pbl9lIiwiX2NoZWNrRmllbGRzIiwiaXNGaXJzdFJlbmRlciIsInR5cGUiLCJpc05vdE51bWJlciIsImlzTmFOIiwiTnVtYmVyIiwiaXNOdW1iZXJfZSIsInJlcXVpcmVkIiwidmFsdWVfZSIsInJlZ2V4cCIsInRlc3QiLCJyZWdleHBfZSIsImZpZWxkcyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2UsU0FBU0EsYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFFMUM7QUFGMEMsa0JBR2hCLHFCQUFTQSxNQUFULENBSGdCO0FBQUE7QUFBQSxNQUduQ0MsS0FIbUM7QUFBQSxNQUc1QkMsUUFINEI7O0FBQUEsbUJBSVUscUJBQVMsWUFBTTtBQUFBLHNCQUNoQ0MsVUFBVSxDQUFDSCxNQUFELEVBQVMsSUFBVCxDQURzQjtBQUFBLFFBQ3ZESSxXQUR1RCxlQUN2REEsV0FEdUQ7QUFBQSxRQUMxQ0MsS0FEMEMsZUFDMUNBLEtBRDBDOztBQUUvRCxXQUFPO0FBQUNBLE1BQUFBLEtBQUssRUFBTEEsS0FBRDtB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Q0g7O0FBQ0RBLElBQUFBLEtBQUssbUNBQU9BLEtBQVA7QUFBY0csTUFBQUEsTUFBTSxFQUFFO0FBQXRCLE1BQUw7QUFDQSxXQUFPSCxLQUFQO0FBQ0g7O0FBRUQsV0FBU2hCLFVBQVQsQ0FBcUJILE1BQXJCLEVBQTZCNEIsYUFBN0IsRUFBNEM7QUFDcEMsUUFBSXZCLEtBQUssR0FBRyxLQUFaO0FBQ0EsUUFBTWtDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWN6QyxNQUFkLENBQWY7QUFDQSxRQUFNSSxXQUFXLEdBQUdtQyxNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDdkIsS0FBRCxFQUFXO0FBQ3RDLFVBQUdRLFlBQVksQ0FBQ1IsS0FBRCxFQUFRUyxhQUFSLENBQVosQ0FBbUNOLE1BQXRDLEVBQThDO0FBQzFDakIsUUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQSxlQUFPc0IsWUFBWSxDQUFDUixLQUFELEVBQVFTLGFBQVIsQ0FBbkI7QUFDSDs7QUFDRCxhQUFPRCxZQUFZLENBQUNSLEtBQUQsRUFBUVMsYUFBUixDQUFuQjtBQUNILEtBTm1CLENBQXBCO0FBT0EsV0FBTztBQUFDeEIsTUFBQUEsV0FBVyxFQUFYQSxXQUFEO0FBQWNDLE1BQUFBLEtBQUssRUFBTEE7QUFBZCxLQUFQO0FBQ1A7O0FBRUQsc0NBQ1FFLGtCQUFrQixDQUFDRCxVQUQzQixJQUN1Q0wsS0FEdkMsRUFDOENRLGVBRDlDLEVBQytETSxlQUQvRCxFQUNnRlIsa0JBQWtCLENBQUNGLEtBRG5HO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VWYWxpZGF0aW9uKHBhcmFtcykge1xuXG4gICAgLy8gY29uc3QgW2lzUmVuZGVyLCBzZXRJc1JlbmRlcl0gPSB1c2VTdGF0ZShpc1JlYWN0aXZpdHlWYWxkaWF0aW9uKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHBhcmFtcyk7XG4gICAgY29uc3QgW3ZhbGlkYXRpb25SZXNwb25zZSwgc2V0VmFsaWRhdGlvblJlc3BvbnNlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBlcnJvckZpZWxkcywgZXJyb3IgfSA9IF9nZXRGaWVsZHMocGFyYW1zLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtlcnJvciwgdmFsaWRhdGlvbjogZXJyb3JGaWVsZHN9XG4gICAgfSlcbiAgICBcbiAgICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0VmFsdWUoKHByZXYpID0+ICh7Li4ucHJldiwgW2V2ZW50Py50YXJnZXQ/Lm5hbWVdOiB7Li4ucHJldltldmVudD8udGFyZ2V0Py5uYW1lXSwgdmFsdWU6IGV2ZW50Py50YXJnZXQ/LnZhbHVlIH0gfSkpXG4gICAgICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0VmFsaWRhdGlvbihjdXN0b21GdW5jKSB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3JGaWVsZHMsIGVycm9yIH0gPSBfZ2V0RmllbGRzKHZhbHVlKTtcbiAgICAgICAgc2V0VmFsaWRhdGlvblJlc3BvbnNlKChwcikgPT4gKHsuLi5wciwgZXJyb3IsIHZhbGlkYXRpb246IGVycm9yRmllbGRzfSkpO1xuICAgICAgICBpZighZXJyb3IpIHJldHVybiBjdXN0b21GdW5jKGVycm9yRmllbGRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKSB7XG4gICAgICAgIGlmKGZpZWxkPy5tYXhMZW5ndGggPCBmaWVsZC52YWx1ZT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBgJHtmaWVsZC5lcnJvcnMubWF4X2V9ICR7ZmllbGQubWF4TGVuZ3RofWB9O1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6ICcnfVxuICAgICAgICByZXR1cm4gZmllbGQ7IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1pbkxlbmd0aFZhbGlkYXRpb24oZmllbGQpIHtcbiAgICAgICAgaWYgKGZpZWxkPy5taW5MZW5ndGggPiBmaWVsZC52YWx1ZT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBgJHtmaWVsZC5lcnJvcnMubWluX2V9ICR7ZmllbGQubWluTGVuZ3RofWB9O1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkID0gey4uLmZpZWxkLCBlcnJvcnM6ICcnfVxuICAgICAgICByZXR1cm4gZmllbGQ7IFxuICAgIH1cbiBcbiAgICBmdW5jdGlvbiBfY2hlY2tGaWVsZHMoZmllbGQsIGlzRmlyc3RSZW5kZXIpIHtcblxuICAgICAgICBpZihmaWVsZD8udHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzTm90TnVtYmVyID0gaXNOYU4oTnVtYmVyKGZpZWxkLnZhbHVlKSlcblxuICAgICAgICAgICAgaWYoaXNOb3ROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBmaWVsZC5lcnJvcnMuaXNOdW1iZXJfZX07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF4TGVuZ3RoVmFsaWRhdGlvbihmaWVsZCk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihtaW5MZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWluTGVuZ3RoVmFsaWRhdGlvbihmaWVsZCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZpZWxkPy52YWx1ZSAmJiAhaXNGaXJzdFJlbmRlciAmJiBmaWVsZC5yZXF1aXJlZCkge1xuICAgICAgICAgICAgZmllbGQgPSB7Li4uZmllbGQsIGVycm9yczogZmllbGQuZXJyb3JzLnZhbHVlX2V9O1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICB9XG4gICAgICAgIGlmKGZpZWxkPy5yZWdleHAgJiYgZmllbGQ/LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiBmaWVsZC5yZWdleHAudGVzdChmaWVsZC52YWx1ZSkgPyAnJyA6IGZpZWxkPy5lcnJvcnM/LnJlZ2V4cF9lfTtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgICBpZihtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXhMZW5ndGhWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZihtaW5MZW5ndGhWYWxpZGF0aW9uKGZpZWxkKS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBtaW5MZW5ndGhWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZCA9IHsuLi5maWVsZCwgZXJyb3JzOiAnJ31cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBfZ2V0RmllbGRzIChwYXJhbXMsIGlzRmlyc3RSZW5kZXIpIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LnZhbHVlcyhwYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgZXJyb3JGaWVsZHMgPSBmaWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKF9jaGVja0ZpZWxkcyhmaWVsZCwgaXNGaXJzdFJlbmRlcikuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0ZpZWxkcyhmaWVsZCwgaXNGaXJzdFJlbmRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tGaWVsZHMoZmllbGQsIGlzRmlyc3RSZW5kZXIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3JGaWVsZHMsIGVycm9yfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIFsuLi52YWxpZGF0aW9uUmVzcG9uc2UudmFsaWRhdGlvbiwgdmFsdWUsIG9uQ2hhbmdlSGFuZGxlciwgc3RhcnRWYWxpZGF0aW9uLCB2YWxpZGF0aW9uUmVzcG9uc2UuZXJyb3JdXG4gICAgKVxuICAgIFxufSJdfQ==