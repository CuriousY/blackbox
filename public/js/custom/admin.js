
export default function registerImageFunction() {
    var imageID = "";
    var imageSrc = "";
    var imageSelectedSrc = "";
    var imageSelectedID = "";

    $('.thumbnail').on('click', function (e) {
        $('.thumbnail').removeClass('highlight imageSelected');
        $(this).addClass('highlight imageSelected');
        $('.btn-selectImage').removeClass('disabled');
        imageSelectedID = $(this).children('img').data('image-id');
        imageSrc = $(this).children('img').attr('src');
    });

    $('.btnCloseImageModal').on('click', function (e) {
        e.preventDefault();
        $('#imagePickerModal').modal('toggle');
        $('.thumbnail').removeClass('highlight imageSelected');
        $('.btn-selectImage').addClass('disabled');
    });

    $('.btn-selectImage').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
            $('#imagePickerModal').modal('toggle');
            $('.thumbnail').removeClass('highlight imageSelected');
            imageID = imageSelectedID;
            console.log('image id ', imageID);

            $('#selectedImageContainer').attr('src', imageSrc);
        }
    });
}