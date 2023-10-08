// $(document).ready(function() {
//     let counter = 0;

//     $(".add_btn").click(function(e) {
//         e.preventDefault();

//         counter++; // Increment the counter to ensure unique IDs

//         const newSetOfFields = `
//             <div class="show_item">
//                 <div class="row">
//                     <div class="col-md-3 mb-3">
//                         <input type="text" name="product_name[]" class="form-control" placeholder="Input Name">
//                     </div>
//                     <div class="col-md-3 mb-3">
//                         <input type="text" name="Desgination[]" class="form-control" placeholder="Input Name">
//                     </div>
//                     <div class="col-md-3 mb-3">
//                         <input type="number" name="WorkingExperience[]" class="form-control" placeholder="Input Name">
//                     </div>
//                     <div class="col-md-2 mb-2 mb-3 d-grid">
//                         <button class="btn btn-danger remove_btn" data-counter="${counter}">Remove</button>
//                     </div>
//                 </div>
//             </div>
//         `;

//         $("#show_item").prepend(newSetOfFields);
//     });

//     // Add a click event handler for removing the dynamically added rows
//     $("#show_item").on("click", ".remove_btn", function() {
//         const counterToRemove = $(this).data("counter");
//         $(`[data-counter="${counterToRemove}"]`).closest(".show_item").remove();
//     });

//     // Add a click event handler to send data to the Django view
//     $("#submit_button").click(function(e) {
//         e.preventDefault();

//         // Collect data from the dynamically added rows
//         const productNames = $("input[name='product_name[]']")
//         const Desgination = $("input[name='Desgination[]']")
//         const WorkingExperience = $("input[name='WorkingExperience[]']")

//             .map(function() {
//                 return $(this).val();
//             })
//             .get();

//         // Send data to the Django view using AJAX
//         $.ajax({
//             type: "POST",
//             url: "http://127.0.0.1:8000/emplyee-create/",
//             data: ,
//             success: function(response) {
//                 // Handle the response from the Django view (if needed)
//             },
//             error: function(error) {
//                 // Handle any errors (if needed)
//             }
//         });
//     });
// });
















$(document).ready(function() {
    let counter = 0;

    $(".add_btn").click(function(e) {
        e.preventDefault();

        counter++;

        const newSetOfFields = `
            <div class="show_item">
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <input type="text" name="product_name[]" class="form-control" placeholder="Company Name">
                    </div>
                    <div class="col-md-3 mb-3">
                        <input type="text" name="Desgination[]" class="form-control" placeholder="Designation">
                    </div>
                    <div class="col-md-3 mb-3">
                        <input type="number" name="WorkingExperience[]" class="form-control" placeholder="Working Experience">
                    </div>
                    <div class="col-md-2 mb-2 mb-3 d-grid">
                        <button class="btn btn-danger remove_btn" data-counter="${counter}">Remove</button>
                    </div>
                </div>
            </div>
        `;

        $("#show_item").prepend(newSetOfFields);
    });

    $("#show_item").on("click", ".remove_btn", function() {
        const counterToRemove = $(this).data("counter");
        $(`[data-counter="${counterToRemove}"]`).closest(".show_item").remove();
    });

    $("#submit_button").click(function(e) {
        e.preventDefault();

        // Collect applicant data
        const applicantData = {
            "ApplicantName": $("#name").val(),
            "Gender": $("select[name='Gender']").val(),
            "age": $("#age").val(),
            "Qlification": $("#Qlification").val(),
            "TotalExpericesyear": $("#TotalExpericesyear").val()
        };

        // Collect experience data
        const experienceData = [];

        $("input[name='product_name[]']").each(function(index) {
            const companyname = $(this).val();
            const designation = $("input[name='Desgination[]']").eq(index).val();
            const workYear = $("input[name='WorkingExperience[]']").eq(index).val();

            experienceData.push({
                "Companyname": companyname,
                "Desgination": designation,
                "WorkYear": workYear
            });
        });

        const formData = {
            "applicant": applicantData,
            "experiences": experienceData
        };

        // Send data to the Django view using AJAX
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/emplyee-create/",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
                // Handle the response from the Django view (if needed)
                console.log("Success:", response);
            },
            error: function(error) {
                // Handle any errors (if needed)
                console.error("Error:", error);
            }
        });
    });
});

