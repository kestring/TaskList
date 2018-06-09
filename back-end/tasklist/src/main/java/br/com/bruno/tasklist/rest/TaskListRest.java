package br.com.bruno.tasklist.rest;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bruno.tasklist.model.Task;
import br.com.bruno.tasklist.repository.TaskRepository;

@RestController
@RequestMapping("/tasks")
public class TaskListRest {

	@Autowired
	private TaskRepository taskRepository;
	
	@PostMapping
    public Task incluir(@Valid @RequestBody Task task) {
        return taskRepository.save(task);
    }
	
	@GetMapping
    public List<Task> buscarTodasTasks() {
        return taskRepository.findAll();
    }
	
	@RequestMapping("/excluir")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
		Optional<Task> optTask = taskRepository.findById(id);
        
		if(!optTask.isPresent()) {
			return ResponseEntity.notFound().build();
		} 
		
		Task task = optTask.get();
		
		taskRepository.delete(task);

		return ResponseEntity.noContent().build();
    }
	
	@PutMapping("/{id}")
    public ResponseEntity<Task> atualizar(@PathVariable Long id, @Valid @RequestBody Task task ) {
		Optional<Task> optTaskExistente = taskRepository.findById(id);
		        
		if(!optTaskExistente.isPresent()) {
			return ResponseEntity.notFound().build();
		} 
		
		Task taskExistente = optTaskExistente.get();
		
		BeanUtils.copyProperties(task, taskExistente, "id");
		
		taskExistente = taskRepository.save(taskExistente);
		
		return ResponseEntity.ok(taskExistente);
    }
	
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Task> buscarPorId(@PathVariable Long id) {
		Optional<Task> optTask = taskRepository.findById(id);
        
        if(optTask.isPresent()) {
        	return ResponseEntity.notFound().build();
        }else {
        	return ResponseEntity.ok(optTask.get());
        }
    }
	
}
	
