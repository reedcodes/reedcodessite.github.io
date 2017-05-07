+++
title = "The Cheap Collegiate (www)"
weight = 5

year = "2015"
org = "University of Maryland, University College"
suborg = "CMST 388 Fundamentals of JavaScript"
capabilities = "HTML, CSS, JavaScript"

availability = "online"
exturl = "https://reedcodes.github.io/cmst388/"

screen = "cheap-collegiate-www"
screenalt = "The Cheap Collegiate homepage"

[menu]
[menu.main]
parent = "project"
+++

This website was the final project for a JavaScript course I took in Fall 2015.

The goal was to create a fictional website demonstrating the practical client-side scripting skills learned in the course. The website would follow the project plan outlined in the previously-submitted website proposal assignment. In addition to illustrating strong layout, design, and usability techniques, students were instructed to include a banner with rotating images, three instances of interactive multimedia, and a minimum of two forms.

I created a fictional bookstore near a college campus, called The Cheap Collegiate. I designed each page of the website to include a large image banner, and coded the script to rotate through an array of photographs on the homepage. The site incorporated multimedia with a YouTube video, a Google map, and a Spotify playlist. The About page included a price comparison form, while the Contact page employed client-side form validation.

The Store Events page listed a variety of different event types, distinguished by a class on the container. I wrote the JavaScript functionality to insert a `<select>` on the page; when a user clicked on an event type in the `<select>`, only those events would display.

{{< code-example "event type selection" HTML JavaScript >}}

    {{< code-block "Screenshot" >}}
        {{< example src="cheap-collegiate-events" alt="Screenshot of store events on The Cheap Collegiate's website" >}}
    {{< /code-block >}}
    
    {{% code-block "HTML" %}}
```html
<form id="eventForm" name="eventForm"></form>
<ul id="events" class="boxes">
  <li class="[sale]"><b>Jan 4-17:</b> <span>Back to School sale</span>
    <p>Stock up on essentials at the beginning of the semester for the best prices!</p></li>
  <li class="notice"><b>Jan 11:</b> <span>Spring semester begins</span>
    <p>Make sure your textbooks match with the required reading lists we have in-store.</p></li>
  [...]
</ul>
```
    {{% /code-block %}}
    
    {{% code-block "JavaScript" %}}
```javascript
if( body.className == 'events' ) {
  var eventTypes = [
    ['instruction', 'Please select an event type to filter the list'],
    ['all', 'Show all events'],
    ['sale', 'Store sale'],
    ['notice', 'Store notice'],
    ['openmic', 'Open mic night'],
    ['signing', 'Book &amp; author signing'],
    ['movie', 'Movie screening'],
    ['bookclub', 'Book club'],
    ['meetup', 'Meetups']
  ];
  document.eventForm.innerHTML = '<select id="eventList" name="eventList"></select>';
  var eventOptions = '';
  for( i = 0; i < eventTypes.length; i++ ) {
    eventOptions += '<option value="' + eventTypes[i][0] + '">' + eventTypes[i][1] + '</option>';
  }
  document.eventForm.eventList.innerHTML = eventOptions;
  document.eventForm.eventList.addEventListener('change', function(event) {
    var selected = document.eventForm.eventList.value,
      events = document.getElementById('events'),
      eventBoxes = events.getElementsByTagName('li');
    for( i = 0; i < eventBoxes.length; i++ ) {
      if( selected == 'all' ) {
        eventBoxes[i].style.display = 'block';
      } else if( selected == eventBoxes[i].className ) {
        eventBoxes[i].style.display = 'block';
      } else {
        eventBoxes[i].style.display = 'none';
      }
    }
  });
}
```
    {{% /code-block %}}

{{< /code-example >}}