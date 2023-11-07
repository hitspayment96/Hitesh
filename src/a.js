$(document).ready(function() {
  let total = 0.00;

  $("#add-product").on("click", function() {
      const product = $("#product-select option:selected").text();
      const quantity = parseInt($("#quantity").val());

      if (quantity > 0) {
          const price = parseFloat($("#product-select option:selected").val());
          const productTotal = price * quantity;

          $("#product-list").append(`
              <tr>
                  <td>${product}</td>
                  <td>₹${price.toFixed(2)}</td>
                  <td>${quantity}</td>
              </tr>
          `);

          total += productTotal;
          $("#total").text(total.toFixed(2));

          $("#product-select").val($("#product-select option:first").val());
          $("#quantity").val(0);
      }
  });

  $("#billing-form").on("submit", function(e) {
      e.preventDefault();
      // Implement payment processing logic here
  });
});
