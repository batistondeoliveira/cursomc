package com.elielbatiston.cursomc.services;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.elielbatiston.cursomc.domain.Cliente;
import com.elielbatiston.cursomc.repositories.ClienteRepository;
import com.elielbatiston.cursomc.services.exception.ObjectNotFoundException;

@Service
public class AuthService {
	
	@Autowired
	private ClienteRepository repo;
	
	@Autowired
	private BCryptPasswordEncoder pe;
	
	@Autowired
	private EmailService emailService;
	
	private Random rand = new Random();
	
	public void sendNewPassword(String email) {
		
		Cliente cliente = repo.findByEmail(email);
	 	if (cliente == null) {
	 		throw new ObjectNotFoundException("Email não encontrado");
	 	}
	 	
	 	String newPass = newPassword();
	 	cliente.setSenha(pe.encode(newPass));
	 	
	 	repo.save(cliente);
	 	
	 	emailService.sendNewPasswordEmail(cliente, newPass);
	}

	private String newPassword() {
		char[] vet = new char[10];
		
		for (int i=0; i<10; i++) {
			vet[i] = randomChar();
		}
		
		return new String(vet);
	}

	private char randomChar() {
		int opt = rand.nextInt(3);
		
		switch (opt) {
			case 0: //gera um digito
				return (char) (rand.nextInt(10) + 48);
				
			case 1: //gera letra maiuscula
				return (char) (rand.nextInt(26) + 65);
				
			default:
				return (char) (rand.nextInt(26) + 97);
		}			
	}
}

