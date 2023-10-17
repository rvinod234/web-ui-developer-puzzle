#CodeSmells in App
Memory leak at book search, as it didnt unsubscribe after subscribing - Make book search async pipe - [FIXED]
Add Type notation to paramters - [FIXED]
Naming Conventiosn for Packages (+state name is improper)

#Suggestions for Improvements
Use ngSubmit for search books button submit for better accessability with keyboard - (Submit with ENTER). [FIXED]
Add debouncetime operator along with switchmap in BooksEffects Service, helps to send request after a delay, which avoids unnecessary calls in search.
Move all the hard coded labels to constants file and access from that file, makes easy for i18n (translation) to support multi lingual.


#LightHouse Scan Issues
Buttons do not have an accessible name - [FIXED]
Image elements do not have alt attributes - [FIXED]


#Manually Tested Accessability Issues
Add accesibility for "Want to Read" button. - [FIXED]
Reading list Button on top right corner is not visible. - [FIXED]
Background and foreground colors do not have a sufficient contrast ratio -  [FIXED]
Add accesibility for Open and close button in My Reading List Drawer - [FIXED]
