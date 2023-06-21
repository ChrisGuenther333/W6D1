const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

$(storeItems).each(function() {
    if(!this.inStock) {
        return;
    }
    $('#storeItems').append('<div class="container"> <p>$' + this.price + '</p> <p>' + this.name + '</p> <p>' + this.details + '</p></div>');
    //Need to make item disappear if not in stock
});

$('p').each(function() {
    if($(this).hasClass('notInStock')) {
        $(this).css('display', 'none');
    }
})



$('#button').addClass('darkMode');

$('#button').click(function() {
    $('#button').toggleClass('darkMode');

    if($('#button').hasClass('darkMode')) {
        $('body, h1, hr, .container, p, input').css('color', 'white');
        $('#page').css('background-color', 'rgba(0, 0, 0, 0.76)');
        $('.container').css('background-color', 'rgba(0, 0, 0, 0.397)');
        $('.container, #button').css('border-color', 'white');
        $('hr').css('background-color', 'white');
    }
    else {
        $('body, h1, hr, .container, p, input').css('color', 'black');
        $('#page').css('background-color', 'rgb(240, 240, 240)');
        $('.container').css('background-color', 'white');
        $('.container, #button').css('border-color', 'black');
        $('hr').css('background-color', 'black');
    }
});

