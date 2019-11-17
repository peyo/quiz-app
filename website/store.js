const STORE = {
    
    questions: [
        //1    
        {
            questionType: "Verbal aptitue - Classification",
            questionExplanation: "Mastery of words is seen by many as having the possession of the ability to produce order out of chaos. Because of this, it is argued that the command of vocabulary is seen as a true measure of intelligence. The following exercises will test basic verbal aptitude. You are given a list of five words. Choose which of the five words is the odd one out.",
            question: "Choose which of the five words is the odd one out.",
            options: [
                "(a) calm", 
                "(b) quiet",
                "(c) relaxed",
                "(d) serene",
                "(e) unruffled"
            ],
            answer: "(b) quiet",
            answerExplanation: "'Quiet' is the odd one out, as the others mean the same thing. Although, one being quiet does not always mean that one is calm, relaxed, serene, or unruffled. One could be extremely upset and annoyed but remain quiet.",
        },
        //2
        {
            questionType: "Verbal aptitue - Classification",
            question: "Choose which of the five words is the odd one out.",
            options: [
                "(a) abode",
                "(b) dwelling",
                "(c) house",
                "(d) residence",
                "(e) street"
            ],
            answer: "(e) street",
            answerExplanation: "'Street' is the odd one out, as the rest are places in which one can live. ‘Street’ is in a general term which may contain may houses, gardens, trees, and road surfaces. It is mostly used as a means to get from one place to another.",
        },
        //3
        {
            questionType: "Numberical aptitude - Number sequence",
            questionExplanation: "Numerical tests are regarded as being culture-fair or culture-free. These questions will test one’s ability to deal with problems in a structured and analytical way. Identify a pattern that is occurring in the sequence. The numbers may be progressing, or they may be decreasing, and in some cases, they may be both progressing and decreasing within the sequence. Fill in the missing number(s) indicated by the question mark(s).",
            question: "0, 1, 4, 9, 16, 25, 36, 49, ?",
            options: [
                "(a) 54",
                "(b) 59",
                "(c) 62",
                "(d) 64",
                "(e) none of the above"
            ],
            answer: "(d) 64",
            answerExplanation: "Add 1, 3, 5, 7, etc."
        },
        //4
        {
            questionType: "Numberical aptitude - Number sequence",
            question: "14, 16, 28, 32, 42, 48, 56, 64, ?, ?",
            options: [
                "(a) 74, 76",
                "(b) 72, 78",
                "(c) 70, 80",
                "(d) 72, 82",
                "(e) none of the above"
            ],
            answer: "(c) 70, 80"
            answerExplanation: "There are two interwoven sequences, add 14 starting at 14 and add 16 starting at 16."
        },
        //5
        {
            questionType: "Logical reasoning - Pure logic",
            questionExplanation: "Logic is defined as ‘the science of reasoning, proof, thinking, or inference’. In philosophy, logic is a science that deals with the principles of valid reasoning and argument. In this context, logic concerns only the reasoning process and not necessarily the end result. Therefore, incorrect conclusions can be reached by so-called ‘faulty’ means if the original assumptions are faulty. These questions just require you to think clearly and analytically. There is no knowledge of mathematics or vocabulary needed.",
            question: "elk, mink, mouse, gibbon, panther. Which creature comes next? Is it:",
            options: [
                "(a) squirrel",
                "(b) tortoise",
                "(c) tigress",
                "(d) wildebeest",
                "(e) platypus",
                "(f) aardvark"
            ],
            answer: "(b) tortoise"
            answerExplanation: "The name of each creature starts with the letter that comes two letters in the alphabet after the last letter of the previous creature. Also, the name of each creature has one more letter than the previous creature."
        },
        //6
        {
            questionType: "Logical reasoning - Progressive matrices test",
            questionExplanation: "This section will test one’s ability to recognize patterns and designs, one’s ability to think logically but at the same time to explore with an open mind the various possibilities that might lead to a correct answer.  A matrix is an array of squares in which one of the squares has been omitted, and where you must choose the correct missing square from a number of options. Study the matrix to decide what pattern is occurring, either by looking across each line and down each column, looking at the array as a while or looking at the relationship between different squares within the array.",
            question: "Which is the missing section?<br>images/questions-answers/q-06</br>",
            options: [
                "(a) squirrel",
                "(b) tortoise",
                "(c) tigress",
                "(d) wildebeest",
                "(e) platypus",
                "(f) aardvark"
            ],
            answer: "(b) tortoise"
            answerExplanation: "The name of each creature starts with the letter that comes two letters in the alphabet after the last letter of the previous creature. Also, the name of each creature has one more letter than the previous creature."
        },
        //7
        {
            question: "Open the abbreviation HTML",
            options: [
                "Hyper Text Module Language", 
                "Hyper Text Markup Language", 
                "Hyper Test Markup Language",
                "Hyperlink Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
    ],
    currentQuestion: 0,
    score: 0
  };