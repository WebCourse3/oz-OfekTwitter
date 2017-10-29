
(function () {
	window.onload = function init(){
		test_group('first test group', function () {
			assert(true, "simple successful test");
			assert(false, "simple unsuccessful test 2");
			assert(true, "simple unsuccessful test 3");
		});

		test_group('second test group', function () {
			assert(true, "simple successful test");
			assert(true, "simple unsuccessful test 2");
			assert(true, "simple unsuccessful test 3");
		});
	};

	function assert(value, name) {
		var li = document.createElement("li");

		if(value)
		{
			li.classList.add("success");
		}
		else
		{
			li.classList.add("failed");
			this.Ul.parentNode.className = "col-lg-4 col-lg-offset-4 failed";
		}



		var text = document.createTextNode(name);
		li.appendChild(text);
		this.Ul.appendChild(li);
	}

	function newTestDiv() {
		var testDiv = document.getElementById("testContainer");
		var row = document.createElement('div');
		row.className = "row testRow";
		var col = document.createElement('div');
		col.className = "col-lg-4 col-lg-offset-4 success";
		row.appendChild(col);
		testDiv.appendChild(row);
		return col;
	}

	function test_group (name,asserts) {
		var col = newTestDiv();
		this.Ul = document.createElement('ul');
		col.appendChild(this.Ul);

		asserts();
	}
})();