import asyncio
import sys
import os

# Add parent directory to path to import app modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from database import AsyncSessionLocal
from models import Court
from sqlalchemy import select

async def seed():
    async with AsyncSessionLocal() as session:
        print("Seeding database...")
        
        # Check if court exists
        result = await session.execute(select(Court))
        court = result.scalars().first()
        
        if not court:
            print("Creating default Court...")
            court = Court(name="Quadra Poliesportiva", is_active=True)
            session.add(court)
            await session.commit()
            print("Court created.")
        else:
            print("Court already exists.")

if __name__ == "__main__":
    asyncio.run(seed())
