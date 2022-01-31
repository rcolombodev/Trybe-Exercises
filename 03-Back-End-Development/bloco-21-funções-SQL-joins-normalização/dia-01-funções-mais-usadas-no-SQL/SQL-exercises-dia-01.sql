/*
1. Escreva uma query que exiba o maior salário da tabela.
2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
*/

--1
SELECT MAX(SALARY) FROM hr.employees;

--2
SELECT MIN(SALARY) FROM hr.employees;

--3
SELECT JOB_ID, AVG(SALARY) AS 'Salário Médio'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `Salário Médio` DESC;

--4
SELECT SUM(SALARY) FROM hr.employees;

--5
SELECT 
  MAX(SALARY), 
  MIN(SALARY), 
  SUM(SALARY),
  ROUND(AVG(SALARY), 2)
FROM hr.employees;

--6
SELECT JOB_ID, COUNT(*) AS 'Total'
FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

--7
SELECT JOB_ID, SUM(SALARY) AS 'Salário Total'
FROM hr.employees
GROUP BY JOB_ID;

--8 
SELECT JOB_ID, SUM(SALARY) AS 'Salário Total Programadores'
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

--9
SELECT JOB_ID, AVG(SALARY) AS 'Média Salarial'
FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID 
ORDER BY `Média Salarial` DESC;

--10
SELECT department_id,
  AVG(SALARY) AS 'Média Salarial',
  COUNT(*) AS 'Número de empregados'
FROM hr.employees
GROUP BY department_id
HAVING `Número de empregados` > 10;

--11
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

--12
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;

--13
SELECT EMPLOYEE_ID, FIRST_NAME,
  YEAR(HIRE_DATE) AS 'Ano de contratação'
FROM hr.employees;

--14
SELECT EMPLOYEE_ID, FIRST_NAME,
  DAY(HIRE_DATE) AS 'Dia de contratação'
FROM hr.employees;

--15
SELECT EMPLOYEE_ID, FIRST_NAME,
  MONTH(HIRE_DATE) AS 'Mês de contratação'
FROM hr.employees;

--16
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME)) AS 'FULL NAME'
FROM hr.employees;

--17
SELECT LAST_NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE BETWEEN '1987-07-01' AND '1987-07-31';

--18
SELECT FIRST_NAME, LAST_NAME,
  DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS 'Tempo de empresa'
FROM hr.employees;