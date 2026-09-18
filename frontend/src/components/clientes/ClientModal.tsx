'use client';

import React, { useState } from 'react';
import { X, Loader2, UserPlus, UserCheck } from 'lucide-react';
import { Cliente, ClienteCreate, ClienteUpdate } from '@/types/client';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ClienteCreate | ClienteUpdate) => Promise<void>;
  clientToEdit?: Cliente | null;
  existingCities?: string[];
}

function ClientModalForm({
  onClose,
  onSubmit,
  clientToEdit,
  existingCities = ['Lima', 'Callao', 'Trujillo', 'Arequipa'],
}: {
  onClose: () => void;
  onSubmit: (data: ClienteCreate | ClienteUpdate) => Promise<void>;
  clientToEdit?: Cliente | null;
  existingCities?: string[];
}) {
  const isEditing = Boolean(clientToEdit);

  const [tipoDocumento, setTipoDocumento] = useState(
    clientToEdit?.tipo_documento || 'RUC'
  );
  const [numeroDocumento, setNumeroDocumento] = useState(
    clientToEdit?.numero_documento || ''
  );
  const [razonSocial, setRazonSocial] = useState(
    clientToEdit?.razon_social || ''
  );
  const [tipoCliente, setTipoCliente] = useState(
    clientToEdit?.tipo_cliente || 'Empresa'
  );
  const [nombreContacto, setNombreContacto] = useState(
    clientToEdit?.nombre_contacto || ''
  );
  const [telefono, setTelefono] = useState(clientToEdit?.telefono || '');
  const [email, setEmail] = useState(clientToEdit?.email || '');
  const [direccion, setDireccion] = useState(clientToEdit?.direccion || '');
  const [ciudad, setCiudad] = useState(clientToEdit?.ciudad || 'Lima');
  const [isActive, setIsActive] = useState(clientToEdit?.is_active ?? true);

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ajuste automático de tipo de cliente según tipo de documento si no se ha cambiado manualmente
  const handleTipoDocChange = (val: string) => {
    setTipoDocumento(val);
    if (!isEditing) {
      if (val === 'RUC') {
        setTipoCliente('Empresa');
      } else if (val === 'DNI') {
        setTipoCliente('Persona');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const docTrim = numeroDocumento.trim();
    if (!docTrim) {
      setError('El número de documento es obligatorio.');
      return;
    }

    if (tipoDocumento === 'RUC' && docTrim.length !== 11) {
      setError('El RUC debe tener exactamente 11 dígitos numéricos.');
      return;
    }

    if (tipoDocumento === 'DNI' && docTrim.length !== 8) {
      setError('El DNI debe tener exactamente 8 dígitos numéricos.');
      return;
    }

    if (!razonSocial.trim()) {
      setError('La razón social o nombre completo es obligatorio.');
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit({
        tipo_documento: tipoDocumento,
        numero_documento: docTrim,
        razon_social: razonSocial.trim(),
        tipo_cliente: tipoCliente,
        nombre_contacto: nombreContacto.trim() || null,
        telefono: telefono.trim() || null,
        email: email.trim() || null,
        direccion: direccion.trim() || null,
        ciudad: ciudad.trim() || 'Lima',
        is_active: isActive,
      });
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocurrió un error inesperado al guardar el cliente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Encabezado del Modal */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            {isEditing ? (
              <UserCheck className="w-5 h-5" />
            ) : (
              <UserPlus className="w-5 h-5" />
            )}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              {isEditing ? 'Editar Cliente' : 'Nuevo Cliente'}
            </h3>
            <p className="text-xs text-slate-500 leading-tight mt-0.5">
              {isEditing
                ? 'Actualiza la información comercial del cliente'
                : 'Registra una nueva empresa o persona en la cartera'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
        {error && (
          <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs font-medium animate-in fade-in-50">
            {error}
          </div>
        )}

        {/* Tipo de Documento y Número */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Tipo de Documento *
            </label>
            <select
              value={tipoDocumento}
              onChange={(e) => handleTipoDocChange(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="RUC">RUC</option>
              <option value="DNI">DNI</option>
              <option value="CE">Carnet de Extranjería</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block font-semibold text-slate-700 mb-1">
              Número de Documento *
            </label>
            <input
              type="text"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              placeholder={tipoDocumento === 'RUC' ? '20XXXXXXXXX (11 dígitos)' : 'XXXXXXXX (8 dígitos)'}
              maxLength={tipoDocumento === 'RUC' ? 11 : 12}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Razón Social / Nombres */}
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Razón Social o Nombre Completo *
          </label>
          <input
            type="text"
            value={razonSocial}
            onChange={(e) => setRazonSocial(e.target.value)}
            placeholder="Ej: DISTRIBUIDORA INDUSTRIAL S.A.C."
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            required
          />
        </div>

        {/* Tipo de Cliente y Contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Tipo de Cliente *
            </label>
            <select
              value={tipoCliente}
              onChange={(e) => setTipoCliente(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="Empresa">Empresa</option>
              <option value="Persona">Persona</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Persona de Contacto
            </label>
            <input
              type="text"
              value={nombreContacto}
              onChange={(e) => setNombreContacto(e.target.value)}
              placeholder="Ej: Ing. Carlos Morales"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Teléfono y Correo Electrónico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Teléfono / Celular
            </label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej: 987 654 321"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contacto@empresa.com"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Dirección y Ciudad */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="sm:col-span-2">
            <label className="block font-semibold text-slate-700 mb-1">
              Dirección Fiscal / Entrega
            </label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Ej: Av. Industrial 520, Cercado"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Ciudad / Dpto.
            </label>
            <input
              type="text"
              list="cities-list"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              placeholder="Lima"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <datalist id="cities-list">
              {existingCities.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Estado Activo / Inactivo */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div>
            <p className="font-semibold text-slate-800">Estado del Cliente</p>
            <p className="text-[11px] text-slate-400">
              {isActive
                ? 'El cliente está habilitado para compras y operaciones'
                : 'El cliente está pausado temporalmente'}
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Acciones */}
        <div className="pt-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-xs transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{isEditing ? 'Guardar Cambios' : 'Registrar Cliente'}</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default function ClientModal({
  isOpen,
  onClose,
  onSubmit,
  clientToEdit,
  existingCities,
}: ClientModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl max-w-xl w-full overflow-hidden animate-in zoom-in-95 duration-200">
        <ClientModalForm
          key={clientToEdit?.id ?? 'new'}
          onClose={onClose}
          onSubmit={onSubmit}
          clientToEdit={clientToEdit}
          existingCities={existingCities}
        />
      </div>
    </div>
  );
}
