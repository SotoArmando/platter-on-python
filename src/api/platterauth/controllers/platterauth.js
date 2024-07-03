"use strict";

/**
 * A set of functions called "actions" for `auth`
 */
// function getName(line) { return [...line.matchAll(/\((.*?)\)/g)][0][1]; }
// y.reduce((p, v ,c) => ({...p, [getName(v)]: v }), {})
const unparsed = require('koa-body/unparsed.js');
const amazonScraper = require('amazon-buddy');
const { OpenAI } = require('openai');
const essentialKitchenItemsFileIndex = {
  "Aluminum foil": "products(Aluminum foil)_1711926324659.json",
  "Baking dish or casserole dish": "products(Baking dish or casserole dish)_1711926347007.json",
  "Baking sheets": "products(Baking sheets)_1711926371292.json",
  "Blender or food processor": "products(Blender or food processor)_1711926397579.json",
  "Cake stand": "products(Cake stand)_1711926415065.json",
  "Can opener": "products(Can opener)_1711926436238.json",
  "Cheese slicer": "products(Cheese slicer)_1711926459166.json",
  "Coffee maker or kettle": "products(Coffee maker or kettle)_1711926483228.json",
  "Colander or strainer": "products(Colander or strainer)_1711926509754.json",
  "Cookie cutters": "products(Cookie cutters)_1711926533399.json",
  "Cooling rack": "products(Cooling rack)_1711926548374.json",
  "Cutting boards": "products(Cutting boards)_1711926567638.json",
  "Egg slicer": "products(Egg slicer)_1711926594490.json",
  "Food storage containers": "products(Food storage containers)_1711926617755.json",
  "Garlic press": "products(Garlic press)_1711926643516.json",
  "Grater": "products(Grater)_1711926669312.json",
  "Ice cream scoop": "products(Ice cream scoop)_1711926694833.json",
  "Instant-read thermometer": "products(Instant-read thermometer)_1711926714507.json",
  "Kitchen scale": "products(Kitchen scale)_1711926330490.json",
  "Kitchen shears": "products(Kitchen shears)_1711926356180.json",
  "Kitchen timer": "products(Kitchen timer)_1711926380954.json",
  "Kitchen torch": "products(Kitchen torch)_1711926400229.json",
  "Kitchen towels": "products(Kitchen towels)_1711926423489.json",
  "Knife": "products(knife)_1711926685721.json",
  "Ladle": "products(Ladle)_1711926444056.json",
  "Mandoline slicer": "products(Mandoline slicer)_1711926467010.json",
  "Measuring cups and spoons": "products(Measuring cups and spoons)_1711926492115.json",
  "Measuring pitcher": "products(Measuring pitcher)_1711926518167.json",
  "Meat thermometer": "products(Meat thermometer)_1711926540007.json",
  "Mixing bowls": "products(Mixing bowls)_1711926555410.json",
  "Mixing spoons": "products(Mixing spoons)_1711926576460.json",
  "Mortar and pestle": "products(Mortar and pestle)_1711926602710.json",
  "Oven mitts or pot holders": "products(Oven mitts or pot holders)_1711926628387.json",
  "Parchment paper": "products(Parchment paper)_1711926650549.json",
  "Pastry brush": "products(Pastry brush)_1711926677328.json",
  "Pastry cutter": "products(Pastry cutter)_1711926702817.json",
  "Pizza cutter": "products(Pizza cutter)_1711926722989.json",
  "Plastic wrap": "products(Plastic wrap)_1711926338511.json",
  "Potato masher": "products(Potato masher)_1711926363892.json",
  "Roasting pan": "products(Roasting pan)_1711926388953.json",
  "Rolling pin": "products(Rolling pin)_1711926407427.json",
  "Skimmer or strainer": "products(Skimmer or strainer)_1711926433727.json",
  "Slotted spoon": "products(Slotted spoon)_1711926451248.json",
  "Spatulas": "products(Spatulas)_1711926474266.json",
  "Spice grinder": "products(Spice grinder)_1711926501055.json",
  "Stand mixer or handheld mixer": "products(Stand mixer or handheld mixer)_1711926525888.json",
  "Tea infuser or strainer": "products(Tea infuser or strainer)_1711926528419.json",
  "Toaster or toaster oven": "products(Toaster or toaster oven)_1711926564595.json",
  "Tongs": "products(Tongs)_1711926585543.json",
  "vacuum cleaner": "products(vacuum cleaner)_1711926711081.json",
  "Vegetable peeler": "products(Vegetable peeler)_1711926609253.json",
  "Whisk": "products(Whisk)_1711926635660.json",
  "Wooden spoons": "products(Wooden spoons)_1711926659322.json"
};

const essentialsKitchenUtils = Object.keys(essentialKitchenItemsFileIndex);

