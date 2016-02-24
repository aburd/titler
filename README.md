require the file then instantiate the variable to use it.

name( title, exceptions )<br>
where<br>
'name' is the var name used with require<br>
'title' (str) - Name of the title<br>
'exceptions' (str) - List of exceptions separated by spaces<br>

ex:<br>
  myFunc('a night to remember', 'a to') // returns 'A Night to Remember' *first letter always caps
