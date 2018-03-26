var ourClass = [
    {
        name: 'Chandler',
        role: 'Instructor',
    },
    {
        name: 'Matt',
        role: 'Student',
    },
    {
        name: 'Rachel',
        role: 'Student',
    },
    {
        name: 'Ari',
        role: 'Student',
    },
    {
        name: 'Rish',
        role: 'Student',
    },
    {
        name: 'Jessie',
        role: 'Student',
    },
    {
        name: 'Yogi',
        role: 'Student',
    },
    {
        name: 'Lewis',
        role: 'Student',
    },
    {
        name: 'Sino',
        role: 'Student',
    },
    {
        name: 'Desmond',
        role: 'Student',
    },
]

//forEach is an array helper method

// ourClass.forEach(function(person) {
//     // console.log(person)
//     $('#class-list')
//         .append('<h4>' + person.name + '</h4>')
//         .append('<h6>' + person.role + '</h6>')
//         //<hr/> is the horizontal rule
//         .append('<hr/>')
// })

    // 2
    //find the template's source
    var source = $('#person-template').html()
    //turn source into Handlbar's (capital H means it's from the Handlebar library) template
    var template = Handlebars.compile(source)

    //tempate is now a function
    // template()

    // 3
    //generate HTML using the compiled Handlebar tempalte
    var classTemplate = template(ourClass)

    // 4
    $('#person').append(classTemplate)


