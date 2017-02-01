"use strict";
var option_1 = require('./option');
var diacritics_1 = require('./diacritics');
var OptionList = (function () {
    function OptionList(options) {
        // Array<{ value: string; label: string;>) {
        this._highlightedOption = null;
        // Inject diacritics service.
        // let inj = ReflectiveInjector.resolveAndCreate([DiacriticsService]);
        // this.diacriticsService = inj.get(DiacriticsService);
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        // Initialize array of option objects.
        this._options = options.map(function (option) {
            var o = new option_1.Option(option.value, option.label);
            if (option.disabled) {
                o.disable();
            }
            return o;
        });
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "options", {
        /**************************************************************************
         * Options.
         *************************************************************************/
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.getOptionsByValue = function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /**************************************************************************
         * Value.
         *************************************************************************/
        get: function () {
            return this.selection.map(function (selectedOption) {
                return selectedOption.value;
            });
        },
        set: function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /**************************************************************************
         * Selection.
         *************************************************************************/
        get: function () {
            return this.options.filter(function (option) {
                return option.selected;
            });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.select = function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    OptionList.prototype.deselect = function (option) {
        option.selected = false;
    };
    OptionList.prototype.clearSelection = function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /**************************************************************************
         * Filter.
         *************************************************************************/
        get: function () {
            return this.options.filter(function (option) {
                return option.shown;
            });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.filter = function (term) {
        if (term.trim() === '') {
            this.resetFilter();
        }
        else {
            this.options.forEach(function (option) {
                // let strip: any = this.diacriticsService.stripDiacritics;
                // let l: string = strip.call(null, option.label).toUpperCase();
                // let t: string = strip.call(null, term).toUpperCase();
                var l = diacritics_1.Diacritics.strip(option.label).toUpperCase();
                var t = diacritics_1.Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
            });
        }
        this.highlight();
    };
    OptionList.prototype.resetFilter = function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /**************************************************************************
         * Highlight.
         *************************************************************************/
        get: function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.highlight = function () {
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        if (option !== null) {
            this.highlightOption(option);
        }
    };
    OptionList.prototype.highlightOption = function (option) {
        this.clearHighlightedOption();
        option.highlighted = true;
        this._highlightedOption = option;
    };
    OptionList.prototype.highlightNextOption = function () {
        var shownOptions = this.filtered;
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > -1 && index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    OptionList.prototype.highlightPreviousOption = function () {
        var shownOptions = this.filtered;
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    OptionList.prototype.clearHighlightedOption = function () {
        if (this.highlightedOption !== null) {
            this._highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    OptionList.prototype.getHighlightedIndexFromList = function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    OptionList.prototype.getHighlightedIndex = function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    /**************************************************************************
     * Util.
     *************************************************************************/
    OptionList.prototype.hasShown = function () {
        return this.options.some(function (option) {
            return option.shown;
        });
    };
    OptionList.prototype.hasSelected = function () {
        return this.options.some(function (option) {
            return option.selected;
        });
    };
    OptionList.prototype.hasShownSelected = function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    OptionList.prototype.getFirstShown = function () {
        for (var _i = 0, _a = this._options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown) {
                return option;
            }
        }
        return null;
    };
    OptionList.prototype.getFirstShownSelected = function () {
        for (var _i = 0, _a = this._options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown && option.selected) {
                return option;
            }
        }
        return null;
    };
    return OptionList;
}());
exports.OptionList = OptionList;
