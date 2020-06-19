const express = require('express');
const authRouter = express.Router();

function router(nav){
    var authors = [
        {
            title: 'Paulo Coelho',
            language: 'Portuguese',
            nation: 'Brazilian',
            img: "paulo.jpg",
            details: 'Paulo Coelho was born in Rio de Janeiro, Brazil, and attended a Jesuit school. As a teenager, Coelho wanted to become a writer. In 1982, Coelho published his first book, Hell Archives, which failed to make a substantial impact. In 1986 he contributed to the Practical Manual of Vampirism, although he later tried to take it off the shelves since he considered it "of bad quality." After making the pilgrimage to Santiago de Compostela in 1986, Coelho wrote The Pilgrimage, published in 1987. The following year, Coelho wrote The Alchemist and published it through a small Brazilian publishing house. His notable works include The Pilgrimage, Brida, The Zahir, Adultery, etc.',
            link: "https://paulocoelhoblog.com/" 
        },
        {
            title: 'Dan Brown',
            language: 'English',
            nation: 'American',
            img: "dan.jpg",
            details: 'Daniel Gerhard Brown (born June 22, 1964) is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013) and Origin (2017). His novels are treasure hunts that usually take place over a period of 24 hours. They feature recurring themes of cryptography, art, and conspiracy theories. His books have been translated into 57 languages and, as of 2012, have sold over 200 million copies. Three of them, Angels & Demons, The Da Vinci Code, and Inferno, have been adapted into films.',
            link: "https://danbrown.com/"
        },
        {
            title: 'Lee Child',
            language: 'English',
            nation: 'British',
            img: "lee.jpg",
            details: 'James Dover Grant CBE (born 29 October 1954), primarily known by his pen name Lee Child, is a British author who writes thriller novels, and is best known for his Jack Reacher novel series. The books follow the adventures of a former American military policeman, Jack Reacher, who wanders the United States. His first novel, Killing Floor (1997), won both the Anthony Award, and the Barry Award for Best First Novel.',
            link: "http://www.leechild.com/" 
        },
        {
            title: 'Agatha Christie',
            language: 'English',
            nation: 'British',
            img: "agatha.jpg",
            details: 'Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE (née Miller; 15 September 1890 – 12 January 1976) was an English writer known for her sixty-six detective novels and fourteen short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the worlds longest-running play The Mousetrap, performed in the West End from 1952 to 2020, as well as six novels under the pseudonym Mary Westmacott.',
            link: "https://www.agathachristie.com/" 
        },
        {
            title: 'J.K. Rowling',
            language: 'English',
            nation: 'Scotish',
            img: "rowling.jpg",
            details: 'Joanne Rowling, (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, screenwriter, producer, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith.',
            link: "https://www.jkrowling.com//" 
        },
        {
            title: 'Chetan Bhagat',
            language: 'English',
            nation: 'Indian',
            img: "chetan.jpg",
            details: 'Chetan Prakash Bhagat (born 22 April 1974) is a well known Indian author, columnist, Bollywood screenwriter, social media influencer and motivational speaker. He was included in Time magazines list of Worlds 100 Most Influential People in 2010. Bhagat holds degrees in Mechanical engineering and MBA from prestigious Indian institutions like IIT & IIM respectively. He started his career as an investment banker, but left it after a few years to pursue his passion in writing. He has written eight novels and three non-fiction books. Right from the time his first best-selling novel Five Point Someone was published in 2004, his subsequent novels have found a place on bestsellers lists. His novels will not be there on lists like "Top 10 bestselling Indian novels of all time" or "12 best Indian novels that everyone needs to read," but one of his novels "Five Point Someone" does find a place in a list like "20 best selling novels you must read".',
            link: "http://www.chetanbhagat.com/" 
        },
    ]
    
    
    authRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title: 'Library',
            authors
        });
    });

    authRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author: authors[id]
        })  
    })


    return authRouter;
}

module.exports = router;