const servingWareFileIndex = {
  "Aprons": "products(Aprons)_1711565331411.json",
  "Baguette baskets": "products(Baguette baskets)_1711507399648.json",
  "Barbecue baskets": "products(Barbecue baskets)_1711511842144.json",
  "Barbecue brushes": "products(Barbecue brushes)_1711511850365.json",
  "Barbecue forks": "products(Barbecue forks)_1711511859085.json",
  "Barbecue platters": "products(Barbecue platters)_1711511829570.json",
  "Barbecue sauce bottles": "products(Barbecue sauce bottles)_1711511884528.json",
  "Barbecue sauce brushes": "products(Barbecue sauce brushes)_1711511863696.json",
  "Barbecue sauce dispensers": "products(Barbecue sauce dispensers)_1711511874104.json",
  "Barbecue sauce mops": "products(Barbecue sauce mops)_1711511882027.json",
  "Barbecue sauce pots": "products(Barbecue sauce pots)_1711511867868.json",
  "Barbecue sauce squeeze bottles": "products(Barbecue sauce squeeze bottles)_1711511894383.json",
  "Barbecue serving sets": "products(Barbecue serving sets)_1711511825936.json",
  "Barbecue skewers": "products(Barbecue skewers)_1711511846216.json",
  "Barbecue tongs": "products(Barbecue tongs)_1711511855089.json",
  "Bar spoon": "products(Bar spoon)_1711512330520.json",
  "Beer mugs or glasses": "products(Beer mugs or glasses)_1711512255451.json",
  "Beverage coasters": "products(Beverage coasters)_1711565021248.json",
  "Beverage dispensers": "products(Beverage dispensers)_1711512226936.json",
  "Beverage pitchers ": "products(Beverage pitchers )_1711512218353.json",
  "Bread basket": "products(Bread basket)_1711512093891.json",
  "Bread knives": "products(Bread knives)_1711507383084.json",
  "Bread slicers": "products(Bread slicers)_1711507390938.json",
  "Butter dish": "products(Butter dish)_1711512103851.json",
  "Cake servers": "products(Cake servers)_1711565152603.json",
  "Cake stand": "products(Cake stand)_1711512155818.json",
  "Casserole dishes": "products(Casserole dishes)_1711512022446.json",
  "Caviar dishes": "products(Caviar dishes)_1711507598783.json",
  "Caviar spoons": "products(Caviar spoons)_1711507595555.json",
  "Champagne bucket": "products(Champagne bucket)_1711565013461.json",
  "Champagne flutes": "products(Champagne flutes)_1711512245862.json",
  "Cheese board": "products(Cheese board)_1711512077864.json",
  "Cheese fondue sets": "products(Cheese fondue sets)_1711507631953.json",
  "Cheese grater": "products(Cheese grater)_1711565174927.json",
  "Cheese knives": "products(Cheese knives)_1711512085931.json",
  "Cheese slicer": "products(Cheese slicer)_1711565166399.json",
  "Chip and dip platter": "products(Chip and dip platter)_1711512068868.json",
  "Chips and salsa dish": "products(Chips and salsa dish)_1711507478980.json",
  "Chocolate fondue sets": "products(Chocolate fondue sets)_1711507629105.json",
  "Chocolate fountains": "products(Chocolate fountains)_1711507626315.json",
  "Citrus juicer": "products(Citrus juicer)_1711565200221.json",
  "Coasters": "products(Coasters)_1711565308495.json",
  "Cocktail jigger": "products(Cocktail jigger)_1711512322184.json",
  "Cocktail shaker": "products(Cocktail shaker)_1711512303249.json",
  "Cocktail strainer": "products(Cocktail strainer)_1711512313129.json",
  "Coffee bean grinders": "products(Coffee bean grinders)_1711511751647.json",
  "Coffee carafes": "products(Coffee carafes)_1711507747533.json",
  "Coffee cups": "products(Coffee cups)_1711565273230.json",
  "Coffee grinder": "products(Coffee grinder)_1711565227746.json",
  "Coffee maker": "products(Coffee maker)_1711565235435.json",
  "Coffee pod holders": "products(Coffee pod holders)_1711507762467.json",
  "Coffee saucers": "products(Coffee saucers)_1711565300578.json",
  "Coffee stirrers": "products(Coffee stirrers)_1711511743134.json",
  "Coffee warmers": "products(Coffee warmers)_1711507737246.json",
  "Condiment dishes": "products(Condiment dishes)_1711512060628.json",
  "Corn holders": "products(Corn holders)_1711507533056.json",
  "Crab forks": "products(Crab forks)_1711507580354.json",
  "Crab mallets": "products(Crab mallets)_1711507572955.json",
  "Crab picks": "products(Crab picks)_1711507575439.json",
  "Creamer pitcher": "products(Creamer pitcher)_1711507192512.json",
  "Cream whippers": "products(Cream whippers)_1711507679855.json",
  "Dessert bowls": "products(Dessert bowls)_1711512183982.json",
  "Dessert plates": "products(Dessert plates)_1711512173605.json",
  "Dessert spoons": "products(Dessert spoons)_1711565090130.json",
  "Dinner forks": "products(Dinner forks)_1711565030665.json",
  "Dinner knives": "products(Dinner knives)_1711565056906.json",
  "Dinner plates": "products(Dinner plates)_1711511901314.json",
  "Dip bowls": "products(Dip bowls)_1711512050207.json",
  "Escargot dishes": "products(Escargot dishes)_1711507585269.json",
  "Escargot forks": "products(Escargot forks)_1711507591979.json",
  "Espresso cups": "products(Espresso cups)_1711565282606.json",
  "Espresso knock boxes": "products(Espresso knock boxes)_1711564957019.json",
  "Espresso machine": "products(Espresso machine)_1711565245945.json",
  "Espresso shot glasses": "products(Espresso shot glasses)_1711564962839.json",
  "Espresso spoons": "products(Espresso spoons)_1711564972834.json",
  "Espresso tampers": "products(Espresso tampers)_1711564950570.json",
  "Flatware organizer": "products(Flatware organizer)_1711507220952.json",
  "Fondue forks": "products(Fondue forks)_1711507609985.json",
  "Fondue fuel": "products(Fondue fuel)_1711507622960.json",
  "Fondue plates": "products(Fondue plates)_1711507616221.json",
  "Fondue pots": "products(Fondue pots)_1711507601461.json",
  "Food storage containers": "products(Food storage containers)_1711565364319.json",
  "Garlic press": "products(Garlic press)_1711565192115.json",
  "Gravy boat": "products(Gravy boat)_1711512034137.json",
  "Gravy boats with warming stands": "products(Gravy boats with warming stands)_1711507646917.json",
  "Gravy ladles": "products(Gravy ladles)_1711507638172.json",
  "Guacamole bowls": "products(Guacamole bowls)_1711507470007.json",
  "Highball glasses": "products(Highball glasses)_1711512263356.json",
  "Honey dippers": "products(Honey dippers)_1711511779709.json",
  "Honey pot": "products(Honey pot)_1711507200798.json",
  "Ice cream bowls": "products(Ice cream bowls)_1711512194964.json",
  "Ice cream scoop": "products(Ice cream scoop)_1711512204379.json",
  "Insulated food containers": "products(Insulated food containers)_1711565355623.json",
  "Jam jar": "products(Jam jar)_1711507211377.json",
  "Jam spoons": "products(Jam spoons)_1711507662122.json",
  "Ladles": "products(Ladles)_1711565126613.json",
  "Lobster crackers": "products(Lobster crackers)_1711507536027.json",
  "Lobster picks": "products(Lobster picks)_1711507541000.json",
  "Lowball glasses": "products(Lowball glasses)_1711512273023.json",
  "Margarita glasses": "products(Margarita glasses)_1711507499542.json",
  "Margarita pitchers": "products(Margarita pitchers)_1711507511096.json",
  "Margarita salt rimmers": "products(Margarita salt rimmers)_1711507521309.json",
  "Margarita shakers": "products(Margarita shakers)_1711507525132.json",
  "Martini glasses": "products(Martini glasses)_1711512293804.json",
  "Meal prep containers": "products(Meal prep containers)_1711565374743.json",
  "Molcajete": "products(Molcajete)_1711507451270.json",
  "Napkin holder": "products(Napkin holder)_1711507230152.json",
  "Napkins": "products(Napkins)_1711507260852.json",
  "Nutcracker": "products(Nutcracker)_1711565184122.json",
  "Oil and vinegar cruets": "products(Oil and vinegar cruets)_1711512121379.json",
  "Olive oil dipping dishes": "products(Olive oil dipping dishes)_1711507404946.json",
  "Olive pickers": "products(Olive pickers)_1711511786082.json",
  "Olive trays": "products(Olive trays)_1711511788355.json",
  "Oven mitts": "products(Oven mitts)_1711565316471.json",
  "Oyster knives": "products(Oyster knives)_1711507558759.json",
  "Oyster plates": "products(Oyster plates)_1711507563611.json",
  "Pasta bowls": "products(Pasta bowls)_1711511946352.json",
  "Pasta serving forks": "products(Pasta serving forks)_1711507365598.json",
  "Pasta serving spoons": "products(Pasta serving spoons)_1711507373793.json",
  "Pepper mill": "products(Pepper mill)_1711565203147.json",
  "Pickle dishes": "products(Pickle dishes)_1711511808718.json",
  "Pickle forks": "products(Pickle forks)_1711511797925.json",
  "Pickle tongs": "products(Pickle tongs)_1711511816741.json",
  "Pie servers": "products(Pie servers)_1711565159541.json",
  "Placemats": "products(Placemats)_1711507251008.json",
  "Pot holders": "products(Pot holders)_1711565323333.json",
  "Salad bowls": "products(Salad bowls)_1711512001970.json",
  "Salad forks": "products(Salad forks)_1711565044034.json",
  "Salad plates": "products(Salad plates)_1711511918805.json",
  "Salad servers": "products(Salad servers)_1711507356736.json",
  "Salad spinner": "products(Salad spinner)_1711512129395.json",
  "Salad spinners": "products(Salad spinners)_1711507348847.json",
  "Salsa bowls": "products(Salsa bowls)_1711507459813.json",
  "Salt and pepper shakers or grinders": "products(Salt and pepper shakers or grinders)_1711512113473.json",
  "Salt cellar": "products(Salt cellar)_1711565210889.json",
  "Sauce boats": "products(Sauce boats)_1711507649493.json",
  "Sauce bowls": "products(Sauce bowls)_1711512041340.json",
  "Sauce ladles": "products(Sauce ladles)_1711507652530.json",
  "Seafood crackers": "products(Seafood crackers)_1711507553658.json",
  "Seafood forks": "products(Seafood forks)_1711507545408.json",
  "Serving bowls ": "products(Serving bowls )_1711511970790.json",
  "Serving forks": "products(Serving forks)_1711565143400.json",
  "Serving platters ": "products(Serving platters )_1711511957006.json",
  "Serving spoons": "products(Serving spoons)_1711565098107.json",
  "Serving trays ": "products(Serving trays )_1711512144797.json",
  "Shot glasses": "products(Shot glasses)_1711512284191.json",
  "Slotted spoons": "products(Slotted spoons)_1711565108341.json",
  "Soup bowls": "products(Soup bowls)_1711511935215.json",
  "Soup ladles": "products(Soup ladles)_1711507338561.json",
  "Soup spoons": "products(Soup spoons)_1711565073454.json",
  "Soup terrines": "products(Soup terrines)_1711507336030.json",
  "Soup tureens": "products(Soup tureens)_1711512014417.json",
  "Spatulas": "products(Spatulas)_1711565117746.json",
  "Steak knives": "products(Steak knives)_1711565065569.json",
  "Sugar bowl": "products(Sugar bowl)_1711507184312.json",
  "Sugar dispensers": "products(Sugar dispensers)_1711511761677.json",
  "Sugar tongs": "products(Sugar tongs)_1711507672772.json",
  "Sundae glasses": "products(Sundae glasses)_1711512213630.json",
  "Sushi chopsticks": "products(Sushi chopsticks)_1711507429374.json",
  "Sushi plates": "products(Sushi plates)_1711507419617.json",
  "Sushi serving sets": "products(Sushi serving sets)_1711507411079.json",
  "Syrup dispensers": "products(Syrup dispensers)_1711511771034.json",
  "Tablecloth": "products(Tablecloth)_1711507239589.json",
  "Taco holders": "products(Taco holders)_1711507435658.json",
  "Taco shell holders": "products(Taco shell holders)_1711507489025.json",
  "Taco shell racks": "products(Taco shell racks)_1711507495012.json",
  "Tea bag holders": "products(Tea bag holders)_1711507696025.json",
  "Tea caddies": "products(Tea caddies)_1711507707319.json",
  "Tea cozies": "products(Tea cozies)_1711507717605.json",
  "Tea cups": "products(Tea cups)_1711565262626.json",
  "Tea infuser": "products(Tea infuser)_1711565219471.json",
  "Tea kettle": "products(Tea kettle)_1711565254255.json",
  "Tea saucers": "products(Tea saucers)_1711565292535.json",
  "Tea serving carts": "products(Tea serving carts)_1711507728872.json",
  "Teaspoons": "products(Teaspoons)_1711565081675.json",
  "Tea strainers": "products(Tea strainers)_1711507686874.json",
  "Thermos flask": "products(Thermos flask)_1711565346843.json",
  "Tiered dessert stand": "products(Tiered dessert stand)_1711512164816.json",
  "Tongs": "products(Tongs)_1711565135360.json",
  "Tortilla presses": "products(Tortilla presses)_1711507448460.json",
  "Tortilla warmers": "products(Tortilla warmers)_1711507443907.json",
  "Trays for carrying dishes": "products(Trays for carrying dishes)_1711565339259.json",
  "Trivets": "products(Trivets)_1711512136204.json",
  "Vegetable bowls": "products(Vegetable bowls)_1711511988481.json",
  "Whipped cream dispensers": "products(Whipped cream dispensers)_1711507684152.json",
  "Wine aerator": "products(Wine aerator)_1711512348604.json",
  "Wine bottle opener or corkscrew": "products(Wine bottle opener or corkscrew)_1711564999926.json",
  "Wine decanter": "products(Wine decanter)_1711512339517.json",
  "Wine glasses": "products(Wine glasses)_1711512235745.json",
  "Wine stoppers": "products(Wine stoppers)_1711565003200.json"
};
const servingWare = Object.keys(servingWareFileIndex);

