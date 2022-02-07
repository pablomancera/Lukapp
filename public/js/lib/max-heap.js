/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/lib/max-heap.js ***!
  \**************************************/
var _size, _data, _value, _parent, _leftChild, _rightChild, _swap, _siftUp, _siftDown;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

window.MaxHeap = (_size = /*#__PURE__*/new WeakMap(), _data = /*#__PURE__*/new WeakMap(), _value = /*#__PURE__*/new WeakMap(), _parent = /*#__PURE__*/new WeakSet(), _leftChild = /*#__PURE__*/new WeakSet(), _rightChild = /*#__PURE__*/new WeakSet(), _swap = /*#__PURE__*/new WeakSet(), _siftUp = /*#__PURE__*/new WeakSet(), _siftDown = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function () {
  function MaxHeap(arr, fun) {
    _classCallCheck(this, MaxHeap);

    _classPrivateMethodInitSpec(this, _siftDown);

    _classPrivateMethodInitSpec(this, _siftUp);

    _classPrivateMethodInitSpec(this, _swap);

    _classPrivateMethodInitSpec(this, _rightChild);

    _classPrivateMethodInitSpec(this, _leftChild);

    _classPrivateMethodInitSpec(this, _parent);

    _classPrivateFieldInitSpec(this, _size, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _value, {
      writable: true,
      value: void 0
    });

    if (!arr || !fun) {
      return;
    }

    _classPrivateFieldSet(this, _value, fun);

    _classPrivateFieldSet(this, _data, arr);

    _classPrivateFieldSet(this, _size, arr.length);

    for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
      _classPrivateMethodGet(this, _siftDown, _siftDown2).call(this, i);
    }
  }

  _createClass(MaxHeap, [{
    key: "insert",
    value: function insert(obj) {
      var _this$size;

      if (_classPrivateFieldGet(this, _size) < _classPrivateFieldGet(this, _data).length) {
        _classPrivateFieldGet(this, _data)[_classPrivateFieldGet(this, _size)] = obj;
      } else {
        _classPrivateFieldGet(this, _data).push(obj);
      }

      _classPrivateMethodGet(this, _siftUp, _siftUp2).call(this, _classPrivateFieldGet(this, _size));

      _classPrivateFieldSet(this, _size, (_this$size = +_classPrivateFieldGet(this, _size)) + 1), _this$size;
    }
  }, {
    key: "extractMax",
    value: function extractMax() {
      var _this$size2;

      if (_classPrivateFieldGet(this, _size) < 1) {
        return null;
      }

      _classPrivateFieldSet(this, _size, (_this$size2 = +_classPrivateFieldGet(this, _size)) - 1), _this$size2;

      var result = _classPrivateFieldGet(this, _data)[0];

      _classPrivateMethodGet(this, _swap, _swap2).call(this, 0, _classPrivateFieldGet(this, _size));

      _classPrivateMethodGet(this, _siftDown, _siftDown2).call(this, 0);

      return result;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (_classPrivateFieldGet(this, _size) < 1) {
        return null;
      }

      return _classPrivateFieldGet(this, _data)[0];
    }
  }]);

  return MaxHeap;
}());

function _parent2(i) {
  if (i > _classPrivateFieldGet(this, _size)) {
    return null;
  }

  if (i == 0) {
    return 0;
  }

  i++;
  return Math.floor(i / 2 - 1);
}

function _leftChild2(i) {
  if (2 * (i + 1) - 1 >= _classPrivateFieldGet(this, _size)) {
    return i;
  }

  i++;
  return 2 * i - 1;
}

function _rightChild2(i) {
  if (2 * (i + 1) >= _classPrivateFieldGet(this, _size)) {
    return i;
  }

  i++;
  return 2 * i;
}

function _swap2(a, b) {
  var tmpObj = _classPrivateFieldGet(this, _data)[a];

  _classPrivateFieldGet(this, _data)[a] = _classPrivateFieldGet(this, _data)[b];
  _classPrivateFieldGet(this, _data)[b] = tmpObj;
}

function _siftUp2(i) {
  if (i > _classPrivateFieldGet(this, _size)) {
    return;
  }

  var p = _classPrivateMethodGet(this, _parent, _parent2).call(this, i);

  var parent = _classPrivateFieldGet(this, _data)[p];

  var max = _classPrivateFieldGet(this, _data)[i];

  while (i > 0 && _classPrivateFieldGet(this, _value).call(this, parent) < _classPrivateFieldGet(this, _value).call(this, max)) {
    _classPrivateMethodGet(this, _swap, _swap2).call(this, p, i);

    i = p;
    p = _classPrivateMethodGet(this, _parent, _parent2).call(this, i);
    parent = _classPrivateFieldGet(this, _data)[p];
  }
}

function _siftDown2(i) {
  var max = i;

  var left = _classPrivateMethodGet(this, _leftChild, _leftChild2).call(this, i);

  if (left < _classPrivateFieldGet(this, _size) && _classPrivateFieldGet(this, _value).call(this, _classPrivateFieldGet(this, _data)[left]) > _classPrivateFieldGet(this, _value).call(this, _classPrivateFieldGet(this, _data)[max])) {
    max = left;
  }

  var right = _classPrivateMethodGet(this, _rightChild, _rightChild2).call(this, i);

  if (right < _classPrivateFieldGet(this, _size) && _classPrivateFieldGet(this, _value).call(this, _classPrivateFieldGet(this, _data)[right]) > _classPrivateFieldGet(this, _value).call(this, _classPrivateFieldGet(this, _data)[max])) {
    max = right;
  }

  if (i != max) {
    _classPrivateMethodGet(this, _swap, _swap2).call(this, i, max);

    _classPrivateMethodGet(this, _siftDown, _siftDown2).call(this, max);
  }
}
/******/ })()
;