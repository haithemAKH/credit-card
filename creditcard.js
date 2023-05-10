
		// select the quantity input fields and the delete buttons
		const quantityInputs = document.querySelectorAll('.quantity input');
		const deleteButtons = document.querySelectorAll('.delete button');
		
		// add event listeners to the quantity input fields
		quantityInputs.forEach(input => {
			input.addEventListener('input', () => {
				const quantity = parseInt(input.value);
				if (isNaN(quantity) || quantity < 1) {
					input.value = 0;
				}
				updateTotal();
			});
		});
		
		// add event listeners to the decrease buttons
		const decreaseButtons = document.querySelectorAll('.decrease');
		decreaseButtons.forEach(button => {
			button.addEventListener('click', () => {
				const input = button.nextElementSibling;
				let quantity = parseInt(input.value);
				if (isNaN(quantity) || quantity < 2) {
					quantity = 0;
				} else {
					quantity--;
				}
				input.value = quantity;
				updateTotal();
			});
		});
		
		// add event listeners to the increase buttons
		const increaseButtons = document.querySelectorAll('.increase');
		increaseButtons.forEach(button => {
			button.addEventListener('click', () => {
				const input = button.previousElementSibling;
				let quantity = parseInt(input.value);
				if (isNaN(quantity)) {
					quantity = 0;
				} else {
					quantity++;
				}
				input.value = quantity;
				updateTotal();
			});
		});
		
		// add event listeners to the delete buttons
		deleteButtons.forEach(button => {
			button.addEventListener('click', () => {
				const row = button.parentNode.parentNode;
				row.remove();
				updateTotal();
			});
		});
		
		// add event listeners to the like buttons
		const likeButtons = document.querySelectorAll('.like button');
		likeButtons.forEach(button => {
			button.addEventListener('click', () => {
				button.classList.toggle('liked');
			});
		});
		
		// function to update the total price
		function updateTotal() {
			let total = 0;
			const rows = document.querySelectorAll('tbody tr');
			rows.forEach(row => {
				const price = parseFloat(row.children[1].textContent.replace('$', ''));
				const quantity = parseInt(row.children[2].children[1].value);
				total += price * quantity;
			});
			document.querySelector('.total').textContent = `Total: $${total.toFixed(2)}`;
		}
		
		// update the total price initially
		updateTotal();
	