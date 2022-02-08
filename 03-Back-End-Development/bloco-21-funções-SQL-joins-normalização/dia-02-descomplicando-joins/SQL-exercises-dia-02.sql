/*
Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz 
nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
*/

--1

SELECT Movies.title, Box.domestic_sales, Box.international_sales 
FROM Pixar.Movies AS Movies
INNER JOIN
  BoxOffice AS Box 
ON Box.movie_id = Movies.id;

--2
SELECT Movies.title, Box.domestic_sales, Box.international_sales
FROM Pixar.Movies AS Movies
INNER JOIN
  BoxOffice AS Box 
ON Box.movie_id = Movies.id
WHERE Box.domestic_sales < Box.international_sales;