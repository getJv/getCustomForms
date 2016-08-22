<?php
/**
* Simple php class to provide a fast Sqlite3 use
* author: Jhonatan Morais <http://www.getjv.com.br>
* version: 1.0
*/
class MyDB extends SQLite3
{
	/**
	* Set the path to you Sqlite3 database file
	*/
	private  $db_path ;

	
	function __construct($dbPath){

		$this->db_path = $dbPath;
	}


	/**
	* open connection 
	*/
	private function connect(){
		
		try{

			$this->open($this->db_path);

		}catch(Exception $e){

			echo '<pre>',$this->lastErrorMsg(),"<br>";
			throw $e;
			
			
		}



	}

	/**
	* return a array with data from sql statemant.
	*/
	public function execute($sql){
		try{
			$this->connect();
			$results = $this->query($sql);
			$result = array();
			while ($row =  $results->fetchArray(SQLITE3_ASSOC) ){$result[] =$row;}
			$this->close();
			return $result;
		}catch(Exception $e){

			
			echo '<pre>',$e->getTraceAsString();
		}

	}

	/**
	* return a json with data from sql statemant or false, if no data.
	*/
	public function getJson($sql){
		//echo "<pre>",$sql;
		//print_r($this->execute($sql));
		return json_encode($this->execute($sql));

	}

}


class RestSurvey{

		PRIVATE $adapterDB;

	function __construct($newAdapterDB){

		$this->adapterDB = $newAdapterDB;
	}

	/**
	* Retorna um JSON com as survey existentes
	*/
	public function getSurveys(){


		echo $this->adapterDB->getJson('select * from surveys');

	}
	/**
	* REcebe um objeto stdClass que será utilizado no select
	*/
	public function addSurvey($nameSurvey){

		print_r("insert into surveys (name ) values ('". $nameSurvey->name ."')");
		//exit;
		echo $this->adapterDB->execute("insert into surveys (name ) values ('". $nameSurvey->name ."')");

	}
	
	

}


$options = array("addSurvey","getSurveys");


try{
	if(!in_array($_REQUEST['function'], $options)){ throw new Exception("This function: {$_REQUEST['function']} isn't a option", 1);}

	$db = new MyDB('../bd/getForms.db');

	$RestSurvey = new RestSurvey($db);

	$RestSurvey->{$_REQUEST['function']}(json_decode(file_get_contents("php://input")));

}catch(Exception $e){

		echo '<pre>',$e->getMessage(),'<br/>',$e->getTraceAsString();

}








/*

insert into surveys (name ) values ('pesquisa 1')
insert into forms  (author_id, survey_id) values (1,3);
insert into custom_fields (type,name) values ('simpleText','Qual o seu nome');



*/
