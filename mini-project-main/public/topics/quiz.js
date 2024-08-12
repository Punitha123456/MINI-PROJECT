

// javascript code for assessments

document.addEventListener('DOMContentLoaded', function () {
    const quizzes = {
        'array1': [
            { question: "1. What is the time complexity for accessing an element in an array?", 
                answers: ["O(1)", "O(log n)", "O(n)","O(n^2)"], correct: 0 },
            { question: "2. Which operation in an array data structure is generally the slowest?", 
                answers: ["Accessing an element", "Inserting an element at the beginning", "Inserting an element at the end","Deleting an element at the beginning"], correct: 1 },
            
            
                { question: "3. What is the index of the first element in an array?", 
                answers: ["0", "1", "-1","Depends on the programming language"], correct: 0 },
            { question: "4. What is the space complexity of an array of size n?", 
                answers: ["O(1)", "O(log n)", "O(n)","O(n^2)"], correct: 2 },
            { question: "5. Which data structure can be used to implement dynamic arrays?", 
                answers: ["linkedlist", "stack", "queue","Hash table"], correct: 0 },
            { question: "6. What is the term used to describe the maximum number of elements that an array can hold?", 
                answers: ["capacity", "Length", "Size","Dimension"], correct: 0 },
            { question: "7. Which operation in an array data structure has the worst-case time complexity of O(n)?", 
                answers: ["Accessing an element", "Inserting an element at the beginning", "Inserting an element at the end","Deleting an element at the end"], correct: 3 },
            { question: "8. What is the average-case time complexity for searching an element in an unsorted array?", 
                answers: ["O(1)", "O(log n)", "O(n)","O(n^2)"], correct: 2 },
            { question: "9. In which scenario would using an array be preferable over other data structures like linked lists?", 
                answers: ["When random access to elements is required", "When elements need to be frequently inserted or deleted from the middle", "When the size of the collection is unknown","When memory needs to be allocated dynamically"], correct: 0 },
            { question: "10. Which of the following is not a valid operation on arrays?", 
                answers: [" Concatenation", "Traversal", " Sorting","Merging"], correct: 3 },
        ],
        'array2': [
            { question: "1. What is a 2-dimensional array?", 
                answers: ["An array with two elements", " An array that stores elements in multiple rows and columns"], correct: 1 },
            { question: "2. How do you access an element in a 2-dimensional array?", 
                answers: ["By providing a single index", " By providing row and column indices"], correct: 1 },

                
            { question: "3. What is the size of a 2-dimensional array with dimensions m x n?", 
                answers: [" m * n", "m+n"], correct: 0 },
            { question: "4. How is a 2-dimensional array represented in memory?", 
                answers: [" As a sequence of elements in a single row", "As a sequence of elements in multiple rows and columns"], correct: 1 },
            { question: "5. What is the term used to describe the process of visiting each element in a 2-dimensional array exactly once?", 
                answers: ["Traversal", "Insertion"], correct: 0 },
            { question: "6. How do you declare and initialize a 2-dimensional array in most programming languages?", 
                answers: [" int array[][] = {{1, 2}, {3, 4}};", "int array[2][2] = {{1, 2}, {3, 4}};"], correct: 1 },
            { question: "7. What is the time complexity for accessing an element in a 2-dimensional array?", 
                answers: ["O(1)", "O(log n)"], correct: 0 },
            { question: "8. What is the term used to describe an irregular 2-dimensional array where each row can have a different number of columns?", 
                answers: ["Jagged array", "Sparse array"], correct: 0 },
            { question: "9. How do you iterate through all elements of a 2-dimensional array in row-major order?", 
                answers: ["By traversing each row first, then each column", " By traversing each column first, then each row"], correct: 0 },
            { question: "10. What is the space complexity of a 2-dimensional array with dimensions m x n?", 
                answers: ["O(1)", "O(m * n)"], correct: 1 },

        ],
        'll1': [
            { question: "1. What is a singly linked list?", 
                answers: ["A data structure that stores elements in multiple linked lists", "A data structure that stores elements in a single linked list"], correct: 1 },
            { question: "2. In a singly linked list, each node contains:", 
                answers: [" Data and two pointers", "Data and one pointer"], correct: 1 },
            { question: "3. What is the time complexity for accessing an element in a singly linked list?", 
                answers: [" O(1)", "O(n)"], correct: 1 },
            { question: "4. Which operation in a singly linked list has a time complexity of O(1)?", 
                answers: ["Inserting an element at the beginning", " Accessing an element"], correct: 0 },
            { question: "5. How do you traverse a singly linked list from the head to the tail?", 
                answers: ["By following the pointers from head to tail", "By using recursion"], correct: 0 },
            { question: "6. What is the term used to describe the last node of a singly linked list?", 
                answers: ["Head node", "Tail node"], correct: 1 },
            { question: "7. What happens if you try to access an index outside the bounds of a singly linked list?", 
                answers: ["The program throws a runtime error", "The program throws a compilation error"], correct: 0 },
            { question: "8. Which operation in a singly linked list requires traversal of the entire list?", 
                answers: ["Accessing an element", "Inserting an element at the end"], correct: 1 },
            { question: "9. What is the space complexity of a singly linked list with n elements?", 
                answers: ["O(1)", "O(n)"], correct: 1 },
            { question: "10. Which of the following is an advantage of using a singly linked list over an array?", 
                answers: ["Dynamic memory allocation", "Random access to elements"], correct: 0 },
        ],
        'll2': [
            { question: "1. What is a doubly linked list?", 
                answers: [" A data structure that stores elements in multiple linked lists","A data structure that stores elements in a linked list with two pointers in each node"], correct: 1 },
            { question: "2. In a doubly linked list, each node contains:", 
                answers: ["Data and two pointers", "Data and one pointer"], correct: 0 },
            { question: "3. What is the time complexity for accessing an element in a doubly linked list?", 
                answers: ["O(1)", "O(log n)"], correct: 0 },
            { question: "4. Which operation in a doubly linked list has a time complexity of O(1)?", 
                answers: ["Accessing an element", "Inserting an element at the beginning"], correct: 1 },
            { question: "5. What is the term used to describe the last node of a doubly linked list?", 
                answers: ["Head node", "Tail node"], correct: 1 },
            { question: "6. What is a circular linked list?", 
                answers: [" A linked list where the last node points to the first node", "A linked list with nodes arranged in a circular pattern"], correct: 0 },
            { question: "7. In a circular linked list, what does the last node point to?", 
                answers: [" Null", "The first node"], correct: 1 },
            { question: "8. How do you traverse a circular linked list?", 
                answers: ["By using recursion", "By following the next pointers until you reach the same node again"], correct: 1 },
            { question: "9. What is the time complexity for accessing an element in a circular linked list?", 
                answers: ["O(n)", "O(log n)"], correct: 0 },
            { question: "10. Which operation in a circular linked list has a time complexity of O(1)?", 
                answers: ["Accessing an element", " Inserting an element at the beginning"], correct: 1 },

        ],
        'stack1': [
            { question: "1. Here are 10 quiz questions about stacks and their implementation:", 
                answers: ["A linear data structure that follows the Last In, First Out (LIFO) principle",  "A data structure that stores elements in a sorted manner"], correct: 0 },
            { question: "2. Which of the following operations is not typically associated with a stack?", 
                answers: ["Push", "Insert"], correct: 1 },
            { question: "3. In a stack, which operation adds an element to the top of the stack?", 
                answers: ["Push", "Pop"], correct: 0 },
            { question: "4. What is the time complexity of the push and pop operations in a stack implemented using an array?", 
                answers: ["O(1)", "O(n^2)"], correct: 0 },
            { question: "5. Which operation in a stack retrieves the top element without removing it?", 
                answers: ["Push", " Peek"], correct: 1 },
            { question: "6. Which of the following data structures can be used to implement a stack?", 
                answers: ["Array", "Linked list", "Both"], correct: 2 },
            { question: "7. What happens if you try to pop from an empty stack?", 
                answers: ["The program throws a compilation error", "The program throws a runtime error"], correct: 1 },
            { question: "8. Which operation checks if a stack is empty?", 
                answers: [" IsEmpty", " CheckEmpty"], correct: 0 },
            { question: "9. What is the space complexity of a stack with n elements?", 
                answers: ["O(1)", " O(n)"], correct: 1 },
            { question: "10. Which of the following statements about stacks is true?", 
                answers: ["They follow the First In, First Out (FIFO) principle.", "They are used for function calls and recursion."], correct: 1 },

        ],
        'stack2': [
            { question: "1. What is infix notation?", 
                answers: ["A notation where operators are placed between operands", "A notation where operators are placed before operands"], correct: 0 },
            { question: "2. In infix notation, how is the expression '3 + 4 * 5' evaluated?", 
                answers: [" As (3 + 4) * 5", "As 3 + (4 * 5)"], correct: 1 },
            { question: "3. What is prefix notation?", 
                answers: [" A notation where operators are placed between operands", "A notation where operators are placed before operands"], correct: 1 },
            { question: "4. In prefix notation, how is the expression '3 + 4 * 5' represented?", 
                answers: ["+ 3 * 4 5", "* + 3 4 5"], correct: 1 },
            { question: "5. What is postfix notation?", 
                answers: ["A notation where operators are placed after operands", "A notation where operators are placed between operands"], correct: 0 },

            { question: "6. In postfix notation, how is the expression '3 + 4 * 5' represented?", 
                
                answers: [" 3 4 5 * +", " 3 4 * 5 +"], correct: 1 },
                
            { question: "7. What is the advantage of using postfix notation?", 
                answers: ["It is easier to read and write", " It eliminates the need for parentheses", " All of the above"], correct: 2 },
            { question: "8. In postfix notation, how are arithmetic expressions evaluated?", 
                answers: [" From left to right", "The order of evaluation depends on the operators"], correct: 0 },
            { question: "9. Which notation is most commonly used by computers to evaluate arithmetic expressions?", 
                answers: ["Infix notation", " Postfix notation"], correct: 1 },
            { question: "10. What is the result of evaluating the postfix expression '5 3 + 8 *'?", 
                
                answers: ["56", "64"], correct: 0 },
            
        ],
        'q1':[
            { question: "1. What is a queue?", 
                answers: [" A linear data structure that follows the Last In, First Out (LIFO) principle", " A linear data structure that follows the First In, First Out (FIFO) principle"], correct: 1 },
            { question: "2. Which of the following operations is typically associated with a queue?", 
                answers: ["Push", "Enqueue"], correct: 1 },
            { question: "3. In a queue, which operation adds an element to the back of the queue?", 
                answers: ["Enqueue", "Push"], correct: 0 },
            { question: "4. What is the time complexity of the enqueue and dequeue operations in a queue implemented using an array?", 
                answers: ["O(1)", "O(log n)"], correct: 0 },
            { question: "5. Which operation in a queue retrieves and removes the front element?", 
                answers: [" Push", "Dequeue"], correct: 1 },
            { question: "6. Which of the following data structures can be used to implement a queue?", 
                answers: ["Array", "Linkedlist", "Both"], correct: 2 },
            { question: "7. What happens if you try to dequeue from an empty queue?", 
                answers: [" The program throws a compilation error", "The program throws a runtime error"], correct: 1 },
            { question: "8. Which operation in a queue checks if the queue is empty?", 
                answers: [" IsEmpty", "CheckEmpty"], correct: 0 },
            { question: "9. What is the space complexity of a queue with n elements?", 
                answers: [" O(n)", "O(n^2)"], correct: 0 },
            { question: "10. Which of the following statements about queues is true?", 
                answers: ["They follow the Last In, First Out (LIFO) principle.", "They are useful for managing tasks in a computer system with limited resources."], correct: 1 },
        ],
        'q2': [
            { question: "1. What is a circular queue?", 
                answers: ["A queue where elements are arranged in a circular pattern", "A queue where elements can only be added at the end and removed from the front"], correct: 0 },
            { question: "2. Which operation in a circular queue allows adding an element at the end?", 
                answers: ["Enqueue", " Dequeue"], correct: 0 },
            { question: "3. How is overflow handled in a circular queue?", 
                answers: ["By throwing a runtime error", "By wrapping around and adding the element at the beginning of the queue if space is available"], correct: 1 },
            { question: "4. Which operation in a circular queue allows removing an element from the front?", 
                
                answers: ["Enqueue", "Dequeue"], correct: 1 },
            { question: "5. What is the time complexity of the enqueue and dequeue operations in a circular queue?", 
                answers: [" O(1)", "O(log n)"], correct: 0 },
            { question: "6. What is a deque?", 
                answers: ["A linear data structure that follows the Last In, First Out (LIFO) principle", "A data structure that allows insertion and deletion of elements from both ends"], correct: 1 },
            { question: "7. Which of the following operations is typically associated with a deque?", 
                answers: ["InsertFront", "Push"], correct: 0 },
            { question: "8. In a deque, which operation adds an element to the front?", 
                answers: ["Pop", "InsertFront"], correct: 1 },
            { question: "9. What is the time complexity of inserting an element at the front or back of a deque?", 
                answers: ["O(1)", "O(n)"], correct: 0 },
            { question: "10. Which operation in a deque removes and returns the front element?", 
                answers: ["Dequeue", "RemoveFront"], correct: 1},

        ],
        'tree1':[
            { question: "1. What is a general tree in data structures?", 
                answers: ["A linear data structure consisting of nodes connected by edges", "A non-linear data structure where each node can have any number of child nodes"], correct: 0 },
            { question: "2. In a general tree, what is the root node?", 
                answers: ["A node with no children", " A node with no parent"], correct: 1 },
            { question: "3. What is the degree of a node in a tree?", 
                answers: [" The number of child nodes it has", "The number of parent nodes it has"], correct: 0 },
            { question: "4. What is a leaf node in a tree?", 
                answers: ["A node with no children", ") A node with exactly one child"], correct: 0 },
            { question: "5. What is a subtree in the context of trees?", 
                answers: [" A node that has only one child", "A part of a tree that includes a node and all its descendants"], correct: 1 },
            { question: "6. In a tree, what is the level of a node?", 
                answers: ["The number of children the node has", "The number of edges from the root to the node"], correct: 1 },
            { question: "7. What is a forest in the context of data structures?", 
                answers: ["A collection of disjoint trees", "A single tree with multiple roots"], correct: 0 },
            { question: "8. What is the height of a tree?", 
                answers: ["The number of nodes in the tree", "The length of the longest path from the root to a leaf node"], correct: 1 },
            { question: "9. What is a multi-way tree?", 
                answers: ["A tree where each node can have multiple children", "A tree where each node can have exactly three children"], correct: 0 },
            { question: "10. What is the parent node in a tree?", 
                answers: [" A node that has no children", "A node that has one or more child nodes"], correct: 1 },

        ],
        'tree2': [
            { question: "1. What is a binary tree?", 
                answers: ["A tree where each node has at most one child", " A tree where each node has at most two children"], correct: 1 },
            { question: "2. How many children can a node have in a binary tree?", 
                
                answers: ["At most two children", "At most one child"], correct: 0 },
            { question: "3. What is the maximum number of nodes at level 'h' in a binary tree?", 
                answers: [" 2^h", "2^(h-1)"], correct: 0 },
            { question: "4. Which traversal method visits the root node before its children in a binary tree?", 
                answers: ["In-order traversal", "Pre-order traversal"], correct: 1 },
            { question: "5. What is the height of a binary tree with a single node?", 
                answers: ["0", "1"], correct: 0 },
            { question: "6. What is a binary search tree (BST)?", 
                
                answers: ["A tree where each node has at most one child", "A tree where the left child of a node contains a value less than the node's value, and the right child contains a value greater than the node's value"], correct: 1 },
            { question: "7. What is the time complexity of searching for a value in a balanced binary search tree?", 
                answers: [" O(1)", "O(log n)"], correct: 1 },
            { question: "8. Which operation is used to insert a value into a binary search tree?", 
                answers: [" Insert", "Add"], correct: 0 },
            { question: "9. In a binary search tree, what property ensures efficient searching?", 
                answers: [" Complete binary tree property", "Binary search property"], correct: 1 },
            { question: "10. What is the minimum number of nodes in a binary search tree of height 'h'?", 
                answers: ["h", "h + 1"], correct: 1 },

        ],
        'graph': [
            { question: "1. What is a graph?", 
                answers: [" A linear data structure consisting of nodes connected by edges", "A non-linear data structure consisting of nodes connected by edges"], correct: 1 },
            { question: "2. In a graph, what are the nodes called?", 
                answers: [" Vertices", "Edges"], correct: 0 },
            { question: "3. What are the connections between nodes in a graph called?", 
                answers: ["Edges", "Paths"], correct: 0 },
            { question: "4. What is the degree of a vertex in a graph?", 
                answers: ["The number of vertices incident to the edge", "The number of edges incident to the vertex"], correct: 1 },
            { question: "5. What is a directed graph?", 
                
                answers: ["A graph where edges have directions indicating one-way connections between nodes", "A graph where edges have weights representing the cost of traversal between nodes"], correct: 0 },
            { question: "6. What is a cycle in a graph?", 
                answers: ["A path in the graph that visits each node exactly once", "A path that starts and ends at the same node"], correct: 1 },
            { question: "7. What is a connected graph?", 
                answers: ["A graph where every pair of vertices is connected by a path", " A graph where no two edges intersect"], correct: 0 },
            { question: "8. What is the time complexity of traversing a graph using depth-first search (DFS)?", 
                
                answers: ["O(V)", "O(V + E)"], correct: 1 },
            { question: "9. What is the time complexity of finding the shortest path between two vertices in a graph using breadth-first search (BFS)?", 
                answers: [" O(V + E)", "O(E)"], correct: 0 },
            { question: "10. What is a spanning tree of a graph?", 
                answers: ["A subgraph that is a tree and includes all vertices of the original graph", "A tree with the maximum number of vertices"], correct: 0 },
        ]
    };

    const quizId = document.querySelector('.quiz-container').id;
    const quiz = quizzes[quizId];
    if (!quiz) {
        alert('Quiz data not found!');
        return;
    }

    let currentQuestionIndex = 0;
    let answers = new Array(quiz.length);
    let timeLeft = 15 * 60; // 15 minutes in seconds
    const timerElement = document.getElementById('timer');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const resultElement = document.getElementById('result');
    const submitButton = document.getElementById('submitBtn');
    const nextButton = document.getElementById('next');

    window.onbeforeunload = function () {
        return "Are you sure you want to leave? Your progress will be lost.";
    };

    // Prevent minimizing or switching tabs
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            alert("You cannot leave the quiz page. The quiz will be submitted if you attempt to switch tabs or minimize the window.");
            submitQuiz();
        }
    });

    // Prevent navigation and minimize
    function requestFullScreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    }

    requestFullScreen();



    function startTimer() {
        const timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                submitQuiz();
            } else {
                timeLeft--;
                updateTimer();
            }
        }, 1000);
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function loadQuestion(index) {
        const question = quiz[index];
        questionElement.textContent = question.question;
        answersElement.innerHTML = '';
        question.answers.forEach((answer, i) => {
            const answerLabel = document.createElement('label');
            const answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = 'answer';
            answerInput.value = i;
            if (answers[currentQuestionIndex] === i) {
                answerInput.checked = true;
            }
            answerLabel.appendChild(answerInput);
            answerLabel.appendChild(document.createTextNode(answer));
            answersElement.appendChild(answerLabel);
            answersElement.appendChild(document.createElement('br'));
        });
    }

    function selectAnswer() {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            answers[currentQuestionIndex] = parseInt(selected.value);
        }
    }

    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            selectAnswer();
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    }

    function showNextQuestion() {
        if (currentQuestionIndex < quiz.length - 1) {
            selectAnswer();
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    }

    async function submitQuiz() {
        selectAnswer();
        let score = 0;
        for (let i = 0; i < quiz.length; i++) {
            if (answers[i] === quiz[i].correct) {
                score++;
            }
        }
        displayResult(score);
        if (score >= 8) {
            alert('Congratulations! You can move to the next page.');
        } else {
            alert('You need to score at least 80% to proceed to the next page.');
        }
        await storeResult(score);
        window.onbeforeunload = null;
    }

    function displayResult(score) {
        const totalQuestions = quiz.length;
        const percentage = Math.round((score / totalQuestions) * 100);
        resultElement.innerHTML = `
            <h2>Your Score: ${score}/${totalQuestions}</h2>
            <p>Percentage: ${percentage}%</p>
            
        `;
        document.querySelector('.quiz-container').style.display = 'none';
        resultElement.style.display = 'block';
        if(percentage>=80) nextButton.style.display= 'block';
    }

    async function storeResult(score) {
        try {
            const response = await fetch('https://your-mongodb-api-endpoint/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ score })
            });
            if (response.ok) {
                console.log('Result stored successfully.');
            } else {
                console.error('Failed to store the result.');
            }
        } catch (error) {
            console.error('Error storing the result:', error);
        }
    }

    document.getElementById('prevBtn').onclick = showPreviousQuestion;
    document.getElementById('nextBtn').onclick = showNextQuestion;
    submitButton.onclick = submitQuiz;

    loadQuestion(currentQuestionIndex);
    startTimer();
});
