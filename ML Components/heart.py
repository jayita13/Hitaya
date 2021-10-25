from pydantic import BaseModel


class heart  (BaseModel):
    Status: int
    Alcohol: float
    BMI: float