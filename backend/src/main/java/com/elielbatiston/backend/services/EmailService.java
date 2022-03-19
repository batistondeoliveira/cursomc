package com.elielbatiston.backend.services;

import org.springframework.mail.SimpleMailMessage;

import com.elielbatiston.backend.domain.Pedido;

public interface EmailService {

	void sendOrderConfirmationEmail(Pedido obj);
	
	void sendEmail(SimpleMailMessage msg);
}
