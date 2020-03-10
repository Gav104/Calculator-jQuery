
	function insert(num) {
		$('.calculator-display').val($('.calculator-display').val() + num)
	}

	function equals() {
		$('.calculator-display').val(eval($('.calculator-display').val()))
	}

	function c() {
		$('.calculator-display').val('')
	}
