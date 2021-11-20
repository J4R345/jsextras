
<?php

// conexao

$con = new PDO("mysql:host=localhost;dbname=exercicio", "root", "senha");

// exemplo de insersção de dados

$stmt = $con->prepare("INSERT INTO pessoa(nome, email) VALUES(?, ?)");
$stmt->bindParam(1,”Nome da Pessoa”);
$stmt->bindParam(2,”email@email.com”);
$stmt->execute();

// Exemplo de listagem

$rs = $con->query(“SELEC idpessoa, nome, email FROM pessoa”);
while($row = $rs->fetch(PDO::FETCH_OBJ)){
  echo $row->idpessoa . “<br />”;
  echo $row->nome . “<br />”;
  echo $row->email . “<br />”;
}

// consulta

$row->nome.

$rs = $con->prepare("SELECT idpessoa, nome, email FROM pessoa WHERE nome LIKE ?”);
$rs->bindParam(1, $nome . “%”);
if($rs->execute()){
if($rs->rowCount() > 0){
while($row = $rs->fetch(PDO::FETCH_OBJ)){
  echo $row->idpessoa . “<br />”;
  echo $row->nome . “<br />”;
  echo $row->email . “<br />”;
}
            }
        }

// update

$stmt = $con->prepare("UPDATE pessoa SET nome = ?, email = ? WHERE idpessoa = ?");
$stmt->bindParam(1,$nome );
$stmt->bindParam(2,$email);
$stmt->bindParam(3,$id);
$stmt->execute();

//delete

$stmt = $con->prepare("DELETE FROM pessoa WHERE idpessoa = ?");
$stmt->bindParam(1, $id);
$stmt->execute();