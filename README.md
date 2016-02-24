require the file then instantiate the variable to use it.

name( title, exceptions )
where
'name' is the var name used with require
'title' (str) - Name of the title
'exceptions' (str) - List of exceptions separated by spaces

ex:
  myFunc('a night to remember', 'a to') // returns 'A Night to Remember' *first letter always caps
