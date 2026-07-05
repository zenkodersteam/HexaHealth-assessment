import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  create(createNoteDto: CreateNoteDto): Note {
    const now = new Date();
    const note: Note = {
      id: randomUUID(),
      title: createNoteDto.title,
      content: createNoteDto.content,
      createdAt: now,
      updatedAt: now,
    };
    this.notes.push(note);
    return note;
  }

  findAll(): Note[] {
    return this.notes;
  }

  findOne(id: string): Note {
    const note = this.notes.find((n) => n.id === id);
    if (!note) {
      throw new NotFoundException(`Note with id ${id} not found`);
    }
    return note;
  }

  update(id: string, updateNoteDto: UpdateNoteDto): Note {
    const note = this.findOne(id);
    if (updateNoteDto.title !== undefined) {
      note.title = updateNoteDto.title;
    }
    if (updateNoteDto.content !== undefined) {
      note.content = updateNoteDto.content;
    }
    note.updatedAt = new Date();
    return note;
  }

  remove(id: string): Note {
    const index = this.notes.findIndex((n) => n.id === id);
    if (index === -1) {
      throw new NotFoundException(`Note with id ${id} not found`);
    }
    const [removed] = this.notes.splice(index, 1);
    return removed;
  }
}
