package com.arpit.react.app;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ReactAppApplication {

	final List<Employee> employeeList = new ArrayList<>();
	
	public static void main(String[] args) {
		SpringApplication.run(ReactAppApplication.class, args);
	}

	@GetMapping("/employee/get")
	public List<Employee> get() {
		return employeeList;
	}
	
	@PostMapping("/employee/add")
	public List<Employee> addEmployee(final @RequestBody Employee employee) {
		System.out.println("Adding employee with name : " + employee.getName());
		if(employee.getName() != null && employee.getName().length() > 0)
		 employeeList.add(new Employee(employeeList.size(), employee.getName(), "IT"));
		return employeeList;
	}
	
	@PostMapping("/employee/delete")
	public List<Employee> deleteEmployee(final @RequestBody Employee employee) {
		System.out.println("Deleting employee with name : " + employee.getName());
		final Optional<Employee> optional = employeeList.stream().filter(e -> e.getName().equalsIgnoreCase(employee.getName())).findAny();
		if(optional.isPresent()){
			employeeList.remove(optional.get());
		}
		return employeeList;
	}
}

@Controller
class IndexPageController {

	@GetMapping(value = "/")
	public String index() {
		return "index";
	}
}

final class Employee {

	private int id;
	private String name;
	private String department;

	public Employee() {

	}

	public Employee(final int id, final String name, final String department) {
		this.id = id;
		this.name = name;
		this.department = department;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

}