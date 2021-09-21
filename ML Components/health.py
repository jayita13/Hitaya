from pydantic import BaseModel


class health  (BaseModel):
    Status: int
    Alcohol: float
    BMI: float