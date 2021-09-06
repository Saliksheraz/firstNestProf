import { Injectable, NotFoundException } from '@nestjs/common';
import { Volume } from './books.model';

@Injectable()
export class BooksService {
  private volumes: Volume[] = [];

  getVolumes() {
    return [...this.volumes];
  }

  createVolume(title: string, desc: string, price: number) {
    const volID = Math.random().toString();
    const newVolume = new Volume(volID, title, desc, price);
    this.volumes.push(newVolume);
    return volID;
  }
  getoneVolume(volID: string): any {
    const volObj = this.findVolume(volID);
    console.log(volObj)
    
  }
  

  private findVolume(id: string): [Volume, number] {
    const volumeIndex = this.volumes.findIndex(prod => prod.id === id);
    const volumeObj = this.volumes[volumeIndex];
    if (!volumeObj) {
      throw new NotFoundException('Could not find product.');
    }
    return [volumeObj, volumeIndex];
  }
}
