Public Function ValidLogginAccess()
	
Browser("[Modo DEV - 9.0.1.240]").Page("[Modo DEV - 9.0.1.240]").WebEdit("Login:LoginScreen:LoginDV:user").Set "su"
Browser("[Modo DEV - 9.0.1.240]").Page("[Modo DEV - 9.0.1.240]").WebEdit("Login:LoginScreen:LoginDV:pass").SetSecure "58d3d3d7cb64a2b132d8"
Browser("[Modo DEV - 9.0.1.240]").Page("[Modo DEV - 9.0.1.240]").WebElement("centerPanel").Click
Browser("[Modo DEV - 9.0.1.240]").Page("[Modo DEV - 9.0.1.240]").WebElement("Login:LoginScreen:LoginDV:subm").Click

End Function
'Solo un comentario'