const appAffiliateCarpet = {
  "tasty_books": [
    {
       "image":"https://m.media-amazon.com/images/I/91z369mInPL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Ultimate: How to Cook Basically Anything (An Official Tasty Cookbook)",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B07CR2S41Y?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/91H94PHp9mL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Latest and Greatest: Everything You Want to Cook Right Now (An Official Tasty...",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B076Z11D6F?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/91FhhnUEDPL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Pride: 75 Recipes and Stories from the Queer Food Community",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B081929JQL?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/A1sspqUzDqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Every Day: All of the Flavor, None of the Fuss (An Official Tasty Cookbook)",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B07PZ4G58T?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/91y-pjTcyTL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Dessert: All the Sweet You Can Eat (An Official Tasty Cookbook)",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B07KDXF2SS?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/81e1dnKHKyL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Adulting: All Your Faves, All Grown Up: A Cookbook",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B085ZZKGZR?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/91ax3l7SnaS._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Over the Top: High Drama, Low Maintenance: A Cookbook",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B08YNDBZVB?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/916ihoR+heL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Total Comfort: Cozy Recipes with a Modern Touch: An Official Tasty Cookbook",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B09SL2YQJV?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/91eQrieTUNL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty (Cocina) (Spanish Edition)",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B089PVDLYP?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/A13BSWsBtUL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty: Das Original - Genial einfach kochen mit den beliebtesten Tasty-Rezepten - Mit...",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B07C3QGFP2?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/91CXj3WLujL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty over the top: 75 übertrieben gute Rezepte - bunter und besser denn je!...",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B0BMGG7FQC?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/91g8rzJwgDL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Pride - Das Original: 75 Rezepte und Geschichten aus der Queer Food...",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B08MCB46Y5?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/A13stKoH9lL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Das Original - Die geniale Jeden-Tag-Küche: Mit Rezepten von \"einfach TASTY\"...",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B086TWPZN1?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/81GrJ7cJlwL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Sweets: Das Original - Köstliche Kuchen, Tartes &amp; Desserts - Mit Rezepten...",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B07QM6QHJH?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/917-cCZMnKL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Ultimativ Tasty: Das Original - Über 160 einfach geniale Rezepte (German Edition)",
       "url":"https://www.amazon.com/Tasty-ebook/dp/B07K25MMWF?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/71wxkJGYqNL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty One Top: 75 Recipes to Sous Vide, Stir-Fry, Simmer, and Slow Cook with Your...",
       "url":"https://www.amazon.com/Tasty/dp/0525575847?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/814VP3Wx8mL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Kookboek: Alles wat je nu wilt maken (Dutch Edition)",
       "url":"https://www.amazon.com/Tasty/dp/9021571552?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/71hDuc-NL5L._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"tasty latest and greatest everything you want to cook right now [hardcover] and tasty &amp;...",
       "url":"https://www.amazon.com/Tasty/dp/9123648082?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    },
    {
       "image":"https://m.media-amazon.com/images/I/918VHXt7sQL._AC_CR0%2C0%2C0%2C0_SY315_.jpg",
       "title":"Tasty Kochschule; Alle Basics plus 75 genial einfache Rezepte; Hrsg. v. Tasty; Deutsch;...",
       "url":"https://www.amazon.com/author/dp/3517100315?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.F3HsqSMtpJeutiN4IeqpJV4YDRO8sd6IfAMvuyU5BzHrfs_OPVQrwKKB18YvXLmleFTEyEBpEd8ZfKW4sTnaANF6VOiosUr5MKUKUOXrIj0T5OZg3SPsmiFvmprKwyGwD1BVzW0XqrZwRrtTvQ2JBNbecOqciW4j4gjMUUaepw4qxU5crBoEG94jVt0avwoO3yZqR4E1edNuOG2WeZqGz9qZzic5cccJ2LLQiItmr7Q.-xUSjQiixFE_-t6-MS8pwA1WC6ZOYojIVnlJtjqU5IQ&dib_tag=AUTHOR"
    }
 ]
 
}



const openai = new OpenAI({
  apiKey: process.env['OPENAI_SECRET'], // This is the default and can be omitted
});

const NodeCache = require("node-cache");
const oneMonthDuration = 2.628e+6;
const myRecomendationsCache = new NodeCache({ stdTTL: oneMonthDuration * 3 });
const myProductsCache = new NodeCache({ stdTTL: oneMonthDuration * 3 });

function findKeyBestValueUsingKeywords(
  keywords, container
) {
  let keys = Object.keys(container);
  let words = keywords.split(" ");
  let avoid = ["or", "and"]
  // sort descending - longer items first
  words.sort((a, b) => b.length - a.length);

  // strapi.log.debug(words);
  // strapi.log.debug(words);

  let key = keys.find(e =>
    words.every(w => !avoid.includes(w) && e.toLowerCase().includes(w.toLowerCase()) ) ||
    words.some(w => !avoid.includes(w) && e.toLowerCase().includes(w.toLowerCase())  )
  );
  return container[key];

}

function formatRecipeasString(recipe) {
  const { recipe_name, ingredients: { ingredient = [] }, directions: { direction = [] } } = recipe;
  const result = `
Recipe Name: ${recipe_name}

Ingredients:
${ingredient.map(e => `- ${e.ingredient_description}`).join("\n")}
  
Instructions:
${direction.map((e) => `${e.direction_number}. ${e.direction_description}`).join("\n")}
`;
  // strapi.log.debug(result);
  return result;
}

module.exports = {
  platterConfirmValidation: async (ctx, next) => {
    // platterConfirmValidation?{email}&{token}
    const { user: userService } = strapi.plugins["users-permissions"].services;

    const { email, token } = ctx.query;

    const entries = await strapi.entityService.findMany(
      "api::register-token.register-token",
      {
        filters: {
          Email: {
            $containsi: email,
          },
          Token: {
            $containsi: token,
          },
          Valid: {
            $eq: false,
          },
        },
      }
    );

    // strapi.log.debug(entries);
    // strapi.log.debug(token);
    // strapi.log.debug(email);

    if (entries.length > 0) {
      const user = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({ where: { email: email } });

      const entry = await strapi.entityService.update(
        "api::register-token.register-token",
        entries[0].id,
        {
          data: {
            Valid: true,
          },
        }
      );

      ctx.body = entry;

      await userService.edit(user.id, {
        confirmed: true,
        confirmationToken: null,
      });
    } else {
      ctx.body = "Authentication data missing";
    }

    // ctx.body = err;
  },
  updaterecipeComment: async (ctx, next) => {
    // updaterecipeComment?{user}&{timestamp}&{comment}
    const { user = "", timestamp = "", comment: updateComment } = ctx.query;

    const comment = `${timestamp}:${user}:` + ctx.request.body;
    const newcomment = `${timestamp}:${user}:` + updateComment;
    const userKey = `${timestamp}:${user}$true`;

    const filters = {
      filters: {
        users: {
          $containsi: comment,
        },
      },
    };

    const entries = await strapi.entityService.findMany("api::recipe-comment.recipe-comment", filters);

    const thereIsSuchComment = entries.length > 0;

    if (thereIsSuchComment) {
      const recipeComment = entries[0];

      Object.assign(recipeComment.users, { [userKey]: newcomment })

      await strapi.entityService.update("api::recipe-comment.recipe-comment", recipeComment.id, {
        data: {
          users: recipeComment.users
        }
      });

      ctx.body = "200 - recipe-comment done correcty";
    } else {
      ctx.body = "200 - recipe-comment not done correcty";
    }
  },
  deleterecipeComment: async (ctx, next) => {
    // deleterecipeComment?{user}&{timestamp}
    const { user = "", timestamp = "" } = ctx.query;
    const comment = `${timestamp}:${user}:` + ctx.request.body;
    const userKey = `${timestamp}:${user}$true`;

    const filters = {
      filters: {
        users: {
          $containsi: comment,
        },
      },
    };

    const entries = await strapi.entityService.findMany("api::recipe-comment.recipe-comment", filters);

    const thereIsSuchComment = entries.length > 0;

    if (thereIsSuchComment) {
      const recipeComment = entries[0];

      delete recipeComment.users[userKey];

      await strapi.entityService.update("api::recipe-comment.recipe-comment", recipeComment.id, {
        data: {
          users: recipeComment.users
        }
      });

      ctx.body = "200 - recipe-comment done correcty";
    } else {
      ctx.body = "200 - recipe-comment not done correcty";
    }
  },
  recipeComment: async (ctx, next) => {
    // CREATE AND UPDATE
    // /recipeComment/{recipeId}?user=""

    const { recipeId = "" } = ctx.params;
    const { user = "" } = ctx.query;
    const timestamp = Date.now().toString();
    const comment = `${timestamp}:${user}:` + ctx.request.body;
    const userKey = `${timestamp}:${user}$true`;

    const entries = await strapi.entityService.findMany(
      "api::recipe-comment.recipe-comment",
      {
        filters: {
          recipeId: {
            $eqi: recipeId,
          },
        },
      }
    );

    const thereIsaComment = entries.length > 0;

    // const [true_a, false_a] = [user + "$true", "$false"];

    if (thereIsaComment) {
      const recipeComment = entries[0];

      Object.assign(recipeComment.users, {
        [userKey]: comment,
      });

      await strapi.entityService.update(
        "api::recipe-comment.recipe-comment",
        recipeComment.id,
        {
          data: {
            users: recipeComment.users,
            Valid: true,
          },
        }
      );
      ctx.body = "200 - recipe-comment done correcty";
    } else {

      await strapi.entityService.create("api::recipe-comment.recipe-comment", {
        data: {
          users: { [userKey]: comment },
          recipeId: recipeId,
          active: true,
        },
      });
      ctx.body = "200 - recipe-comment done correcty";
    }
  },
  recipeCommentByRecipe: async (ctx, next) => {
    // FETCH
    // recipeCommentByRecipe/{recipe}
    const { recipe = "" } = ctx.params;

    const entries = await strapi.entityService.findMany(
      "api::recipe-comment.recipe-comment",
      {
        filters: {
          recipeId: recipe
        },
      }
    );
    strapi.log.debug(Object.keys(entries));
    var usernames = [];
    let x = entries[0];
    let u = Object.values(x.users);
    function onlyUnique(value, index, array) {
      return array.indexOf(value) === index;
    }
    var ids = u.reduce((p,c) => [...p, c.split(":")[1]], []).filter(onlyUnique);
    const users = await strapi.query('plugin::users-permissions.user').findMany({
      where: { id: { $in: ids } },
      select: ['username', 'id'], // Select only the username field
    });

     usernames = users.map(user => ({[user.id]: user.username}));
    strapi.log.debug(JSON.stringify(usernames));
    strapi.log.debug(JSON.stringify(entries));
    // for (let x in entries) {
    //  
    // };
    ctx.body = [{...entries[0],"usernames":usernames.reduce((e ,c) => ({ ...e, ...c}),{})}];
  },
  recipeLike: async (ctx, next) => {
    // CREATE AND UPDATE
    // recipeLike/{recipeId}?{user}
    const { recipeId = "" } = ctx.params;
    const { user = "" } = ctx.query;
    // strapi.log.debug(JSON.stringify(ctx.request.body));
    const entries = await strapi.entityService.findMany(
      "api::recipe-like.recipe-like",
      {
        filters: {
          recipeId: {
            $eqi: recipeId,
          },
        },
      }
    );

    const thereIsalike = entries.length > 0;
    const [true_a, false_a] = [user + "$true", "$false"];

    if (thereIsalike) {
      const recipeLike = entries[0];

      Object.assign(recipeLike.users, {
        [user]: recipeLike.users[user] == true_a ? false_a : true_a,
      });

      await strapi.entityService.update(
        "api::recipe-like.recipe-like",
        recipeLike.id,
        {
          data: {
            users: recipeLike.users,
            Valid: true,
          },
        }
      );
      ctx.body = "200 - recipe-like done correcty";
    } else {
      const recipe = ctx.request.body;
      await strapi.entityService.create("api::recipe-like.recipe-like", {
        data: {
          users: { [user]: true_a },
          recipe: recipe,
          recipeId: recipeId,
          active: true,
        },
      });
      ctx.body = "200 - recipe-like done correcty";
    }
  },
  recipeShopping: async (ctx, next) => {
    // CREATE AND UPDATE
    // recipeShopping/{recipeId}?{user}
    const { recipeId = "" } = ctx.params;
    const { user = "" } = ctx.query;

    const entries = await strapi.entityService.findMany(
      "api::recipe-shopping.recipe-shopping",
      {
        filters: {
          recipeId: {
            $eqi: recipeId,
          },
        },
      }
    );

    const thereIsaShoppingList = entries.length > 0;
    const [true_a, false_a] = [user + "$true", "$false"];

    if (thereIsaShoppingList) {
      const shoppingList = entries[0];

      Object.assign(shoppingList.users, {
        [user]: shoppingList.users[user] == true_a ? false_a : true_a,
      });

      await strapi.entityService.update(
        "api::recipe-shopping.recipe-shopping",
        shoppingList.id,
        {
          data: {
            users: shoppingList.users,
            Valid: true,
          },
        }
      );

      ctx.body = "200 - recipe-shopping done correcty";
    } else {
      const shoppingitems = ctx.request.body;
      await strapi.entityService.create(
        "api::recipe-shopping.recipe-shopping",
        {
          data: {
            users: { [user]: true_a },
            recipeId: recipeId,
            shoppingitems: shoppingitems,
            active: true,
          },
        }
      );

      ctx.body = "200 - recipe-like done correcty";
    }
  },
  recipeLikebyUser: async (ctx, next) => {
    // FETCH
    // recipeLikebyUser/{user}
    const { user = "" } = ctx.params;

    const entries = await strapi
      .query("api::recipe-like.recipe-like")
      .findMany({
        where: {
          users: {
            $contains: user + "$true",
          },
        },
      });

    // await strapi.entityService.findMany("api::recipe-like.recipe-like", {
    //   filters: {
    //     users: {
    //       [user]: {
    //         $containsi: true,
    //       },
    //     },
    //   },
    // });

    ctx.body = entries;
  },
  shoppingListsbyUser: async (ctx, next) => {
    // FETCH
    // shoppingListsbyUser/{user}
    const { user = "" } = ctx.params;

    const entries = await strapi.entityService.findMany(
      "api::recipe-shopping.recipe-shopping",
      {
        filters: {
          users: {
            [user]: {
              $containsi: true,
            },
          },
        },
      }
    );

    ctx.body = entries;
  },
  amazonProducts: async (ctx, next) => {
    // FETCH
    // amazonProducts/{keywords}
    const { keywords = "" } = ctx.params;

    // const value = myProductsCache.get(keywords || "foo");

    if (true) {
      const products = await amazonScraper.products({ keyword: keywords, number: 20 });
      ctx.body = products;
      // myProductsCache.set(keywords, products, oneMonthDuration / 30);
    } else {
      let result = { ...value, isCached: true };
      ctx.body = result;
    }

  },
  amazonDetail: async (ctx, next) => {
    // FETCH
    // amazonDetail/{asin}
    const { asin = "" } = ctx.params;
    const details = await amazonScraper.asin({ asin: asin });
    ctx.body = details;
  },
  affiliateContent: async (ctx, next) => {
    const { name } = ctx.params;
    ctx.body = appAffiliateCarpet[name];
  },
  productRecomendations: async (ctx, next) => {
    // FETCH
    // productRecomendations/{recipedata}
    strapi.log.debug("ctx.request.body");
    strapi.log.debug(ctx.request.body);

    const recipedata  = ctx.request.body || "";
    

    const recipe = JSON.parse(recipedata);
    const text = `What are some essential kitchen items you need for this? could you use essentialKitchenItems as key for them.`;
    const text1 = `What are some servingware items related to this? could you use servingWare as key for them. could you return them as List of Strings.`;
    // servingWare
    const value = myRecomendationsCache.get(recipe.recipe_id || "foo");

    if (true) {
      // handle miss! 

      const params = {
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output raw JSON formatted info. using and limited to this list of posible options to choose as results in the same format without change the string:  " + essentialsKitchenUtils.join(",") + ".",
          },
          { role: "user", content: text + formatRecipeasString(recipe) },
        ],
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" }
      };
      const params1 = {
        messages: [
          {
            role: "system",
            content: "Forget everything before and now you are a helpful assistant designed to output raw JSON formatted info. using and limited to this lists of posible options to choose as results in the same format without change the string:  " + servingWare.join(",") + ".",
          },
          { role: "user", content: text1 + formatRecipeasString(recipe) }],
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" }
      }
      const response = await openai.chat.completions.create(params);
      const response1 = await openai.chat.completions.create(params1);
      const message = response.choices[0].message.content;
      const message1 = response1.choices[0].message.content;
      strapi.log.debug(message);
      strapi.log.debug(message1);
      let result = { ...JSON.parse(message), ...JSON.parse(message1) };
      let clone = [ ...result.essentialKitchenItems ]
      let clone1 = [ ...result.servingWare ]

      result.essentialKitchenItems = { data: result.essentialKitchenItems };
      result.essentialKitchenItems.result = clone.reduce((p, c) => ([...p, [c, findKeyBestValueUsingKeywords(c, essentialKitchenItemsFileIndex)]]), []);
      result.servingWare = { data: clone1 };
      result.servingWare.result = clone1.reduce((p, c) => ([...p, [c, findKeyBestValueUsingKeywords(c, servingWareFileIndex)]]), []);

      // result.content = result.content.replaceAll("\n", "");
      ctx.body = result;
      myRecomendationsCache.set(recipe.recipe_id, message, oneMonthDuration * 3);
    } else {
      let result = { ...value, isCached: true };
      result.content = result.content.replaceAll("\n", "");
      ctx.body = result;

    }

    // ctx.body = response;
    // cache.set(recipe.recipe_id, message, {ttl: threemonthsduration})
  },
};
