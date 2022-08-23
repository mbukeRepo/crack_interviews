<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<h2>Contributing to alx_crack_interviews</h2>

<p>You can contribute to this open source project through:</p>
<ul>
    <li>Adding more interview questions and their solutions</li>
    <li>Editing some content on this project</li>
    <li>Opening issues on somethings that can be changed</li>
</ul>

<h3>Adding more interview questions and their solutions</h3>
<p>
    To add more interview questions and their solution you have to follow the following
    steps so that you contribution can be accepted.
</p>

<ul >
    <li>
        1. Place your code(file containing solution) in the dedicated folder(associated datastructure).
    </li>
    <li>
      <p>
        2. Add description of the interview question at the end of README.md of that repository. You must following template:
      </p>
       ```
           <div>
               <h3 id="similar_to_title">Your title</h3>
               <!-- Then add more description -->
               <div> The implementation is <a href="./<link to solution file>" target="_blank" >here</a></div>
           </div>
      ```
      <p>
        <b>Warning: </b> <b>similar_to_title</b> id will be used in <i>root</i> README during linking and they must be similar.
      </p>
    </li>
    <li>
        <p>
            3. Add link to your interview question in the <b>root</b> <i>README.md</i>. You can do this by
            adding a new <b>li</b> under certain <i>datastructure</i> with link to the dedicated description. You
            can follow this example.
            <br>
            ```
            <li>
                <a href="./linked_lists">Linked Lists</a>
                <ul>
                    <li><a href="./linked_lists#reversing_linked_list">Reversing a singly linked list</a></li>
                    <li><a href="./linked_lists#<similar_to_title>">Your Title</a></li>
                </ul>
            </li>
            ```
            <br>
            <b>Warning: </b> In the link you must use the <b>ID</b>(similar_to_title) that you used in the Description
             of your interview question.
        </p>

    </li>

</ul>
</body>
</html>
