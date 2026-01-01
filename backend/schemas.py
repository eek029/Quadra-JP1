from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
from uuid import UUID
from enum import Enum

# Enums (mirrored from models for Pydantic validation)
class UserRole(str, Enum):
    MORADOR = "morador"
    PORTEIRO = "porteiro"
    SUBSINDICO = "subsindico"
    SINDICO = "sindico"

class ReservationStatus(str, Enum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"

# --- User Schemas ---
class UserBase(BaseModel):
    email: EmailStr
    name: str
    phone: Optional[str] = None
    role: UserRole = UserRole.MORADOR
    tower_id: Optional[UUID] = None

class UserCreate(UserBase):
    pass

class UserResponse(UserBase):
    id: UUID
    created_at: datetime
    auth_provider: str

    class Config:
        from_attributes = True

# --- Court Schemas ---
class CourtBase(BaseModel):
    name: str

class CourtResponse(CourtBase):
    id: UUID
    is_active: bool

    class Config:
        from_attributes = True

# --- Reservation Schemas ---
class ReservationBase(BaseModel):
    court_id: UUID
    start_time: datetime
    end_time: datetime
    notes: Optional[str] = None

class ReservationCreate(ReservationBase):
    pass

class ReservationResponse(ReservationBase):
    id: UUID
    user_id: UUID
    status: ReservationStatus
    created_at: datetime
    cancelled_by: Optional[UUID] = None

    class Config:
        from_attributes = True

# --- Blackout Schemas ---
class BlackoutBase(BaseModel):
    start_time: datetime
    end_time: datetime
    reason: str

class BlackoutCreate(BlackoutBase):
    pass

class BlackoutResponse(BlackoutBase):
    id: UUID
    created_by: UUID

    class Config:
        from_attributes = True
