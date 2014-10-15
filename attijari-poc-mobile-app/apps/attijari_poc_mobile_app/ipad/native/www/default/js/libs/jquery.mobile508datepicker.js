
/* JavaScript content from js/libs/jquery.mobile508datepicker.js in folder common */
/*
	Author: @jsdev | Anthony Delorie June 2013
	Github: https://github.com/jsdev/mobile508datepicker
	MIT License: as is, feel free to fork =)
	Tested on: IOS, Android, Surface, Modern Browsers, IE10+, IE9
 */

(function ($) {
	"use strict";
	$.fn.extend({
		mobile508datepicker: function (options) {
			var currentDate = new Date(),
				_defaults = {
					MIN: new Date(new Date().setFullYear(currentDate.getFullYear() - 10)),  // years ago
					MAX: new Date(new Date().setFullYear(currentDate.getFullYear() + 10))   // years ahead
				},
				defaults = null,
				/*jshint multistr: true */
				$el = $('<section class="datetime-picker" id="date-picker" data-role="popup" data-dismissible="false" data-overlay-theme="a"> \
					<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right cancel">Close</a> \
					<h1 class="ui-title" role="heading" aria-level="1" class="date">Today</h1> \
					<div class="columns"><b class="month"><ul></ul></b><b class="day"><ul></ul></b><b class="year"><ul></ul></b></div> \
					<button id="set-btn" data-theme="b" class="ui-btn-hidden" data-disabled="false">SET</button> \
					</section>'),
				buildEl = function () {
					$('body').append($el);
					$el.trigger('create');
					$el.popup();
					return $el;
				},
				$textbox = null,
				parseDate = function (dateObj) {
					var d = typeof dateObj === "number" ? new Date(dateObj) : dateObj;
					return {
						year: d.getFullYear(),
						month: d.getMonth(),
						day: d.getDate()
					};
				},
				toggleButtons = function (y, m, $d, $m, className) {
					var $disabled = $el.find('.' + className + ':disabled');

					$disabled.prop('disabled', false);

					if (y === dateChosen.year) {
						if (m === dateChosen.month) {
							$d.prop('disabled', true).addClass(className);
						} else {
							$disabled.prop('disabled', false);
						}

						$m.prop('disabled', true).addClass(className);
					}
				},
				TODAY = parseDate(currentDate),
				dateChosen = null,
				DATE_MAX = null,
				DATE_MIN = null,
				MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
				WEEKDAYS = ["Su ", "Mo ", "Tu ", "We ", "Th ", "Fr ", "Sa "],
			//WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

				buildDOM = function () {
					var i, len, frag = [];

					for (i = 1; i < 10; i++) {
						frag.push('<li><button data-value="' + i + '">0' + i + '</button></li>');
					}
					for (i = 10; i <= 31; i++) {
						frag.push('<li><button data-value="' + i + '">' + i + '</button></li>');
					}
					$day.html(frag.join(''));
					$days = $day.children();

					for (i = DATE_MIN.year, frag = [], len = DATE_MAX.year; i <= len; i++) {
						frag.push('<li><button data-value="' + i + '">' + i + '</button></li>');
					}
					$year.html(frag.join(''));

					for (i = 0, frag = [], len = MONTHS.length; i < len; i++) {
						frag.push('<li><button data-value="' + i + '">' + MONTHS[i] + '</button></li>');
					}
					$month.html(frag.join(''));
				},
				checkMax = function () {
					var d = DATE_MAX.day,
						m = DATE_MAX.month,
						y = DATE_MAX.year,
						$m = $month
							.find('button')
							.slice(m + 1, 12),
						$d = $day
							.find('button')
							.slice(d, 31);

					toggleButtons(y, m, $d, $m, 'too-soon');
				},
				checkMin = function () {
					var d = DATE_MIN.day,
						m = DATE_MIN.month,
						y = DATE_MIN.year,
						$m = $month
							.find('button')
							.slice(0, m),
						$d = $day
							.find('button')
							.slice(0, d - 1);

					toggleButtons(y, m, $d, $m, 'too-late');
				},
				baseLine = function() {
					$('.too-soon').prop('disabled', false).removeClass('too-soon');
					$('.too-late').prop('disabled', false).removeClass('too-late');
				},
				daysInMonth = function () {
					return new Date(dateChosen.year, 1 + dateChosen.month, 0).getDate();
				},
				upDate = function (typ) {
					setDate();

					typ && typ !== "day" && checkDays();

					$('.selected').removeAttr('class');
					$year.find('[data-value="' + dateChosen.year + '"]')
						.add($day.find('[data-value="' + dateChosen.day + '"]'))
						.add($month.find('[data-value="' + dateChosen.month + '"]'))
						.addClass('selected')
						.scrollTopMe();
					updateHeading();

					typ && typ !== "day" && baseLine(), checkMin(), checkMax();
				},
				updateHeading = function () {
					var calcDate = setDate();
					//$setBtn.prev('span').find('span').text('Set as: ' + [dateChosen.month+1, dateChosen.day, dateChosen.year].join('/'));
					heading.innerHTML = calcDate.toDateString() === currentDate.toDateString() ?
						"Today" : WEEKDAYS[calcDate.getDay()];
				},
				checkDays = function () {
					var _daysInMonth = daysInMonth(),
						len = $days.length, i, calcDate;

					$days.show();
					for (i = 0; i < len; i++) {
						calcDate = new Date([dateChosen['month'], i+1, dateChosen['year']].join('/'));
					}
					for (i = _daysInMonth; i < len; i++) {
						$days.eq(i).hide();
					}

					if (dateChosen['day'] > _daysInMonth) { dateChosen['day'] = _daysInMonth; }
				},
				clicked = function ($this) {
					var $li = $this.focus().parent(),
						$ul = $li.parent(),
						$focused = $(':focus'),
						typ;

					if (!$this.length || $this.prop('disabled') ) {
						$focused.focus();
						return false;
					}
					typ = $ul.parent()[0].className;
					dateChosen[typ] = $this.data('value');
					upDate(typ);
					return true;
				},
				setDate = function () {
					var d = new Date(dateChosen.year, dateChosen.month, dateChosen.day),
						MAX = defaults.MAX, MIN = defaults.MIN;

					if (MAX && d > MAX) {
						$.extend(dateChosen, DATE_MAX);
						return new Date(dateChosen.year, dateChosen.month, dateChosen.day);
					}

					if (MIN && d < MIN) {
						$.extend(dateChosen, DATE_MIN);
						return new Date(dateChosen.year, dateChosen.month, dateChosen.day);
					}

					return d;
				},
				scrolled = function ($ul) {
					var $lis = $ul.children(),
						lineHeight = $lis.eq(0).height(),
						top = $ul.position().top,
						n = Math.round(-top/lineHeight),
						$buttons = $ul.find('button'),
						$button = $lis.eq(n).find('button'),
						$prevSelected = $ul.find('.selected'),
						prevSelectedIndex = $buttons.index($prevSelected),
						typ = $ul.parent()[0].className;

					if (!$button.prop('disabled')) {
						if (prevSelectedIndex === n) {
							return;
						}
						$ul.scrollTop((-n * lineHeight) + lineHeight);
						dateChosen[typ] = $button.data()['value'];
						upDate(typ);
						return;
					}

					$button = $ul.find('button:enabled').eq(prevSelectedIndex > n ? 0 : -1);
					n = $buttons.index($button);
					$ul.scrollTop((-n * lineHeight) + lineHeight);
					dateChosen[typ] = $button.data()['value'];
					upDate(typ);
					return;
				},
				alignValidDate = function () {
					var $uls = $el.find('ul'),
						$ul, $lis, lineHeight,
						$button, $buttons, top, n,
						orderSet = [1,0,2];

					while(orderSet.length) {
						$ul = $uls.eq(orderSet.pop());
						$buttons = $ul.find('button');
						$lis = $ul.children();
						lineHeight = $lis.eq(0).height();
						top = $ul.position().top;
						n = Math.round(-top/lineHeight);
						$button = $lis.eq(n).find('button');
						n = $buttons.index($button);
						$ul.scrollTop(-n * lineHeight);
						dateChosen[$ul.parent()[0].className] = $button.data()['value'];
						upDate();
					}

				},
				destroy = function () {
					dateChosen = null;
					DATE_MAX = null;
					DATE_MIN = null;
				},
				validateMinMax = function () {
					if (defaults.MIN > defaults.MAX) {
						var temp = defaults.MIN;

						defaults.MIN = defaults.MAX;
						defaults.MAX = temp;
					}
				},
				close = function () {
					destroy();
					$el.popup('close');
					if (defaults.onClose) {
						defaults.onClose();
					}
					$textbox.focus();
				},
				init = function () {
					var val = $textbox.val();
					dateChosen = val.length ? parseDate(new Date(val)) : $.extend({},TODAY);
					validateMinMax();

					defaults.MIN = defaults.afterToday   ? new Date() : defaults.MIN;
					defaults.MAX = defaults.beforeToday  ? new Date() : defaults.MAX;

					DATE_MIN = parseDate(defaults.MIN);
					DATE_MAX = parseDate(defaults.MAX);

					buildDOM();
					upDate();

					$el.find('.selected').eq(0).focus();

					$el.popup();
				},
				$year = $el.find('.year ul'),
				$month = $el.find('.month ul'),
				$day = $el.find('.day ul'),
				$cancel =  $el.find('.cancel'),
				$setBtn = $el.find('#set-btn'),
				$days = null,
				heading = $el.find('h1')[0];

			$.extend(_defaults, options);

			$el.find('.month')
				.on('scrollstop', function (e) {
					scrolled($(e.currentTarget).find('ul'));
				});
			$el.find('.day')
				.on('scrollstop', function (e) {
					scrolled($(e.currentTarget).find('ul'));
				});
			$el.find('.year')
				.on('scrollstop', function (e) {
					scrolled($(e.currentTarget).find('ul'));
				});

			$el
				.on('click', '#set-btn', function () {
					var m = dateChosen.month + 1,
						d = dateChosen.day,
						y = dateChosen.year;
					if (defaults["leading-zero"]) {
						m = ("0" + m).substr(-2);
						d = ("0" + d).substr(-2);
					}
					alignValidDate();
					$textbox.val([m, d, y].join('/'));
					close();
				})
				.on('keydown', '#set-btn', function (e) {
					e.preventDefault();
					switch (e.which) {
						case 9:
							if (e.shiftKey) {
								$('.selected').eq(2).focus();
							} else {
								$cancel.focus();
							}
							break;
						case 13:
							e.currentTarget.click();
							break;
					}
				})
				.on('click', 'b button', function (e) {
					clicked($(e.currentTarget));
				})
				.on('keydown', 'b', function (e) {
					var $this = $(e.currentTarget),
						tab = function (dir) {
							var ifPossible = $this[dir]('b').find('.selected').length;

							if (ifPossible) {
								$this[dir]('b').find('.selected').focus();
								return;
							}

							switch (dir) {
								case "prev":
									$cancel.focus();
									break;
								case "next":
									$setBtn.focus();
									break;
							}
						},
						ifPossible = function (dir) {
							var $possible = $this
								.find('.selected')
								.parents('li')
								[dir]('li')
								.find('button');
							if ($possible.length && !$possible.prop('disabled')) {
								clicked($possible);
							}
						};
					e.preventDefault(); //prevents scroll
					switch (e.which) {
						case 9:
							if (e.shiftKey) {
								tab('prev');
							} else {
								tab('next');
							}
							break;
						case 37:
							tab('prev');
							break;
						case 38:
							ifPossible('prev');
							break;
						case 39:
							tab('next');
							break;
						case 40:
							ifPossible('next');
							break;
					}
				})
				.on('keydown', '.cancel', function (e) {
					e.preventDefault();
					switch (e.which) {
						case 9:
							if (e.shiftKey) {
								$setBtn.focus();
							} else {
								$('.month .selected').focus();
							}
							break;
						case 13:
							e.currentTarget.click();
							break;
					}
				})
				.on('click', '.cancel', function (e) {
					e.preventDefault();
					close();
				})
				.on('keydown', function (e) {
					if (e.which === 27) {
						close();
					}
				});

			//Iterate over the current set of matched elements
			return this.each(function () {
				var $this = $(this),
					$dp = $('#date-picker');

				//THIS WILL BUILD IT ONCE, vs. only once foreach in collection
				$dp.length || buildEl();

				$this
					.on('click', function (e) {
						$('.ui-popup-active .ui-popup').popup('close');
						$textbox = $(e.currentTarget);
						defaults = $.extend({}, _defaults);
						$.extend(defaults, $textbox.data('options'));
						init();
						$el.popup('open');
					})
					.on('keydown', function (e) {
						var EnterOrNumberKeys =[13,48,49,50,51,52,53,54,55,56,57];
						if (EnterOrNumberKeys.indexOf(e.which)+1) { e.currentTarget.click(); }
					});
			});
		},

		scrollTopMe: function(){
			return this.each(function () {
				var $li = $(this).parent(),
					$ul = $li.parent(),
					$b = $ul.parent(),
					scrollTop = $ul.children().index($li) * $li.height();

				$b.scrollTop(scrollTop);
			});
		}
	});

})(jQuery);
