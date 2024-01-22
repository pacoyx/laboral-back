

select * from TB_USUARIO

CREATE TABLE `TB_USUARIO` (
  `correo_corporativo` varchar(200) PRIMARY KEY,
  `clave` varchar(200) DEFAULT NULL,
  `nombres_completo` varchar(200) DEFAULT NULL,
	`nombre_empresa` varchar(200) DEFAULT NULL,
	`celular` varchar(50) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `fecha_reg` datetime DEFAULT NULL
) 




CREATE PROCEDURE SP_S_LOGIN(
in p_correo varchar(200), 
in p_clave varchar(200)
)
BEGIN

select 	u.correo_corporativo, u.nombres_completo, u.nombre_empresa, u.celular
from 	TB_USUARIO as u
where u.estado = 1 and u.correo_corporativo=p_correo and u.clave=md5(p_clave);

END


CREATE PROCEDURE SP_I_USUARIO(
IN p_correo_corporativo varchar(200),
IN p_clave varchar (200),
IN p_nombres_completo varchar(200),
IN p_nombre_empresa varchar(200),
IN p_celular varchar(50),
In p_estado int
)
BEGIN
insert into TB_USUARIO(
correo_corporativo,
clave,
nombres_completo,
nombre_empresa,
celular,
estado,
fecha_reg)
values(
p_correo_corporativo,
MD5(p_clave),
p_nombres_completo,
p_nombre_empresa,
p_celular,
p_estado,
NOW());
END



CREATE PROCEDURE SP_S_VALIDAR_REG_USU(
in p_correo varchar(200), 
in p_clave varchar(200)
)
BEGIN

	select 	*
	from 	TB_USUARIO as u
	where u.estado = 2 and u.correo_corporativo=p_correo and u.clave=md5(p_clave);

END






CREATE PROCEDURE SP_U_ESTADO_USUARIO(
IN p_correo_corporativo varchar(200)
)
BEGIN
	update TB_USUARIO set estado = 1 
	where correo_corporativo = p_correo_corporativo;
END

