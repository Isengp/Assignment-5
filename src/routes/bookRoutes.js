const express = require('express');

const booksRouter = express.Router();
function router(nav){

    var books = [
        {
            title: 'Adultery',
            author: 'Paulo Coelho',
            genre: 'Fiction',
            img: "adult.jpg",
            plot: 'Adultery (Adultério in Portuguese) is a novel by Brazilian author Paulo Coelho. It is the sixteenth major book by Coelho, and touches on the theme of adultery. A woman in her thirties begins to question her seemingly perfect life: she is married to a rich and loving husband, has well-behaved children and a successful newspaper career. Her apathy changes when she interviews a former boyfriend, now a successful politician. They begin a sadomasochistic affair that she finds very exciting. But she must now conquer that impossible love and learn to face the everyday. The book Adultery portrays the story of an independent woman Linda, in her 30s, who has an almost perfect life; a content and stable marriage, a caring husband, sweet little kids and a rewarding journalism career. Through the regular everyday life, she starts to question the dullness and boredom of her passing days. She tends to be dissatisfied with her life, until she meets her high-school boyfriend, Jacob, who is a successful politician now. With him, she revives the zeal and craze that were previously missing in her life. They get involved into an affair which she knows can lead her to difficult circumstance, yet, she finds the affair to be really exciting. With this transformation, she is standing at a life-altering turn of her life.'
        },
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Fiction',
            img: "alchem.jpg",
            plot: 'The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired. Paulo Coelhos masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along lifes path, and, above all, following our dreams.The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids. The boy then encounters a wise alchemist who also teaches him to realize his true self.'
        },
        {
            title: 'The Zahir',
            author: 'Paulo Coelho',
            genre: 'Fiction',
            img: "zahir.jpg",
            plot: 'The Zahir means the obvious or conspicuous in Arabic. The Zahir: A Novel of Obsession is a novel about a pilgrimage. It deals with the themes of love, obsession and loss. This book is considered to be a follow-on to the authors earlier book The Alchemist. The meaning of the title, The Zahir, is "the obvious. " The story is narrated from a first-person perspective. A bestselling novelist lost his wife Esther. Although he enjoys the luxury brought to him by money and fame, he is unsatisfied due to his missing wife and goes on a search for her. Meanwhile, the police suspects his hand in the disappearance of his wife. Amidst the chaos, the narrator looks back at his own life to examine what went wrong that made his wife disappear. During a book launch, he encounters Esthers friend Mikhail. From him, the narrator learns that Esther left him in search of peace as she could not find one with him. Knowing that his wife left him in search of finding peace, the narrator realises that in order to find his wife and get back to her, he must search for his own self. So, the narrator starts his pilgrimage on the quest of finding himself.' 
        },
        {
            title: 'Angels & Demons',
            author: 'Dan Brown',
            genre: 'Mystery-thriller',
            img: "angel.jpg",
            plot: '‘Angels and Demons’ is a plot where a globally celebrated scientist, Leonardo Vetra of CERN Institute, Switzerland is killed and a mystifying symbol is branded into his torso. The Vatican, Rome: The College of Cardinals has gathered for deciding upon a new Pope. Underneath the gathering lies a bomb which is extremely powerful and is persistently reckoning towards destruction. Professor Robert Langdon of Harvard has to decode a complex track consisting of some prehistoric symbols in order to overpower people who are guilty. He is stunned upon coming to terms with the fact that Illuminati, a secret society that was declared as vanished some 400 years ago, is still very much into action, as their ancient symbol was the one that was found on the dead scientist’s chest. The main goal of Illuminati has always been to go against the Catholic Church and its preaching. So, Langdon and Vittoria, who is Vetra’s daughter set upon a thrilling search in order to hunt for that particular nucleon-bomb substance which has been fixed under the Vatican City to destroy the city and its significant civilization. '
        },
        {
            title: 'Never Go Back',
            author: 'Lee Child',
            genre: 'Thriller',
            img: "never.jpg",
            plot: 'Never Go Back is the eighteenth book in the Jack Reacher series written by Lee Child. The book continues the storyline covered in the novels 61 Hours, Worth Dying For and A Wanted Man. The novel, like a majority of the Jack Reacher novels, is narrated in third-person point of view. At a motel outside Washington D.C., former army cop Jack Reacher is confronted by two men, and the incident that follows forms the plot of the novel. After an epic and interrupted journey all the way from the snows of South Dakota, Jack Reacher has finally made it to Virginia. His destination, the closest thing to a home he ever had: the headquarters of his old unit, the 110th Military Police. Why? He wants to meet the new commanding officer, Major Susan Turner. He liked her voice on the phone. But now he is arrived, she is disappeared, and things are getting weird. Accused of a sixteen-year-old homicide and co-opted back into the army, Reacher says nothing. But he is sure as hell thinking of a way out.'

        },
        {
            title: 'Death on the Nile',
            author: 'Agatha Christie',
            genre: 'Detective fiction',
            img: "death.jpg",
            plot: 'Death on the Nile is a book of detective fiction. The book features the Belgian detective Hercule Poirot. The action takes place in Egypt, mostly on the Nile River. While on holiday in Cairo, Hercule Poirot is approached by successful socialite Linnet Doyle. She requests his help in deterring her friend Jacqueline de Bellefort from hounding and stalking her. Linnet had recently married Jacquelines fiancé, Simon Doyle, which has made Jacqueline bitterly resentful. Poirot refuses the request, but attempts unsuccessfully to dissuade Jacqueline from pursuing her plans further. Simon and Linnet secretly board the steamer Karnak, set to tour along the Nile, to escape her, but find she had learned of their plans and boarded ahead of them. The tranquillity of a cruise along the Nile is shattered by the discovery that Linnet Ridgeway has been shot through the head. She was young, stylish and beautiful, a girl who had everything – until she lost her life. Hercule Poirot recalls an earlier outburst by a fellow passenger: ‘I’d like to put my dear little pistol against her head and just press the trigger. Yet in this exotic setting nothing is ever quite what it seems… Famed for her crime masterpieces, Agatha Christie’s books have become the best-selling in the world, appealing to readers young and old for their ingenious plots and immediately recognizable characters. The stories have also transcended the printed page, become bestselling audiobooks and award-winning films, plays and television series. Now words and pictures combine in an exciting new way of telling these stories – full-colour graphic novels which enhance the original stories and offer a completely new way of enjoying some of the world’s most popular and exciting mysteries.'

        },
        {
            title: 'Harry Potter & the philosophers stone',
            author: 'J.K.Rowling',
            genre: 'Fantasy',
            img: "harry.jpg",
            plot: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harrys struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people). Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here. Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. The magic starts here!'
        },
        {
            title: 'Half Girlfriend',
            author: 'Chetan Bhagat',
            genre: 'Romance',
            img: "half.jpg",
            plot: 'Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat. The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves. This is Bhagats sixth novel which was released on 1 October 2014. the book divulges the sentiments and linguistic struggles of a backward rural Bhojpuri-laced Hindi-speaking boy from Bihar as he enrolls himself at the prestigious English-medium St. Stephen’s College, New Delhi, and falls in love with a "high class English-speaking rich Delhi girl" schooled at Modern School, New Delhi. The girl does not admit the relationship but agrees to be his "half girlfriend". Chetan Bhagat commented, "Half-Girlfriend, to me, is a unique Indian phenomenon, where boys and girls are not clear about their relationship status with each other. A boy may think he is more than friends with the girl, but the girl is still not his girlfriend. Hence, I thought we needed a term like "Half girlfriend". Because, in India, that is what most men get".' 
        },
        {
            title: 'Five Point Someone',
            author: 'Chetan Bhagat',
            genre: 'Buddy',
            img: "five.jpg",
            plot: 'The book is narrated by Hari, with some small passages by his friends Ryan and Alok, as well as a letter by Haris girlfriend Neha Cherian. It deals with the lives of the 3 friends, whose elation on making it to one of the best engineering colleges in India is quickly deflated by the rigour and monotony of the academic work. Most of the book deals with the numerous attempts by the trio to cope with and/or beat the system as well as Haris fling with Neha who just happens to be the daughter of Prof. Cherian, the domineering head of the Mechanical Engineering department of their college. It takes some dark turns every now and then, especially when it comes to the families of the protagonists. Most of the action, however, takes place inside the campus as the boys, led by the ever creative Ryan, frequently lamenting how the internationally lauded IIT system has stifled their creativity by forcing them to value grades more than anything else.' 
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title: 'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book: books[id]
        })  
    })

    return booksRouter;
}


module.exports = router;