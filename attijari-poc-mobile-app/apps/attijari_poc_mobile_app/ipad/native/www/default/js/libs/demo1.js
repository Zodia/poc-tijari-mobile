
/* JavaScript content from js/libs/demo1.js in folder common */
/*
	maxSpan, minSpan could be passed in via options of a range.
 */

var options = { 
		'startDate': '1/1/1940',
		'endDate': '1/20/2013',
		'maxSpan': 6,
		'minSpan' : -70
	},
	startDate = options.startDate || startDate,
	endDate = options.endDate || endDate,
	maxSpan = options.maxSpan || 6,
	minSpan = options.minSpan || -6,
	$from = $('#filter-date-from'),
	$to = $('#filter-date-to'),
	$applyRange = $('#range-apply-btn'),
	closeDatePicker = function () {
		var dateFromValue = $from.val(),
			dateToValue = $to.val(),
			dateTo = new Date(dateToValue),
			dateFrom = new Date(dateFromValue),
			capDate = new Date(dateFromValue).setFullYear(dateFrom.getFullYear() + maxSpan);

		if(dateTo < dateFrom || dateTo > capDate ){
			$to.val('').focus();
		}

		restrictDate();
		$applyRange.button($to.val().length > 0 ? 'enable' : 'disable');
	},
	restrictDate = function () {
		//configurable could be passed in via options
		var fromDate = new Date(this.$from.val()),
			cloned = new Date(this.$from.val()).setFullYear(fromDate.getFullYear() + maxSpan),
			today = new Date(),
			upToMaxMore = cloned < today ? cloned : today,
			fromMin = new Date().setFullYear(today.getFullYear() + minSpan);

		$from.data().options = {
			MIN: fromMin,
			MAX: today
		};
		$to.data().options = {
			MIN: fromDate,
			MAX: upToMaxMore
		};
	},
	activatePopup = function () {
		$('#filter-date-from, #filter-date-to').mobile508datepicker({
			onClose: closeDatePicker,
			"leading-zero": true
		});

		$from.focus();
		restrictDate();
	};

activatePopup();
