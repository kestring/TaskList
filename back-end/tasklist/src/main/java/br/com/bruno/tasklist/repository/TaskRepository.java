package br.com.bruno.tasklist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bruno.tasklist.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long>{

	
	
}
